import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Job Offers',
    },
    {
      label: 'Your Evolution',
    },
    {
      label: 'Our Communities',
    },
    {
      label: 'Our Offices',
    },
    {
      label: 'Contact Us',
      icon: 'arrow_right_alt',
    },
    {
      label: 'Main Website',
      icon: 'call_made',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
