# TeaWise - Tea Tasting Journal

A beautiful and intuitive tea tasting journal application built with modern web technologies. TeaWise helps tea enthusiasts track their tea collections, record tasting experiences, and discover flavor profiles.

**Note: This application has been refactored from React to pure HTML/CSS/JavaScript. See teawise_refactored.html for the current implementation.**

## Features

- 🍵 **Tea Collection Management** - Organize and track your tea collection
- 📝 **Tasting Records** - Detailed records of your tea tasting experiences
- 📊 **Statistics Dashboard** - Visualize your tea journey with charts and metrics
- 🌸 **Flavor Wheel** - Interactive tool to identify and record flavor profiles
- 🎨 **Beautiful UI** - Designed with Tailwind CSS and shadcn/ui components
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

## GitHub Pages Deployment

This application is deployed on GitHub Pages. You can view the live application at: 
[https://your-username.github.io/repository-name](https://your-username.github.io/repository-name)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Your application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:dev` - Build the application in development mode
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Locally preview the production build

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and libraries
├── types/          # TypeScript type definitions
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## Technologies Used

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [React Router](https://reactrouter.com/) - Routing solution
- [React Hook Form](https://react-hook-form.com/) - Form management
- [Zod](https://zod.dev/) - Schema validation
- [Lucide React](https://lucide.dev/) - Icon library
- [Recharts](https://recharts.org/) - Charting library

## GitHub Pages Deployment

This project is configured for deployment to GitHub Pages. The deployment workflow is defined in `.github/workflows/deploy.yml` and will automatically deploy the application when changes are pushed to the main branch.

To set up GitHub Pages for your fork:
1. Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions)
2. Update the `homepage` URL in the README to match your repository name
3. Push changes to the main branch to trigger the deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
