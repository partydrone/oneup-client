import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuItems = [
    { path: '/login', label: 'Sign in' },
    { path: '/registration', label: 'Sign up' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
