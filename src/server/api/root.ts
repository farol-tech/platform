import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { mailRouter } from "./routers/mail";
import { userVerificationRouter } from "./routers/userVerification";
import { api } from "~/utils/api";
import { formsRouter } from "./routers/forms";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  mail: mailRouter,
  forms: formsRouter,
  userVerification: userVerificationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;