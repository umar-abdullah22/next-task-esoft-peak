import { validateSalesData } from "../utils/validation";

describe("validateSalesData", () => {
    it("should validate correct sales data", () => {
        const validData = [
            { name: "Alice", email: "alice@example.com", product: "Widget A", category: "Widgets", amount: 100, date: "2023-03-01", state: "CA" }
        ];
        expect(() => validateSalesData(validData)).not.toThrow();
    });

    it("should throw an error for invalid email", () => {
        const invalidData = [
            { name: "Alice", email: "invalid-email", product: "Widget A", category: "Widgets", amount: 100, date: "2023-03-01", state: "CA" }
        ];
        expect(() => validateSalesData(invalidData)).toThrow("Invalid input data. Please provide an array of sales records.");
    });

    it("should throw an error for negative amounts", () => {
        const invalidData = [
            { name: "Alice", email: "alice@example.com", product: "Widget A", category: "Widgets", amount: -10, date: "2023-03-01", state: "CA" }
        ];
        expect(() => validateSalesData(invalidData)).toThrow();
    });
});
