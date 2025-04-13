#!/bin/bash

# Set strict error handling
set -e

echo "Starting Vercel build process..."

# Vercel automatically runs `pnpm install` based on pnpm-lock.yaml before this script.
# No need to run `pnpm install` again here unless absolutely necessary.
# echo "Installing main project dependencies..."
# pnpm install

# Install specific dependencies if needed (ensure these are not already in package.json)
# Using pnpm add is generally preferred over install for specific packages during build
echo "Ensuring specific dependencies are present..."
# Consider adding these to package.json instead if they are always required
pnpm add react-intersection-observer@9.16.0 # Updated version from log
pnpm add @radix-ui/react-separator@1.1.3
pnpm add @radix-ui/react-tabs@1.1.4
pnpm add class-variance-authority@0.7.0
pnpm add clsx@2.1.0
pnpm add tailwind-merge@2.2.0

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

# Ensure UI components directory exists (optional safety check)
mkdir -p components/ui

# Continue with the regular build using pnpm
echo "Running Next.js build..."
pnpm run build

echo "Build completed successfully."
