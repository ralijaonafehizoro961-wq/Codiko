import React, { useMemo } from 'react';
import './FuelGaugeProgress.css';

interface FuelGaugeProgressProps {
  current: number;
  total: number;
  label?: string;
}

export const FuelGaugeProgress: React.FC<FuelGaugeProgressProps> = ({
  current,
  total,
  label = 'Progression'
}) => {
  const percentage = useMemo(() => {
    return total > 0 ? Math.round((current / total) * 100) : 0;
  }, [current, total]);

  // Calculate needle angle (0% = -120deg, 100% = 120deg)
  const needleAngle = (percentage / 100) * 240 - 120;

  return (
    <div className="fuel-gauge-container">
      <div className="gauge-label">{label}</div>
      
      <svg className="fuel-gauge" viewBox="0 0 200 160" width="200" height="160">
        {/* Outer circle */}
        <circle cx="100" cy="100" r="90" className="gauge-outer-circle" />
        
        {/* Inner circle (white background) */}
        <circle cx="100" cy="100" r="80" className="gauge-inner-circle" />
        
        {/* Color arc - gradient from red to green */}
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="50%" stopColor="#ffd93d" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        
        {/* Gauge arc - red zone (0-30%) */}
        <path
          d={arcPath(100, 100, 70, -120, -60)}
          className="gauge-arc-red"
          fill="none"
          strokeWidth="8"
        />
        
        {/* Gauge arc - yellow zone (30-70%) */}
        <path
          d={arcPath(100, 100, 70, -60, 60)}
          className="gauge-arc-yellow"
          fill="none"
          strokeWidth="8"
        />
        
        {/* Gauge arc - green zone (70-120%) */}
        <path
          d={arcPath(100, 100, 70, 60, 120)}
          className="gauge-arc-green"
          fill="none"
          strokeWidth="8"
        />
        
        {/* Tick marks */}
        {[0, 25, 50, 75, 100].map((tick) => {
          const angle = (tick / 100) * 240 - 120;
          const rad = (angle * Math.PI) / 180;
          const x1 = 100 + 70 * Math.cos(rad);
          const y1 = 100 + 70 * Math.sin(rad);
          const x2 = 100 + 65 * Math.cos(rad);
          const y2 = 100 + 65 * Math.sin(rad);
          return (
            <line
              key={`tick-${tick}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="gauge-tick"
              strokeWidth="2"
            />
          );
        })}
        
        {/* Needle */}
        <g transform={`rotate(${needleAngle} 100 100)`}>
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="35"
            className="gauge-needle"
            strokeWidth="3"
          />
          <circle cx="100" cy="100" r="4" className="gauge-needle-center" />
        </g>
        
        {/* Center circle */}
        <circle cx="100" cy="100" r="8" className="gauge-center-circle" />
      </svg>

      <div className="gauge-info">
        <div className="gauge-percentage">{percentage}%</div>
        <div className="gauge-stats">
          <span>{current} / {total}</span>
        </div>
      </div>
    </div>
  );
};

// Helper function to create arc path
function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const x2 = cx + r * Math.cos(endRad);
  const y2 = cy + r * Math.sin(endRad);
  
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
}
