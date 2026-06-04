# 🔧 Troubleshooting Guide - BookHub

Common issues and their solutions for the BookHub React Native app.

## Build & Runtime Issues

### 1. StatusBar Web Compatibility Error

**Error:**
```
Unable to resolve "react-native-web/dist/exports/StatusBar" from "App.js"
```

**Cause:** React Native Web doesn't support the StatusBar component.

**Solution:** ✅ Already Fixed
The app now uses Platform checks to conditionally render StatusBar only on native platforms:

```javascript
import { Platform, StatusBar } from 'react-native';

{Platform.OS !== 'web' && (
  <StatusBar barStyle="dark-content" backgroundColor="#fff" />
)}
```

### 2. Port Already in Use

**Error:**
```
Port 8081 is running another app
```

**Solution:**
```bash
# Use a different port
npx expo start --port 8082

# Or kill the process using port 8081
lsof -ti:8081 | xargs kill -9
```

### 3. Metro Bundler Cache Issues

**Error:** App not updating or showing old code

**Solution:**
```bash
# Clear cache and restart
npx expo start -c

# Or manually clear
rm -rf node_modules/.cache
rm -rf .expo
```

### 4. Dependencies Not Installing

**Error:** npm install fails or shows errors

**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# If still failing, try
npm install --legacy-peer-deps
```

### 5. iOS Build Fails

**Error:** Pod install or iOS build errors

**Solution:**
```bash
cd ios
rm -rf Pods Podfile.lock
pod deintegrate
pod install
cd ..
```

### 6. Android Build Fails

**Error:** Gradle build errors

**Solution:**
```bash
cd android
./gradlew clean
cd ..

# If still failing
rm -rf android/app/build
```

## Navigation Issues

### 7. Navigation Not Working

**Symptoms:** Screens not navigating or blank screens

**Solution:**
- Ensure all screens are properly imported in AppNavigator.js
- Check that navigation prop is being passed correctly
- Verify screen names match in navigation calls

### 8. Bottom Tab Not Showing

**Solution:**
- Check that TabNavigator is properly configured
- Ensure screens are registered in Tab.Navigator
- Verify tabBarStyle is not hidden

## State Management Issues

### 9. Cart Not Updating

**Symptoms:** Items not adding to cart or count not updating

**Solution:**
- Verify CartProvider wraps the entire app in App.js
- Check that useCart hook is being called correctly
- Ensure cart operations are using the context methods

### 10. Search/Filter Not Working

**Symptoms:** Search or filters not affecting book list

**Solution:**
- Check that state updates are triggering re-renders
- Verify useMemo dependencies are correct
- Ensure filter logic is properly implemented

## Performance Issues

### 11. Slow Scrolling

**Solution:**
- Ensure FlatList is being used (not ScrollView with map)
- Check that images have proper resizeMode
- Verify no heavy computations in render

### 12. App Crashes on Launch

**Solution:**
```bash
# Check logs
npx react-native log-ios
# or
npx react-native log-android

# Clear cache
npx expo start -c

# Reinstall dependencies
rm -rf node_modules && npm install
```

## Development Server Issues

### 13. Can't Connect to Dev Server

**Symptoms:** QR code scans but app won't load

**Solution:**
- Ensure phone and computer are on same WiFi
- Try tunnel mode: `npx expo start --tunnel`
- Check firewall settings
- Restart dev server

### 14. Hot Reload Not Working

**Solution:**
- Shake device and enable "Fast Refresh"
- Restart dev server with cache clear
- Check that you're saving files properly

## Platform-Specific Issues

### 15. Web Version Issues

**Common Web Issues:**
- StatusBar not supported (✅ Fixed)
- Some native modules don't work on web
- Different styling behavior

**Solution:**
Use Platform checks for web-specific code:
```javascript
if (Platform.OS === 'web') {
  // Web-specific code
} else {
  // Native code
}
```

### 16. iOS Simulator Issues

**Solution:**
```bash
# Reset simulator
xcrun simctl erase all

