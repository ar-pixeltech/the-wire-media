// Zod validation schemas
import { z } from "zod";

export const createAppConfigurationSchema = z.object({
    //   siteName: z.string().min(2),
    siteName: z.string(),
    address: z.string().email(),
});

export type CreateAppConfigurationInput = z.infer<typeof createAppConfigurationSchema>;