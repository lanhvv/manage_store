import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/catgory.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { TypeService } from 'src/app/shared/service/type.service';
import { Util } from 'src/app/shared/util.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any[];
  types: any[];
  categories: any[];
  Util = Util;

  constructor(
    private productService: ProductService,
    private typeService: TypeService,
    private categoryService: CategoryService
  ) {
      this.types = this.typeService.getTypes();
      this.categories = this.categoryService.getCategories();
      this.products = this.productService.getProducts();
  }


  getType(id:any) {
    return this.types?.filter((type: any) => type?.id == id)?.[0] ?? "";
  }

}
