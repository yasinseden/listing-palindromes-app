import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITextDataModel } from 'src/app/models/text-data-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private MOCK_API_URL: string = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get<ITextDataModel[]>(this.MOCK_API_URL + '/texts')
  }

  addData(textData: ITextDataModel) {
    return this._http.post<ITextDataModel>(this.MOCK_API_URL + '/texts', textData)
  }
}
