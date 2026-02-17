# TasteAPI

This project has been deployed on Vercel: [https://recipe-app-ecru-omega.vercel.app/](https://recipe-app-ecru-omega.vercel.app/)


A React-based recipe search application that allows users to find meals using [TheMealDB API](https://www.themealdb.com/api.php).  
This project demonstrates how to use **Redux**, **Tailwind v3**, **Private Routing**, and **Axios** to create a smooth, real-world recipe browsing experience.

---

##  Features

-  **Login Authentication** (simple credential check)
- **Recipe Search** powered by TheMealDB API
- **Global State Management** using Redux Thunk
- **Private Routing** with React Router DOM
- **Loading & Error Handling**
- **Automatic Redirect** from 404 Page
- **Clean Component-Based Architecture**

---

## Project Structure
```
TASTEAPI/
│
├── public/
├── src/
    ├── app/
        ├── store.jsx/
│   ├── assets/
│   ├── components/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── navbar/
│   ├── features/
│   │   └── recipeSlice.jsx
        └── authSlice.jsx
│   ├── pages/
│   │   ├── about/
│   │   ├── details/
│   │   ├── errorPage/
│   │   ├── home/
│   │   
│   ├── router/
│   │   ├── AppRouter.jsx
│   │   └── PrivateRouter.jsx
│   ├── App.css
│   └── App.jsx
│
└── package.json
```


## API reference

BASE URL : https://www.themealdb.com/api/json/v1/1/search.php?s=${query}


## Not Found page

**When a user visits a non-existent route:**

- Displays a message: “Oops!... Something went wrong”

- A countdown timer (5 seconds)

- Redirects automatically to the /home page.


## Technology Used:

- React.js
