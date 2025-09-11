import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-unauthorized',
  imports: [RouterLink, MatButtonModule],
  template: `
    <div class="unauthorized-container">
      <svg class="unauthorized-illustration" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Lock Body -->
        <path d="M250,180 h100 v-50 a50,50 0 0,0 -100,0 z" class="lock-body" />

        <!-- Lock Base -->
        <rect x="200" y="180" width="200" height="150" rx="10" class="lock-base" />

        <!-- Keyhole -->
        <path d="M290,240 a20,20 0 1,0 20,0 l0,30" class="keyhole" />

        <!-- Shield Elements -->
        <path d="M300,100 l100,40 v60 a150,150 0 0,1 -100,150
                 a150,150 0 0,1 -100,-150 v-60 z"
              class="shield" />

        <!-- X Mark -->
        <g class="x-mark">
          <path d="M280,170 l40,40" />
          <path d="M320,170 l-40,40" />
        </g>

        <!-- Error Code -->
        <text x="300" y="350" class="error-code">401</text>
      </svg>

      <h1>{{ title() }}</h1>
      <p>{{ message() }}</p>
      <button mat-raised-button color="primary" routerLink="/login">
        Sign In
      </button>
    </div>
  `,
  styles: [`
    .unauthorized-container {
      display: grid;
      place-items: center;
      gap: 1.5rem;
      padding: 2rem;
      text-align: center;
      min-block-size: 100vh;
    }

    .unauthorized-illustration {
      width: min(100%, 600px);
      height: auto;
    }

    .lock-body {
      fill: var(--mat-sys-primary);
      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
      transform-origin: center;
    }

    .lock-base {
      fill: var(--mat-sys-primary);
    }

    .keyhole {
      fill: none;
      stroke: var(--mat-sys-on-primary);
      stroke-width: 8;
    }

    .shield {
      fill: none;
      stroke: var(--mat-sys-error);
      stroke-width: 4;
      opacity: 0.5;
      animation: pulse 2s infinite;
    }

    .x-mark {
      stroke: var(--mat-sys-error);
      stroke-width: 6;
      stroke-linecap: round;
      animation: fadeIn 0.5s ease-in;
    }

    .error-code {
      font-size: 48px;
      font-weight: bold;
      fill: var(--mat-sys-primary);
      text-anchor: middle;
    }

    @keyframes shake {
      10%, 90% { transform: translate3d(-1px, 0, 0); }
      20%, 80% { transform: translate3d(2px, 0, 0); }
      30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
      40%, 60% { transform: translate3d(4px, 0, 0); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.05); opacity: 0.7; }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    h1 {
      font-size: 2rem;
      margin: 0;
      color: var(--mat-sys-on-surface);
    }

    p {
      color: var(--mat-sys-on-surface-variant);
      margin-bottom: 1rem;
      max-width: 60ch;
    }
  `]
})
export class Unauthorized {
  private readonly titles = [
    'Access Denied',
    'Unauthorized Access',
    'Authentication Required'
  ];

  private readonly messages = [
    'Sorry, you don\'t have permission to access this resource.',
    'Please sign in to continue.',
    'Your session may have expired. Please sign in again.'
  ];

  readonly title = computed(() =>
    this.titles[Math.floor(Math.random() * this.titles.length)]
  );

  readonly message = computed(() =>
    this.messages[Math.floor(Math.random() * this.messages.length)]
  );
}
