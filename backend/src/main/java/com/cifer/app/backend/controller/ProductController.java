package com.cifer.app.backend.controller;

import com.cifer.app.backend.model.Product;
import com.cifer.app.backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProductController {
    private final ProductService productService;

    @PostMapping("/create-product")
    public ResponseEntity<String> createNewProduct(@RequestParam("name") String name,
                                                   @RequestParam("quantity") Integer quantity) {
        Product product = new Product();
        product.setName(name);
        product.setQuantity(quantity);
        String successProductCreating = productService.createProduct(product);
        return ResponseEntity.ok(successProductCreating);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateOldProduct(@PathVariable("id") Long id,
                                                   @RequestParam("newName") String newName,
                                                   @RequestParam(value = "newQuantity", required = false) @Nullable String quantity) {
        Product newProduct = new Product();
        newProduct.setName(newName);
        if (!quantity.isEmpty()) {
            newProduct.setQuantity(Integer.parseInt(quantity));
        }
        String successProductUpdating = productService.updateProduct(id, newProduct);
        return ResponseEntity.ok(successProductUpdating);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteExistProduct(@PathVariable("id") Long id) {
        String successProductDeleting = productService.deleteProduct(id);
        return ResponseEntity.ok(successProductDeleting);
    }
}
