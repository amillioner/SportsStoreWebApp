import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';

@Component({
    // template: `<div class="bg-info p-2 text-white">
    //     <h3>Product Editor Placeholder</h3>
    // </div>`

    templateUrl: "productEditor.component.html"
})

export class ProductEditorComponent {

    product: Product = new Product();
    editing: boolean = false;

    constructor(private repo: ProductRepository,
        private router: Router,
        activeRoute: ActivatedRoute) {

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product,
                repo.getProduct(activeRoute.snapshot.params["id"]));
        }
    }

    save(form: NgForm) {
        this.repo.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }
}