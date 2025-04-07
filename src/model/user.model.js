import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/sequelize.js';

export const userData = sequelize.define('users', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.
      STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  clientReference: {
    type: DataTypes.STRING,
    allowNull: false
  },
  owner: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'users',
  freezeTableName: true,
  timestamps: true,
});

export default class user {
  constructor({ clientReference, name, owner }) {
    this.id = `usr-${Date.now()}`;
    this.clientReference = clientReference;
    this.name = name;
    this.owner = owner;
    this.createdAt = new Date();
  }
}