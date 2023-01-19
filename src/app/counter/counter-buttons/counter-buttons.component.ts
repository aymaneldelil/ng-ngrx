import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store'
import { decrement, increment, reset } from '../state/counter.action';
  //---------------------------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(
    private _store:Store<{counter:{counter:number}}>
  ) { }

  ngOnInit(): void {
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
 public onIncrement() :void{
  this._store.dispatch(increment())
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public onDecrement():void {
    this._store.dispatch(decrement())

  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public onReset():void{
    this._store.dispatch(reset())

  }
}
