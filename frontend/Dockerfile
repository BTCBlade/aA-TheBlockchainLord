# Use the official Node.js image as the base image
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies (use --legacy-peer-deps if necessary)
RUN npm install --legacy-peer-deps

# Copy the rest of the application files into the container
COPY . .

# Expose the port the app will be served on
EXPOSE 3000

# Start nginx to serve the production build
CMD ["npm", "start"]
