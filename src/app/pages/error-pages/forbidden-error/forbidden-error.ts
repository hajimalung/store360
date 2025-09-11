import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forbidden',
  imports: [RouterLink, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="forbidden-container">
      <svg class="forbidden-illustration" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Security Gate -->
        <g class="gate">
          <path d="M150,100 v200 M450,100 v200" class="gate-posts"/>
          <g class="gate-bars">
            @for (pos of barPositions(); track pos) {
              <path [attr.d]="'M150,' + pos + ' h300'" class="bar" />
            }
          </g>

          <!-- Stop Sign -->
          <path d="M300,180 l40,0 l28,28 l0,40 l-28,28 l-40,0 l-28,-28 l0,-40 z"
                class="stop-sign" />
          <text x="300" y="220" class="stop-text">403</text>
        </g>

        <!-- Warning Stripes -->
        <g class="warning-stripes">
          @for (i of [0, 1, 2, 3]; track i) {
            <rect [attr.x]="140 + (i * 80)"
                  y="300"
                  width="40"
                  height="20"
                  class="stripe" />
          }
        </g>

        <!-- Lock Icon -->
        <g class="lock" transform="translate(270,230) scale(0.5)">
          <path d="M20,0 a20,20 0 0,1 40,0 v10 h-10 v-10 a10,10 0 0,0 -20,0 v10 h-10 z" />
          <rect x="10" y="10" width="60" height="45" rx="5" />
        </g>
      </svg>

      <h1>{{ title() }}</h1>
      <p>{{ message() }}</p>
      <button mat-raised-button color="primary" routerLink="/">
        Back to Home
      </button>
    </div>
  `,
  styles: [`
    .forbidden-container {
      display: grid;
      place-items: center;
      gap: 1.5rem;
      padding: 2rem;
      text-align: center;
      min-block-size: 100vh;
    }

    .forbidden-illustration {
      width: min(100%, 600px);
      height: auto;
    }

    .gate-posts {
      stroke: var(--mat-sys-primary);
      stroke-width: 8;
      stroke-linecap: round;
    }

    .bar {
      stroke: var(--mat-sys-primary);
      stroke-width: 4;
      stroke-linecap: round;
      animation: slideIn 0.5s ease-out backwards;
    }

    .stop-sign {
      fill: var(--mat-sys-error);
      animation: pulse 2s infinite;
    }

    .stop-text {
      fill: white;
      font-size: 32px;
      font-weight: bold;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    .warning-stripes .stripe {
      fill: var(--mat-sys-error);
      opacity: 0.7;
      animation: flash 2s infinite;
    }

    .lock {
      fill: var(--mat-sys-primary);
      animation: bounce 1s ease-in-out infinite;
    }

    @keyframes slideIn {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes flash {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 0.3; }
    }

    @keyframes bounce {
      0%, 100% { transform: translate(270px, 230px) scale(0.5); }
      50% { transform: translate(270px, 225px) scale(0.5); }
    }

    h1 {
      font-size: 2rem;
      margin: 0;
      color: var(--mat-sys-on-surface);
    }

    p {
      color: var(--mat-sys-on-surface-variant);
      margin-block: 1rem;
      max-width: 60ch;
    }
  `]
})
export class Forbidden {
  readonly barPositions = signal([120, 140, 160, 180, 200, 220, 240, 260, 280]);

  private readonly titles = [
    'Access Forbidden',
    'Permission Denied',
    'No Access Rights'
  ];

  private readonly messages = [
    'You don\'t have permission to access this resource.',
    'This area is restricted.',
    'Contact your administrator for access.'
  ];

  readonly title = computed(() =>
    this.titles[Math.floor(Math.random() * this.titles.length)]
  );

  readonly message = computed(() =>
    this.messages[Math.floor(Math.random() * this.messages.length)]
  );
}
