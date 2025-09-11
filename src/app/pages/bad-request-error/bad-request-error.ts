import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bad-request',
  imports: [RouterLink, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bad-request-container">
      <svg class="bad-request-illustration" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Document with Error -->
        <g class="document">
          <!-- Paper -->
          <path d="M200,100 h150 l50,50 v150 h-200 z" class="paper" />
          <!-- Folded Corner -->
          <path d="M350,100 v50 h50" class="fold" />

          <!-- Error Lines -->
          @for (line of errorLines(); track line) {
            <line [attr.x1]="220"
                  [attr.y1]="line.y"
                  [attr.x2]="380"
                  [attr.y2]="line.y"
                  class="error-line"
                  [class.highlight]="line.highlight" />
          }
        </g>

        <!-- Error Symbol -->
        <g class="error-symbol">
          <circle cx="300" cy="200" r="40" class="error-circle" />
          <text x="300" y="215" class="error-text">400</text>
        </g>

        <!-- Animated Code Brackets -->
        <g class="brackets">
          <path d="M150,160 l30,-30 l-30,-30" class="bracket" />
          <path d="M450,160 l-30,-30 l30,-30" class="bracket" />
        </g>

        <!-- Glitch Effect -->
        @for (glitch of glitches(); track glitch) {
          <rect [attr.x]="glitch.x"
                [attr.y]="glitch.y"
                [attr.width]="glitch.width"
                height="2"
                class="glitch" />
        }
      </svg>

      <h1>{{ title() }}</h1>
      <p>{{ message() }}</p>
      <button mat-raised-button color="primary" routerLink="/">
        Back to Home
      </button>
    </div>
  `,
  styles: [`
    .bad-request-container {
      display: grid;
      place-items: center;
      gap: 1.5rem;
      padding: 2rem;
      text-align: center;
      min-block-size: 100vh;
    }

    .bad-request-illustration {
      width: min(100%, 600px);
      height: auto;
    }

    .paper {
      fill: var(--mat-sys-surface-container-high);
      stroke: var(--mat-sys-outline);
      stroke-width: 2;
    }

    .fold {
      fill: none;
      stroke: var(--mat-sys-outline-variant);
      stroke-width: 2;
    }

    .error-line {
      stroke: var(--mat-sys-outline-variant);
      stroke-width: 2;

      &.highlight {
        stroke: var(--mat-sys-error);
        stroke-width: 3;
        animation: flash 1s infinite;
      }
    }

    .error-circle {
      fill: var(--mat-sys-error);
      animation: pulse 2s infinite;
    }

    .error-text {
      fill: white;
      font-size: 24px;
      font-weight: bold;
      text-anchor: middle;
      dominant-baseline: middle;
    }

    .bracket {
      fill: none;
      stroke: var(--mat-sys-primary);
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
      animation: bracket-move 3s infinite;
    }

    .glitch {
      fill: var(--mat-sys-error);
      opacity: 0.7;
      animation: glitch-animation 0.5s infinite;
    }

    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes bracket-move {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(10px); }
    }

    @keyframes glitch-animation {
      0%, 100% { opacity: 0; }
      50% { opacity: 0.7; }
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
export class BadRequest {
  readonly errorLines = signal([
    { y: 140, highlight: true },
    { y: 170, highlight: false },
    { y: 200, highlight: true },
    { y: 230, highlight: false },
    { y: 260, highlight: true }
  ]);

  readonly glitches = signal([
    { x: 220, y: 140, width: 40 },
    { x: 300, y: 170, width: 60 },
    { x: 250, y: 200, width: 30 }
  ]);

  private readonly titles = [
    'Bad Request',
    'Invalid Request',
    'Syntax Error'
  ];

  private readonly messages = [
    'The request could not be understood by the server.',
    'Please check your request format and try again.',
    'The request syntax is malformed or invalid.'
  ];

  readonly title = computed(() =>
    this.titles[Math.floor(Math.random() * this.titles.length)]
  );

  readonly message = computed(() =>
    this.messages[Math.floor(Math.random() * this.messages.length)]
  );
}
