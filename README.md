# React + Vite

A modern, lightweight, and high-performance starter template for building React applications using **Vite**. This template provides an optimized development experience with fast startup, Hot Module Replacement (HMR), ESLint integration, and support for modern React tooling.

---

# Features

- ⚡ Lightning-fast development server powered by Vite
- ⚛️ React 19 support
- 🔥 Hot Module Replacement (HMR)
- 🧹 ESLint configured with recommended rules
- 📦 Optimized production builds
- 🛠 Easy plugin configuration
- 🚀 Modern ES Modules support

---

# Why Vite?

Vite is a next-generation frontend build tool that dramatically improves the development experience.

Some advantages include:

- Instant server startup
- Extremely fast HMR
- Native ES Modules during development
- Optimized Rollup production builds
- Minimal configuration
- Excellent plugin ecosystem

---

# Getting Started

## Prerequisites

Make sure you have installed:

- Node.js 18+
- npm, pnpm, yarn, or bun

Check your versions:

```bash
node -v
npm -v
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd my-react-app
```

Install dependencies:

```bash
npm install
```

or

```bash
yarn
```

or

```bash
pnpm install
```

---

# Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will typically be available at:

```
http://localhost:5173
```

Whenever you save a file, the browser updates instantly using Hot Module Replacement.

---

# Available Scripts

## Start Development Server

```bash
npm run dev
```

Starts the local development server.

---

## Build for Production

```bash
npm run build
```

Creates an optimized production build inside the `dist` folder.

---

## Preview Production Build

```bash
npm run preview
```

Runs the production build locally for testing.

---

## Run ESLint

```bash
npm run lint
```

Checks your code for common issues and style violations.

---

# Project Structure

```
my-react-app/
│
├── public/
│   ├── favicon.ico
│   └── assets/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── vite.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Official React Plugins

This template supports two official React plugins.

## 1. @vitejs/plugin-react

Uses the **Oxc** compiler for fast transformations.

Features:

- Fast Refresh
- JSX support
- Babel compatibility
- React development optimizations

Install:

```bash
npm install @vitejs/plugin-react
```

Example configuration:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

---

## 2. @vitejs/plugin-react-swc

Uses the **SWC** compiler instead of Babel.

Benefits:

- Extremely fast compilation
- Lower memory usage
- Great for larger projects
- Faster development experience

Install:

```bash
npm install @vitejs/plugin-react-swc
```

Example:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
});
```

---

# Oxc vs SWC

| Feature            | Oxc       | SWC            |
| ------------------ | --------- | -------------- |
| Performance        | Excellent | Excellent      |
| Build Speed        | Fast      | Very Fast      |
| Memory Usage       | Low       | Very Low       |
| JSX Support        | Yes       | Yes            |
| TypeScript Support | Yes       | Yes            |
| Recommended        | Default   | Large Projects |

---

# React Compiler

The React Compiler is **not enabled** in this template.

This decision keeps:

- Faster startup
- Faster builds
- Better development performance
- Smaller configuration

If your application needs automatic memoization and advanced React Compiler optimizations, you can enable it manually.

Benefits include:

- Automatic optimization
- Reduced unnecessary renders
- Better component performance
- Less manual memoization

Be aware that enabling the compiler may increase build and development times.

---

# Hot Module Replacement (HMR)

One of Vite's biggest advantages is HMR.

Whenever you save a file:

- The page updates instantly
- React state is preserved whenever possible
- No full page refresh
- Faster development workflow

Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Editing this component updates the browser immediately without resetting the counter in many cases.

---

# ESLint

This template includes ESLint with recommended rules.

Benefits:

- Detects common JavaScript errors
- Improves code consistency
- Encourages best practices
- Helps catch bugs before runtime

Run linting:

```bash
npm run lint
```

---

# Expanding ESLint Configuration

For production applications, it is recommended to use **TypeScript** together with **type-aware ESLint rules**.

Advantages:

- Better autocomplete
- Strong typing
- Earlier error detection
- Improved maintainability
- Safer refactoring

Recommended additions include:

- TypeScript
- typescript-eslint
- stricter lint rules
- import sorting
- accessibility rules
- React Hooks linting

Example packages:

```bash
npm install -D typescript
npm install -D typescript-eslint
```

---

# TypeScript Recommendation

For medium to large applications, using the Vite React TypeScript template is recommended.

Benefits:

- Static type checking
- Better IDE support
- Safer code
- Improved scalability
- Easier maintenance

Create a TypeScript project:

```bash
npm create vite@latest my-app -- --template react-ts
```

---

# Recommended Extensions

For Visual Studio Code:

- ESLint
- Prettier
- Error Lens
- GitLens
- Auto Rename Tag
- Path IntelliSense

---

# Best Practices

- Organize components into folders.
- Keep components small.
- Use custom hooks for reusable logic.
- Avoid unnecessary re-renders.
- Keep state as local as possible.
- Use environment variables for secrets.
- Enable linting before commits.
- Use lazy loading for larger pages.
- Optimize images.
- Split code using React.lazy.

---

# Building for Production

Generate the production build:

```bash
npm run build
```

Output:

```
dist/
```

The generated files are:

- Minified
- Tree-shaken
- Optimized
- Ready for deployment

---

# Deployment

The generated `dist` folder can be deployed to platforms like:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- AWS S3
- Render

---

# Useful Resources

- React Documentation
- Vite Documentation
- React Compiler Documentation
- ESLint Documentation
- TypeScript Documentation

---

# Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# License

This project is licensed under the MIT License.

---

# Summary

This React + Vite template provides everything needed to quickly begin modern React development:

- Fast development server
- Hot Module Replacement
- Production-ready builds
- Official React plugins
- ESLint integration
- Easy scalability
- TypeScript compatibility
- Excellent developer experience

Whether you're building a small project, a startup MVP, or a large-scale production application, React + Vite offers a powerful and efficient foundation.

```

```
