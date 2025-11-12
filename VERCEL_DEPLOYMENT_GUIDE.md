# 🚀 Vercel Deployment Guide

Complete guide to deploy CodeClash on Vercel (instead of Render).

---

## **Vercel Frontend Setup**

### Step 1: Connect Your GitHub Repository

1. Go to **https://vercel.com**
2. Click **"Add New"** → **"Project"**
3. Click **"Import Git Repository"**
4. Find and select: `capstone_cc`
5. Click **"Import"**

### Step 2: Configure Project Settings

Fill in these fields:

| Field | Value |
|-------|-------|
| **Project Name** | `codeclash-frontend` |
| **Framework Preset** | `Vite` |
| **Root Directory** | `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

### Step 3: Add Environment Variables

In the **Environment Variables** section, add:

```
VITE_API_URL = https://your-backend-url.com/api
```

⚠️ **Replace** `your-backend-url` with your actual backend URL (Vercel, Render, etc.)

### Step 4: Deploy

Click **"Deploy"** and wait for completion.

You'll get a URL like: `https://codeclash-frontend.vercel.app`

---

## **Backend Deployment** (Choose one)

### Option A: Deploy Backend on Vercel

1. Create a separate Vercel project for backend
2. Use root directory: `backend`
3. Add environment variables: `MONGO_URI`, `JWT_SECRET`, `PORT`
4. Note the backend URL

### Option B: Deploy Backend on Render

1. Follow the Render guide (see RENDER_DEPLOYMENT_GUIDE.md)
2. Copy the backend URL
3. Use that URL for frontend's `VITE_API_URL`

---

## **Update Frontend API URL**

After backend is deployed:

1. Go to Vercel project → **Settings** → **Environment Variables**
2. Update `VITE_API_URL` with correct backend URL:
   ```
   VITE_API_URL = https://your-backend-url.com/api
   ```
3. Redeploy frontend

---

## **Environment Variables Reference**

### Frontend (Vercel)
```
VITE_API_URL=https://codeclash-backend.vercel.app/api
```

### Backend (if on Vercel)
```
PORT=3000
NODE_ENV=production
JWT_SECRET=your-super-secret-key
JWT_EXPIRY=1h
MONGO_URI=mongodb+srv://...
```

---

## **Testing After Deployment**

1. Open frontend URL in browser
2. Test registration → login → profile
3. Check browser console (F12) for any errors
4. Verify API calls reach backend

---

## **Troubleshooting**

### Blank Page
- Check Vercel logs: Project → **Deployments** → Click deployment → **Logs**
- Verify `VITE_API_URL` is set

### API Errors
- Check that backend URL is correct
- Ensure backend is running and accessible
- Check CORS settings in backend

### Build Failed
- Check Vercel logs for error details
- Ensure all dependencies are installed
- Try clearing Vercel cache and redeploying

---

**Vercel is configured and ready to deploy!** 🎉
