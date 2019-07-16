import { Component, OnInit } from '@angular/core';
import { event } from 'src/app/models/event.model';

@Component({
  selector: 'pila-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events: event[] = [
    {
      id: '1',
      name: 'Hau de Lukas',
      description: 'Hau de Lukas ganz fescht, met bier',
      longDescription: 'Zo dem Alas träffemer üs zom speli Hau de Lukas. Ech brenge so 3,4 Lukas met wo mer denne chönd haue. Bitte nämed alli passends Schlagzüg met, Roschtigi nägel send ned erlaunt. wells so en Chillige Alas esch werds au Bier ome ha.',
      startDate: new Date(2019, 10, 20, 20, 0, 0),
      endDate: new Date(2019, 10, 20, 23, 59, 0),
      organisator: 'Hans',
      price: '40-70\'000\'000',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
