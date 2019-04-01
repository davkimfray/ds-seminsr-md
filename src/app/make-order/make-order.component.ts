import { Component, OnInit } from '@angular/core';
import { MakeOrder } from '../make-order';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss']
})
export class MakeOrderComponent implements OnInit {

  // submitted = false;
  //
  // onSubmit() { this.submitted = true; }


  constructor() { }
  // noinspection JSAnnotator
  oderForm = new FormGroup({
    prodsize: new FormControl(''),
    quantity: new FormControl(''),
  });
  /*
    //prodSelected = [this.powers];
  */
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new MakeOrder(1, 'h', '3', '4' );


  displaylog() {
    console.log('dfghdfgh');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.oderForm.value);
  }
  ngOnInit() {
  }

}
