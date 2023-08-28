# Use the official Node.js image as the base image
FROM node:latest

# Copy package.json to the container's working directory
COPY package.json /app/

# Copy src/ folder to the container's working directory
COPY src /app/

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
RUN npm install

# Command to run the application
CMD [ "node", "app.js" ]
