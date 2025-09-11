import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, MatButtonModule],
  template: `
    <div class="not-found-container">
      <svg class="not-found-illustration" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <!-- 404 Text -->
        <text x="50%" y="50%" text-anchor="middle" class="error-text">404</text>
        <!-- Decorative Elements -->
        <circle cx="150" cy="150" r="20" class="circle-1" />
        <circle cx="450" cy="250" r="15" class="circle-2" />
        <path d="M 200 100 Q 300 50 400 100" class="curve-1" fill="none" />
        <path d="M 150 300 Q 300 350 450 300" class="curve-2" fill="none" />
      </svg>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <button mat-raised-button color="primary" routerLink="/">
        Back to Home
      </button>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: grid;
      place-items: center;
      gap: 1rem;
      padding: 2rem;
      text-align: center;
    }

    .not-found-illustration {
      width: min(100%, 600px);
      height: auto;
      margin-bottom: 2rem;
    }

    .error-text {
      font-size: 120px;
      font-weight: bold;
      fill: var(--mat-sys-primary);
      animation: float 3s ease-in-out infinite;
    }

    .circle-1, .circle-2 {
      fill: var(--mat-sys-secondary);
      opacity: 0.3;
      animation: pulse 2s ease-in-out infinite;
    }

    .curve-1, .curve-2 {
      stroke: var(--mat-sys-primary);
      stroke-width: 2;
      stroke-dasharray: 10;
      animation: dash 20s linear infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.2); opacity: 0.5; }
    }

    @keyframes dash {
      to { stroke-dashoffset: 1000; }
    }

    h1 {
      font-size: 2rem;
      margin: 0;
      color: var(--mat-sys-on-surface);
    }

    p {
      color: var(--mat-sys-on-surface-variant);
      margin-bottom: 2rem;
    }
  `]
})
export class NotFound {}
