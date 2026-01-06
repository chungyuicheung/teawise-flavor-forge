# TeaWise - Tea Tasting Journal - HTML Refactoring

## Refactoring Summary

The original React application has been refactored to pure HTML/CSS/JavaScript. This was done to simplify the application structure and remove the dependency on React and its associated build tools.

## Changes Made

### 1. Component Conversion
- Converted React components to plain HTML elements with CSS classes
- Replaced React state management with vanilla JavaScript
- Maintained all UI functionality using event listeners and DOM manipulation

### 2. Architecture Changes
- Removed React-specific code (JSX, hooks, components)
- Converted TypeScript to JavaScript
- Replaced React Router with tab-based navigation using vanilla JavaScript
- Maintained Tailwind CSS for styling by using CDN

### 3. File Structure
- Original: `src/App.tsx`, `src/pages/Index.tsx`, component files
- Refactored: Single HTML file with embedded JavaScript

### 4. Functionality Preserved
- Tab navigation (dashboard, collection, brewing, community)
- Mobile navigation
- Modal dialogs (tea record form, onboarding)
- Interactive elements (star ratings, flavor tags)
- Responsive design

## Features

- 🍵 **Tea Collection Management** - Organize and track your tea collection
- 📝 **Tasting Records** - Detailed records of your tea tasting experiences
- 📊 **Statistics Dashboard** - Visualize your tea journey with charts and metrics
- 🌸 **Flavor Wheel** - Interactive tool to identify and record flavor profiles
- 🎨 **Beautiful UI** - Designed with Tailwind CSS and shadcn/ui components
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## How to Use

Simply open `teawise_refactored.html` in any modern web browser. All functionality is self-contained in the single HTML file.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Tailwind CSS (via CDN)
- Font Awesome icons

## Original Project Information

This application was originally built with:
- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Lucide React
- Recharts