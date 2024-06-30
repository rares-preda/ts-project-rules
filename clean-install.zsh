#!/bin/zsh

# Kill existing node servers
echo "Kill node server if exists..."
killall node

# Remove node_modules and package-lock.json
echo "Removing dist, node_modules and package-lock.json..."
rm -rf node_modules
rm -rf dist
rm package-lock.json

# Install npm dependencies
echo "Installing npm dependencies..."
npm install

### Starting the server
echo "Starting the server..."
npm run start
