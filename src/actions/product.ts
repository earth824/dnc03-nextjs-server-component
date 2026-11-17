'use server';

import prisma from '@/lib/prisma';
import { createProductSchema, ProductInput } from '@/schemas/product';
import { revalidatePath } from 'next/cache';

// function export in this file called: server function(server action)
// next.js will create api end point for each function

// FormData similar to object => { test: 'Fanta' }
// export async function createProduct(data: FormData) {
//   console.log('CREATE PRODUCT: SERVER ACTION');
//   console.log(data.get('test')); // Fanta
// }

export async function createProduct(input: ProductInput) {
  // this code run on server: validate again
  console.log(input);
  const parsed = createProductSchema.safeParse(input);
  if (!parsed.success) {
    console.error(parsed.error);
    return { success: false, message: 'Validation failed' };
  }

  // validate sucess
  await prisma.product.create({
    data: {
      name: parsed.data.name
    }
  });
  revalidatePath('/product');
}
