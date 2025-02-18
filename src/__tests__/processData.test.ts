import { Sale } from "@/types/types";
import { processSalesData } from "../utils/processData";

describe("processSalesData", () => {
    const mockSalesData: Sale[] = [
        { name: "Alice", email: "alice@example.com", product: "Widget A", category: "Widgets", amount: 100, date: "2023-03-01", state: "CA" },
        { name: "Bob", email: "bob@example.com", product: "Widget B", category: "Widgets", amount: 200, date: "2023-03-02", state: "TX" },
        { name: "Charlie", email: "charlie@example.com", product: "Widget C", category: "Gadgets", amount: 300, date: "2023-03-03", state: "NY" },
    ];

    it("should calculate total sales per category", () => {
        const insights = processSalesData(mockSalesData);
        expect(insights.categorySales).toEqual({
            Widgets: { totalSales: 300, transactions: 2 },
            Gadgets: { totalSales: 300, transactions: 1 },
        });
    });

    it("should determine the best-performing category", () => {
        const insights = processSalesData(mockSalesData);
        expect(insights.bestCategory).toBe("Widgets");
    });

    it("should calculate average sales per transaction", () => {
        const insights = processSalesData(mockSalesData);
        expect(insights.averageSalesPerTransaction).toBe("200.00");
    });
});
