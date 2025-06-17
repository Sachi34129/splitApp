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


## 📭 Postman Collection

You can test the live backend API instantly using the public Postman collection below.

### ✅ Public Collection Link

**🔗 [Click to View & Import Collection](https://gist.github.com/Sachi34129/8328671497da7d608ae1c39b40af38b5)**  
*(Replace with your actual public Gist URL)*

---

### 🧪 Test Data Included

The Postman collection includes realistic test data:

| Description    | Paid By   | Amount | Category       |
|----------------|-----------|--------|----------------|
| Dinner         | Shantanu  | ₹600   | Food           |
| Groceries      | Sanket    | ₹450   | Essentials     |
| Petrol         | Om        | ₹300   | Travel         |
| Movie Tickets  | Shantanu  | ₹500   | Entertainment  |
| Pizza          | Sanket    | ₹280   | Food           |

---

### 📂 Collection Structure

- **📁 Expense Management**
  - ➕ Add Expense (5 variations)
  - 📋 List All Expenses
  - 🛠️ Update Expense
  - ❌ Delete Expense

- **📁 Settlements & People**
  - 👥 Get All People
  - 💸 Get Current Balances
  - 🔄 Get Settlement Summary

- **📁 Edge Cases & Validation**
  - 🚫 Invalid Add (missing/negative fields)
  - ⚠️ Update/Delete Non-existent
  - 🔍 Get Balances with No Expenses


## 🧠 Features

### 📋 Core Functionality
- Add, list, update, and delete shared expenses
- Support for `equal`, `percentage`, and `exact` splits
- Auto-calculated balances for each person
- Simple settlement logic to minimize number of payments

### 📊 Analytics & Settlements
- Retrieve all people involved in expenses
- View current outstanding balances
- Get optimized settlement suggestions to clear debts

### ⚠️ Input Validation & Error Handling
- Rejects invalid expense data (negative amounts, missing fields)
- Graceful handling of non-existent records
- Ensures split values match the total expense based on type

## 📘 API Documentation

| Method | Endpoint                             | Description                         |
|--------|--------------------------------------|-------------------------------------|
| GET    | `/api/v1/expenses/list`              | List all expenses                   |
| POST   | `/api/v1/expenses/create`            | Add a new expense                   |
| PUT    | `/api/v1/expenses/update/:id`        | Update an existing expense by ID   |
| DELETE | `/api/v1/expenses/remove/:id`        | Delete an expense by ID            |
| GET    | `/api/v1/settlement/people`          | Get all unique people from expenses|
| GET    | `/api/v1/settlement/balances`        | Show each person’s current balance |
| GET    | `/api/v1/settlement/settlements`     | Get optimized settlement summary   |
