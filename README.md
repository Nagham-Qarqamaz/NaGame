# Game Hosting Platform

A modern game hosting platform built with Next.js 16, React 19, and Tailwind CSS. Browse, search, and play games directly in your browser.

## Features

- **Home Page** - Landing page with featured games, platform features, and promotional banner
- **Game Catalog** - Browse all available games with grid layout
- **Search & Filtering** - Search games by title and filter by categories
- **Pagination** - Navigate through games with paginated results
- **Game Details Page** - View game information with embedded iframe player
- **Related Games** - Discover similar games based on category
- **Responsive Design** - Fully responsive UI for all screen sizes
- **Loading States** - Smooth loading indicators throughout the app
- **Empty States** - User-friendly messages when no results are found

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **State Management:** Zustand
- **Language:** TypeScript

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd game-hosting
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
game-hosting/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   └── games/
│       ├── page.tsx          # Games catalog
│       └── [id]/
│           ├── page.tsx      # Game detail page
│           └── components/   # Game-specific components
├── components/
│   ├── games/                # Game-related components
│   ├── layout/               # Layout components (Header, Footer, etc.)
│   ├── sections/             # Page sections (Banner, Features)
│   └── ui/                   # Reusable UI components
├── stores/
│   └── gameStore.ts          # Zustand store for game state
├── types/                    # TypeScript type definitions
└── utils/                    # Utility functions and constants
```

## Additional Notes

- Games are loaded from static data in `utils/constants.ts`
- The game store manages global state for games, search, and filters
- Game iframes are embedded for in-browser gameplay
- The platform uses Next.js App Router for file-based routing
