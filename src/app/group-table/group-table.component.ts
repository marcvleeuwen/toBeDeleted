import {Component, Input, OnInit} from '@angular/core';
import {GroupMonthlyBilling} from '../mocks/member-detail-response.interface';
import {MonthlyBillingMock} from '../mocks/data.mock';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss']
})
export class GroupTableComponent implements OnInit {
  @Input() columnsConfig: Array<TypedColumn> = [{
    display: 'undefined',
    key: '__blank1',
    type: 'empty'
  }, {
    display: 'Effective from',
    key: 'effectiveFrom',
    type: 'date'
  }, {
    display: 'Effective to',
    key: 'effectiveTo',
    type: 'date'
  }, {
    display: 'amount',
    key: 'amount',
    type: 'amount'
  }];
  @Input() data: Array<GroupMonthlyBilling> = MonthlyBillingMock.GROUPS;

  columnsKeys: Array<string> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.columnsConfig.forEach((column: TypedColumn) => {
      this.columnsKeys.push(column.key);
    });
  }

  getConfigData(key: string, field: string): string {
    const res: string = this.columnsConfig.find((config: TypedColumn) => config.key === key)[field];
    console.log(field, res);
    return res;
  }
}

export interface TypedColumn {
  display: string;
  key: string;
  type: string | 'default';
}
