import { Component } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  checked: boolean = true;
  value: string | undefined;
  products = [
    { code: '1', name: 'assets/iamge/Group 1000009197.png', category: 'C-101', price: '$40', climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة',  },
    { code: '1', name: 'assets/iamge/Group 1000009197 (1).png', category: 'C-102', price:'$30',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة' },
    { code: '3', name: 'assets/iamge/Group 1000009197 (2).png', category: 'C-102', price: '$45',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة' },
    { code: '4', name: 'assets/iamge/Group 1000009197 (3).png', category: 'C-103', price: '$54',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      count:1,buy:'مرة واحدة'
     },
     { code: '5', name: 'assets/iamge/Group 1000009197.png', category: 'C-101', price: '$40', climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة',  },
    { code: '6', name: 'assets/iamge/Group 1000009197 (1).png', category: 'C-102', price:'$30',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة' },
    { code: '7', name: 'assets/iamge/Group 1000009197 (2).png', category: 'C-102', price: '$45',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة' },
    { code: '8', name: 'assets/iamge/Group 1000009197 (3).png', category: 'C-103', price: '$54',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      count:1,buy:'مرة واحدة'
     },
     { code: '1', name: 'assets/iamge/Group 1000009197.png', category: 'C-101', price: '$40', climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة',  },
    { code: '1', name: 'assets/iamge/Group 1000009197 (1).png', category: 'C-102', price:'$30',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة' },
    { code: '3', name: 'assets/iamge/Group 1000009197 (2).png', category: 'C-102', price: '$45',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',count:1,buy:'مرة واحدة' },
    { code: '4', name: 'assets/iamge/Group 1000009197 (3).png', category: 'C-103', price: '$54',climal:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      count:1,buy:'مرة واحدة'
     }
  ];
  rows = 4; 
  updateRowsPerPage(newRows: number) {
    this.rows = newRows;
  }
  constructor(private fileSaverService: FileSaverService) {}

  downloadFile() {
    const fileData = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    
    this.fileSaverService.save(fileData, 'hello_world.txt');
  }



}
