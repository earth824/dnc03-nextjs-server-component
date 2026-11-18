import Counter from '@/components/Counter'; // PATH ALIAS
import PostList from '@/components/PostList';
import ProductList from '@/components/ProductList';
import { Suspense } from 'react';

// SERVER COMPONENT ==> CLIENT COMPONENT when declare 'use client' at the top of the file
export default function Home() {
  console.log('HOME COMPONENT');

  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        <PostList />
      </Suspense>
      {/* <ProductList /> */}
      <Counter />
    </div>
  );
}

function Skeleton() {
  return (
    <div className="space-y-1">
      <div className="h-7 w-80 bg-gray-300 animate-pulse"></div>
      <div className="h-7 w-80 bg-gray-300 animate-pulse"></div>
      <div className="h-7 w-80 bg-gray-300 animate-pulse"></div>
      <div className="h-7 w-80 bg-gray-300 animate-pulse"></div>
      <div className="h-7 w-80 bg-gray-300 animate-pulse"></div>
    </div>
  );
}
