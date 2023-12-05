import { z } from 'zod';

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure
} from "~/server/api/trpc";

export const formsRouter = createTRPCRouter({

    // Funcao pegar respostas do formulario por UserId
    getFormsByUserId: publicProcedure
        .input(z.object({
            userId: z.string()
        }))
        .query(async ({ ctx, input }) => {
            const form = await ctx.prisma.forms.findMany({
                where: {
                    UserId: input.userId
                }
            });
            return form;
        }),
    
    // Funcao apagar formulario por UserId
    deleteFormsByUserId: publicProcedure
        .input(z.object({
            userId: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            const form = await ctx.prisma.forms.deleteMany({
                where: {
                    UserId: input.userId
                }
            });
            return form;
        }),
    
    // Funcao adicionar formulario
    addForm: publicProcedure
        .input(z.object({
            userId: z.string(),
            resp1: z.string(),
            resp2: z.string(),
            resp4: z.string(),
            resp5: z.string(),
            resp6: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            const form = await ctx.prisma.forms.create({
                data: {
                    UserId: input.userId,
                    resp1: input.resp1,
                    resp2: input.resp2,
                    resp4: input.resp4,
                    resp5: input.resp5,
                    resp6: input.resp6,
                }
            });
            return form;
        }),
});