# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the Next.js API port
EXPOSE 3000

# Set environment variables
ARG OPENAI_API_KEY
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

# Start the Next.js production server
CMD ["npm", "run", "start"]
