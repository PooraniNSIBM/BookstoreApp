# 📚 BookHub - eCommerce Bookstore App

A modern, responsive React Native eCommerce application for browsing and purchasing books. Built with Expo and featuring a clean, intuitive user interface.

## ✨ Features

### Core Functionality
- **📖 Book Catalog**: Browse through a curated collection of 15+ books across multiple categories
- **🔍 Smart Search**: Real-time search functionality for books, authors, and genres
- **🏷️ Category Filtering**: Filter books by Fiction, Non-Fiction, Science, Technology, Business, and Self-Help
- **📊 Sorting Options**: Sort by price (low/high), title (A-Z), rating, or featured
- **📱 Responsive Design**: Optimized for all screen sizes (mobile, tablet)
- **🛒 Shopping Cart**: Full-featured cart with quantity management
- **💳 Checkout Flow**: Complete purchase flow with order summary

### User Experience
- **Smooth Navigation**: Bottom tab navigation with stack navigation for details
- **Book Details**: Comprehensive book information including description, ISBN, publisher, pages
- **Rating Display**: Visual star ratings for each book
- **Cart Badge**: Real-time cart item count indicator
- **Empty States**: Helpful messages when cart is empty or no results found
- **Responsive Images**: High-quality book cover images from Unsplash

## 🏗️ Architecture

### Project Structure
```
BookstoreApp/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BookCard.js      # Book display card
│   │   └── CartItem.js      # Cart item component
│   ├── context/             # React Context for state management
│   │   └── CartContext.js   # Shopping cart state & logic
│   ├── data/                # Static data
│   │   └── books.js         # Book catalog data
│   ├── navigation/          # Navigation configuration
│   │   └── AppNavigator.js  # Navigation setup
│   └── screens/             # Screen components
│       ├── HomeScreen.js    # Main book listing screen
│       ├── BookDetailsScreen.js  # Book details view
│       └── CartScreen.js    # Shopping cart view
├── App.js                   # Root component
├── package.json             # Dependencies
└── README.md               # This file
```

### Technology Stack
- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Native Stack & Bottom Tabs)
- **State Management**: React Context API
- **UI Components**: Custom components with React Native core
- **Styling**: StyleSheet API with responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. **Navigate to the project directory**
   ```bash
   cd BookstoreApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on your device**
   - **iOS**: Press `i` in the terminal or scan QR code with Camera app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` in the terminal (experimental)

### Running on Physical Device

1. Install **Expo Go** app from App Store (iOS) or Play Store (Android)
2. Scan the QR code displayed in terminal
3. App will load on your device

### Running on Emulator/Simulator

**iOS (Mac only)**
```bash
npm run ios
```

**Android**
```bash
npm run android
```

## 📱 App Usage

### Home Screen
- Browse all available books in a grid layout
- Use the search bar to find specific books, authors, or genres
- Filter by category using the category chips
- Sort books using the sort dropdown
- Tap any book card to view details
- Tap the "+" button to quickly add to cart

### Book Details Screen
- View comprehensive book information
- See book cover, title, author, rating, pages, language
- Read detailed description
- View ISBN, publisher, and other metadata
- Add book to cart with "Add to Cart" button
- Navigate back to home or directly to cart

### Cart Screen
- View all items in your cart
- Adjust quantities with +/- buttons
- Remove individual items
- Clear entire cart
- See subtotal, tax, and total calculations
- Proceed to checkout (demo flow)

## 🎨 Design Features

### Responsive Layout
- **Mobile-First**: Optimized for mobile devices
- **Adaptive Grid**: 2-column grid on mobile, scales for tablets
- **Touch-Friendly**: Large tap targets and intuitive gestures
- **Smooth Animations**: Native animations for navigation

### Color Scheme
- **Primary**: Blue (#2563eb) - Actions and highlights
- **Background**: Light gray (#f8f9fa) - App background
- **Cards**: White (#fff) - Content cards
- **Text**: Dark gray (#333) - Primary text
- **Secondary Text**: Medium gray (#666) - Supporting text

### Typography
- **Headers**: Bold, 18-28px
- **Body**: Regular, 14-16px
- **Captions**: 12px for metadata

## 🔧 Customization

### Adding New Books
Edit `src/data/books.js` and add new book objects:
```javascript
{
  id: 'unique-id',
  title: 'Book Title',
  author: 'Author Name',
  price: 19.99,
  category: 'fiction',
  rating: 4.5,
  description: 'Book description...',
  image: 'https://image-url.com',
  isbn: '978-XXXXXXXXXX',
  pages: 300,
  publisher: 'Publisher Name',
  language: 'English',
}
```

### Adding New Categories
Edit `src/data/books.js` categories array:
```javascript
{ id: 'category-id', name: 'Category Name', icon: '📚' }
```

### Customizing Colors
Update color values in StyleSheet objects across components:
- Primary color: `#2563eb`
- Background: `#f8f9fa`
- Text: `#333`, `#666`, `#999`

## 🧪 Testing

### Manual Testing Checklist
- [ ] Search functionality works correctly
- [ ] Category filtering updates book list
- [ ] Sorting options work as expected
- [ ] Add to cart updates cart count
- [ ] Cart quantity adjustments work
- [ ] Remove from cart functions properly
- [ ] Checkout flow completes successfully
- [ ] Navigation between screens is smooth
- [ ] App works on different screen sizes

## 📦 Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### Using EAS Build (Recommended)
```bash
npm install -g eas-cli
eas build --platform ios
eas build --platform android
```

## 🔮 Future Enhancements

### Planned Features
- [ ] User authentication and profiles
- [ ] Wishlist functionality
- [ ] Book reviews and ratings
- [ ] Payment gateway integration
- [ ] Order history
- [ ] Push notifications for deals
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Advanced filters (price range, rating)
- [ ] Book recommendations
- [ ] Social sharing
- [ ] Offline mode with local storage

### API Integration
Currently uses static data. To integrate with a backend:
1. Create API service in `src/services/api.js`
2. Replace static data imports with API calls
3. Add loading states and error handling
4. Implement data caching strategy

## 🐛 Troubleshooting

### Common Issues

**Metro bundler not starting**
```bash
npx expo start -c
```

**Dependencies not installing**
```bash
rm -rf node_modules package-lock.json
npm install
```

**iOS build fails**
```bash
cd ios && pod install && cd ..
```

**Android build fails**
- Ensure Android SDK is properly installed
- Check ANDROID_HOME environment variable
- Clean gradle: `cd android && ./gradlew clean`

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions:
- Create an issue in the repository
- Contact: info@bookhub.com

## 🙏 Acknowledgments

- Book cover images from [Unsplash](https://unsplash.com)
- Icons from Unicode emoji set
- Built with [React Native](https://reactnative.dev) and [Expo](https://expo.dev)

---

**Built with ❤️ using React Native and Expo**