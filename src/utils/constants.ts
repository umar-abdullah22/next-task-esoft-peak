export const ERROR_MESSAGES = {
    INVALID_INPUT: "Invalid input data. Please provide an array of sales records.",
    METHOD_NOT_ALLOWED: "Method Not Allowed",
    AI_FAILURE: "AI summary could not be generated.",
    INTERNAL_ERROR: "Internal Server Error",
};

export const AI_CONFIG = {
    MODEL: "gpt-3.5-turbo",
    MAX_TOKENS: 200,
    SYSTEM_PROMPT: "Summarize the sales data insights.",
};

export const RETRY_CONFIG = {
    MAX_RETRIES: 3,
    INITIAL_BACKOFF: 1000, 
};
