import sgMail from '@sendgrid/mail';
import { env } from '~/env.mjs';

export const sendEmail = async (to: string, subject: string, text: string, html: string) => {
    const msg = {
        to,
        from: env.SENGRID_EMAIL,
        subject,
        text,
        html,
    };

    sgMail.setApiKey(env.SENGRID_API_KEY);

    try {
        const result = await sgMail.send(msg);
        return {
            status: 200,
            message: "Email sent successfully.",
            result: result
        };
    } catch (error: unknown) {
        console.error(error)
        const errorResponse = {
            status: 500,
            message: "An unknown error occurred",
            code: "UNKNOWN_ERROR"
        };

        throw errorResponse;
    }
};

export const sendEmailTemplate = async (to: string, templateId: string, dynamicData: object) => {
    const msg = {
        to,
        from: env.SENGRID_EMAIL,
        templateId: templateId,
        dynamic_template_data: dynamicData,
    };

    sgMail.setApiKey(env.SENGRID_API_KEY);

    try {
        await sgMail.send(msg);
        return {
            status: 200,
            message: "Email sent successfully."
        };
    } catch (error: unknown) {
        console.error(error)
        const errorResponse = {
            status: 500,
            message: "An unknown error occurred",
            code: "UNKNOWN_ERROR"
        };

        throw errorResponse;
    }
};

export const sendVerificationMail = async (to: string, code:string) => {
    //gerar o código de 6 dígitos e guarda-o no banco de dados para posterior validação.
    const msg = {
        to,
        from: env.SENGRID_EMAIL,
        templateId: env.SENDGRID_VERIFICATION_TEMPLATE_ID,
        dynamic_template_data: {code: code},
    };

    sgMail.setApiKey(env.SENGRID_API_KEY);

    try {
        await sgMail.send(msg);
        return {
            status: 200,
            message: "Email sent successfully."
        };
    } catch (error: unknown) {
        console.error(error)
        const errorResponse = {
            status: 500,
            message: "An unknown error occurred",
            code: "UNKNOWN_ERROR"
        };

        throw errorResponse;
    }
};
