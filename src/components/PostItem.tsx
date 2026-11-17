'use client';

import { useState } from 'react';

type PostItemProps = {
  title: string;
};

export default function PostItem({ title }: PostItemProps) {
  const [tick, setTick] = useState(false);
  return (
    <p className={tick ? 'line-through' : ''} onClick={() => setTick(!tick)}>
      {title}
    </p>
  );
}
