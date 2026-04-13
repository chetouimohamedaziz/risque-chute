export type RiskLevel = 'none' | 'low' | 'moderate' | 'high';

export function getRiskLevel(score: number): RiskLevel {
  if (score <= 0) {
    return 'none';
  }

  if (score <= 4) {
    return 'low';
  }

  if (score <= 8) {
    return 'moderate';
  }

  return 'high';
}

export function getRiskClass(level: RiskLevel): string {
  return `risk-summary-card--${level}`;
}
