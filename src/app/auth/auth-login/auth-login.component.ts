import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.scss"],
})
export class AuthLoginComponent implements OnInit {
  showPassword = false;
  formLogin: FormGroup;
  loading = false;

  constructor(private form: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.form.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  getInputType() {
    if (this.showPassword) {
      return "text";
    }
    return "password";
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  getStatusToFormInput(input: string) {
    let inputForm = this.formLogin.get(input);
    return inputForm.invalid && inputForm.dirty
      ? "danger"
      : !inputForm.invalid && inputForm.dirty
      ? "success"
      : "basic";
  }

  login(inputs: any) {
    console.log(inputs);

    if (inputs.email && inputs.password) {
      this.loading = true;
      this.formLogin.get("email")?.enable();
      this.formLogin.get("password")?.enable();

      this.router
        .navigate(["/pages"])
        .then(() => {
          localStorage.setItem("login", JSON.stringify(inputs));
          this.loading = false;
        })
        .catch(() => {
          this.formLogin.get("email")?.disable();
          this.formLogin.get("password")?.disable();
          this.loading = false;
        });
    }
  }
}
