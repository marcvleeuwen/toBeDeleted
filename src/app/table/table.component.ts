import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columnsToDisplay: Array<string> = ['name', 'title', 'description'];
  @Input() data: Array<Abc> = [{
    name: 'a',
    title: 'aa',
    description: 'aaa',
    other: 'other a'
  }, {
    name: 'b',
    title: 'bb',
    description: 'bbb',
    other: 'other b'
  }, {
    name: 'c',
    title: 'cc',
    description: 'ccc',
    other: 'other c'
  }, {
    name: 'd',
    title: 'dd',
    description: 'ddd',
    other: 'other d'
  }];

  expandedElement: Abc | null;
  clicked: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClicked(event: Element): void {
    const x = event.getBoundingClientRect().x;
    const y = event.getBoundingClientRect().y;

    console.log('event.getBoundingClientRect().x', x);
    console.log('event.getBoundingClientRect().y', y);
    this.clicked = !this.clicked;
  }

}

export interface Abc {
  name: string;
  title: string;
  description: string;
  other: string;
}
