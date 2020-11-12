import {Component, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {compareSegments} from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profile = {
    username: 'Fab03',
    name: 'Fabian',
    lastName: 'Ramirez Arrieta',
    password: 'Pass1234',
    birthday: '03/01/2000',
    country: 'Costa Rica',
    gender: 'Male',
    peso: '60',
    image: '../../../assets/images/profile.jpg',
    imageBytes: 'data:image/jpeg;base64,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AP8AfKQ5ZX//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD9YccohMMh/f8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/ANXwMHPPPPLJdf8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/muE6zzzzzzy4jPT/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AmiYwzzzzzzzzywxZnf8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A9188888888888888wYz3/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/APu+Tzzzzzzzzzzzzzz7yz3/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A7ivPPPPPPPPPPPPPPPPKEPv/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/APpzzzzzzzzzzzzzzzzzygTf/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wDn888888888888888888oe3/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A3/PAzIscYZ/IOscYk/PKOtf/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP3wO+R4ALMDzPDABZLzyj5f/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A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'
  };
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // this.setByteArray(this.profile.image);
  }
  // tslint:disable-next-line:typedef
  searchPhoto(){
    document.getElementById('file-input').click();
  }
  setByteArray(files): void{
    const reader = new FileReader();
    // this.profile.image = files;
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      const bytes = reader.result;
      console.log(bytes);
      this.profile.imageBytes = bytes.toString();
    };
  }

}
