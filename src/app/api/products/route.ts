import { getProducts } from '@/app/test/page';
import { NextRequest, NextResponse } from 'next/server';

// METHOD, PATH(/api/products)
export async function GET(request: NextRequest) {
  const products = await getProducts();
  return NextResponse.json(products);
}

export async function POST() {}
