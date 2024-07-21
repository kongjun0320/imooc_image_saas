import { db } from '@/server/db/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import {
  AuthOptions,
  getServerSession as nextAuthGetServerSession,
} from 'next-auth';
import GitlabProvider from 'next-auth/providers/gitlab';

export const authOptions: AuthOptions = {
  // @ts-ignore
  adapter: DrizzleAdapter(db),
  providers: [
    GitlabProvider({
      clientId:
        'a51c33aeb9bc084109d5d83cf21d8641b0ebd1e8ff4a0ae9005d7c0799ab63d9',
      clientSecret:
        'gloas-dca3a6f31f70d45b63c021c1515eefb337997536d5321afde58d7900f31eef21',
    }),
  ],
};

export function getServerSession() {
  return nextAuthGetServerSession(authOptions);
}
