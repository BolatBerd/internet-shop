# Furniture Store Landing Page

A modern, responsive Angular landing page for a furniture store.

## Features

- Responsive design (mobile-first)
- Standalone components
- Clean architecture with services and interfaces
- SCSS styling with CSS variables
- Routing setup

## Tech Stack

- Angular 21.1.2
- TypeScript
- SCSS
- Standalone components

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   ng serve
   ```

3. Build for production:
   ```bash
   ng build
   ```

## Project Structure

- `src/app/core/` - Services and models
- `src/app/shared/` - Reusable components
- `src/app/layout/` - Layout components (header, footer)
- `src/app/pages/` - Page components

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
