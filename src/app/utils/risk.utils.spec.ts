import { getRiskClass, getRiskLevel } from './risk.utils';

describe('risk.utils', () => {
  it('should return none risk level for score <= 0', () => {
    expect(getRiskLevel(0)).toBe('none');
    expect(getRiskLevel(-2)).toBe('none');
  });

  it('should return low risk level for score between 1 and 4', () => {
    expect(getRiskLevel(1)).toBe('low');
    expect(getRiskLevel(4)).toBe('low');
  });

  it('should return moderate risk level for score between 5 and 8', () => {
    expect(getRiskLevel(5)).toBe('moderate');
    expect(getRiskLevel(8)).toBe('moderate');
  });

  it('should return high risk level for score above 8', () => {
    expect(getRiskLevel(9)).toBe('high');
    expect(getRiskLevel(12)).toBe('high');
  });

  it('should build CSS class from risk level', () => {
    expect(getRiskClass('none')).toBe('risk-summary-card--none');
    expect(getRiskClass('high')).toBe('risk-summary-card--high');
  });
});
