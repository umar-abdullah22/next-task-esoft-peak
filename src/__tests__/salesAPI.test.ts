import handler from "../pages/api/sales/insights";
import { createMocks } from "node-mocks-http";

// Mock AI service to prevent OpenAI API calls
jest.mock("../utils/aiService", () => ({
    generateAISummary: jest.fn(() => "Mock AI Summary"),
}));

describe("Sales API", () => {
    it("should return 405 for non-POST requests", async () => {
        const { req, res } = createMocks({ method: "GET" });
        await handler(req, res);
        expect(res._getStatusCode()).toBe(405);
    });

    it("should return 400 for invalid input", async () => {
        const { req, res } = createMocks({
            method: "POST",
            body: { invalid: "data" },
        });

        await handler(req, res);
        expect(res._getStatusCode()).toBe(400);
        expect(res._getData()).toContain("Invalid input data");
    });

    it("should process valid sales data and return insights", async () => {
        const { req, res } = createMocks({
            method: "POST",
            body: [
                { name: "Alice", email: "alice@example.com", product: "Widget A", category: "Widgets", amount: 120, date: "2023-03-01", state: "CA" }
            ],
        });

        await handler(req, res);
        expect(res._getStatusCode()).toBe(200);
        const response = JSON.parse(res._getData());
        expect(response).toHaveProperty("insights");
        expect(response).toHaveProperty("summary");
        expect(response.summary).toBe("Mock AI Summary");
    });
});
