import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-iphone-item',
  templateUrl: './iphone-item.component.html',
  styleUrls: ['./iphone-item.component.css']
})
export class IphoneItemComponent implements OnInit {
  // aliexpress_product = iphone;
  public products = [];

  constructor(private _productService: ProductService, private router: Router) { 
  }

  ngOnInit() {
    // this._productService.getProductsByCategory('iphone')
    //   .subscribe(data => this.products = data);
    
    this._productService.getProductsByCategory()
      .subscribe(data => {
        this.products = data.filter(object => object.category == 'iphone')
      })

  
  }

  onSelect(product) {
    this.router.navigate(['/categories/iphone', product.id]);
  }

}
