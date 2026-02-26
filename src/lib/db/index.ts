import { Sequelize } from 'sequelize';
import { initProduct } from './models/Product';
import { initBlogPost } from './models/BlogPost';
import { initUser } from './models/User';
import type { ProductAttributes, BlogPostAttributes } from './types';

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  }
);

// Initialize models
const Product = initProduct(sequelize);
const BlogPost = initBlogPost(sequelize);
const User = initUser(sequelize);

// If you have associations, define them here
// e.g., Product.belongsTo(Category, ...)

export { sequelize, Product, BlogPost, User };
export type { ProductAttributes, BlogPostAttributes };

export async function initDB() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('Database synced');
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}