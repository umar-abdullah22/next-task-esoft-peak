import { z } from "zod";
import { ERROR_MESSAGES } from "./constants";
import { Sale } from "@/types/types";

const salesSchema = z.array(
    z.object({
        name: z.string(),
        email: z.string().email(),
        product: z.string(),
        category: z.string(),
        amount: z.number().positive(),
        date: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid date format",
        }),
        state: z.string(),
    })
);

export function validateSalesData(data: unknown): Sale[] {
    const result = salesSchema.safeParse(data);
    if (!result.success) {
        throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }
    return result.data;
}
