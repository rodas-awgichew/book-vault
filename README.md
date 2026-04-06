# 📚 Personal Book Vault

A modern React application that allows users to manage their personal book collection. Users can browse available books, add them to their vault, track reading progress, and organize their collection with search and filtering features.

---

## 🚀 Live Demo

👉 CodeSandbox Deployment: https://y23rpx-5173.csb.app/

---

## 📌 Overview

The **Personal Book Vault** is a client-side application built to demonstrate modern React architecture and state management patterns. It focuses on clean separation of concerns, efficient state handling, and scalable UI design.

Users can:

* Browse a predefined list of books
* Add books to a personal vault
* Update reading status (Unread, Reading, Completed)
* Remove books from their collection
* Search and filter books dynamically
* Persist their data across sessions

---

## 🛠 Tech Stack

* **Framework:** React (Vite + TypeScript)
* **Routing:** TanStack Router
* **State Management:** Zustand (with persistence)
* **Styling:** Tailwind CSS (Dark theme UI)
* **Data Source:** Local static dataset

---

## 🧠 Key Concepts Implemented

### 1. Global State Management

* Centralized store using Zustand
* Clean separation between state and UI
* Actions for controlled state updates

### 2. Derived State

* Reading statistics (total, completed, reading) are computed dynamically
* Avoids redundant and inconsistent state

### 3. Routing as Application State

* Multi-page navigation using TanStack Router
* Structured route hierarchy for scalability

### 4. Component-Based Architecture

* Reusable UI components (BookCard, SearchBar, FilterBar, etc.)
* Clear separation of UI and logic

### 5. Data Persistence

* Zustand persist middleware used to store data in localStorage
* User data remains after page refresh

---

## 📂 Project Structure

```
src/
  app/
    router.tsx

  components/
    BookCard.tsx
    SearchBar.tsx
    FilterBar.tsx
    StatsCard.tsx
    EmptyState.tsx
    bookList.tsx

  routes/
    __root.tsx
    index.tsx
    browse.tsx
    vault.tsx

books/
    types.ts
    data.ts
    store.ts
    selectors.ts
store/
    store.ts
main.tsx
index.css
index.html
```

---

## ⚙️ Features

### 📖 Browse Books

* View a list of available books
* Add books to your vault
* Prevent duplicate entries

### 📦 Vault Management

* View saved books
* Update reading status
* Remove books

### 🔍 Search & Filter

* Search by title, author, or genre
* Filter by reading status

### 📊 Dashboard

* View reading statistics:

  * Total books
  * Currently reading
  * Completed

### 💾 Persistence

* Data stored locally using Zustand persist
* No backend required

---

## 📄 License

This project is for educational purposes.

