import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { GFTService } from '../../_utils/gft.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userLogin: FormGroup;
  public userRegister: FormGroup;
  public subscribe: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public _GFTService: GFTService,
    public _SweetalertsService: SweetalertsService
  ) {
    this.userLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });

    this.userRegister = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  loginUser() {
    let result;
    this._SweetalertsService.loadingAlert()
    this._GFTService.loginPost('auth/user/authenticate', this.userLogin.value).subscribe(res=>{
      result = res;
      this._SweetalertsService.closeSwal()
      this._GFTService.setToStorage('tokenGFT', result.token)
      this.router.navigate(['dashboard/accounts'])
    }, err => {
      this._SweetalertsService.closeSwal()
      this._SweetalertsService.typeAlert('Oops..', err, 'error')
    })
  }

  registerUser(){
    let result;
    this._SweetalertsService.loadingAlert()
    this._GFTService.loginPost('auth/user/create', this.userRegister.value).subscribe(res=>{
      result = res;
      this._SweetalertsService.closeSwal()
      this._SweetalertsService.typeAlert('Registro Exitoso','Ahora puedes iniciar sesión','success')
      this.userRegister.reset();
      this.subscribe = false;
    }, err => {
      this._SweetalertsService.closeSwal()
      this._SweetalertsService.typeAlert('Oops..', err, 'error')
      this.userRegister.reset();
    })
  }

}
