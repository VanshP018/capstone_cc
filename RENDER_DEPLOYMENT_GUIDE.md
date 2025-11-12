# 🚀 CodeClash - Render Deployment Guide

Complete step-by-step guide to deploy your CodeClash app on Render.

---

## **Phase 1: Prepare Your Repository** ✅

### Step 1: Verify Your Code is Pushed to GitHub
```bash
cd /Users/vanshpanwar/Desktop/codeClash
git status
# Should show: On branch main, Your branch is up to date with 'origin/main'.
```

✅ **Your code is already pushed!** (Last commit: da93be7)

---

## **Phase 2: Deploy Backend Service** 🔧

### Step 2: Create Backend Service on Render

1. Go to **https://render.com**
2. Click **"New +"** → Select **"Web Service"**
3. Click **"Connect a repository"**
   - Search for: `capstone_cc`
   - Select: `VanshP018/capstone_cc`
   - Click **"Connect"**

### Step 3: Configure Backend Service

Fill in these fields:

| Field | Value |
|-------|-------|
| **Name** | `codeclash-backend` |
| **Region** | `Singapore` (or closest to you) |
| **Branch** | `main` |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | Leave empty |
| **Start Command** | `npm start` |

### Step 4: Add Environment Variables for Backend

Click **"Advanced"** → **"Add Environment Variable"**

Add these variables one by one:

```
KEY: PORT
VALUE: 3000

KEY: NODE_ENV
VALUE: production

KEY: JWT_SECRET
VALUE: your-super-secret-jwt-key-change-this-in-production

KEY: JWT_EXPIRY
VALUE: 1h

KEY: MONGO_URI
VALUE: mongodb+srv://vanshpanwar0018_db_user:7TFLTjsTQLtF88t6@cluster0.lnqykug.mongodb.net/?appName=Cluster0
```

⚠️ **IMPORTANT:** Make sure `MONGO_URI` is exactly as shown (copy from your `.env` file)

### Step 5: Deploy Backend

- Click **"Create Web Service"**
- Wait for deployment (takes 2-3 minutes)
- You'll see a URL like: `https://codeclash-backend.onrender.com`
- **COPY THIS URL - YOU'LL NEED IT FOR FRONTEND!**

✅ **Backend should show "Live" status when done**

---

## **Phase 3: Deploy Frontend Service** 🎨

### Step 6: Create Frontend Service on Render

1. Go to **https://render.com** → Click **"New +"** → **"Web Service"**
2. Click **"Connect a repository"**
   - Search for: `capstone_cc`
   - Select: `VanshP018/capstone_cc`
   - Click **"Connect"**

### Step 7: Configure Frontend Service

Fill in these fields:

| Field | Value |
|-------|-------|
| **Name** | `codeclash-frontend` |
| **Region** | `Singapore` (same as backend) |
| **Branch** | `main` |
| **Root Directory** | `frontend` |
| **Runtime** | `Node` |
| **Build Command** | `npm run build` |
| **Start Command** | `npm run preview` |

### Step 8: Add Environment Variables for Frontend

Click **"Advanced"** → **"Add Environment Variable"**

Add this variable:

```
KEY: VITE_API_URL
VALUE: https://codeclash-backend.onrender.com/api
```

⚠️ **REPLACE** `codeclash-backend` with your actual backend service name!

If your backend URL is: `https://my-custom-backend.onrender.com`
Then use: `https://my-custom-backend.onrender.com/api`

### Step 9: Deploy Frontend

- Click **"Create Web Service"**
- Wait for deployment (takes 3-5 minutes)
- You'll see a URL like: `https://codeclash-frontend.onrender.com`

✅ **Frontend should show "Live" status when done**

---

## **Phase 4: Test Your Deployment** 🧪

### Step 10: Test the Live App

1. Open: `https://codeclash-frontend.onrender.com`
2. You should see:
   - ✅ CodeClash logo and title
   - ✅ Login form with animated DSA code
   - ✅ Dark theme UI

### Step 11: Test Registration

1. Click **"Create account"**
2. Fill in:
   - **Full Name:** John Doe
   - **Email:** john@example.com
   - **Password:** password123
3. Click **"Create Account"**

Expected result:
- ✅ User registered successfully
- ✅ Redirected to Profile page
- ✅ Shows your name, email, ID

### Step 12: Test Login

1. Logout (click "Logout" button)
2. Fill in login:
   - **Email:** john@example.com
   - **Password:** password123
3. Click **"Sign In"**

Expected result:
- ✅ Login successful
- ✅ Shows your profile data

---

## **Phase 5: Troubleshooting** 🔧

### Issue: Frontend shows blank page

**Solution:**
1. Open browser DevTools (F12)
2. Check **Console** tab for errors
3. Check **Network** tab - see if API calls are being made
4. Verify `VITE_API_URL` is set correctly in Render

### Issue: Cannot login/register (API errors)

**Solution:**
1. Check backend service status on Render (should be "Live")
2. Verify `MONGO_URI` is correct in backend environment variables
3. Check backend logs in Render dashboard
4. Verify frontend has correct `VITE_API_URL`

### Issue: Backend shows deployment failed

**Solution:**
1. Click backend service → **"Logs"**
2. Look for error messages
3. Common causes:
   - Missing `MONGO_URI` environment variable
   - Typo in JWT_SECRET
   - Old code version (git pull latest)

### Issue: Cannot connect to MongoDB

**Solution:**
1. Verify MongoDB connection string is correct
2. Check if your MongoDB Atlas IP whitelist includes Render's IP
3. Go to MongoDB Atlas → Network Access → Add Render's IP: `0.0.0.0/0`

---

## **Quick Reference URLs** 🔗

After deployment, you'll have:

```
Frontend: https://codeclash-frontend.onrender.com
Backend:  https://codeclash-backend.onrender.com
```

---

## **Environment Variables Cheat Sheet** 📋

**Backend (.env on Render):**
```
PORT=3000
NODE_ENV=production
JWT_SECRET=your-super-secret-key
JWT_EXPIRY=1h
MONGO_URI=your-mongodb-connection-string
```

**Frontend (.env on Render):**
```
VITE_API_URL=https://codeclash-backend.onrender.com/api
```

---

## **Common Settings Review** ✅

Before clicking deploy, verify:

- [ ] Backend root directory is `backend`
- [ ] Frontend root directory is `frontend`
- [ ] Backend start command is `npm start`
- [ ] Frontend build is `npm run build`
- [ ] Frontend start is `npm run preview`
- [ ] All environment variables are set
- [ ] MONGO_URI has no extra spaces
- [ ] VITE_API_URL points to correct backend URL
- [ ] Branch is set to `main`

---

## **Need Help?** 💬

If something goes wrong:

1. Check **Render Logs** for your service
2. Verify all environment variables
3. Ensure backend is deployed and "Live"
4. Try redeploying (Render dashboard → service → "Redeploy")

---

**You're ready to go! Good luck! 🚀**
