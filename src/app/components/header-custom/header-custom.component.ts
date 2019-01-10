import { Component, OnInit } from '@angular/core';
import { SweetalertsService } from '../../_utils/sweetalerts.service';
import { GFTService } from '../../_utils/gft.service';

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss']
})
export class HeaderCustomComponent implements OnInit {

  constructor(public _GFTService: GFTService) {

  }

  ngOnInit() {
    
  }

  toggleMenu(){
    this._GFTService.show = !this._GFTService.show;
    if(this._GFTService.show){
    	document.body.style.overflowY = "hidden";
    } else {
    	document.body.style.overflowY = "inherit";
    }
  }

}
