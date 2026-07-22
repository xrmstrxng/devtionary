import { z } from "zod";
export const categorySchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.object({ en: z.string(), "pt-BR": z.string() }),
  description: z.object({ en: z.string(), "pt-BR": z.string() }),
});
export type Category = z.infer<typeof categorySchema>;
