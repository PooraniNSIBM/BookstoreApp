# 🚀 Deployment Guide - BookHub

Complete guide for deploying your BookHub eCommerce bookstore app to production.

## Development Server

### Current Setup
The app is configured to run on port 8082 to avoid conflicts.

```bash
# Start development server
cd BookstoreApp
npx expo start --port 8082
```

### Access Options
1. **Expo Go App** (Recommended for testing)
   - iOS: Download from App Store
   - Android: Download from Play Store
   - Scan QR code from terminal

2. **iOS Simulator** (Mac only)
   ```bash
   npm run ios
   ```

3. **Android Emulator**
   ```bash
   npm run android
   ```

## Production Deployment

### Option 1: Expo Application Services (EAS) - Recommended

#### Setup EAS
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo account
eas login

# Configure project
eas build:configure
```

#### Build for iOS
```bash
# Development build
eas build --platform ios --profile development

# Production build
eas build --platform ios --profile production
```

#### Build for Android
```bash
# Development build
eas build --platform android --profile development

# Production build
eas build --platform android --profile production
```

#### Submit to App Stores
```bash
# Submit to Apple App Store
eas submit --platform ios

# Submit to Google Play Store
eas submit --platform android
```

### Option 2: Classic Expo Build

#### iOS Build
```bash
expo build:ios
```

**Requirements:**
- Apple Developer Account ($99/year)
- Valid provisioning profile
- App Store Connect access

#### Android Build
```bash
expo build:android
```

**Requirements:**
- Google Play Developer Account ($25 one-time)
- Keystore for signing

### Option 3: Standalone Apps (Ejected)

If you need full native control:

```bash
# Eject from Expo
expo eject

# Build iOS
cd ios && pod install
npx react-native run-ios

# Build Android
npx react-native run-android
```

## Pre-Deployment Checklist

### Code Quality
- [ ] Remove console.log statements
- [ ] Update app.json with correct metadata
- [ ] Set proper app icons and splash screen
- [ ] Configure app permissions
- [ ] Update privacy policy and terms

### Testing
- [ ] Test on iOS device
- [ ] Test on Android device
- [ ] Test on different screen sizes
- [ ] Test all user flows
- [ ] Test offline behavior
- [ ] Performance testing

### Configuration
- [ ] Update app version in app.json
- [ ] Configure environment variables
- [ ] Set up analytics (if needed)
- [ ] Configure crash reporting
- [ ] Set up backend API endpoints

### App Store Requirements
- [ ] App icon (1024x1024)
- [ ] Screenshots (various sizes)
- [ ] App description
- [ ] Keywords
- [ ] Privacy policy URL
- [ ] Support URL
- [ ] Age rating

## Configuration Files

### app.json
Update with your app details:

```json
{
  "expo": {
    "name": "BookHub",
    "slug": "bookhub",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#2563eb"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.bookhub"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/android-icon-foreground.png",
        "backgroundColor": "#2563eb"
      },
      "package": "com.yourcompany.bookhub"
    }
  }
}
```

### eas.json (for EAS Build)
```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  }
}
```

## Environment Variables

### Development
Create `.env` file:
```
API_URL=http://localhost:3000
STRIPE_KEY=pk_test_...
ANALYTICS_ID=dev-analytics
```

### Production
```
API_URL=https://api.bookhub.com
STRIPE_KEY=pk_live_...
ANALYTICS_ID=prod-analytics
```

## Backend Integration

### API Setup
When ready to connect to backend:

1. Create API service:
```javascript
// src/services/api.js
const API_URL = process.env.API_URL;

export const getBooks = async () => {
  const response = await fetch(`${API_URL}/books`);
  return response.json();
};

export const createOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  });
  return response.json();
};
```

2. Update screens to use API:
```javascript
// In HomeScreen.js
import { getBooks } from '../services/api';

const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  loadBooks();
}, []);

const loadBooks = async () => {
  try {
    const data = await getBooks();
    setBooks(data);
  } catch (error) {
    console.error('Failed to load books:', error);
  } finally {
    setLoading(false);
  }
};
```

## Performance Optimization

### Before Production
1. **Enable Hermes** (Android)
   ```json
   // app.json
   "android": {
     "enableHermes": true
   }
   ```

2. **Optimize Images**
   - Use WebP format
   - Implement lazy loading
   - Add image caching

3. **Code Splitting**
   - Lazy load screens
   - Split large components

4. **Bundle Size**
   ```bash
   # Analyze bundle
   npx react-native-bundle-visualizer
   ```

## Monitoring & Analytics

### Recommended Tools
1. **Sentry** - Error tracking
2. **Firebase Analytics** - User analytics
3. **Mixpanel** - Product analytics
4. **New Relic** - Performance monitoring

### Setup Sentry
```bash
npm install @sentry/react-native

# Initialize
npx @sentry/wizard -i reactNative -p ios android
```

## App Store Submission

### iOS App Store

1. **Prepare Assets**
   - App icon (1024x1024)
   - Screenshots (6.5", 5.5", 12.9")
   - App preview video (optional)

2. **App Store Connect**
   - Create app listing
   - Fill metadata
   - Set pricing
   - Submit for review

3. **Review Process**
   - Usually 1-3 days
   - Address any rejections
   - Monitor status

### Google Play Store

1. **Prepare Assets**
   - App icon (512x512)
   - Feature graphic (1024x500)
   - Screenshots (various sizes)

2. **Play Console**
   - Create app listing
   - Fill store listing
   - Set content rating
   - Submit for review

3. **Review Process**
   - Usually few hours to 1 day
   - Address any issues
   - Monitor rollout

## Post-Deployment

### Monitoring
- [ ] Set up crash reporting
- [ ] Monitor user feedback
- [ ] Track key metrics
- [ ] Monitor performance

### Updates
- [ ] Plan update schedule
- [ ] Implement OTA updates (Expo)
- [ ] Version management
- [ ] Changelog maintenance

### Marketing
- [ ] App Store Optimization (ASO)
- [ ] Social media presence
- [ ] User acquisition strategy
- [ ] Retention campaigns

## Troubleshooting

### Build Fails
```bash
# Clear cache
expo start -c

# Clean install
rm -rf node_modules
npm install
```

### iOS Build Issues
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Android Build Issues
```bash
cd android
./gradlew clean
cd ..
```

## Support Resources

- [Expo Documentation](https://docs.expo.dev)
- [EAS Build Docs](https://docs.expo.dev/build/introduction/)
- [App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Play Store Guidelines](https://play.google.com/about/developer-content-policy/)

## Quick Commands Reference

```bash
# Development
npm start                          # Start dev server
npx expo start --port 8082        # Start on specific port
npm run ios                        # Run on iOS
npm run android                    # Run on Android

# Building
eas build --platform ios          # Build iOS
eas build --platform android      # Build Android
eas build --platform all          # Build both

# Submission
eas submit --platform ios         # Submit to App Store
eas submit --platform android     # Submit to Play Store

# Updates (OTA)
eas update --branch production    # Push OTA update
```

---

**Ready to deploy your BookHub app to production! 🚀**

For questions or issues, refer to the comprehensive documentation or contact support.