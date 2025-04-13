#!/bin/bash

# Set strict error handling
set -e

chmod +x ./vercel-install.sh

echo "Starting Vercel build process..."

echo "Installing main project dependencies..."
npm install

# Install specific dependencies that might be missing
echo "Installing additional dependencies..."
npm install react-intersection-observer@9.8.0
npm install @radix-ui/react-separator@1.1.3
npm install @radix-ui/react-tabs@1.1.4
npm install class-variance-authority@0.7.0
npm install clsx@2.1.0
npm install tailwind-merge@2.2.0

# Create the lib directory if it doesn't exist
mkdir -p lib

# Create utils.ts file which is needed by UI components
if [ ! -f "lib/utils.ts" ]; then
  echo "Creating utils.ts file..."
  cat > lib/utils.ts << 'EOL'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOL
fi

# Continue with the regular build
echo "Running Next.js build..."
npm run build

echo "Build completed successfully."
