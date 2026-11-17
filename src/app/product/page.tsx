import ProductForm from '@/components/ProductForm';
import ProductList from '@/components/ProductList';
import { Suspense } from 'react';

export default function ProductPage() {
  return (
    <div className="p-20">
      <ProductForm />
      <br />
      <Suspense fallback={<p>Loading ...</p>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
