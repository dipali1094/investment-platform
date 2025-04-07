import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import investmentRoutes from './routes/investment.routes.js';
// import { sequelize } from './config/sequelize.js';

dotenv.config();

// Database connection
//await sequelize.sync({ alter: true });

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/investments', investmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
