import { serverCaller } from '@/utils/trpc';

export default async function Dashboard() {
  // const context = () => ({});
  const data = await serverCaller({}).hello();
  return (
    <div className="h-screen flex justify-center items-center">
      Dashboard {data.hello}
    </div>
  );
}
