import { Component } from '@angular/core';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {
  switchForm(formId: string): void {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const selectedForm = document.getElementById(formId);
  
    if (signupForm && signinForm && selectedForm) {
      signupForm.style.display = 'none';
      signinForm.style.display = 'none';
      selectedForm.style.display = 'block';
    }
  }
  

}
