import { Component, OnInit } from '@angular/core';
import { HttpService } from './shared/services/http.service';
import { ITextDataModel } from './models/text-data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  textArr: ITextDataModel[] = []

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this.getTexts()
  }

  getTexts() {
    this._httpService.getData().subscribe((data) => {
      this.textArr = data
      console.log(this.textArr);
    })
  }

}
