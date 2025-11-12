# 📋 Render Deployment - Quick Start Checklist

## **STEP-BY-STEP VISUAL GUIDE**

```
┌─────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT WORKFLOW                      │
└─────────────────────────────────────────────────────────────┘

PHASE 1: BACKEND DEPLOYMENT
════════════════════════════════════════════════════════════════

1️⃣  Go to render.com → New + → Web Service
    ↓
2️⃣  Connect Repository → VanshP018/capstone_cc
    ↓
3️⃣  Fill Service Details:
    • Name: codeclash-backend
    • Root Directory: backend
    • Build Command: (leave empty)
    • Start Command: npm start
    ↓
4️⃣  Add Environment Variables:
    • PORT: 3000
    • NODE_ENV: production
    • JWT_SECRET: your-secret-key
    • JWT_EXPIRY: 1h
    • MONGO_URI: mongodb+srv://...
    ↓
5️⃣  Click "Create Web Service"
    ↓
6️⃣  Wait for "Live" status (2-3 min)
    ↓
7️⃣  📝 COPY BACKEND URL!
    Example: https://codeclash-backend.onrender.com

════════════════════════════════════════════════════════════════

PHASE 2: FRONTEND DEPLOYMENT
════════════════════════════════════════════════════════════════

8️⃣  Go to render.com → New + → Web Service
    ↓
9️⃣  Connect Repository → VanshP018/capstone_cc
    ↓
🔟  Fill Service Details:
    • Name: codeclash-frontend
    • Root Directory: frontend
    • Build Command: npm run build
    • Start Command: npm run preview
    ↓
1️⃣1️⃣  Add Environment Variables:
    • VITE_API_URL: https://codeclash-backend.onrender.com/api
      (Replace with YOUR backend URL from Step 7!)
    ↓
1️⃣2️⃣  Click "Create Web Service"
    ↓
1️⃣3️⃣  Wait for "Live" status (3-5 min)
    ↓
1️⃣4️⃣  Open Frontend URL in browser
    ↓
1️⃣5️⃣  Test: Register → Login → View Profile

════════════════════════════════════════════════════════════════
```

---

## **CRITICAL DETAILS**

### Backend Service Details
```
┌──────────────────────────────────────────────┐
│ Name              │ codeclash-backend        │
│ Repository        │ VanshP018/capstone_cc   │
│ Branch            │ main                     │
│ Root Directory    │ backend                  │
│ Build Command     │ (LEAVE EMPTY)            │
│ Start Command     │ npm start                │
└──────────────────────────────────────────────┘

Environment Variables:
┌──────────────────────────────────────────────┐
│ PORT              │ 3000                     │
│ NODE_ENV          │ production               │
│ JWT_SECRET        │ your-secret-key          │
│ JWT_EXPIRY        │ 1h                       │
│ MONGO_URI         │ (from your .env file)    │
└──────────────────────────────────────────────┘
```

### Frontend Service Details
```
┌──────────────────────────────────────────────┐
│ Name              │ codeclash-frontend       │
│ Repository        │ VanshP018/capstone_cc   │
│ Branch            │ main                     │
│ Root Directory    │ frontend                 │
│ Build Command     │ npm run build            │
│ Start Command     │ npm run preview          │
└──────────────────────────────────────────────┘

Environment Variables:
┌──────────────────────────────────────────────┐
│ VITE_API_URL      │ https://codeclash-      │
│                   │ backend.onrender.com/api│
└──────────────────────────────────────────────┘

⚠️ IMPORTANT: Replace "codeclash-backend" with your 
actual backend service name!
```

---

## **MONGO_URI - WHERE TO GET IT**

From your `.env` file:
```
MONGO_URI=mongodb+srv://vanshpanwar0018_db_user:7TFLTjsTQLtF88t6@cluster0.lnqykug.mongodb.net/?appName=Cluster0
```

Copy exactly as shown (no spaces, no quotes).

---

## **VITE_API_URL - HOW TO GET IT**

1. Deploy backend first
2. Backend URL will be shown in Render dashboard
3. Example: `https://codeclash-backend.onrender.com`
4. Add `/api` at the end: `https://codeclash-backend.onrender.com/api`
5. Paste into VITE_API_URL for frontend

---

## **TESTING CHECKLIST**

After deployment, test these:

```
✅ Frontend loads without errors
   → Open: https://codeclash-frontend.onrender.com

✅ Animated DSA code appears
   → See Binary Search code on login page

✅ Registration works
   → Create new account with email & password

✅ Login works
   → Login with registered account

✅ Profile shows correct data
   → See name, email, ID after login

✅ Refresh Profile button works
   → Click refresh and see updated data

✅ Logout works
   → Logout and redirected to login page
```

---

## **TROUBLESHOOTING QUICK FIXES**

| Problem | Quick Fix |
|---------|-----------|
| Blank page on frontend | Check browser console (F12), look for API errors |
| Cannot register/login | Backend not running - check Render logs |
| 404 API errors | Wrong VITE_API_URL - verify in env vars |
| MongoDB connection error | Check MONGO_URI in backend env vars |
| Page keeps loading | Wrong backend URL - no trailing slash |

---

## **RENDER DASHBOARD TIPS**

### To View Logs:
1. Go to your service on Render
2. Click **"Logs"** tab
3. Watch real-time output

### To Redeploy:
1. Go to your service on Render
2. Click **"Redeploy"** button
3. Wait for "Live" status

### To Update Environment Variables:
1. Go to your service on Render
2. Click **"Environment"** tab
3. Edit variables
4. Auto-redeploys

---

**Ready to deploy? Follow the visual guide step-by-step! 🚀**
