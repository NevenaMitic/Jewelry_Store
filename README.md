# Jewelry Store

An online jewelry shopping platform with a sleek and modern user interface. Customers can browse collections, add products to their wishlist or cart, and securely complete purchases via Stripe. The platform utilizes MongoDB for data storage, Clerk for authentication, and Cloudinary for high-quality image management.

## Features
- Browse and explore jewelry collections
- Add products to wishlist or cart
- Secure checkout using Stripe
- Authentication powered by Clerk
- High-quality image storage via Cloudinary
- Optimized for performance and responsiveness

## Tech Stack
- **Frontend:** Next.js, React, TypeScript
- **Backend:** MongoDB, Mongoose
- **Authentication:** Clerk
- **Payments:** Stripe
- **State Management:** Zustand
- **UI & Styling:** Tailwind CSS, Lucide Icons, React Icons
- **Image Handling:** Cloudinary

## Installation
To set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/jewelry-store.git

# Navigate to the project folder
cd jewelry-store

# Install dependencies
yarn install  # or npm install

# Run the development server
yarn dev  # or npm run dev
```

The app will be available at `http://localhost:3000`.

## Scripts
- `dev` - Starts the development server
- `build` - Builds the application for production
- `start` - Runs the built application
- `lint` - Runs the linter

## Dependencies
```json
{
  "@clerk/nextjs": "^5.2.8",
  "@stripe/stripe-js": "^4.1.0",
  "lucide-react": "^0.417.0",
  "mongoose": "^8.5.1",
  "next": "14.2.5",
  "react": "^18",
  "react-dom": "^18",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.2.1",
  "react-scroll": "^1.9.0",
  "stripe": "^16.5.0",
  "tailwind-scrollbar-hide": "^1.1.7",
  "zustand": "^4.5.4"
}
```

## Development Dependencies
```json
{
  "@types/node": "^20",
  "@types/prop-types": "^15.7.12",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "@types/react-scroll": "^1.8.10",
  "postcss": "^8",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
```

## Compiler Options
This project follows TypeScript best practices with the following compiler options:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
