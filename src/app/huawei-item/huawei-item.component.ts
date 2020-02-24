import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-huawei-item',
  templateUrl: './huawei-item.component.html',
  styleUrls: ['./huawei-item.component.css']
})
export class HuaweiItemComponent implements OnInit {
  public products = [];

  constructor(private _productService: ProductService, private router: Router) { 
  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(data => {
        this.products = data.filter(object => object.category == 'huawei')
      })
  }

  onSelect(product) {
    this.router.navigate(['/categories/huawei', product.id]);
  }

}
