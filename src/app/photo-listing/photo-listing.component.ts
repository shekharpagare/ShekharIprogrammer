import { Component, OnInit } from '@angular/core';
import { PhotoServiceService} from '../photo-service.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-photo-listing',
  templateUrl: './photo-listing.component.html',
  styleUrls: ['./photo-listing.component.css']
})
export class PhotoListingComponent implements OnInit {
  
  public photoList:any = [];
  public selectedPhoto:any=[];
  constructor(private photoService : PhotoServiceService,private http:HttpClient) { }

  ngOnInit() {
    this.photoService.getPhotoList()
    .subscribe(data => this.photoList = data);
  }
  
  addPhotoList(Obj,iIndex){
   Obj.selected = !Obj.selected;
   let key = this.selectedPhoto.findIndex(e=>e.id == iIndex);
   if(key == -1) this.selectedPhoto.push(Obj);
   else this.removePhotoList(key);
  }
  removePhotoList(iIndex){
    this.selectedPhoto.splice(iIndex,1);
  }
}
