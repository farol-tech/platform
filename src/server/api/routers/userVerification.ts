import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userVerificationRouter = createTRPCRouter({

    verifyCode: publicProcedure
        .input(z.object({email: z.string(), inputCode: z.number()}))
        .mutation(async ({ctx,input}) => {
            
            const entry = await ctx.prisma.validationStatus.findUnique({
                where:{
                    email:input.email,
                },
            });
            
            if (!entry) return;
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
                    return;
                }
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

