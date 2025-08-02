import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        subscriptions: {
          where: { endDate: null },
          take: 1,
        },
      },
    });

    const formattedUsers = users.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      subscription: user.subscriptions.length > 0 ? {
        tier: user.subscriptions[0].tier,
        startDate: user.subscriptions[0].startDate,
        endDate: user.subscriptions[0].endDate,
      } : null,
    }));

    return NextResponse.json({ users: formattedUsers });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}
