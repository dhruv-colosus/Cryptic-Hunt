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

# Expose port for the backend
EXPOSE 3001

# Start the backend
CMD ["npm", "start"]