import { initTRPC } from '@trpc/server';
import { createCallerFactory } from '@trpc/server/unstable-core-do-not-import';

const t = initTRPC.create();
const { router, procedure } = t;

export const testRouter = router({
  hello: procedure.query(() => {
    return {
      hello: 'world',
    };
  }),
});

export type TestRouter = typeof testRouter;

// 1. create a caller-function for your router
export const serverCaller = createCallerFactory()(testRouter);
