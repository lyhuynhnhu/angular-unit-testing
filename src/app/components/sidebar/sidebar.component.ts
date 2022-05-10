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
      link: '/components',
      pages: [
        {
          title: 'Basic Components',
          link: '/components/basic',
        },
        {
          title: 'Components with Children',
          link: '/components/ children',
        },

        {
          title: 'Forms',
          link: '/components/form',
        },
        {
          title: 'Components depending on Services',
          link: '/components/dependency',
        },
      ],
    },
    {
      heading: 'Services',
      link: '/services',
      pages: [
        {
          title: 'Basic service',
          link: '/services/basic',
        },
        {
          title: 'Dependent service',
          link: '/services/dependent',
        },
        {
          title: 'HTTP service',
          link: '/services/http',
        },
      ],
    },
    {
      heading: 'Pipes',
      link: '/pipes',
      pages: [
        {
          title: 'Basic Directives',
          link: '/pipes',
        },
      ],
    },
    {
      heading: 'Directives',
      link: '/directives',
      pages: [
        {
          title: 'Attribute Directives',
          link: '/directives/attribute',
        },
        {
          title: 'Structural Directives',
          link: '/directives/structural',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
