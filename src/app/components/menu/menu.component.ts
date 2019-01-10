import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { GFTService } from '../../_utils/gft.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu: any = [
    {name : 'Cuentas', url: 'accounts', icon: 'assignment_ind'}
  ]
  public image: string = 'assets/user.jpg';

  constructor(
    public _SweetalertsService: SweetalertsService,
    private route: ActivatedRoute,
    private router: Router,
    public _GFTService: GFTService
  ) {

  }

  ngOnInit() {

  }

  pictureChange(e){
    let reader = new FileReader();
    reader.onload = (e : any) => {
      this.image = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  logout() {
    this._SweetalertsService.confirmAlert('Cerrar sesión', '¿Está seguro de realizar esta acción?')
    .then((res) => {
          if(res.value){
            this.router.navigate(['/']);
            localStorage.removeItem('tokenGFT')
          } else {
            console.log(res)
          }          
        },
        err => {
          console.log(err);
        })
    .catch((err) => {
      console.log(err, 'No')
    });
  }

}
