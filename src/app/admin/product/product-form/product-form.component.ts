import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/shared/service/catgory.service';
import { ColorService } from 'src/app/shared/service/color.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { SizeService } from 'src/app/shared/service/size.service';
import { TypeService } from 'src/app/shared/service/type.service';
import { Util } from 'src/app/shared/util.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  isUpdate : boolean;
  form: FormGroup;

  products: any[];
  types: any[];
  categories: any[];
  colors: any[];
  sizes: any[];
  a:number=0;
  Util = Util;

  constructor(private route: ActivatedRoute,
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

    this.isUpdate = false;
    this.form = new FormGroup({
      code : new FormControl("", [Validators.required]),
      size : new FormControl([], [Validators.required]),
      color: new FormControl([], [Validators.required]),
      type: new FormControl(0, [Validators.required]),
      category: new FormControl(0, [Validators.required]),
      name: new FormControl("", [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      discount: new FormControl(0, [Validators.min(0), Validators.max(100)]),
      count: new FormControl(0, [Validators.min(0), Validators.max(10000)]),
      img: new FormControl([]),
      imgMain: new FormControl(""),
      describe: new FormControl("", [Validators.maxLength(200)])
    });
  }

  ngOnInit(): void {
    this.isUpdate = this.route.snapshot.params?.['id'] ? true : false;

    if (this.isUpdate) {
      const product = this.products.filter((x: any) => x?.id == this.route.snapshot.params?.['id'])?.[0];
      Object.keys(product).forEach((x: any) => {
        const control = this.control(x);
        if (control) {
          control.setValue(product?.[x]);
        }
      });
    }
  }

  public control(name: string) {
    return this.form.get(name);
  }

}
