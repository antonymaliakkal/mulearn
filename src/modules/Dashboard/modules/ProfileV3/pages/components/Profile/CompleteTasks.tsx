import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CompleteTasks() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium mb-1">Complete Tasks</h3>
          <p className="text-sm text-gray-500">Learn more about journey completing tasks</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12">
            <svg className="transform -rotate-90 w-12 h-12">
              <circle
                className="text-gray-100"
                strokeWidth="3"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
              />
              <circle
                className="text-green-500"
                strokeWidth="3"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * 0.1}`}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
              90%
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}