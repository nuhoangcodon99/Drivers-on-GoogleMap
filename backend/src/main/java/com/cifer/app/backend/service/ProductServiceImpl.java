package com.cifer.app.backend.service;

import com.cifer.app.backend.exception.ProductAlreadyExistException;
import com.cifer.app.backend.exception.ProductDoNotExistException;
import com.cifer.app.backend.model.Product;
import com.cifer.app.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public String createProduct(Product newProduct) {
        if (productRepository.existsByName(newProduct.getName())) {
            throw new ProductAlreadyExistException(newProduct.getName() + " already exists, cannot be created");
        }

        LocalDate createdDate = LocalDate.now();
        newProduct.setCreatedDate(createdDate);

        productRepository.save(newProduct);
        return "Product created successfully";
    }

    @Override
    public String updateProduct(Long id, Product newProduct) {
        if (productRepository.existsByName(newProduct.getName())) {
            throw new ProductAlreadyExistException(newProduct.getName() + " already exists, cannot be updated");
        }
        Optional<Product> oldProduct = Optional.ofNullable(productRepository.findById(id)
                .orElseThrow(() -> new ProductDoNotExistException("Product with " + id + " do not exist")));
        if (newProduct.getName() != null) {
            oldProduct.get().setName(newProduct.getName());
        }
        if (newProduct.getQuantity() != null) {
            oldProduct.get().setQuantity(newProduct.getQuantity());
        }
        productRepository.save(oldProduct.get());
        return "Update successfully";
    }

    @Override
    public String deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductDoNotExistException("Product with id " + id + " not found");
        }
        productRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public Product getProductByName(String name) {
        return productRepository.findByName(name)
                .orElseThrow(() -> new ProductDoNotExistException(name + "do not exist"));
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
