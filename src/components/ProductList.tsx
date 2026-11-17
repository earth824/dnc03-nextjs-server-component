import prisma from '@/lib/prisma';

export default async function ProductList() {
  const products = await prisma.product.findMany();
  return (
    <div>
      {products.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  );
}
