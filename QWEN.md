# QWEN.md - GX402 Next.js Project Documentation

## Project Overview

This is a Next.js application for GX402, an open-source game SDK designed for game engines with support for various platforms including Unity, Unreal Engine, Telegram, WebGL, Farcaster, and mobile. The project serves as a landing page and documentation hub for the GX402 system, which provides payment processing capabilities for games with support for both EVM and SVM networks.

Key features of the project:
- Modern Next.js 16 application with React 19
- Tailwind CSS for styling with a custom UI component library
- Integration with 3D graphics (Three.js, @react-three/fiber)
- Responsive design with glassmorphism effects
- Animated components using GSAP and Motion libraries
- GitHub integration and documentation links
- Social media integration (Twitter, Discord)

## Technologies Used

- **Framework**: Next.js 16.0.1, React 19.2.0, React DOM 19.2.0
- **Styling**: Tailwind CSS, Tailwind Merge, clsx, class-variance-authority
- **UI Components**: shadcn/ui (custom implementation), Radix UI, Lucide React, React Icons
- **Animation**: GSAP, Motion, Three.js, @react-three/fiber, OGL
- **Code Quality**: Biome (formatter, linter)
- **Type Safety**: TypeScript
- **Icons**: Lucide React, React Icons

## File Structure

```
gx402next/
├── public/                 # Static assets
│   ├── logo/              # Logo images
│   ├── marquee/           # Platform icons
│   └── ...                # Other static files
├── src/
│   ├── app/               # Next.js app router pages
│   │   └── page.tsx       # Main landing page
│   ├── components/        # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── ...            # Page-specific components
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # cn utility for Tailwind class merging
│   └── styles/            # Global styles (if any)
├── .gitignore             # Git ignore patterns
├── biome.json             # Biome configuration
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project overview
├── tsconfig.json          # TypeScript configuration
└── ...
```

## Building and Running

### Prerequisites
- Node.js (recommended v18 or higher)
- npm, yarn, pnpm, or bun

### Installation and Development

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Open your browser** to [http://localhost:3000](http://localhost:3000) to see the application.

### Production

1. **Build the application**:
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   # or
   bun build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   # or
   yarn start
   # or
   pnpm start
   # or
   bun start
   ```

### Code Quality

1. **Lint the code**:
   ```bash
   npm run lint
   # or
   yarn lint
   # or
   pnpm lint
   # or
   bun lint
   ```

2. **Format the code**:
   ```bash
   npm run format
   # or
   yarn format
   # or
   pnpm format
   # or
   bun format
   ```

## Development Conventions

### Code Style
- Uses Biome for consistent code formatting and linting
- 2-space indentation for all code
- Follows standard React/Next.js conventions
- Component names are in PascalCase
- File names match component names

### Component Structure
- Components are organized in the `src/components` directory
- UI components are in `src/components/ui`
- Page components are in `src/app` (following Next.js App Router)
- Reusable utility functions are in `src/lib/utils.ts`

### Styling
- Tailwind CSS with custom configuration
- Uses conditional class merging with `cn` utility function
- Glassmorphism effects using backdrop-filter
- Responsive design with Tailwind's responsive prefixes

### TypeScript
- Full TypeScript support with strict mode enabled
- Type checking enforced in development
- Component props are properly typed
- Uses TypeScript path aliases (e.g., `@/components`, `@/lib/utils`)

### Component Import Structure
- Uses path aliases (e.g., `@/components`, `@/lib/utils`) for cleaner imports
- External dependencies imported first
- Internal imports organized from most general to most specific
- Uses destructured imports where appropriate

## Key Components

### Main Page (`src/app/page.tsx`)
- Hero section with gradient text and call-to-action buttons
- Platforms section showing supported game development platforms
- Features section highlighting GX402 capabilities
- Facilitator section explaining the backend service
- Code editor preview component
- Footer with GitHub, documentation, and social links

### Header Component (`src/components/Header.tsx`)
- Fixed header that hides on scroll down and shows on scroll up
- Logo and navigation links
- GitHub button with icon

### Facilitator Component (`src/components/Facilitator.tsx`)
- Detailed explanation of the GX402 facilitator service
- URL display with copy functionality
- Core responsibilities section
- Technical stack information
- CTA buttons for documentation

### UI Components (`src/components/ui/`)
- `button.tsx`: Custom button component using Radix UI and class-variance-authority
- Various animated and visual components with glassmorphism effects

## Project Configuration

### Next.js Configuration (`next.config.ts`)
- Standard Next.js configuration with no custom options

### TypeScript Configuration (`tsconfig.json`)
- Target: ES2017
- Strict mode enabled
- Path aliases configured (`@/*` maps to `./src/*`)
- Next.js plugin enabled for type checking

### Biome Configuration (`biome.json`)
- Formatter enabled with 2-space indentation
- Linter with recommended rules
- VCS integration enabled
- Next.js and React domain rules enabled
- Import organization enabled

## External Dependencies

### UI/UX
- `lucide-react`: Icon library with clean SVG icons
- `@radix-ui/react-slot`: For compound component patterns
- `motion`: Animation library
- `gsap`: Advanced animation library

### Graphics & 3D
- `three`: 3D library for web
- `@react-three/fiber`: React renderer for Three.js
- `ogl`: WebGL library

### Utilities
- `class-variance-authority`: For creating variant-based component classes
- `clsx`: Conditional class joining
- `tailwind-merge`: Merging Tailwind CSS classes with conflict resolution
- `@types/*`: TypeScript definitions for dependencies

## Special Features

### Animation
- Multiple animated components using GSAP and Motion
- Three.js integration for 3D effects
- Interactive elements with hover and scroll animations

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Flexbox and Grid layouts
- Appropriate font scaling for different screen sizes

### Accessibility
- Proper semantic HTML structure
- Focus management
- Keyboard navigation support
- ARIA attributes where appropriate

## Deployment

The project is ready for deployment on Vercel or any platform that supports Next.js applications. The build command creates a production-ready optimized bundle.

## Notes

- This appears to be a marketing/landing page for the GX402 game SDK
- The project includes various animated elements and visual effects to showcase the product
- Social media links and GitHub integration encourage community engagement
- The facilitator section explains backend services for payment verification on EVM/SVM networks