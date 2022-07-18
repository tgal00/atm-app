import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  error: number = 0;

  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit() {

    let username = this.form.value.username;
    let password = this.form.value.password;


    this.error = this.auth.userExists(username,password);
    if (this.error != -1) {
      this.auth.loginUser(username,password);
    }


    this.form.reset();
  }

}
