import prisma from '@/lib/prisma';
import { cacheLife, cacheTag } from 'next/cache';

export default async function TestPage() {
  // 'use cache';
  // cacheLife('seconds');

  // const products = await prisma.product.findMany();
  const products = await getProducts();
  return (
    <div>
      {products.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}

export async function getProducts() {
  'use cache';
  cacheLife('weeks');
  cacheTag('GET_PRODUCT');
  return prisma.product.findMany();
}

// async function SummaryPage() {
//   const products = await getProducts();
// }
