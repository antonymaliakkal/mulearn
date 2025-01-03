import React from 'react';
import { Crown } from 'lucide-react';

export default function Leaderboard() {
  const entries = [
    { name: 'Edwin', points: 45.5, position: 1, height: 120 },
    { name: 'Anna', points: 45.5, position: 2, height: 100 },
    { name: 'Alma', points: 45.5, position: 3, height: 80 },
  ];

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Leaderboard</h3>
        <button className="text-sm text-blue-600">View All</button>
      </div>
      <div className="relative h-44 bg-gradient-to-b from-purple-900 to-purple-800 rounded-xl p-4">
        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end pb-4">
          {entries.map((entry) => (
            <div key={entry.name} className="flex flex-col items-center relative">
              {entry.position === 1 && (
                <Crown className="absolute -top-6 text-yellow-400 w-5 h-5" />
              )}
              <div className="w-10 h-10 rounded-full bg-white/20 mb-2" />
              <p className="text-white text-sm font-medium">{entry.name}</p>
              <p className="text-white/80 text-xs mb-2">{entry.points}K</p>
              <div
                className="w-14 rounded-t-lg bg-blue-400/80"
                style={{ height: `${entry.height}px` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}