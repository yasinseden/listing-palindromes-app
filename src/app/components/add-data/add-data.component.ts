import { Component, EventEmitter, Output } from '@angular/core';
import { TextDataModel } from 'src/app/models/text-data-model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {

  public newText: string = ''

  @Output() dataAdded = new EventEmitter<void>()

  constructor(private _http: HttpService) {}

  public addData() {

    const newTextData: TextDataModel = new TextDataModel(this.newText)
    
    this._http.addData(newTextData.data).subscribe({
      next: res => {
        this.dataAdded.emit()
        this.newText = ''
      },
      error: err => console.error(err)
    })


  }
}
