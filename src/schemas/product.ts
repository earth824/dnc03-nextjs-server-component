import z from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1)
});

export type ProductInput = z.infer<typeof createProductSchema>;
