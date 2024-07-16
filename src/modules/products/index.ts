// COMPONENTS
export { DeleteProductModal } from './components/product-table/DeleteProductModal';
export { ProductForm } from "./components/ProductForm";
export { ProductTable } from "./components/product-table/ProductTable";
export { ProductDetails } from "./components/ProductDetails";


// ACTIONS
export { createProduct } from "./actions/create-product";
export { deleteProduct } from './actions/delete-products';
export { getAllProducts } from "./actions/get-all-products";
export { getProductBySlug } from "./actions/get-product-by-slug";



// INTERFACES
export type { IProduct, IProductCategory } from './interfaces/products';
export type { IProductDetails } from './interfaces/product-details';


