import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/catgory.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { TypeService } from 'src/app/shared/service/type.service';
import { Util } from 'src/app/shared/util.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  pathsSlideShow = [
    "https://theme.hstatic.net/200000654527/1000998163/14/home_slider_image_2.jpg?v=313",
    "https://theme.hstatic.net/200000654527/1000998163/14/home_slider_image_1.jpg?v=313",
    "https://theme.hstatic.net/200000654527/1000998163/14/home_slider_image_3.jpg?v=313"
  ];

  products: any[] = [];
  types: any[];
  categories: any[];
  categoryCollection = 1;
  Util = Util;

  constructor(
    private productService: ProductService,
    private typeService: TypeService,
    private categoryService: CategoryService
  ) {
      this.products = this.productService.getProducts();
      this.types = this.typeService.getTypes();
      this.categories = this.categoryService.getCategories();
  }

  getType(id:any) {
    return this.types?.filter((type: any) => type?.id == id)?.[0] ?? "";
  }

  changeCollection(category: any) {
    this.categoryCollection = category;
  }
}