# Restart simulator
killall Simulator
```

### 17. Android Emulator Issues

**Solution:**
```bash
# Restart ADB
adb kill-server
adb start-server

# Clear app data
adb shell pm clear com.yourapp.package
```

## Image Loading Issues

### 18. Images Not Loading

**Solution:**
- Check image URLs are valid
- Verify internet connection
- Add error handling for Image component
- Check if using correct image format

```javascript
<Image
  source={{ uri: imageUrl }}
  onError={(e) => console.log('Image error:', e)}
  defaultSource={require('./placeholder.png')}
/>
```

## Data Issues

### 19. Books Not Displaying

**Solution:**
- Check that books.js is properly imported
- Verify data structure matches expected format
- Check console for errors
- Ensure FlatList data prop is correct

### 20. Categories Not Working

**Solution:**
- Verify category IDs match between books and categories
- Check filter logic in HomeScreen
- Ensure category state is updating

## Testing Issues

### 21. Can't Test on Physical Device

**Solution:**
- Install Expo Go app
- Ensure on same network
- Try tunnel mode if on different networks
- Check that dev server is running

### 22. Expo Go App Crashes

**Solution:**
- Update Expo Go to latest version
- Clear Expo Go cache
- Restart device
- Check compatibility with Expo SDK version

## Common Error Messages

### "Invariant Violation: Element type is invalid"

**Cause:** Incorrect import or export

**Solution:**
- Check all imports are correct
- Verify default vs named exports
- Ensure components are properly exported

### "Cannot read property 'navigate' of undefined"

**Cause:** Navigation prop not available

**Solution:**
- Ensure component is part of navigation stack
- Pass navigation prop correctly
- Use useNavigation hook if needed

### "Maximum update depth exceeded"

**Cause:** Infinite render loop

**Solution:**
- Check useEffect dependencies
- Avoid state updates in render
- Use useCallback for functions

## Quick Fixes Checklist

When something goes wrong, try these in order:

1. ✅ Save all files
2. ✅ Restart dev server
3. ✅ Clear cache: `npx expo start -c`
4. ✅ Reinstall dependencies
5. ✅ Check console for errors
6. ✅ Verify imports are correct
7. ✅ Check network connection
8. ✅ Restart device/simulator
9. ✅ Check Expo/React Native versions
10. ✅ Review recent changes

## Getting Help

If issues persist:

1. **Check Logs:**
   - Terminal output
   - Device console
   - Browser console (for web)

2. **Search Documentation:**
   - [Expo Docs](https://docs.expo.dev)
   - [React Native Docs](https://reactnative.dev)
   - [React Navigation Docs](https://reactnavigation.org)

3. **Community Support:**
   - Stack Overflow
   - Expo Forums
   - React Native Community

4. **Debug Tools:**
   - React DevTools
   - Flipper
   - Chrome DevTools

## Useful Commands

```bash
# Development
npm start                    # Start dev server
npx expo start -c           # Start with cache clear
npx expo start --tunnel     # Start with tunnel

# Debugging
npx react-native log-ios    # iOS logs
npx react-native log-android # Android logs

# Cleaning
rm -rf node_modules         # Remove dependencies
rm -rf .expo                # Remove Expo cache
npm cache clean --force     # Clear npm cache

# Building
eas build --platform ios    # Build iOS
eas build --platform android # Build Android

# Testing
npm test                    # Run tests
npm run lint               # Run linter
```

## Prevention Tips

1. **Keep Dependencies Updated:**
   ```bash
   npm outdated
   npm update
   ```

2. **Use Version Control:**
   - Commit working code frequently
   - Use branches for features
   - Keep main branch stable

3. **Test Regularly:**
   - Test on both iOS and Android
   - Test on different screen sizes
   - Test edge cases

4. **Follow Best Practices:**
   - Use TypeScript for type safety
   - Write unit tests
   - Document complex logic
   - Keep components small

---

**Still having issues?** Check the main README.md or create an issue in the repository.