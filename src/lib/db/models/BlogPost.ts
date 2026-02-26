import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface BlogPostAttributes {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogPostCreationAttributes extends Optional<BlogPostAttributes, 'id'> { }

class BlogPost extends Model<BlogPostAttributes, BlogPostCreationAttributes> implements BlogPostAttributes {
  public id!: string;
  public title!: string;
  public excerpt!: string;
  public content!: string;
  public author!: string;
  public authorImage!: string;
  public authorBio!: string;
  public date!: string;
  public readTime!: string;
  public category!: string;
  public image!: string;
  public tags!: string[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initBlogPost(sequelize: Sequelize) {
  BlogPost.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
    },
    {
      sequelize,
      modelName: 'BlogPost',
      tableName: 'blog_posts',
    }
  );
  return BlogPost;
}

export default BlogPost;