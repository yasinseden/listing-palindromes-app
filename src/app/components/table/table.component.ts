import { Component, Input } from '@angular/core';
import { ITextDataModel } from 'src/app/models/text-data-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() textArr: ITextDataModel[] = []
  
}
