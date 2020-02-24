import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  // @Input('aliexpress_product') aliexpress_product : any;
  public products = [];
  public productId;

  constructor(private route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(data => {
        this.products = data.filter(object => object.category == 'iphone')
      }); 
    
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    
    this.productId = this._productService.getProducts()
      .subscribe(data => {
        this.productId = data.find(object => object.id == id)
      })
  }
  redirect(path) {
    window.location.href = path;
  } 

}
