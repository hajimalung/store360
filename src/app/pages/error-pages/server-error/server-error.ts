import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-server-error',
  imports: [RouterLink, MatButtonModule],
  templateUrl:'./server-error.html',
  styleUrls:['./server-error.scss']
})
export class ServerError {
  private readonly messages = [
    'Our servers are taking a coffee break.',
    'Something went wrong on our end.',
    'We\'re experiencing technical difficulties.',
    'Our engineers are on it!'
  ];

  readonly serverUnits = signal([0, 1, 2, 3]); // Server rack units

  readonly errorMessage = computed(() =>
    this.messages[Math.floor(Math.random() * this.messages.length)]
  );
}
