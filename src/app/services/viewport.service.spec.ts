import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { ViewportService } from './viewport.service';

describe('ViewportService', () => {
  const state$ = new BehaviorSubject<BreakpointState>({
    matches: false,
    breakpoints: {
      [Breakpoints.XSmall]: false,
      [Breakpoints.Small]: false,
      [Breakpoints.Medium]: false,
    },
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewportService,
        {
          provide: BreakpointObserver,
          useValue: {
            observe: () => state$.asObservable(),
          },
        },
      ],
    });

    state$.next({
      matches: false,
      breakpoints: {
        [Breakpoints.XSmall]: false,
        [Breakpoints.Small]: false,
        [Breakpoints.Medium]: false,
      },
    });
  });

  it('should expose desktop state by default', () => {
    const service = TestBed.inject(ViewportService);

    expect(service.isMobile()).toBe(false);
    expect(service.isTablet()).toBe(false);
    expect(service.isDesktop()).toBe(true);
  });

  it('should expose mobile state for small breakpoints', () => {
    const service = TestBed.inject(ViewportService);

    state$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.XSmall]: true,
        [Breakpoints.Small]: false,
        [Breakpoints.Medium]: false,
      },
    });

    expect(service.isMobile()).toBe(true);
    expect(service.isTablet()).toBe(false);
    expect(service.isDesktop()).toBe(false);
  });

  it('should expose tablet state for medium breakpoint', () => {
    const service = TestBed.inject(ViewportService);

    state$.next({
      matches: true,
      breakpoints: {
        [Breakpoints.XSmall]: false,
        [Breakpoints.Small]: false,
        [Breakpoints.Medium]: true,
      },
    });

    expect(service.isMobile()).toBe(false);
    expect(service.isTablet()).toBe(true);
    expect(service.isDesktop()).toBe(false);
  });
});
