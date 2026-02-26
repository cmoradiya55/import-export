import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', // or 'mysql', 'sqlite'
    logging: false,      // set true for debugging
  }
);

// Product model (based on your AllProductsList structure)
const Product = sequelize.define('Product', {
  id: { type: DataTypes.STRING, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
  image: DataTypes.STRING,
  packageSizes: DataTypes.JSON, // array stored as JSON
  container: DataTypes.JSON,
  categoryId: DataTypes.INTEGER,
  categoryName: DataTypes.STRING,
  categoryLabel: DataTypes.STRING,
});

// BlogPost model (based on your BlogPost interface)
const BlogPost = sequelize.define('BlogPost', {
  id: { type: DataTypes.STRING, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  excerpt: DataTypes.TEXT,
  content: DataTypes.TEXT,
  author: DataTypes.STRING,
  authorImage: DataTypes.STRING,
  authorBio: DataTypes.TEXT,
  date: DataTypes.STRING,
  readTime: DataTypes.STRING,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
  tags: DataTypes.JSON,
});

export { sequelize, Product, BlogPost };