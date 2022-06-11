import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
  }

}
