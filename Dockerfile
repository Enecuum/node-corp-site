# Node image
FROM node:slim

# Create directory for server node.js files
WORKDIR /app

# Copy all project files except ignored in .dockerignore
ADD . /app

# Upgrade all system dependencies
RUN apt-get update && apt-get upgrade -y

# Install project dependencies
RUN npm i --force

# Specify server port
ENV PORT     4000

CMD npm run start
