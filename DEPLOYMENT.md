# MandaStrong Studio - Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy from v0 UI
1. Click the "Publish" button in the top right corner of v0
2. Follow the prompts to connect your Vercel account
3. Your app will be automatically deployed to Vercel

### Option 2: Deploy via Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in your project directory
3. Follow the prompts to deploy

### Option 3: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click "Deploy"

## Custom Domain Setup

Once deployed, you can connect your custom domain:
1. Go to your project in Vercel Dashboard
2. Navigate to Settings > Domains
3. Add your domain: `mandastrongstudio.bolt.host`
4. Follow DNS configuration instructions

## Database Setup

The SQLite database will be automatically created on first run. The database file will be stored in:
- `/tmp/database.db` on Vercel (serverless function)

**Note**: For production, consider using a persistent database solution like:
- Vercel Postgres
- Supabase
- PlanetScale
- Neon

## Environment Variables

No environment variables are required for basic functionality. The app uses SQLite with bcrypt for authentication.

## Post-Deployment Checklist

- [ ] Test all 21 pages are loading correctly
- [ ] Verify login/registration functionality
- [ ] Test video autoplay on pages 1-2
- [ ] Confirm Stripe buttons open in new tabs
- [ ] Verify "Return to App" links point to your deployed URL
- [ ] Test responsive design on mobile devices
- [ ] Check all AI tool boards (pages 4-9) are scrollable
- [ ] Verify editor suite (pages 11-15) controls work

## Support

For deployment issues, visit [vercel.com/help](https://vercel.com/help)

## App Structure

- Pages 1-2: Landing with ocean video + avatar
- Page 3: Login/Register/Plans
- Pages 4-9: AI Tool Boards (120 tools each)
- Page 10: Doxy unlock page
- Pages 11-15: Full Editor Suite
- Page 16: Export Options
- Page 17: Preview/Player
- Page 18: Disclaimer & TOS
- Page 19: Social/Help Hub
- Page 20: Community Hub
- Page 21: Thank You page
