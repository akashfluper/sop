import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sub-admin',
  templateUrl: './add-sub-admin.component.html',
  styleUrls: ['./add-sub-admin.component.css']
})
export class AddSubAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  multiple1!: any[];
  uploadProfileImage: any;
  profile_image: any


  multipleFiles1(event: any) {
    this.multiple1 = [];
    var multipleFiles = event.target.files;
    this.uploadProfileImage = event.target.files[0]
    if (multipleFiles) {
      for (var file of multipleFiles) {
        var multipleReader = new FileReader();
        multipleReader.onload = (e: any) => {
          this.profile_image = e.target.result;
          console.log(this.profile_image);
        }
        multipleReader.readAsDataURL(file);
      }
    }
  }

}
