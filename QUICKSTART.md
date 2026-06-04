# 🚀 Quick Start Guide - BookHub

Get your BookHub eCommerce bookstore app running in 5 minutes!

## Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js installed (v14+)
- ✅ npm or yarn installed
- ✅ A code editor (VS Code recommended)

## Installation Steps

### 1. Navigate to Project
```bash
cd BookstoreApp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The Expo DevTools will open in your browser automatically.

## Running the App

### Option A: Physical Device (Recommended)

**iOS:**
1. Install "Expo Go" from App Store
2. Open Camera app
3. Scan the QR code from terminal
4. App opens in Expo Go

**Android:**
1. Install "Expo Go" from Play Store
2. Open Expo Go app
3. Scan QR code from terminal
4. App loads automatically

### Option B: Emulator/Simulator

**iOS Simulator (Mac only):**
```bash
npm run ios
```

**Android Emulator:**
```bash
npm run android
```

## First Time Setup

If you encounter port conflicts:
```bash
npx expo start --port 8082
```

If dependencies fail:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Testing the App

### 1. Home Screen
- Browse 15+ books
- Try the search bar
- Filter by categories
- Sort books

### 2. Book Details
- Tap any book card
- View full details
- Add to cart

### 3. Shopping Cart
- Tap cart icon (bottom tab)
- Adjust quantities
- Proceed to checkout

## Key Features to Test

✅ Search functionality
✅ Category filtering
✅ Add to cart
✅ Cart management
✅ Checkout flow
✅ Navigation between screens

## Troubleshooting

**Server won't start:**
```bash
npx expo start -c
```

**App crashes on load:**
- Check terminal for errors
- Ensure all dependencies installed
- Try clearing cache: `npx expo start -c`

**Can't scan QR code:**
- Ensure phone and computer on same WiFi
- Try tunnel mode: `npx expo start --tunnel`

## Development Tips

### Hot Reload
- Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android)
- Enable "Fast Refresh" in dev menu

### Debug Menu
- **iOS**: Shake device or `Cmd+D`
- **Android**: Shake device or `Cmd+M`

### View Logs
Terminal shows all console.log output in real-time

## Next Steps

1. ✅ App running successfully
2. 📖 Read full README.md for detailed documentation
3. 🎨 Customize colors and styling
4. 📚 Add more books to catalog
5. 🔧 Integrate with backend API

## Need Help?

- Check README.md for detailed docs
- Review error messages in terminal
- Ensure all prerequisites installed
- Try clearing cache and reinstalling

## Quick Commands Reference

```bash
# Start dev server
npm start

# Start with cache clear
npx expo start -c

# Run on iOS
npm run ios

# Run on Android
npm run android

# Install dependencies
npm install

# Clean install
rm -rf node_modules && npm install
```

---

**Happy Coding! 🎉**

Your BookHub app is ready to use. Start exploring the features and customize it to your needs!