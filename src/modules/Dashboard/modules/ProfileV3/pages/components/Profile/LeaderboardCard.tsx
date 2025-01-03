import React from 'react';
import { Crown } from 'lucide-react';

interface LeaderboardCardProps {
  name: string;
  points: number;
  position: number;
  barHeight: number;
}

export default function LeaderboardCard({ name, points, position, barHeight }: LeaderboardCardProps) {
  return (
    <div className="flex flex-col items-center relative">
      {position === 1 && (
        <Crown className="absolute -top-6 text-yellow-400 w-5 h-5" />
      )}
      <div className="w-10 h-10 rounded-full bg-gray-200 mb-2" />
      <p className="text-white text-sm font-medium">{name}</p>
      <p className="text-white/80 text-xs mb-2">{points}K</p>
      <div
        className="w-14 rounded-t-lg bg-blue-400/80"
        style={{ height: `${barHeight}px` }}
      />
    </div>
  );
}