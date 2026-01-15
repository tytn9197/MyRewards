

# My Rewards - React Native Project

This is a modern React Native application bootstrapped with [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Overview

This project is a React Native mobile application that provides list of rewards and list of collected rewards. It's built using the latest React Native 0.83 and follows modern development practices.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js >= 20.0.0
- bun >= 1.3.1
- Android SDK > 17.0.0
- CocoaPods > 1.15.0 (for iOS development)

**Recommended tools:**
- NVM for managing Node.js versions
- SDKMAN for managing Android SDK versions

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/tytn9197/MyRewards.git
cd your-repo-name
```

### 2. Install dependencies

```
bun i
```

### 3. iOS Setup (macOS only)

```bash
cd ios
pod install
cd ..
```

## Running the Application

### Run on Android

```bash
bun android
```

### Run on iOS

```bash
bun ios
```


## E2E Testing

### Android

```bash
bun test:maestro:android
```

### iOS

```bash
bun test:maestro:ios
```


## Project Structure
src/

├── assets/ # Images and icons

├── components/ # Reusable UI components

├── constants/ # Application constants and configuration

├── navigators/ # Navigation configuration

├── screens/ # Application screens

├── services/ # API services (RTK query)

└── store/ # Redux store and slices

## Features

```
1/ Rewards screen:
    a/ On end reach, load more items
    b/ Collect a reward
    c/ Pull to refresh list
    d/ Items are memoized
    
2/ Collected reward screen:
    a/ View list of collected rewards
```

## TODO
1/ Because time is limited, I cannot write a proper project base. I'll update base components (Text, List, Button, theming, translating...) in future. 

2/ Update reward item with animation.

3/ Add unit tests.

...

## Acknowledgments

- [React Navigation](https://reactnavigation.org/) - Bottom tabs navigation
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management and RTK Query
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Data fetching and caching
- [React Native FlashList](https://github.com/Shopify/flash-list) - High-performance lists
- [Maestro](https://maestro.mobile.dev/) - End-to-end testing

Development Tools:
- [TypeScript](https://www.typescriptlang.org/) - Static type checking for JavaScript
- [ESLint](https://eslint.org/) - JavaScript linting utility
- [Prettier](https://prettier.io/) - Code formatter
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [Babel](https://babeljs.io/) - JavaScript compiler
- [Metro](https://facebook.github.io/metro/) - JavaScript bundler for React Native

---
