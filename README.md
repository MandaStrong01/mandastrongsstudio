# MandaStrong Studio

A complete movie-making application built with Next.js 16, featuring a comprehensive suite of AI-powered tools for pre-production through post-production.

## Features

- **Pages 1-3**: Ocean video background with seamless navigation, login/registration system with SQLite database
- **Page 3**: Stripe integration for Bonus ($10), Pro ($20), and Studio ($30) plans
- **Pages 4-9**: AI Tool Boards with 120 tools each across 6 categories (Pre-Production, Production, Post-Production)
- **Page 10**: "Doxy The School Bully" unlock page with $5 Stripe payment
- **Pages 11-15**: Full Editor Suite with timeline, media upload, AI sound generation, speed controls, and effects
- **Pages 16-21**: Export options, preview player, legal pages, community hub, and thank-you page

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19.2, Tailwind CSS 4, shadcn/ui
- **Database**: SQLite with better-sqlite3
- **Authentication**: bcryptjs for password hashing
- **Payments**: Stripe integration with return links

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000)

## Database Setup

The app automatically creates a SQLite database (`users.db`) on first run with the following schema:

- `users` table with id, email, password_hash, created_at, updated_at

## Environment Variables

No environment variables required for local development. The database is created automatically.

## Deployment

The app is ready to deploy to Vercel or any Next.js-compatible hosting platform:

\`\`\`bash
npm run build
npm start
\`\`\`

## Design System

- **Colors**: Black background, white text, neon-green (#00ff41) accents
- **Typography**: Cinematic serif fonts for headers (bold), italic for taglines
- **Buttons**: Black background with white text throughout
- **Footer**: Starts on page 3, neon-green border

## API Routes

- `POST /api/auth/login` - User login with email/password
- `POST /api/auth/register` - User registration with validation (8+ chars, 1 number)

## License

Copyright 2025 MandaStrong Studio. All rights reserved.
