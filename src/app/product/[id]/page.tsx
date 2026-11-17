import prisma from '@/lib/prisma';
import { Suspense } from 'react';

export default async function ProductDetailPage({
  params
}: PageProps<'/product/[id]'>) {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <ProductDetail params={params} />
    </Suspense>
  );
}

type ProductDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id: +id } });
  if (!product) {
    return <h1>Product not found 404</h1>;
  }
  return <h1>{product.name}</h1>;
}
