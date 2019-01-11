import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { GFTService } from '../../_utils/gft.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  public accounts: any = [];
  public selected: any;
  public type_cards: any = [];
  public newAccount: any = {}

  constructor(
    public _SweetalertsService:SweetalertsService,
    private route: ActivatedRoute,
    private router: Router,
    public _GFTService: GFTService
  ) {

  }

  ngOnInit() {
    this.getAccounts()
    this.getTypeCards()
  }

  getAccounts(){
    let result;
    this._GFTService.getBase('accounts').subscribe(res=>{
      result = res;
      this.accounts = result.response;
      if(this.accounts){
        this.selected = this.accounts[0]
      }
    })
  }

  getTypeCards(){
    let result;
    this._GFTService.getBase('catalogs/cards').subscribe(res=>{
      result = res;
      this.type_cards = result.response.type_cards;
    })
  }

  newCard(){
    let result;
    this._SweetalertsService.selectAlert(this.type_cards)
    .then(res=>{
      if(res.value){
        this.newAccount = {
          userId: this._GFTService.decoded.id,
          type: this.type_cards[res.value].type,
          name: this.type_cards[res.value].name
        }
        this._SweetalertsService.loadingAlert()
        this._GFTService.postBase('accounts', this.newAccount)
        .subscribe(res=>{
          result = res;
          this._SweetalertsService.closeSwal()
          this._SweetalertsService.typeAlert('Confirmado', result.success, 'success')
        }, err=>{
          this._SweetalertsService.closeSwal()
          this._SweetalertsService.typeAlert('Oops..', err, 'error')
        })
      }
    }, err => {})
  }

}
