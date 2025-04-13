#!/bin/bash

# Set strict error handling
set -e

echo "Starting Vercel build process..."

# Vercel automatically runs `pnpm install` based on pnpm-lock.yaml before this script.
# Dependencies should be correctly installed if listed in package.json.
# Removing explicit `pnpm add` commands here.

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
