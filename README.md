# TaskFlow

**TaskFlow** is a simple project and task management application designed to help users organize their work, track project progress, manage deadlines, and keep their tasks in one place.

It provides a clean dashboard for managing projects and tasks, visualizing project status, setting deadlines, searching through projects and tasks, and generating PDF reports of recent activities.

## ✨ Features

* 📁 **Project Management**

  * Create and manage projects
  * Store project title, description, status, and deadline
  * View project details and progress

* ✅ **Task Management**

  * Create and manage tasks within projects
  * Organize tasks into four statuses:

    * Not Started
    * In Progress
    * Review
    * Completed

* 📅 **Deadline Management**

  * Set deadlines for projects
  * View project deadlines through the Persian calendar
  * Track upcoming deadlines

* 📊 **Project Statistics**

  * Visualize project statuses using charts
  * Get an overview of project activity from the dashboard

* 🔎 **Search**

  * Search through project titles and descriptions
  * Search through task titles
  * Navigate directly to the related project or task section from search results

* 📄 **PDF Reports**

  * Generate PDF reports from recent project activity
  * Export project information and activity into a report

* 🎨 **Theme System**

  * Light theme
  * Dark theme
  * Eye-comfort theme

* 🔤 **Font Settings**

  * Change the application's font family
  * Adjust the application's font size

* 📱 **Responsive UI**

  * Designed to work across different screen sizes

## 🛠️ Tech Stack

* **React** — Building the user interface
* **TypeScript** — Type safety and maintainable application structure
* **Vite** — Development environment and build tool
* **Tailwind CSS** — Styling and responsive UI
* **Zustand** — Global state management
* **React Router** — Client-side routing
* **React Icons** — UI icons
* **jsPDF** — PDF generation
* **jspdf-autotable** — Generating tables inside PDF reports
* **react-multi-date-picker** — Persian calendar and date selection

## 🧠 What I Practiced

This project was built as a practical exercise in developing a larger React application rather than just building isolated UI components.

Key concepts practiced in the project include:

* React component architecture
* TypeScript with React
* Global state management with Zustand
* Zustand persistence with `localStorage`
* Client-side routing with React Router
* Dynamic routes and nested routes
* Reusable components
* Feature-based project organization
* Separating TypeScript types from stores and components
* Managing shared application state with Zustand
* Theme management with CSS variables
* Responsive UI development with Tailwind CSS
* Working with browser APIs and client-side storage
* PDF generation and data export
* Working with dates and the Persian calendar

## 📂 Project Structure

The project follows a feature-oriented structure to keep related logic, components, and state close to each other.

```text
src/
├── app/
├── assets/
├── components/
├── features/
│   ├── auth/
│   ├── calendar/
│   ├── projects/
│   ├── report/
│   └── types/
├── layouts/
├── pages/
├── stores/
├── styles/
├── App.tsx
└── main.tsx
```

The application separates reusable UI components from feature-specific components and keeps application state and TypeScript types organized separately.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd TaskFlow
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.

## 💾 Data Storage

TaskFlow currently uses **Zustand** for application state management.

Persistent application settings and data are stored on the client side using Zustand's persistence middleware and `localStorage`.

There is currently no backend API connected to the application.

## 🔐 Authentication

The project currently includes a basic authentication/login structure, but authentication is intentionally kept simple at this stage and is not yet connected to a complete backend authentication system.

## 🤝 Contributions

Contributions are welcome!

If you find a bug, have an idea for a new feature, or want to improve an existing part of TaskFlow, feel free to open an issue or submit a pull request.

I'm happy to receive feedback, bug fixes, and meaningful improvements to the project.

## 📸 Screenshots

### Themes

<p align="center">
  <img src="./screenshots/dashboard.png" width="30%" />
  <img src="./screenshots/dashboard-dark-mode.png" width="30%" />
  <img src="./screenshots/dashboard-eyecomform-mode.png" width="30%" />
</p>

### Main Features

<p align="center">
  <img src="./screenshots/projects.png" width="30%" />
  <img src="./screenshots/overview.png" width="30%" />
  <img src="./screenshots/tasks.png" width="30%" />
</p>

<p align="center">
  <img src="./screenshots/task-board.png" width="30%" />
  <img src="./screenshots/setting.png" width="30%" />
</p>

## 📄 License

This project was created as a personal portfolio and learning project.
