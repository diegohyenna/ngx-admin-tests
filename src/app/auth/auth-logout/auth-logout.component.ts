import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-auth-logout",
  template: "",
})
export class AuthLogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.removeItem("login");
    this.router.navigate(["/auth"]);
  }
}
