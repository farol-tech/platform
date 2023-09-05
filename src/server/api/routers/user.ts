import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { api } from "~/utils/api";
import hashPassword from '~/utils/user_hash' 
import { appRouter } from "../root";
import { sendVerificationMail } from "~/utils/sendgrid";

const TIMEOUT = 3600; //in seconds
const TRIES = 5; 

export const userRouter = createTRPCRouter({

  create: publicProcedure
    .input(z.object({email: z.string(), senha: z.string(), nome_fantasia: z.string(), cnpj: z.string(), estado:z.string(), endereco:z.string(), website:z.string()}))
    .mutation( async ({ctx, input}) => {
        const hashedPassword = await hashPassword(input.senha)
        const newUser =  await ctx.prisma.user.create({
            data: {
              email: input.email,
              senha: hashedPassword,
              nome_fantasia: input.nome_fantasia,
              cnpj: input.cnpj,
              estado: input.estado,
              endereco: input.endereco,
              website: input.website,
            },
          });
         
        const code =  Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);        
        //Create a record in the ValidationStatus table
        await ctx.prisma.validationStatus.create({
          data:{
            email: newUser.email,
            code: code,
            timeoutCounter: TIMEOUT,
            tries: TRIES,
            userID: newUser.id

          }
        })
        //if steps above are successful, send the email
        const response = sendVerificationMail(newUser.email,code.toString());
        return newUser;
          
    }),

  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
