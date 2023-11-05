import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeModule } from "../@theme/theme.module";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
} from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthLogoutComponent } from "./auth-logout/auth-logout.component";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent, AuthLogoutComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbLayoutModule,
    NbInputModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    NbFormFieldModule,
    // NbTabsetModule,
    // NbActionsModule,
    // NbRadioModule,
    // NbSelectModule,
    // NbListModule,
    NbIconModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
