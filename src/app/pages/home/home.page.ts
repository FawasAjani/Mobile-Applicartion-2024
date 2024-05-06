import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home', // Component selector
  templateUrl: 'home.page.html',// Template URL
  styleUrls: ['home.page.scss'], // Stylesheet URLs
})
export class HomePage {

  constructor(private router: Router) {}

  // Define methods for activities, food, and nightlife
  activities() {
    // Navigate to the activities page
    this.router.navigate(['/activities']);
  }

  food() {
    // Navigate to the food page
    this.router.navigate(['/food']);
  }

  nightlife() {
    // Navigate to the nightlife page
    this.router.navigate(['/nightlife']);
  }
}

