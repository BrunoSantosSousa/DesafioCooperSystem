import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-icon-chip',
  templateUrl: './custom-icon-chip.component.html',
  styleUrls: ['./custom-icon-chip.component.css']
})
export class CustomIconChipComponent implements OnInit {

  @Input() icon : string;
  @Input() text : string;
  constructor() { }

  ngOnInit(): void {
  }

}
