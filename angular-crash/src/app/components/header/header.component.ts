import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // Put this name in <> </> in html files
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  constructor() { }

  // Use ngOnInit for initializing
  ngOnInit(): void {
  }

}
