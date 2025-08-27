# React+Vite & Supabase Project

### 👉 Live URL: https://the-wild-oasis-ops.netlify.app/

Login Credentials:
email:    test@test.com
password: 11111111

# 🏨 The Wild Oasis – Internal Hotel Management System

The **Wild Oasis** is a hotel staff web application designed to manage guest bookings, cabin details, and overall hotel operations.  
It provides staff with an easy-to-use dashboard to **view, update, and manage reservations** in real time.

---

## 🚀 Features

- 📅 **Booking Management** – View all reservations (confirmed, checked-in, checked-out).
- 🏠 **Cabin Management** – Manage cabins, capacity, and pricing.
- 👤 **Guest Details** – Access and update guest information.
- 🔐 **Authentication** – Secure login for staff.
- 🌙 **Dark/Light Mode** – Theme support (auto-detects system theme).
- ⚡ **Error Boundaries** – Friendly fallback UI when unexpected errors occur.

---

## 🛠️ Tech Stack

- **Frontend:** React, Styled-Components, React Router, React Query
- **Error Handling:** react-error-boundary
- **State/Data:** React Query + Context API
- **Styling:** CSS Variables, GlobalStyles, Styled Components
- **Deployment:** Netlify

---

## 📂 Project Structure (simplified)

src/
│── App.jsx # Root app component
│── main.jsx # Entry point with ErrorBoundary
│── ui/ # Reusable UI components (Button, Heading, ErrorFallback, etc..)
│── styles/ # Global styles and theme variables
│── features/ # Booking, Cabin, dashboard, setting, authentication, check-in-out features
│── context/ # Context provider (DarkMode)
│── data/ # Data related to application
│── hooks/ # Custom hooks
│── pages/ # Web Pages of Application (Dashboard, Login, Cabins, Bookings, Users, etc..)
│── services/ # It involves API calls from Supabase
│── utils/ # Common Utility functions

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/srivastavapk418/-The-Wild-Oasis-Internal-Hotel-Management-System.git
   cd -The-Wild-Oasis-Internal-Hotel-Management-System
   ```

-> npm install,
   Start development server

-> npm run dev,
   Build for production

-> npm run build,
   🌐 Deployment,
   The app is deployed on Netlify.

🧑‍💻 Usage (for Staff):
Log in with your staff account.
View the dashboard for all bookings and cabins.
Update guest check-in/check-out status.
Manage cabins and view availability.

📸 Screenshots

![alt text](<public/appImages/Screenshot (14).png>) ![alt text](<public/appImages/Screenshot (15).png>) ![alt text](<public/appImages/Screenshot (16).png>) ![alt text](<public/appImages/Screenshot (17).png>) ![alt text](<public/appImages/Screenshot (18).png>) ![alt text](<public/appImages/Screenshot (19).png>) ![alt text](<public/appImages/Screenshot (20).png>) ![alt text](<public/appImages/Screenshot (21).png>) ![alt text](<public/appImages/Screenshot (22).png>)

📌 Note:
This project is an internal hotel management tool (not for public guests).
We can only delete checked-out bookings and those unconfirmed bookings that are unpaid (checked-in and unconfirmed(already paid) bookings can't be deleted as it can create loss of informations).
