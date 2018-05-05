import {AfterViewInit, Component, OnInit, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
// import {BsModalRef, BsModalService} from "ngx-bootstrap";
// import {HashService} from "../../services/hash.service";
// import {HttpService} from "../../services/http.service";
// import {AuthorizationService} from "../../services/authefication.service";
// import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.scss'],
  providers: [],
})
export class GreetingPageComponent implements AfterViewInit, OnInit {

  address: string;
  password: string;

  newAdress: string;
  newPassword: string;
  checkPassword: string;

  modalRef: BsModalRef;
  requestValidation = [true, true];

  @ViewChildren('range') range: QueryList<any>;
  @ViewChildren('header') header: QueryList<any>;

  // public carouselTile: NgxCarousel;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    // this.carouselTile = {
    //   grid: {xs: 1, sm: 2, md: 3, lg: 5, all: 0},
    //   slide: 5,
    //   speed: 400,
    //   interval: 5000,
    //   animation: 'lazy',
    //   point: {
    //     visible: true,
    //     pointStyles: `
    //       .ngxcarouselPoint {
    //         list-style-type: none;
    //         text-align: center;
    //         padding: 12px;
    //         margin: 0;
    //         white-space: nowrap;
    //         overflow: auto;
    //         box-sizing: border-box;
    //       }
    //       .ngxcarouselPoint li {
    //         border-radius: 50%;
    //         border: solid rgb(61, 62, 78) 1px;
    //         background-color: #fff;
    //         display: inline-block;
    //         padding: 4px;
    //         margin: 0 3px;
    //         transition-timing-function: cubic-bezier(.17, .67, .83, .67);
    //         transition: .4s;
    //       }
    //       .ngxcarouselPoint li.active {
    //           background-color: #1198e6;
    //           transform: scale(1.2);
    //       }`
    //   },
    //   load: 2,
    //   loop: true,
    //   touch: true,
    // }
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    let header = this.header.toArray();
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        header[0].nativeElement.style.position = 'fixed';
      }
      else {
        header[0].nativeElement.style.position = 'absolute';
      }
    };
    let arrayOfRanges = this.range.toArray();
    arrayOfRanges[0].nativeElement.addEventListener('change', function () {
      changeData(0, this.value);
    }, false);
    arrayOfRanges[0].nativeElement.addEventListener('input', function () {
      changeData(0, this.value)
    }, false);
    arrayOfRanges[1].nativeElement.addEventListener('change', function () {
      changeData(1, this.value)
    }, false);
    arrayOfRanges[1].nativeElement.addEventListener('input', function () {
      changeData(1, this.value)
    }, false);
    arrayOfRanges[2].nativeElement.addEventListener('change', function () {
      changeData(2, this.value)
    }, false);
    arrayOfRanges[2].nativeElement.addEventListener('input', function () {
      changeData(2, this.value)
    }, false);

  }

  /* Function,which open Modal windows for login or registration */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  /* Function,which check validations in all fields in login Modal window and send data to authorization service */
  login() {
    if (!this.address || !this.password) {
      this.address = '';
      this.password = '';
    }
    if (this.validateEmail(this.address)) {
      this.requestValidation[0] = true;
    }
    else this.requestValidation[0] = false;
    if (this.validatePassword(this.password)) {
      this.requestValidation[1] = true;
    }
    else this.requestValidation[1] = false;
    if (this.requestValidation[0] && this.requestValidation[1]) {
     // this.auth.authorization(this.address, this.password);
      // console.log(this.hash.makeHash(this.password));
      this.modalRef.hide();
    }
  }

  /* Function,which add danger notification in login or registration Modal window */
  openDanger() {
    if (this.requestValidation[0] == true && this.requestValidation[1] == true) {
      return true;
    }
    else {
      return false;
    }
  }

  /* Function,which send data from registration Modal window to authorization service  */
  registration() {
    //this.auth.registration(this.newAdress, this.newPassword, this.checkPassword);
    this.modalRef.hide();
  }

  /* Functions,which describes rules of the validation in the Modal windows  */
  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(password) {
    return password.length > 6;
  }

  /* Functions,which open/close notifications after actions */
  checkAuthefication() {
    if (sessionStorage.getItem('login') == 'open')
      return true;
    else false;
  }

  checkRegistration() {
    if (sessionStorage.getItem('registration') == 'open')
      return true;
    else false;
  }

  checkLogin() {
    if (sessionStorage.getItem('unsuccess') == 'open')
      return true;
    else false;
  }

  closeAlert() {
    sessionStorage.setItem('login', 'close');
    sessionStorage.setItem('unsuccess', 'close');
    sessionStorage.setItem('registration', 'close');
  }

  /* Function,which send data from registration Modal window to authorization service to confirm registration with message on user e-mail */
  send() {
   // this.auth.sendMessageRegistration(this.newAdress);
  }
}

/* Function,which change data in calculator and considers result */
function changeData(i, value) {
  document.getElementById(i).innerHTML = value;
  changeResualt();
}

function changeResualt() {
  let resultData = 0;
  for (let i = 0; i < 3; i++) {
    resultData += +document.getElementById(`${i}`).innerHTML;
  }
  document.getElementById('result-label').innerHTML = `${Math.round(resultData)} EUR`;
}





