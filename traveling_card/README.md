# 🧳 React Traveling Tours App

A simple and responsive **Traveling Tours Card App** built with **React.js** and styled using **Tailwind CSS**. This app displays a list of tours with the ability to remove them individually. When no tours are left, a "Refresher" button allows the user to reload the list.

### 🔗 Live Preview

👉 [Check out the live demo here](https://react-basic-projects-kappa.vercel.app/)

### 📁 GitHub Repository

🔗 [View the code on GitHub](https://github.com/sourav4152/React_Basic_projects/tree/main/traveling_card)

---

## ✨ Features

- 📃 Shows a list of tour cards with image, title, price, and description
- 🔽 “Read More” / “Show Less” toggle for long descriptions
- ❌ “Not Interested” button to remove a tour from the list
- 🔁 “Refresher” button to reload all tours if the list becomes empty
- 💅 Fully responsive and styled with **Tailwind CSS**
- ⚡ Smooth transitions and hover effects

---

## 🛠️ Tech Stack Used

- **React.js** – Functional components with Hooks (`useState`)
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **Vite** – Lightning-fast development build tool
- **Vercel** – Deployment platform for frontend projects



### 📦 Project Structure

```
traveling_card/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Card.jsx // Single tour card component
│ │ └── Tours.jsx // Renders all tour cards
│ ├── data.js // Static tours data
│ ├── App.jsx // Root component
│ └── main.jsx // Entry point
├── tailwind.config.js // Tailwind setup
├── package.json
└── README.md

```

## 🧠 Concepts Covered

This project demonstrates the following React concepts:

- **Functional Components** – Stateless components using function syntax.
- **useState Hook** – Manage component state for tours list and text toggling.
- **Props Passing** – Data and function passed between parent and child components.
- **Conditional Rendering** – Rendering UI based on tour availability.
- **Dynamic List Rendering** – Mapping over an array to generate UI elements.
- **Event Handling** – Handling button clicks (`onClick`) to update state.
- **Component Composition** – Dividing UI into reusable components (`Tours`, `Card`).
- **Responsive Design** – UI scales well across different screen sizes.
- **Tailwind Transitions** – Smooth animations and hover effects.
- **Deployment with Vercel** – Deployed seamlessly for live access.

---

## 🧪 How to Run Locally

1. **Clone the Repository**

```
git clone https://github.com/sourav4152/React_Basic_projects.git
cd React_Basic_projects/traveling_card
```
2. **Install Dependencies**

```
npm install
```
3. **Start the Development Server**

```
npm run dev
Open http://localhost:5173 in your browser to view the app.
```


### 🧑‍💻 Author

Made with ❤️ by [Sourav](https://github.com/sourav4152)


### 📜 License

This project is a **student self-project** created for **learning and practice purposes**.  
Feel free to explore, use, and modify the code to improve your React skills.
