import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navList = [
    {
      heading: 'Components',
      icon: 'dashboard',
      link: '/components',
      pages: [
        {
          title: 'Components with Children',
          link: '/settings/advanced',
          icon: '',
        },

        {
          title: 'Forms',
          link: '/settings/advanced',
          icon: '',
        },
        {
          title: 'Components depending on Services',
          link: '/components/dependencies',
          icon: '',
        },
      ],
    },
    {
      heading: 'Services',
      icon: 'settings',
      link: '/settings',
      pages: [],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
