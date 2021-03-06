import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showMenu = false;
  backgroundImage = '';
  constructor(private api: ApiService, private router: Router ) { }

  ngOnInit() {
    this.api.getBackgroundImage.get().promise()
      .then((res) => {
        this.backgroundImage = res['result'][0];
        console.log(this.backgroundImage);
      })
      .catch((e) => console.log(e.error));
  }

  goMenu() {
    this.showMenu = true;
  }

  goLogin() {
    this.router.navigate(['login']);
  }

  goInterest() {
    this.router.navigate(['interest']);
  }

  goAllProjects() {
    this.router.navigate(['actitude/all']);
  }

  onCancel() {
    this.showMenu = false;
  }

  onLogout() {
    this.showMenu = false;
  }


}
