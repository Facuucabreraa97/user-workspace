import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../app/api/auth/[...nextauth]/route'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getServerSession(req, res, authOptions)
  if (!session || !session.user || (session.user as any).role !== 'admin') {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { paymentId } = req.body
  if (!paymentId) {
    return res.status(400).json({ message: 'paymentId is required' })
  }

  try {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    })

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' })
    }

    await prisma.payment.update({
      where: { id: paymentId },
      data: { status: 'rejected' },
    })

    return res.status(200).json({ message: 'Payment rejected' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
