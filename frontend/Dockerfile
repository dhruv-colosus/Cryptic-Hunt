# Use the official Node.js image as base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port for the application
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
