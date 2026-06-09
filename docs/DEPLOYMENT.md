# Deployment Guide

## Prerequisites

- Vercel account (for frontend)
- Cloud hosting account (AWS, DigitalOcean, etc. for backend)
- MongoDB Atlas account
- Domain name configured with DNS

## Frontend Deployment (Vercel)

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select the GitHub repository
   - Select `/frontend` as root directory

2. **Environment Variables**
   - Add all `.env.local` variables in Vercel project settings
   - Include API URL, payment keys, etc.

3. **Deploy**
   - Vercel automatically deploys on push to main branch
   - Preview deployments for pull requests

## Backend Deployment (Cloud Provider)

### Option 1: DigitalOcean App Platform

1. Connect GitHub repository
2. Select `/backend` as source directory
3. Configure environment variables
4. Set build command: `npm install && npm run build`
5. Set run command: `npm start`
6. Deploy

### Option 2: AWS EC2 + PM2

1. Launch EC2 instance (t3.micro sufficient)
2. SSH into instance
3. Clone repository
4. Install Node.js
5. Install PM2: `npm install -g pm2`
6. Run: `pm2 start npm --name \"backend\" -- start`
7. Configure Nginx as reverse proxy
8. Set up SSL with Let's Encrypt

## Database Setup (MongoDB Atlas)

1. Create cluster on MongoDB Atlas
2. Set network access whitelist
3. Create database user
4. Get connection string
5. Add to backend `.env` as `MONGODB_URI`

## Domain Configuration

### DNS Records

```
Type    | Name          | Value
--------|---------------|----------------------------------
A       | @             | Vercel IP (from Vercel)
CNAME   | api           | Backend service URL
CNAME   | www           | Your domain (for Vercel)
```

## SSL Certificate

- Vercel: Automatic SSL (included)
- Backend: Use Let's Encrypt (free)

## Performance Optimization

### Before Production

- [ ] Enable CDN for static assets
- [ ] Set up image optimization
- [ ] Enable compression
- [ ] Minify CSS/JS
- [ ] Set up caching headers
- [ ] Monitor performance metrics

## Monitoring & Maintenance

- Set up error logging (Sentry)
- Monitor uptime (UptimeRobot)
- Regular security updates
- Database backups (MongoDB Atlas automated)
- Analytics (Google Analytics, custom tracking)

## Local Testing Before Deployment

```bash
# Test production build
cd frontend
npm run build
npm start

# Test backend production
cd backend
npm run build
npm start
```

## Rollback Procedure

- Vercel: Click \"Rollback\" on dashboard
- Backend: Use PM2: `pm2 restart backend`
