import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { getCounter } from '../state/counter.selector';
//---------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
//---------------------------------------------------------------------------------------------------------------------------------------------

export class CounterOutputComponent implements OnInit {

  public counter$ = new Observable<number>;
  constructor(
    private _store: Store<{ counter: { counter: number } }>

  ) { }

  ngOnInit(): void {

    this.counter$ = this._store.select(getCounter)
  }

}
