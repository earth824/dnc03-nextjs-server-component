import ProductForm from '@/components/ProductForm';
import ProductList from '@/components/ProductList';
import Search from '@/components/Search';
import { Suspense } from 'react';

export default function ProductPage({ searchParams }: PageProps<'/product'>) {
  return (
    <div className="p-20">
      <ProductForm />
      <br />
      <Suspense fallback={<p>Loading ...</p>}>
        <ProductList searchParams={searchParams} />
      </Suspense>
      <Search />
    </div>
  );
}
