'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
// URLSearchParams
export default function Search() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    router.push(`${pathname}?q=${e.target.value}`);
  };

  return (
    <input
      type="text"
      placeholder="Enter search term"
      onChange={handleChangeInput}
    />
  );
}
