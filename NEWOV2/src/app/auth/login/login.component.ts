import { Component,  OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  classList: any;


  constructor() {
    $(document).ready(function() {

      $(".show-password, .hide-password").on('click', function() {
        var passwordId = $(this).parents('li:first').find('input').attr('id');
        if ($(this).hasClass('show-password')) {
          $("#" + passwordId).attr("type", "text");
          $(this).parent().find(".show-password").hide();
          $(this).parent().find(".hide-password").show();
        } else {
          $("#" + passwordId).attr("type", "password");
          $(this).parent().find(".hide-password").hide();
          $(this).parent().find(".show-password").show();
        }
      });
    });
   }

  ngOnInit(): void {
    //const togglePassword2 = document.getElementById('togglePassword2');
    //const password2 = document.getElementById('id_password2');
  
   
  //   togglePassword2.addEventListener('click', function (e) {
  //     const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  //     password2.setAttribute('type', type);
  //     this.classList.toggle('fa-eye-slash');
  // });

    
  }
  // tgfun(){
  //   const togglePassword2 = document.getElementById('togglePassword2');
  //   const password2 = document.getElementById('id_password2');
  //   const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  //  password2.setAttribute('type', type);
  //   this.classList.toggle('fa-eye-slash');
  // }

}
