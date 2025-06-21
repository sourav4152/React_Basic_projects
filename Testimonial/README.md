# 🌟 React Testimonial Carousel

A clean and responsive **Testimonial Carousel** built using **React**, styled with **Tailwind CSS**. It allows users to navigate through reviews and also pick a random testimonial with the "Surprise Me" feature.

---

## 📸 Features

- Displays user testimonials with image, name, job title, and message
- Left/Right navigation buttons
- "Surprise Me" button for a random testimonial
- Smooth transitions and hover effects
- Responsive layout (mobile to desktop)

---

## 🚀 Live Demo

[Coming Soon]

---

## 🛠️ Project Structure

```
project-root/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Testimonial.jsx
│   ├── data.js
│   └── App.jsx
│
├── index.html
└── package.json
```

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/react-testimonial-carousel.git

# 2. Navigate into the project folder
cd react-testimonial-carousel

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

## 📁 Important Files

### `App.jsx`

- Root component
- Renders the main heading and `Testimonial` component

### `Testimonial.jsx`

- Manages current review index using state
- Navigation (`<`, `>`, Surprise Me)
- Passes selected review to `Card.jsx`

### `Card.jsx`

- Renders individual review details
- Includes quote icons and styled profile image

---

## 🎨 Styling

- Fully responsive using **Tailwind CSS**
- Clean and minimal design with shadow effects

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sourav Kumar**  
[GitHub](https://github.com/sourav4152)