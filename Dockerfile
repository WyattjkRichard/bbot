# Start with a node base image
FROM node:latest

# Create the bot's directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./
RUN npm install

COPY . ./

# Start the bot.
CMD ["node", "src/index.js"]