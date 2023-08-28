# Building a simple Docker Image

This guide outlines the steps to build a Docker image that runs a simple Express.js web application using the provided `Dockerfile`, `package.json`, and `app.js` files.

## Prerequisites

1. **Docker**: Make sure you have Docker installed on your system. You can download and install Docker from the official website: [Docker](https://www.docker.com/get-started)

## Building the Docker Image

1. **Navigate to Project Directory**: Open a terminal and navigate to the directory where you have the `Dockerfile`, `package.json`, and `app.js` files.

2. **Build the Docker Image**: Run the following command to build the Docker image. Replace `your-image-name` with a suitable name for your image:

   ```
   docker build -t your-image-name:your-image-tag .
   ```

   The `-t` flag tags the image with the specified name and tag.

3. **Image Building Process**: Docker will execute the steps defined in the `Dockerfile`. It will copy the required files, install dependencies, and configure the image.

## Running the Docker Container

1. **Run the Docker Container**: After the image is built, you can run a container using the following command:

   ```
   docker run -p 3000:3000 -d --name your-container-name your-image-name:your-image-tag
   ```

   This command runs the container in detached mode (`-d`), maps port `3000` of the host to port `3000` of the container, and uses the image you built. The --name flag allows you to give your container a that you specify

2. **Access the App**: Open a web browser and go to `http://localhost:3000` to see the "Hello, Docker World with Express!" message.

## Stopping and Cleaning Up

1. **Stop the Container**: To stop the container, use the container ID or name:

   ```
   docker stop your-container-name
   ```

2. **Removing the Container**: After stopping the container, you can remove it:

   ```
   docker rm your-container-name
   ```

3. **Removing the Image**: If you want to remove the Docker image, use:

   ```
   docker rmi your-image-name:your-image-tag
   ```

## Conclusion

You've successfully built a Docker image and run a simple Express.js web application. This approach allows you to package and run your application consistently across different environments.

---

Please replace `your-image-name` and `your-container-name` with appropriate values. 