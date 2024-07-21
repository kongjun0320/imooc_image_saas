import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers';
// import z from 'zod';
import { insertUserSchema } from '@/server/db/validate-schema';

// const inputSchema = z.object({
//   name: z.string().max(10).min(3),
//   email: z.string().email(),
// });

// export const dynamic = 'force-dynamic';

export function GET(request: NextRequest) {
  // console.log(' >>> ');
  // console.log('cookies >>> ', cookies().get('a'));

  const query = request.nextUrl.searchParams;
  const name = query.get('name');
  const email = query.get('email');
  // const id = query.get('id');

  const result = insertUserSchema.safeParse({
    name,
    email,
    // id,
  });

  if (result.success) {
    return NextResponse.json(result.data);
  } else {
    console.log('error >>> ', result.error);
    return NextResponse.json({ error: result.error.message });
  }
}
