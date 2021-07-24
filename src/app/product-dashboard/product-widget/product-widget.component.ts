import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styles: []
})
export class ProductWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() products:[];

}
