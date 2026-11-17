'use client';

import { createProduct } from '@/actions/product';
import { createProductSchema, ProductInput } from '@/schemas/product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function ProductForm() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<ProductInput>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: ''
    }
  });

  const onSubmit = async (data: ProductInput) => {
    // call server function
    await createProduct(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter product name"
        {...register('name')}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <button>Create Product</button>
    </form>
  );
}

// export default function ProductForm() {
//   return (
//     <form action={createProduct}>
//       <input type="text" placeholder="Enter product name" name="test" />
//       <button>Create Product</button>
//     </form>
//   );
// }
