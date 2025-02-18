import type { NextApiRequest, NextApiResponse } from "next";
import { processSalesData } from "../../../utils/processData";
import { generateAISummary } from "../../../utils/aiService";
import { ERROR_MESSAGES } from "../../../utils/constants";
import { validateSalesData } from "../../../utils/validation";
import { ApiResponse, SalesInsights } from "../../../types/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: ERROR_MESSAGES.METHOD_NOT_ALLOWED });
    }

    try {
        const salesData = validateSalesData(req.body);
        const insights: SalesInsights = processSalesData(salesData);
        const summary: string = await generateAISummary(insights);

        res.status(200).json({ insights, summary });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Error:", error);
        res.status(400).json({ error: error.message || ERROR_MESSAGES.INTERNAL_ERROR });
    }
}
