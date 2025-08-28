# Netlify Deployment Guide for Mageza App

## Prerequisites
- GitHub account
- Netlify account (free tier available)
- Node.js installed locally

## Step 1: Prepare Your Project for Deployment

### 1.1 Ensure Build Process Works
Run the build command locally to verify everything works:
```bash
npm run build
```

### 1.2 Check Public Directory
Verify that the `public` directory contains all necessary files:
- index.html
- CSS files
- JavaScript files
- Images and assets

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify CLI (Recommended)

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize Netlify in your project:
```bash
netlify init
```

4. Deploy your site:
```bash
netlify deploy --prod
```

### Option B: Deploy via GitHub

1. Create a GitHub repository for your project
2. Push your code to GitHub
3. Go to [Netlify](https://netlify.com)
4. Click "New site from Git"
5. Connect your GitHub account
6. Select your repository
7. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
8. Click "Deploy site"

### Option C: Drag and Drop Deployment

1. Run `npm run build` locally
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `public` folder to the deployment area

## Step 3: Configure Environment Variables (If Needed)

If your app requires environment variables (like API keys), set them in Netlify:
1. Go to your site in Netlify dashboard
2. Site settings > Environment variables
3. Add your variables

## Step 4: Custom Domain (Optional)

1. Go to your site in Netlify dashboard
2. Domain settings
3. Add custom domain
4. Configure DNS settings with your domain provider

## Troubleshooting

### Common Issues

1. **Build fails**: Check that all dependencies are in package.json
2. **404 errors**: Ensure all file paths are correct
3. **CSS/JS not loading**: Verify build output in public directory

### Build Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `public`
- Development server port: 3000

## Support

If you encounter issues:
1. Check Netlify build logs
2. Verify local build works
3. Ensure all dependencies are properly installed

Your site should now be live at: `https://your-site-name.netlify.app`
