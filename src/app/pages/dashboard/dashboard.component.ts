import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GFTService } from '../../_utils/gft.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _GFTService: GFTService
  ) {
    this._GFTService.getDecodedAccessToken(localStorage.getItem('tokenGFT'))
  }

  ngOnInit() {

  }

}
