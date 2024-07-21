'use client';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { SessionProvider, UserInfo } from './UserInfo';
import { getServerSession } from '@/server/auth';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { trpcClient, trpcClientReact } from '@/utils/api';

export default function Home() {
  // const session = await getServerSession();

  // if (!session?.user) {
  //   return redirect('/api/auth/signin');
  // }

  // useEffect(() => {
  //   // trpcClient.hello.query();
  // }, []);

  const { data, isLoading, isError } = trpcClientReact.hello.useQuery(void 0, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App Name" />
        <Textarea name="description" placeholder="Description"></Textarea>
        <Button type="submit">Submit</Button>
        {data?.hello}
        {isLoading && 'loading...'}
        {isError && 'error'}
      </form>
      <SessionProvider>
        <UserInfo />
      </SessionProvider>
    </div>
  );
}
