# 🚀 BlockBrain Deploy Instructions

## Quick Deploy Steps

### 1. Setup Repository
1. Create new GitHub repository
2. Upload all these files to the repository
3. Make repository public

### 2. Deploy to Vercel
1. Go to vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Deploy settings will be auto-detected
6. Click "Deploy"

### 3. Setup Farcaster Integration
1. Open Warpcast mobile app
2. Go to Settings → Advanced → Developer Tools → Enable
3. Developer Tools → Mini Apps → Create New
4. Enter your Vercel domain (e.g., blockbrain-quiz.vercel.app)
5. Copy the TOKEN and SIGNATURE generated

### 4. Update Configuration
1. Edit `public/.well-known/farcaster.json`
2. Replace `REPLACE_WITH_TOKEN_FROM_WARPCAST` with your TOKEN
3. Replace `REPLACE_WITH_SIGNATURE_FROM_WARPCAST` with your SIGNATURE  
4. Replace `YOUR_DOMAIN_HERE.com` with your Vercel domain
5. Commit and push changes to trigger new deployment

### 5. Test Your Mini App
1. Go to: https://warpcast.com/~/developers/miniapp/embed
2. Enter your domain
3. Test the quiz functionality

### 6. Share Your Mini App
Share link: `https://warpcast.com/~/miniapp/YOUR-DOMAIN.vercel.app`

## Troubleshooting
- Make sure `.well-known/farcaster.json` is accessible
- Verify all domains match exactly
- Check browser console for errors

## Features Included
✅ Daily Quest System (3 questions/day)
✅ Crypto & General Knowledge Categories  
✅ XP Scoring System
✅ Weekly Leaderboard
✅ Farcaster Authentication
✅ Mobile Responsive Design
