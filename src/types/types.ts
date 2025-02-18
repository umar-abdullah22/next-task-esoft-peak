export interface Sale {
    name: string;
    email: string;
    product: string;
    category: string;
    amount: number;
    date: string;
    state: string;
}

export interface SalesInsights {
    bestCategory: string;
    categorySales: Record<string, { totalSales: number; transactions: number }>;
    averageSalesPerTransaction: string;
}