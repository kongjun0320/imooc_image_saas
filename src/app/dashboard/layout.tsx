import { getServerSession } from '@/server/auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  if (!session?.user) {
    return redirect('/api/auth/signin');
  }

  return children;
}
