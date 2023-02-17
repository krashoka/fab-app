import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Select2Option} from 'ng-select2-component';
import * as $ from 'jquery';
import 'select2';


@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {

  constructor() { }

  @ViewChild('mySelect', { static: false })
  mySelect!: ElementRef;


  ngAfterViewInit() {
    $(this.mySelect.nativeElement).select2({
      placeholder: 'Select an option',
      allowClear: true,
      minimumResultsForSearch: Infinity,
      data: [
        { id: 1, text: 'Option 1' },
        { id: 2, text: 'Option 2' },
        { id: 3, text: 'Option 3' }
      ]
    });
  }
  

  ngOnInit() {
  }

}
