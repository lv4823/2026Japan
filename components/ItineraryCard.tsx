
import React from 'react';
import { DailyPlan } from '../types';
import { CameraIcon, FoodIcon } from './Icons';

interface ItineraryCardProps {
  day: DailyPlan;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ day }) => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl">
      <div className="md:w-1/4 p-6 bg-purple-600 text-white flex flex-col items-center justify-center text-center md:h-full">
        <p className="text-5xl font-extrabold">{`Day ${day.day}`}</p>
        <p className="text-lg font-semibold mt-1">{day.date}</p>
        <p className="mt-4 text-purple-200 bg-purple-700 px-3 py-1 rounded-full text-sm">{day.theme}</p>
      </div>
      <div className="w-full md:w-3/4 p-6 md:p-8">
        <div className="relative">
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-purple-200"></div>
          {day.schedule.map((item, index) => (
            <div key={index} className="relative pl-12 mb-8">
              <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 bg-white border-2 border-purple-500 rounded-full">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
              <p className="font-bold text-xl text-purple-800">{item.time}: {item.activity}</p>
              <p className="text-gray-600 mt-2">{item.details}</p>
              {item.photoSpot && (
                <div className="mt-3 flex items-start p-3 bg-purple-50 rounded-lg border-l-4 border-purple-300">
                  <CameraIcon />
                  <div className="ml-3">
                    <p className="font-semibold text-purple-700">攝影秘訣</p>
                    <p className="text-sm text-gray-700">{item.photoSpot}</p>
                  </div>
                </div>
              )}
              {item.food && (
                <div className="mt-3 flex items-start p-3 bg-amber-50 rounded-lg border-l-4 border-amber-300">
                  <FoodIcon />
                  <div className="ml-3">
                    <p className="font-semibold text-amber-700">美食推薦</p>
                    <p className="text-sm text-gray-700">{item.food}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
