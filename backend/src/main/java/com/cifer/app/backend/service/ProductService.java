package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Product;

import java.util.List;

public interface ProductService {
    String createProduct(Product newProduct);

    String updateProduct(Long id, Product newProduct);

    String deleteProduct(Long id);

    Product getProductByName(String name);

    List<Product> getAllProducts();
}

