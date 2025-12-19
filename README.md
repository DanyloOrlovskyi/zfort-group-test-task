# 📰 News SPA

> A modern Single Page Application for displaying news with beautiful UI and seamless navigation

[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Pinia](https://img.shields.io/badge/Pinia-2.x-yellow.svg)](https://pinia.vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC.svg)](https://tailwindcss.com/)

## Features

- 🚀 **Fast & Modern** - Built with Vite and Vue 3 Composition API
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Clean UI** - Beautiful and intuitive user interface
- 🔄 **State Management** - Centralized state with Pinia
- 🧭 **Smart Navigation** - Vue Router with breadcrumbs
- 📄 **Pagination** - Easy navigation through news articles
- 💪 **TypeScript** - Full type safety across the project
- 🎯 **Component-Based** - Reusable and maintainable components

## Project Architecture

The project follows a **feature-based + layered** structure — everything is logically organized and easy to scale.

```
src/
├── assets/                  # Static assets
│   ├── images/              # Images (logos, icons)
│   └── css/                 # Main Tailwind CSS file
├── components/              # Reusable UI components
│   ├── icons/               # SVG icons
│   ├── AppHeader.vue        # Application header
│   ├── AppFooter.vue        # Application footer
│   ├── NewsItem.vue         # News card component
│   ├── BreadcrumbsComponent.vue  # Navigation breadcrumbs
│   └── ...
├── pages/                   # Page components
│   ├── NewsListPage.vue     # News list + pagination
│   └── NewsDetailsPage.vue  # News detail page
├── stores/                  # Pinia stores (global state)
│   ├── news.ts              # News state management
│   └── user.ts              # User state management
├── router/                  # Vue Router configuration
│   └── index.ts             # Routes definition
├── types/                   # TypeScript types
│   ├── breadcrumbs.ts       # Breadcrumbs types
│   ├── news.ts              # News article types
│   └── user.ts              # User types
├── App.vue                  # Root component
├── main.ts                  # Entry point
├── public/
└── data/
     └── news.json        # Mock news data
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm



### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vue 3** | Progressive JavaScript framework |
| **Vite** | Next-generation frontend tooling |
| **TypeScript** | Static type checking |
| **Pinia** | State management |
| **Vue Router** | Client-side routing |
| **Tailwind CSS** | Utility-first CSS framework |

## 📖 Usage

### News List Page
Browse through paginated news articles with thumbnail images, titles, and descriptions.

### News Detail Page
Click on any news card to view the full article with detailed content and navigation breadcrumbs.

### State Management
The application uses Pinia stores for centralized state management:
- **News Store** - Manages news articles and pagination
- **User Store** - Handles user information and preferences

## Project Structure Principles

- **Components** - Small, reusable UI pieces
- **Pages** - Full page views that compose components
- **Stores** - Global state management with Pinia
- **Types** - TypeScript interfaces and types
- **Router** - Route definitions and navigation guards

## Next Steps

- [ ] Add unit tests
- [ ] Add post date formatting
- [ ] Add logging system
- [ ] Load user data asynchronously
- [ ] Sorting and filtering news
- [ ] Add news search
- [ ] Implement dark theme toggle
- [ ] Add internationalization (i18n)

---

<div align="center">
  Made with ❤️ using Vue 3
</div>