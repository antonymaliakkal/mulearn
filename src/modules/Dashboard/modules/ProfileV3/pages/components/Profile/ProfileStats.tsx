import React from 'react';

interface ProfileStatsProps {
  karmaPoints: number;
  avgKarma: number;
  ranking: number;
}

export default function ProfileStats({ karmaPoints, avgKarma, ranking }: ProfileStatsProps) {
  return (
    <div className="flex gap-12">
      <div>
        <p className="text-sm text-gray-500 mb-1">Karma Points</p>
        <p className="font-semibold text-lg">{karmaPoints.toFixed(2)}K</p>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">Avg Karma/Month</p>
        <p className="font-semibold text-lg">{avgKarma.toFixed(2)}K</p>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-1">Ranking</p>
        <p className="font-semibold text-lg text-green-600">{ranking}</p>
      </div>
    </div>
  );
}