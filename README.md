# 🧾 Split App Backend

An expense-splitting backend system inspired by apps like Splitwise. This API lets users add shared expenses, calculate fair settlements, and track who owes what. Designed to help friends or groups manage shared bills for dinners, trips, rent, and more.

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **Deployment**: Railway
- **API Testing**: Postman

---

## 🚀 Live Deployment

- Backend URL: splitapp-production-296c.up.railway.app  
- Postman Collection: [Public Gist (Click to Open)](https://gist.github.com/YOUR_GIST_LINK)

---

## 📂 Project Structure

split-app-backend/
│
├── controllers/
│   ├── expenseController.js
│   └── settlementController.js
│
├── models/
│   └── Expense.js
│
├── routes/
│   ├── expenseRoutes.js
│   └── settlementRoutes.js
│
├── .env
├── index.js
├── package.json
└── README.md
