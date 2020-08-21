import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  @Input('user') user : string;
  @Output() redirectHome  = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRedirectHome() {
    this.redirectHome.emit();
  }

}
