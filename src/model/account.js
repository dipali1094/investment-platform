import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';
import { users } from './user.model.js';

export const account = sequelize.define('investment_account', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    currency: DataTypes.STRING,
    accountId: DataTypes.STRING,
}, {
    tableName: 'investment_account',
    freezeTableName: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    timestamps: true,
});

// Association
users.hasMany(users, { foreignKey: 'id' });
account.belongsTo(users, { foreignKey: 'id' });
