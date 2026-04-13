import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ViewportService {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly viewportState = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .pipe(
        map(state => ({
          isMobile: state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small],
          isTablet: state.breakpoints[Breakpoints.Medium],
        })),
      ),
    {
      initialValue: { isMobile: false, isTablet: false },
    },
  );

  readonly isMobile = computed(() => this.viewportState().isMobile);
  readonly isTablet = computed(() => this.viewportState().isTablet);
  readonly isDesktop = computed(() => !this.isMobile() && !this.isTablet());
}
