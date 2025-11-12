# 🔧 Blank Screen Troubleshooting Guide

If you see a blank white screen after deployment on Vercel, follow these steps.

---

## **Step 1: Check Browser Console for Errors** 🖥️

1. Open your Vercel URL in browser
2. Press **F12** to open Developer Tools
3. Click **Console** tab
4. Look for red error messages

### Common Errors You Might See:

**Error 1: "Cannot find module" or "Failed to fetch"**
```
Failed to fetch dynamically imported module
```
👉 **Fix:** Check if CSS/JS files are loading in Network tab

**Error 2: "VITE_API_URL is not defined"**
```
Cannot read property of undefined
```
👉 **Fix:** Environment variable not set properly

**Error 3: "Cannot read properties of null"**
```
Cannot read properties of null (reading 'getElementById')
```
👉 **Fix:** HTML element not found

---

## **Step 2: Check Network Tab** 🌐

1. Press **F12** → **Network** tab
2. Refresh the page
3. Look for **red X** symbols (failed requests)

### What to Look For:

| File | Status | Issue |
|------|--------|-------|
| `index.html` | 200 | ✅ Good |
| `assets/index-*.js` | 200 | ✅ Good |
| `assets/index-*.css` | 200 | ✅ Good |
| `/api/...` | 404/500 | ❌ Backend not working |

If JS/CSS show 404:
- Check Vercel build output directory is `dist`
- Check `vercel.json` has correct `outputDirectory`

---

## **Step 3: Check index.html** 📄

Ensure `frontend/index.html` has:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CodeClash — Practice & Compete</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

⚠️ **Must have:** `<div id="root"></div>` element

---

## **Step 4: Verify Environment Variable** 🔑

1. Go to Vercel Dashboard → Your Project → **Settings**
2. Click **Environment Variables**
3. Check if `VITE_API_URL` exists
4. Click the three dots → **View Value**
5. Verify it's correct: `https://your-backend-url.com/api`

If missing:
1. Click **Add New**
   - Name: `VITE_API_URL`
   - Value: `https://your-backend-url.com/api`
   - Environments: Check all three boxes
2. Click **Add**
3. **Redeploy** from Deployments tab

---

## **Step 5: Check Vercel Build Logs** 📋

1. Go to **Deployments** tab
2. Click the latest deployment
3. Click **Logs** button
4. Look for errors during build or deployment

Common issues:
- `npm ERR!` → Dependency issue
- `Cannot find module` → Missing file
- `SyntaxError` → Code error

---

## **Step 6: Test Local Build** 🏠

Run this locally to see if build works:

```bash
cd frontend
npm run build
npm run preview
```

Then open `http://localhost:4173`

If it works locally but not on Vercel:
- Environment variables not set
- Build command wrong
- Output directory wrong

---

## **Step 7: Quick Fixes** ⚡

### Fix 1: Force Redeploy
1. Go to **Deployments**
2. Click **...** on latest deployment
3. Click **Redeploy**
4. Wait for "Ready"

### Fix 2: Clear Cache & Redeploy
1. Go to **Settings** → **Git**
2. Click **Ignore Build Step**
3. Go to **Deployments**
4. Click **Redeploy** with new deployment

### Fix 3: Check CORS
If you see API errors in console:

Add to `frontend/src/api.js`:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
console.log('API URL:', API_URL);
```

This will log the actual API URL being used.

---

## **Step 8: Verify Backend is Running** 🔌

1. Try accessing your backend directly:
   ```
   https://your-backend-url.com
   ```

2. You should see:
   ```json
   {
     "message": "API Server",
     "version": "1.0.0",
     ...
   }
   ```

If you get an error:
- Backend not deployed
- Backend URL is wrong
- CORS not enabled

---

## **Final Checklist** ✅

Before asking for help, verify:

- [ ] F12 Console has no red errors
- [ ] Network tab shows all files with 200 status
- [ ] `VITE_API_URL` is set in Vercel environment variables
- [ ] Backend is running and accessible
- [ ] Local build works with `npm run preview`
- [ ] Vercel build logs show no errors
- [ ] `index.html` has `<div id="root"></div>`

---

## **If Still Not Working** 🆘

Share these details:
1. Screenshot of F12 Console tab (errors)
2. Your Vercel URL
3. Your Backend URL
4. Backend status (working or not?)
5. Environment variables set in Vercel

---

**Let me know what errors you see in the console!** 🔍
