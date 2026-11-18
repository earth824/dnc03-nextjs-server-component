import prisma from '@/lib/prisma';

export default async function TestPage() {
  const products = await prisma.product.findMany();
  return (
    <div>
      {products.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}
