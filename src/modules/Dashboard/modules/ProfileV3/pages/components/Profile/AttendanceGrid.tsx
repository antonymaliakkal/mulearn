import React from 'react';

interface AttendanceGridProps {
  attendance: boolean[];
  percentage: number;
  totalSessions: number;
}

export default function AttendanceGrid({ attendance, percentage, totalSessions }: AttendanceGridProps) {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-medium">Learning Circle Attendance</h3>
        <span className="text-orange-500">{percentage}%</span>
        <span className="text-sm text-gray-500">({totalSessions} last 10 LC Sessions)</span>
      </div>
      <div className="grid grid-cols-12 gap-1">
        {attendance.map((present, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-[2px] ${
              present ? 'bg-blue-500' : 'bg-gray-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}