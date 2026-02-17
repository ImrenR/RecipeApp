# TasteAPI

This project has been deployed on Vercel: https://recipe-app-ecru-omega.vercel.app/

A React-based recipe search application that allows users to find meals using TheMealDB API.
This project demonstrates how to use Redux, Tailwind v3, Private Routing, and Axios to create a smooth, real-world recipe browsing experience.

---

## Login Credentials

For testing purposes, the app currently uses a simple credential check:

Email: imren
Password: 6789

**Note:** The login system has been temporarily simplified by commenting out the private router and authSlice to allow easy deployment and usage on Vercel.

---

## Features

- Login Authentication (simple credential check)
- Recipe Search powered by TheMealDB API
- Global State Management using Redux Thunk
- Private Routing with React Router DOM
- Loading & Error Handling
- Automatic Redirect from 404 Page
- Clean Component-Based Architecture

---

## Project Structure

```
RECIPE APP/
│
├── public/
├── src/
│   ├── app/
│   │   └── store.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx/
│   │   ├── Header/
            ├── Header.jsx/
            ├── RecipeCard.jsx/
│   │   ├── MyNavbar.jsx/
│   ├── features/
│   │   ├── recipeSlice.jsx
│   │   └── authSlice.jsx   # currently commented out for Vercel
│   ├── pages/
│   │   ├── About.jsx/
│   │   ├── Details.jsx/
│   │   ├── NotFound.jsx/
│   │   └── Home.jsx/
        └── Login.jsx/
│   ├── router/
│   │   ├── AppRouter.jsx
│   │   └── PrivateRouter.jsx  # currently commented out for Vercel
│   ├── App.css
│   └── App.jsx
│   └── main.jsx
    └── index.css              # tailwind
└── package.json
```
---

## API Reference

BASE URL:
https://www.themealdb.com/api/json/v1/1/search.php?s=${query}

---

## Not Found Page

When a user visits a non-existent route:

- Displays a message: “Oops!... Something went wrong”
- Countdown timer (5 seconds)
- Automatically redirects to the /home page

---

## Technology Used

- React.js
- Redux & Redux Thunk
- Tailwind CSS v3
- Axios
- React Router DOM
