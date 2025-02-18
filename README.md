#  Sales Insights API (Next.js + TypeScript + Docker)

A **scalable and production-ready** Sales Insights API built with **Next.js**, **TypeScript**, and **Docker**.  
This project provides **sales data analysis**, an **AI-generated summary (OpenAI GPT-3.5)**, and is fully **containerized for easy deployment**.

---

##  Features
 **Next.js API Routes** for processing sales data  
 **TypeScript for strict type safety**  
 **AI-powered sales summary using OpenAI GPT-3.5-Turbo**  
 **Unit tests with Jest for validation**  
 **Linting with ESLint for code quality**  
 **Dockerized for platform-independent deployment**  

---

##  Setup & Installation Locally

Follow these steps to set up and run the project **locally**.

---

## 1 Clone the Repository
```sh
git clone https://github.com/umar-abdullah22/next-task-esoft-peak.git
cd next-task-esoft-peak
```
## 2 Install dependencies
```sh
npm install
```

## 3 Setup Environment Variable
```sh
OPENAI_API_KEY=your_openai_api_key_here
```
 Note:

Replace your_openai_api_key_here with your actual OpenAI API key.
Without this, AI-powered sales summaries won’t work.

## 4 Run
```sh
npm run dev
```

The API will be available at:
 http://localhost:3000/api/sales/insights

## 5 Optional Run test cases and linting with these
```sh
npm run lint ##for eslint
npm test ## to run unit tests
```

##  Setup & Installation Docker

Follow these steps to set up and run the project **docker**.
If you want a platform-independent setup, use Docker.

## 1️ Build the Docker Image
```sh
docker build -t sales-insights-api --build-arg OPENAI_API_KEY=your_openai_api_key_here .
```
## 2 Run the Docker Container
```sh
docker run -p 3000:3000 -e OPENAI_API_KEY=your_openai_api_key_here sales-insights-api
```
Now the API is running inside a Docker container!
Open http://localhost:3000/api/sales/insights


## Test API with Predefined Mock Data
if curl is available/installed on your system run the following command:

After running the project locally or with Docker, simply run the following command to send a test request:

```sh
curl -X POST http://localhost:3000/api/sales/insights \
     -H "Content-Type: application/json" \
     -d '[
            { "name": "Alice", "email": "alice@example.com", "product": "Widget A", "category": "Widgets", "amount": 120, "date": "2023-03-01", "state": "CA" },
            { "name": "Bob", "email": "bob@example.com", "product": "Widget B", "category": "Gadgets", "amount": 200, "date": "2023-03-02", "state": "NY" }
        ]'
```
