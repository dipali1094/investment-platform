
# Investment Platform Backend

A Node.js + Express backend project that integrates with [WealthKernel API](https://www.wealthkernel.com/), supports secure user onboarding, investment account creation, in-memory data fallback, and MySQL-based persistence using Sequelize ORM.

---

## Features

- User profile creation with AES-256 encryption
- JWT authentication for protected routes
- Investment account creation via WealthKernel API
- In-memory + MySQL database support (configurable)
- Retry logic and idempotency for external API calls
- Structured modular architecture (Controller, Service, Model, Route)
- Configurable environment via `.env` file
- Unit tests with Jest
- ESLint for consistent code style
- Follows security and compliance best practices (GDPR, encrypted storage)
---

## Project Structure

src/ │ ├── config/ # Sequelize config, environment, constants ├── controllers/ # Express route controllers ├── models/ # Sequelize models ├── routes/ # Route definitions ├── services/ # Business logic, external APIs ├── utils/ # Utilities (encryption, retry, headers) ├── middlewares/ # JWT Auth, error handler ├── tests/ # Jest test cases └── app.js # Entry point

yaml

---

## Environment Setup

###  Prerequisites

- Node.js (v18+)
- MySQL server running locally 

---

### `.env` Configuration

Create a `.env` file:

PORT=3000

MySQL Configuration
DB_HOST=localhost DB_USER=root DB_PASSWORD=yourpassword DB_NAME=investment_db

WealthKernel Config
WEALTHKERNEL_URL=https://api.sandbox.wealthkernel.io/accounts WEALTHKERNEL_VERSION=2021-05-17

Encryption Key
ENCRYPTION_SECRET=your-256-bit-secret-key

JWT Config
JWT_SECRET=your_jwt_secret JWT_EXPIRES_IN=1d

yaml

---

## Install & Run

```bash
# Install dependencies
npm install

# Run dev server
npm start
Running Tests

npm run test
Ensure test data uses in-memory mode or is mocked.

Security Practices
Sensitive data (e.g. user KYC) is encrypted using AES-256

JWT token used for protected routes

.env file used to externalize secrets

API retry logic + idempotency keys for reliability

Input validation and basic rate-limiting (extendable)

Sample API Endpoints
Method	Route	Description
POST	/api/user	Create encrypted user profile (JWT)
GET	/api/user/:id	Decrypt & retrieve user profile
POST	/api/investment	Create investment account
GET	/api/investment/all	Get all created accounts (memory/db)
⚙️ Sequelize MySQL Setup
Ensure MySQL is running and accessible with credentials in .env. Sequelize will auto-sync models:

sequelize.sync({ alter: true });
Architecture Diagram
High-level flow:

[Client]
   ↓
[Express Controller]
   ↓
[Service Layer] → [WealthKernel API]
   ↓
[Model (Sequelize)] → [MySQL]
   ↓
[Encrypted Data + LocalStorage]

 Completed Functionalities

 JWT Token-based protected APIs

 User data encryption (AES-256)

 WealthKernel API Integration (POST /accounts)

 Retry logic, error handling

 In-memory data fallback

 Sequelize DB schema setup (optional in prod)

 Jest unit tests (mock API + service layer)

 Linting (ESLint)

 Responsive & secure backend design

