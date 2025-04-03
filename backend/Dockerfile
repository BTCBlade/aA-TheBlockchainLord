# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install the dependencies (use --legacy-peer-deps as per your instructions)
RUN npm install --legacy-peer-deps

# Copy the .env file to the container
COPY .env .env

# Copy the rest of the application files to the container
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Run migrations first
RUN npm run migrate

# Insert seed data after migrations
RUN npm run seed
# Run the backend in production mode by default (you can switch this based on your needs)
CMD ["npm", "run", "start:development"]
