import { Sale, SalesInsights } from "@/types/types";

export function processSalesData(salesData: Sale[]): SalesInsights {
    const categorySales: Record<string, { totalSales: number; transactions: number }> = {};

    salesData.forEach(({ category, amount }) => {
        if (!categorySales[category]) {
            categorySales[category] = { totalSales: 0, transactions: 0 };
        }
        categorySales[category].totalSales += amount;
        categorySales[category].transactions += 1;
    });

    let bestCategory = "";
    let highestSales = 0;

    for (const [category, data] of Object.entries(categorySales)) {
        if (data.totalSales > highestSales) {
            highestSales = data.totalSales;
            bestCategory = category;
        }
    }

    return {
        bestCategory,
        categorySales,
        averageSalesPerTransaction: (
            salesData.reduce((sum, { amount }) => sum + amount, 0) / salesData.length
        ).toFixed(2),
    };
}
