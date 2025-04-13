#!/bin/bash

# Set strict error handling
set -e

echo "Starting Vercel build process..."

# Install specific dependencies that might be missing
echo "Installing additional dependencies..."
npm install react-intersection-observer@9.8.0
npm install @radix-ui/react-separator@1.1.3
npm install @radix-ui/react-tabs@1.1.4
npm install class-variance-authority@0.7.0
npm install clsx@2.1.0
npm install tailwind-merge@2.2.0

# Continue with the regular build
echo "Running Next.js build..."
npm run build

echo "Build completed successfully."
