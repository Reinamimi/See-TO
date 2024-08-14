import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  events: any[] = [];
  searchControl = new FormControl('');

  constructor(private eventService: EventService) {}

  ngOnInit(): void {

    this.loadEvents();
    
    this.searchControl.valueChanges.subscribe(searchString => {
       this.loadFilteredEvents(searchString as string);
    });
    // this.eventService.getEvents().subscribe((data) => (this.events = data._embedded.events));

    console.log("events: ",  this.events);
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(data => {
      this.events = data._embedded.events;
    });
  }

  loadFilteredEvents(searchString: string): void {
    if (searchString) {
      this.eventService.getFilteredEvents(searchString).subscribe(data => {
        this.events = data._embedded.events;
      });
    } else {
      this.loadEvents();
    }
  }

  
}
