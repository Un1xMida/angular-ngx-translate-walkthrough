import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      This is a library component: Translate text:
      {{ 'LIB.SOMETHING' | translate }}
    </p>
  `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
