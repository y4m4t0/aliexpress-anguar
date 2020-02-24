import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-samsung-item',
  templateUrl: './samsung-item.component.html',
  styleUrls: ['./samsung-item.component.css']
})
  export class SamsungItemComponent implements OnInit {
    public products = [];
    constructor(private _productService: ProductService, private router: Router) { 
    }
    ngOnInit() {
      this._productService.getProduct()
      .subscribe(data => {
        this.products = data.filter(object => object.category == 'samsung')
      })
    }
    onSelect(product) { 
      this.router.navigate(['/categories/samsung', product.id]);
    }
  }
  