import { Component, OnInit, Input } from '@angular/core';
import { event } from 'src/app/models/event.model';

@Component({
  selector: 'pila-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input()
  public model: event;

  constructor() { }

  ngOnInit() { }

}
