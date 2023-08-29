import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import hashPassword from '~/utils/user_hash' 


export const userRouter = createTRPCRouter({

  create: publicProcedure
    .input(z.object({email: z.string(), senha: z.string(), nome_fantasia: z.string()}))
    .mutation( async ({ctx, input}) => {
        const hashedPassword = await hashPassword(input.senha)

        return await ctx.prisma.user.create({
            data: {
              email: input.email,
              senha: hashedPassword,
              nome_fantasia: input.nome_fantasia
            },
          });
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
