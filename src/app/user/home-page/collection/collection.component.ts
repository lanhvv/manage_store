import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/catgory.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { TypeService } from 'src/app/shared/service/type.service';
import { Util } from 'src/app/shared/util.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnChanges {
  @Input() category: any;

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
      this.products = this.getProductFromCategory(this.category);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.products = this.getProductFromCategory(this.category);
  }

  getType(id:any) {
    return this.types?.filter((type: any) => type?.id == id)?.[0] ?? "";
  }

  getProductFromCategory(category: any) {
    return this.productService.getProducts()?.filter((x: any) => x?.category == category) ?? [];
  }
}
