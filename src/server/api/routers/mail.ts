import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
} from "~/server/api/trpc";
import { sendEmail, sendEmailTemplate, sendVerificationMail } from "~/utils/sendgrid";


export const mailRouter = createTRPCRouter({

    sendEmail: publicProcedure
        .input(z.object({ to: z.string(), subject: z.string(), text: z.string(), html: z.string() }))
        .mutation(async ({ input }) => {
            try {
                const response = await sendEmail(input.to, input.subject, input.text, input.html);
                console.log(response);
                return response;
            } catch {
                return {
                    status: 500,
                    message: "An unknown error occurred",
                    code: "UNKNOWN_ERROR"
                };
            }
        }),
    sendEmailTemplate: publicProcedure
        .input(z.object({ to: z.string(), templateId: z.string(), dynamicData: z.object({}) }))
        .mutation(async ({ input }) => {
            try {
                const response = await sendEmailTemplate(input.to, input.templateId, input.dynamicData);
                return response;
            } catch {
                return {
                    status: 500,
                    message: "An unknown error occurred",
                    code: "UNKNOWN_ERROR"
                };
            }
        }),
    sendVerificationMail: publicProcedure
        .input(z.object({to: z.string()}))
        .mutation(async ({input}) => {
            try{
                const response = await sendVerificationMail(input.to);
                return response;
            } catch {
                return {
                    status: 500,
                    message: "An unknown error ocurred",
                    code: "UNKNOWN_ERROR"
                };
            }
        }),
});
