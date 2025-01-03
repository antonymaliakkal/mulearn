import React from 'react';

interface StatsCardProps {
  label: string;
  value: string;
  valueColor?: string;
}

export default function StatsCard({ label, value, valueColor = 'text-gray-900' }: StatsCardProps) {
  return (
    <div className="text-center">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`font-medium ${valueColor}`}>{value}</p>
    </div>
  );
}