import { Component, OnInit } from '@angular/core';
import {ToastComponent} from '../../../shared/toast/toast.component';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor(
      public toast: ToastComponent
  ) { }

  ngOnInit() {
  }

}
