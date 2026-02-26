import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  image: string;
  packageSizes: string[];
  container: string[];
  categoryId: number;
  categoryName: string;
  categoryLabel: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> { }

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: string;
  public name!: string;
  public description!: string;
  public image!: string;
  public packageSizes!: string[];
  public container!: string[];
  public categoryId!: number;
  public categoryName!: string;
  public categoryLabel!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initProduct(sequelize: Sequelize) {
  Product.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
      packageSizes: {
        type: DataTypes.JSON,
      },
      container: {
        type: DataTypes.JSON,
      },
      categoryId: {
        type: DataTypes.INTEGER,
      },
      categoryName: {
        type: DataTypes.STRING,
      },
      categoryLabel: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
    }
  );
  return Product;
}

export default Product;