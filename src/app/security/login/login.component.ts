import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string | null;
  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [
        '', 
        Validators.compose([Validators.required, Validators.minLength(4),Validators.email])],
      password: ['', Validators.required],
    });
  }

  submit(){
    console.log('submit method')
    if(this.loginForm.valid){
      //console.log('username: ', this.loginForm.controls.username.value)
      //console.log('password: ', this.loginForm.controls.username.value)
      this.authService
        .loginWithEmail(
          this.loginFormControls.username.value,
          this.loginFormControls.password.value
        )
        .then((result)=>{})
        .catch((error)=>{
          console.log(error)
          this.error = 'Usuario/Clave es incorrecta'
        });
    }else{
      console.log('Formulario es invalido')
    }
  }

  get loginFormControls(){
    return this.loginForm.controls
  }
 
  
}
