# WordPress Bootstrap Theme

A modern, block-based WordPress theme built with Bootstrap 5. This theme leverages the power of Bootstrap's grid and components while staying fully compatible with the WordPress Site Editor.

## 🚀 Getting Started

### Prerequisites

To develop on this theme, you'll need the following tools:

- **Node.js**: `^20` (LTS recommended)
- **NPM**: `^10`
- **PHP**: `>=8.0`
- **Composer**: `^2.0`

### Installation

1. Navigate to the theme directory:
   ```bash
   cd themes/bootstrap-theme
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install Node dependencies:
   ```bash
   npm install
   ```

## 🛠 Development Workflow

The theme uses `@wordpress/scripts` to manage the build process.

### Build Commands

- `npm run start`: Starts the development server with live reloading (standard WordPress development script).
- `npm run dev`: Cleans the build folder and starts the development environment.
- `npm run build`: Generates a production-ready build in the `build/` folder (minified assets, optimized).

### Code Quality

We maintain high code quality standards through automated linting and static analysis:

- `npm run lint`: Runs both JavaScript and PHP linting.
- `npm run format`: Automatically fixes formatting issues in JS and PHP files.
- `npm run phpstan`: Runs PHPStan for static analysis of PHP code.

## 🏗 CI/CD

This project uses **GitHub Actions** for Continuous Integration. Every push or pull request to the theme triggers:
- Dependency installation (cached for speed).
- Coding standards checks (PHPCS and `@wordpress/scripts lint-js`).
- Static analysis (PHPStan).
- Production build verification.

## 🎨 Theme Customization

- **`theme.json`**: This is the **Single Source of Truth**. Customize the color palette, typography, and spacing scales here.
- **`src/scss/main.scss`**: Main SCSS file for global styles and Bootstrap overrides.
- **`src/scss/_variables.scss`**: Bridges `theme.json` and Bootstrap by mapping generated variables to Bootstrap variables.
- **`src/js/main.js`**: Entry point for theme-specific JavaScript.

### Synchronization Workflow

The theme automatically synchronizes `theme.json` settings with SCSS variables using a custom script (`sync-theme-json.js`). This script runs automatically when you execute `npm run dev` or `npm run build`. 

To manually synchronize, run:
```bash
npm run sync-theme
```
