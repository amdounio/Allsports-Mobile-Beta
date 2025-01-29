import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent   {
  @Input() title : string
  @Input() subTitle : string
  @Input() nextButon : string
  @Input() isDisabled : boolean
  @Input() textLeft : boolean = false
  constructor() { }


}
