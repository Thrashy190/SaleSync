# SaleSync

This project is a simple Point of Sale (POS) system built as part of a school assignment. It provides essential functionalities for managing sales, inventory, and customer transactions using modern web technologies. Despite being a student project, the goal is to maintain clean, professional code and repository structure.

## Features:

- **User-Friendly Interface:** Built with React and Vite for a smooth user experience.
- **Inventory Management:** Easily manage and track products.
- **Sales Tracking:** Log and view sales records in real time.
- **Multi-Payment Options:** Allows for various payment methods (cash, card, etc.).
- **PostgreSQL Database:** Secure and reliable data management.

## Tech Stack:

- **Frontend:** React + Vite
- **Backend:** NestJS (Node.js v21.7.1)
- **Database:** PostgreSQL

## Requirements:

- **Node.js:** v21.7.1
- **PostgreSQL:** v13 or later
- **npm:** v7 or later

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/Thrashy190/pos-system.git
```

### 2. Install dependencies for both frontend and backend:

#### Frontend (React + Vite):

```bash
cd pos-system/SaleSyncApp
npm install
```

#### Backend (NestJS):

```bash
cd ../SaleSyncApi
npm install
```

### 3. Set up PostgreSQL (not yet):

1. Create a PostgreSQL database.
2. Update the `.env` file in the backend folder with your PostgreSQL connection details:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/your_database
   ```

### 4. Run the application:

#### Frontend:

```bash
cd ../SaleSyncApp
npm run dev
```

#### Backend:

```bash
cd ../SaleSyncApi
npm run start:dev
```

### 5. Access the app:

- Frontend will run on `http://localhost:5173`
- Backend API will run on `http://localhost:3000`

## License

This project is licensed under the MIT License.
