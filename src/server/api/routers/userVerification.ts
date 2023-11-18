import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

//  ERROR CODES USED FOR THIS RPC (USE IT IN THE FRONTEND)
/*
     200: SUCCESS
    1000: WRONG PASSCODE, TRY AGAIN
    1001: TOO MANY FAILURES, REGISTER AGAIN
    1002: ACCOUNT NOT REGISTERED YET
*/ 
export const userVerificationRouter = createTRPCRouter({

    verifyCode: publicProcedure
        .input(z.object({email: z.string(), inputCode: z.number()}))
        .mutation(async ({ctx,input}) => {
            
            const entry = await ctx.prisma.validationStatus.findUnique({
                where:{
                    email:input.email,
                },
            });
            
            if (!entry) return 1002;
            const realCode = entry.code;
            const passed = (realCode == input.inputCode) ? true : false;
            
            if (!passed){
                //reduce the number of tries. If zero, delete the user and the validationStatus records.
                await ctx.prisma.validationStatus.update({
                    where: {email: input.email},
                    data: {tries: entry.tries - 1}
                })
                if (entry.tries - 1 <= 0){
                    //delete entry and user
                    await ctx.prisma.validationStatus.delete({
                        where: {email:input.email},
                    })
                    await ctx.prisma.user.delete({
                        where: {email:input.email},
                    })
                    //TODO: BLACKLIST THE EMAIL FOR SOME TIME, SO THEY CANNOT JUST TRY AGAIN RIGHT AFTER
                    return 1001;
                }
                return 1000;
            }
            else {
                //congratulations, set the emailVerificado field to true and delete the validationStatus record.
                await ctx.prisma.user.update({
                    where:{email:input.email},
                    data: {emailVerificado: true},
                })
                
                await ctx.prisma.validationStatus.delete({
                    where: {email:input.email},
                })
                return 200;
            }      
        }),
    
});

