import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  showPassword = false; //handle the state of password show hide
  showPassword_confirm = false; //handle the state of confirm password's show hide
  passwordToggleIcon = "eye";
  passwordToggleIcon_confirm = "eye";
  passwordConfirmationInput;

  private loginFormData: FormGroup; //form builder service
  get name() {
    return this.loginFormData.get("name");
  }
  get last_name() {
    return this.loginFormData.get("last_name");
  }
  get email() {
    return this.loginFormData.get("email");
  }
  get password() {
    return this.loginFormData.get("password");
  }
  get confirm_password() {
    return this.loginFormData.get("confirm_password");
  }
  get phone() {
    return this.loginFormData.get("phone");
  }
  get gender() {
    return this.loginFormData.get("gender");
  }
  get address() {
    return this.loginFormData.get("address");
  }
  public errorMessages = {
    name: [
      {
        type: "required",
        message: "Please Enter First Name",
      },
      {
        type: "maxlength",
        message: "Name cant be longer than  20 characters",
      },
    ],
    last_name: [
      {
        type: "required",
        message: "Please Enter Last Name",
      },
      {
        type: "maxlength",
        message: "Name cant be longer than  20 characters",
      },
    ],
    email: [
      {
        type: "required",
        message: "Email is required",
      },
      {
        type: "pattern",
        message: "Please enter the valid email address",
      },
    ],
    password: [
      {
        type: "required",
        message: "Password is required",
      },
      {
        type: "maxlength",
        message: "Recommend max password is  15 characters",
      },
      {
        type: "minlength",
        message: "password should be longer than   6 characters",
      },
    ],
    confirm_password: [
      {
        type: "required",
        message: "Confirm Password is required",
      },
      {
        type: "maxlength",
        message: "Recommend max password is  15 characters",
      },
      {
        type: "minlength",
        message: "password should be longer than   6 characters",
      },
    ],
    phone: [
      {
        type: "required",
        message: "Phone Number is required",
      },
      {
        type: "pattern",
        message: "Please enter the valid phone Number",
      },
    ],
    address: [
      {
        type: "required",
        message: "Address is required",
      },
      {
        type: "maxlength",
        message: "Address cant be longer than  30 characters",
      },
    ],
    gender: [
      {
        type: "required",
        message: "Gender is required",
      },
    ],
  };

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginFormData = this.formBuilder.group(
      {
        name: ["", [Validators.required, Validators.maxLength(20)]],
        last_name: ["", [Validators.required, Validators.maxLength(20)]],
        email: [
          "",
          [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ],
        ],
        phone: [
          "",
          [
            Validators.required,
            Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"),
          ],
        ],
        password: [
          "",
          [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(5),
          ],
        ],
        confirm_password: [
          "",
          [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(5),
          ],
        ],
        gender: ["", [Validators.required]],
        address: ["", [Validators.required, Validators.maxLength(30)]],
      },
      {
        validator: this.checkIfMatchingPasswords(
          "password",
          "confirm_password"
        ),
      }
    );
  }
  public submit() {
    console.log(this.loginFormData.value);
    this.router.navigate(["home"]);
  }
  ngOnInit() { }
  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.showPassword
      ? (this.passwordToggleIcon = "eye-Off")
      : (this.passwordToggleIcon = "eye");
  }
  togglePassword1(): void {
    this.showPassword_confirm = !this.showPassword_confirm;
    this.showPassword_confirm
      ? (this.passwordToggleIcon_confirm = "eye-Off")
      : (this.passwordToggleIcon_confirm = "eye");
  }
  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
        this.passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== this.passwordConfirmationInput.value) {
        return this.passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return this.passwordConfirmationInput.setErrors(null);
      }
    };
  }
  routeToRegister(){
    this.router.navigate(["register"]);
  }
}
