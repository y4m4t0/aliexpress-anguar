import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-xiaomi-item',
  templateUrl: './xiaomi-item.component.html',
  styleUrls: ['./xiaomi-item.component.css']
})
export class XiaomiItemComponent implements OnInit {
  public products = [];

  constructor(private _productService: ProductService, private router: Router) { 
  }

  ngOnInit() {
    this._productService.getProductsByCategory()
      .subscribe(data => {
        this.products = data.filter(object => object.category == 'xiaomi')
      })    
  }

  onSelect(product) {
    this.router.navigate(['/categories/xiaomi', product.id]);
  }

}