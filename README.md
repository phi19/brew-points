# BrewPoints ☕️ Loyalty App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <!-- Optional: Add relevant badges -->

BrewPoints is a React Native mobile application designed to connect coffee lovers with their favorite local cafés and pastry shops, while rewarding their loyalty. It serves as a marketplace where businesses can showcase their offerings and customers can easily discover, order, and earn rewards.

## Overview

The core idea behind BrewPoints is twofold:

1.  **For Customers:** Provide a seamless way to browse menus, place orders from nearby cafés/pastry shops, and earn "BrewPoints" for every purchase made through the app. These points can then be redeemed for discounts or specific items, encouraging repeat visits.
2.  **For Businesses (Cafés/Pastries):** Offer a platform to gain visibility, attract new customers, manage online orders, and foster customer loyalty through the integrated points system. Businesses can register their shop within the app (potentially involving a subscription or fee).

## Key Features

*   **Customer Features:**
    *   Discover local cafés and pastry shops.
    *   Browse detailed menus with item descriptions and prices.
    *   Place orders directly through the app for pickup or delivery (if supported).
    *   User authentication (Mobile number, Google, Apple, Email).
    *   Earn BrewPoints automatically with each purchase.
    *   View current BrewPoints balance.
    *   Redeem BrewPoints for rewards (e.g., free coffee, discounts).
*   **Business Features (Conceptual - Backend Dependent):**
    *   Register and manage shop profile.
    *   Create and update menu items.
    *   Receive and manage incoming orders.
    *   Participate in the BrewPoints loyalty program.
    *   View customer analytics (potentially).

## Use Cases

*   **Customers:**
    *   Finding a new local coffee spot.
    *   Quickly re-ordering their usual morning coffee.
    *   Ordering ahead to skip the line.
    *   Getting rewarded for being a regular customer at participating shops.
*   **Businesses:**
    *   Expanding their customer base beyond walk-ins.
    *   Providing a convenient online ordering channel.
    *   Implementing a digital loyalty program without building their own system.
    *   Increasing customer retention through points and rewards.

<!-- Optional: Add Screenshots Here -->
<!--
## Screenshots

<img src="path/to/screenshot1.png" width="200"> <img src="path/to/screenshot2.png" width="200">
 (Add screenshots of key app screens)
-->

## Tech Stack

*   **Frontend:** React Native (Expo Managed Workflow)
*   **Routing:** Expo Router (File-based routing)
*   **Language:** TypeScript
*   **UI Components:** Standard React Native components, Expo Modules (LinearGradient, Vector Icons)
*   **Backend:** Connects to a separate backend API (Assumed: `https://brew-points-backend-production.up.railway.app/`) for data, orders, authentication, and points management.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
*   [Git](https://git-scm.com/)
*   A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))
*   [Expo Go](https://expo.dev/go) app installed on your iOS or Android device/simulator.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/brewpoints.git
    cd brewpoints
    ```
    (Replace `YOUR_GITHUB_USERNAME` with the actual username)

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Configure Environment Variables:**
    *   This app requires a connection to the backend API to function fully (e.g., for login, fetching data).
    *   Create a file named `.env` in the root directory of the project (`brewpoints/.env`).
    *   Add the following line to the `.env` file, replacing the URL if necessary:
        ```
        EXPO_PUBLIC_API_URL=https://brew-points-backend-production.up.railway.app
        ```
    *   **Important:** The `.env` file is included in `.gitignore` and should *not* be committed to version control as it may contain sensitive information in the future.

4.  **Run the Application:**
    ```bash
    npx expo start
    ```
    *   This will start the Metro Bundler.
    *   You can then:
        *   Scan the QR code shown in the terminal using the Expo Go app on your physical device.
        *   Press `i` to open in an iOS simulator (requires Xcode).
        *   Press `a` to open in an Android emulator/device (requires Android Studio setup).

### Editing the Code

*   Open the `brewpoints` folder in your code editor (e.g., VS Code).
*   Most of the UI code resides within the `app/` directory, following the Expo Router file structure.
*   Modify components and save your changes. The app should automatically reload in Expo Go (or you can manually reload from the Expo developer menu).

## Project Structure (Simplified)
