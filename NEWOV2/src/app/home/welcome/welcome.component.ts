import { Component, OnInit } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import * as $ from 'jquery';
import { PlyrComponent, PlyrModule } from 'ngx-plyr';
// import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public lat: any;
  public lng: any;

  country:any;
  isSubscribe:boolean=false;
  isNotSubscribe:boolean=false;

  // isBD:boolean;
  // isNotBD:boolean;


  customOptionsforNew: OwlOptions  = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  customOptionsforcelibraty: OwlOptions  = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };


  customOptionsforinside: OwlOptions  = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 10,
    autoplay:true,
    navSpeed: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
        stagePadding: 50
      },
      400: {
        items: 2,
        stagePadding: 30
      },
      740: {
        items: 2,
        stagePadding: 30
      },
      940: {
        items: 2,
        stagePadding: 30 
      }
    },
    nav: false
  };

  constructor(private router:Router,private dataService: ApiService) { 
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
          if(res.cnt ==1){
            this.isSubscribe = true;
            this.isNotSubscribe = false;
          }
          else{
            this.isSubscribe = false;
            this.isNotSubscribe = true;
          }
      });
    } 
    else{
      this.isSubscribe = false;
      this.isNotSubscribe = true;
    }
  }
  

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getCurrentLocation(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
        this.dataService.getcountry(this.lat,this.lng).subscribe((result) => {      
          this.country = result.countryCode;
          localStorage.setItem('current_country', this.country);
        });   
      });
    }
    else {
      alert("Geolocation is not supported by this browser");
    }
  }

  checkAuth(value='newoclan'){
    if(localStorage.getItem('token')){
      this.dataService.userInSubcription(localStorage.getItem('token')).subscribe((res)=>{
        if(value=='newoclan'){
          if(res.cnt ==1){
            this.router.navigate(['/newoclan']);
          }
          else{
            this.router.navigate(['/paynow']);
          }
        }else if(value=='profile'){
          this.router.navigate(['/profile']);
        }         
      });
    }
    else{      
      this.router.navigate(['/login']);   
    }
  }

  getPassedData(){
    let jonty_video=<HTMLVideoElement>document.getElementById('vid1');
    let dev_video=<HTMLVideoElement>document.getElementById('vid2');
    let sunil_video=<HTMLVideoElement>document.getElementById('vid3');
    let lara_video=<HTMLVideoElement>document.getElementById('vid4');
    jonty_video.pause();
    dev_video.pause();
    sunil_video.pause();
    lara_video.pause();
  }

}
