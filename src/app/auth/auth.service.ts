import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { MOCK_USERS } from "../data/mockUsers";
import { User } from "../data/user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  loginUser(username: string, password: string) {
    const user: User = MOCK_USERS[MOCK_USERS.findIndex(u => u.username == username && u.password == password)];
    if (this.user) {
      this.user.next(user);
      localStorage.setItem('userData', JSON.stringify(user));
      this.router.navigate([""]);
    }
  }

  getUser(){
    return this.user.value?.username
  }

  getUserRole(){
    return this.user.value?.role
  }

  userExists(username: string, password: string) {
    return MOCK_USERS.findIndex(u => u.username == username && u.password == password);
  }

  autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem("userData")!);
    if (!userData) {
      return;
    }
    const loadedUser = userData;
    if (loadedUser) {
      this.user.next(loadedUser);
    }
  }

  logout(): void {
    this.user.next(null);
    this.router.navigate(["/auth"]);
    localStorage.removeItem("userData");

  }
}
