import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const wallets = await prisma.wallet.findMany()
    return NextResponse.json(wallets)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch wallets' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { coin, network, address } = await request.json()
    if (!coin || !network || !address) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const wallet = await prisma.wallet.create({
      data: { coin, network, address },
    })
    return NextResponse.json(wallet, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create wallet' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'Missing wallet id' }, { status: 400 })
    }
    const data = await request.json()
    const wallet = await prisma.wallet.update({
      where: { id },
      data,
    })
    return NextResponse.json(wallet)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update wallet' }, { status: 500 })
  }
}
