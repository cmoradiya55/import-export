export interface Product {
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

export interface ProductCategory {
  categoryId: number;
  categoryName: string;
  categoryLabel: string;
  products: Product[];
}