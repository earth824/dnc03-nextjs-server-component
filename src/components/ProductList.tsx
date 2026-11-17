import prisma from '@/lib/prisma';

type ProductListProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

// useSearchParams
// ex. /product : searchParams.q ===> undefined
// ex. /product?q=co : searchParams.q ===> 'co'
// ex. /product?q=co&q=pe => searchParams.q ===> ['co', 'pe']
export default async function ProductList({ searchParams }: ProductListProps) {
  const { q } = await searchParams;
  if (Array.isArray(q)) {
    throw new Error('Invalid query parameter');
  }

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: q,
        mode: 'insensitive'
      }
    }
  });
  return (
    <div>
      {products.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  );
}
