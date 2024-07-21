import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { TestRouter } from './trpc';

// export const trpcClient = createTRPCClient<TestRouter>({
//   links: [
//     httpBatchLink({
//       url: 'http://localhost:3000/api/trpc',
//     }),
//   ],
// });

export const trpcClientReact = createTRPCReact<TestRouter>({});

export const trpcClient = trpcClientReact.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});
