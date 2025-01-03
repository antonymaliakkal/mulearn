import React from 'react';
import { Edit2 } from 'lucide-react';

interface ProfileDetailsProps {
  institution: string;
  careerPath: string;
  interests: string[];
}

export default function ProfileDetails({ institution, careerPath, interests }: ProfileDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Institution</p>
          <p className="font-medium">{institution}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 mb-1">Career Path</p>
          <p className="font-medium">{careerPath}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-end mb-4">
          <button className="p-2 hover:bg-gray-50 rounded-full">
            <Edit2 className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">Interests</p>
          <div className="flex flex-wrap ">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-600"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
