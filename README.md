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
- Postman Collection: https://gist.github.com/Sachi34129/8328671497da7d608ae1c39b40af38b5

---

## 📂 Project Structure

```
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
```

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/split-app-backend.git
cd split-app-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your MongoDB URI and desired port:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Start the Server

```bash
npm start
```

The server will run on `http://localhost:3000`.


## 📬 API Endpoints

### 📁 Expense Management

| Method | Endpoint                     | Description                    |
|--------|------------------------------|--------------------------------|
| GET    | `/api/v1/expenses/list`      | List all expenses              |
| POST   | `/api/v1/expenses/create`    | Add a new expense              |
| PUT    | `/api/v1/expenses/:id`       | Update an expense by ID        |
| DELETE | `/api/v1/expenses/:id`       | Delete an expense by ID        |

### 📁 Settlements & People

| Method | Endpoint                             | Description                         |
|--------|--------------------------------------|-------------------------------------|
| GET    | `/api/v1/settlement/people`          | List all people involved            |
| GET    | `/api/v1/settlement/balances`        | Show each person’s balance          |
| GET    | `/api/v1/settlement/settlements`     | Get optimized settlement summary    |
