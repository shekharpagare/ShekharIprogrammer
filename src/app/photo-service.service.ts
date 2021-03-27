import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IphotoList} from './photoList';
import { Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
  
  private _url:string = "/assets/Data/photoList.json";
  constructor(private http:HttpClient) { }

  getPhotoList():Observable<IphotoList[]>{
   return this.http.get<IphotoList[]>(this._url);
  }
}
