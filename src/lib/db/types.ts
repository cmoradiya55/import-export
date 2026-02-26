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
  productsId: string;
}

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
