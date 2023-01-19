import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
//---------------------------------------------------------------------------------------------------------------------------------------------
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
//---------------------------------------------------------------------------------------------------------------------------------------------

export class CounterOutputComponent implements OnInit {

  public counter: number = 0;
  constructor(
    private _store: Store<{ counter: { counter: number } }>

  ) { }

  ngOnInit(): void {
    this._store.select('counter').subscribe(
      {
        next: (n => this.counter = n.counter)
      }
    )
  }

}
