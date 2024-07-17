// ACTIONS
export { createProduct } from "./actions/create-product";
export { deleteProduct } from './actions/delete-products';
export { getAllProducts } from "./actions/get-all-products";
export { getProductBySlug } from "./actions/get-product-by-slug";
export { getProductsByCategory } from './actions/get-products-by-category';

// COMPONENTS
export { DeleteProductModal } from './components/product-table/DeleteProductModal';
export { ProductForm } from "./components/ProductForm";
export { ProductTable } from "./components/product-table/ProductTable";
export { ProductDetails } from "./components/ProductDetails";
export { ProductList } from './components/product-list/ProductList';



// INTERFACES
export type { IProduct, IProductCategory } from './interfaces/products';
export type { IProductDetails } from './interfaces/product-details';


