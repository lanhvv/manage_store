import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/catgory.service';
import { ColorService } from 'src/app/shared/service/color.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { SizeService } from 'src/app/shared/service/size.service';
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
  colors: any[];
  sizes: any[];
  Util = Util;

  constructor(
    private productService: ProductService,
    private typeService: TypeService,
    private categoryService: CategoryService,
    private colorService: ColorService,
    private sizeService: SizeService
  ) {
      this.types = this.typeService.getTypes();
      this.categories = this.categoryService.getCategories();
      this.products = this.productService.getProducts();
      this.colors = this.colorService.getColors();
      this.sizes = this.sizeService.getSizes();
  }


  getType(id:any) {
    return this.types?.filter((type: any) => type?.id == id)?.map((x: any) => x?.type)?.[0];
  }

  getCategory(id:any) {
    return this.categories?.filter((x: any) => x?.id == id)?.map((x: any) => x?.category)?.[0];
  }

  getColor(id: any) {
    return this.colors?.filter((x: any) => x?.id == id)?.map((x: any) => x?.color)?.[0];
  }

  getSize(id: any) {
    return this.sizes?.filter((x: any) => x?.id == id)?.map((x: any) => x?.size)?.[0];
  }

  getBackground(id: any) {
    return `{background ${this.getColor(id)}}`;
  }
}
