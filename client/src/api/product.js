import { API_URL } from "../utils/constants";

export async function getProducts(limit = 1000) {
    try {
        const response = await fetch(`${API_URL}/products?_sort=created_at:desc&_limit=${limit}`);
        const products = await response.json();
        return products;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getProductsCategory(category) {
    try {
        const response = await fetch(
            `${API_URL}/products?_where[category.Slug]=${category}$_sort=created_at:desc`
            );
            const products = await response.json();
            return products;
    } catch (error) {
        console.log(error);
        return null;
    }
}