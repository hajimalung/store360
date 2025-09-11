import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-data',
  imports: [MatButtonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="no-data-container">
      <svg class="no-data-illustration" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <!-- Empty Box -->
        <g class="box">
          <path d="M200,200 v100 h200 v-100 l-30,-30 h-140 z" class="box-front"/>
          <path d="M370,170 v100 l30,-30 v-100 z" class="box-side"/>
          <path d="M200,200 l30,-30 h140 l30,30" class="box-top"/>

          <!-- Box Flaps -->
          <path d="M215,185 l15,-15 v-20 l-15,15 z" class="box-flap"/>
          <path d="M385,185 l-15,-15 v-20 l15,15 z" class="box-flap"/>
        </g>

        <!-- Floating Data Elements -->
        @for (item of dataItems(); track item) {
          <g [attr.transform]="'translate(' + item.x + ',' + item.y + ')'">
            <rect width="40" height="6" rx="2" class="data-item"/>
            <circle cx="50" cy="3" r="3" class="data-dot"/>
          </g>
        }

        <!-- Search Icon -->
        <g class="search-icon" transform="translate(260,150) scale(0.8)">
          <circle cx="40" cy="40" r="20" class="search-circle"/>
          <path d="M55,55 l15,15" class="search-handle"/>
        </g>

        <!-- Message -->
        <text x="300" y="340" class="message-text">{{ message() }}</text>
      </svg>

      @if (showAction()) {
        <button mat-raised-button
                color="primary"
                [routerLink]="actionLink()"
                class="action-button">
          {{ actionText() }}
        </button>
      }
    </div>
  `,
  styles: [`
    .no-data-container {
      display: grid;
      place-items: center;
      gap: 2rem;
      padding: 2rem;
      text-align: center;
    }

    .no-data-illustration {
      width: min(100%, 400px);
      height: auto;
    }

    .box-front, .box-side, .box-top {
      fill: var(--mat-sys-surface-container-high);
      stroke: var(--mat-sys-outline);
      stroke-width: 2;
    }

    .box-flap {
      fill: var(--mat-sys-surface-container);
      stroke: var(--mat-sys-outline-variant);
      stroke-width: 2;
      animation: flap 3s ease-in-out infinite;
    }

    .data-item {
      fill: var(--mat-sys-primary);
      opacity: 0.6;
      animation: float 3s ease-in-out infinite;
    }

    .data-dot {
      fill: var(--mat-sys-primary);
      animation: pulse 2s ease-in-out infinite;
    }

    .search-circle {
      fill: none;
      stroke: var(--mat-sys-secondary);
      stroke-width: 4;
    }

    .search-handle {
      stroke: var(--mat-sys-secondary);
      stroke-width: 4;
      stroke-linecap: round;
    }

    .message-text {
      fill: var(--mat-sys-on-surface);
      font-size: 16px;
      text-anchor: middle;
    }

    .action-button {
      margin-top: 1rem;
    }

    @keyframes flap {
      0%, 100% { transform: rotateX(0); }
      50% { transform: rotateX(30deg); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.2); opacity: 1; }
    }
  `]
})
export class NoData {
  message = input<string>('No data available');
  showAction = input<boolean>(false);
  actionText = input<string>('Add New');
  actionLink = input<string>('/');

  readonly dataItems = signal([
    { x: 250, y: 100 },
    { x: 270, y: 120 },
    { x: 290, y: 140 },
    { x: 310, y: 160 }
  ]);
}
