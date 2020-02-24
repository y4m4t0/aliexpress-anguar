import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public products = [];

  constructor(private route: ActivatedRoute, private _productService: ProductService, private router: Router) { 
  }

  public category = this.route.snapshot.params['category']

  ngOnInit() {
      this._productService.getProduct()
      .subscribe(data => {
        this.products = data.filter(object => object.category == this.category)
    })
    }


  onSelect(product) {
    this.router.navigate([`products`, product.id]);
  }
}
