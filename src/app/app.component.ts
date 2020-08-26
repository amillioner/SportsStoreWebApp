import { Component } from '@angular/core';

// @Component({
//   selector: 'app',
//   template: `<div class="bg-success p-2 text-center text-white">This is StortsStore</div>`
// })

@Component({
  selector: "app",
  // template: "<store></store>"
  template: "<router-outlet></router-outlet>"
})
export class AppComponent { }
