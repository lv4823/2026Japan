
import React, { useState, useEffect } from 'react';
import { Itinerary } from './types';
import { getKyotoItinerary } from './services/geminiService';
import Header from './components/Header';
import Section from './components/Section';
import ItineraryCard from './components/ItineraryCard';
import TransportationChart from './components/TransportationChart';
import { PinIcon, BedIcon, YenIcon, TrainIcon, CameraIcon, FoodIcon, SakeIcon, OnsenIcon, PlumIcon, SweetIcon } from './components/Icons';

const App: React.FC = () => {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        setLoading(true);
        const data = await getKyotoItinerary();
        setItinerary(data);
      } catch (err) {
        setError('Failed to load itinerary.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-600">正在為您生成專屬京都行程...</p>
        </div>
      </div>
    );
  }

  if (error || !itinerary) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">{error || 'No itinerary data available.'}</div>;
  }
  
  const specialActivityIcons: { [key: string]: React.ReactNode } = {
    '賞梅': <PlumIcon />,
    '溫泉': <OnsenIcon />,
    '品酒': <SakeIcon />,
    '甜點': <SweetIcon />,
  };


  return (
    <div className="font-sans text-gray-800 bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-16 p-8 rounded-xl bg-white shadow-lg" style={{backgroundImage: 'url(https://picsum.photos/1200/400?image=1015)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg inline-block">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{itinerary.tripTitle}</h1>
                <p className="mt-4 text-lg text-gray-200">{itinerary.tripSubtitle}</p>
                <p className="mt-2 text-sm font-semibold text-purple-300">{itinerary.duration}</p>
            </div>
        </div>

        {/* Overview Section */}
        <Section id="overview" title="行程總覽">
          <p className="text-lg text-gray-700 leading-relaxed">{itinerary.overview}</p>
        </Section>

        {/* Transportation & Accommodation Section */}
        <Section id="transport" title="交通與住宿">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center"><TrainIcon /> 交通方式</h3>
              <p className="mb-6 text-gray-600">{itinerary.transportation.summary}</p>
              <TransportationChart data={itinerary.transportation.recommendations} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center"><BedIcon /> 住宿資訊</h3>
              <div className="space-y-4">
                {itinerary.accommodations.map((hotel, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-md border-l-4 border-purple-400">
                    <p className="font-bold text-lg text-purple-800">{hotel.name}</p>
                    <p className="text-sm text-gray-500 font-semibold">{hotel.dates}</p>
                    <p className="mt-1 text-gray-600">{hotel.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Daily Itinerary Section */}
        <Section id="daily" title="每日行程">
          <div className="space-y-12">
            {itinerary.dailyItinerary.map(day => (
              <ItineraryCard key={day.day} day={day} />
            ))}
          </div>
        </Section>
        
        {/* Food & Activities Section */}
        <Section id="activities" title="美食與特色體驗">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {itinerary.specialActivities.map((activity, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-purple-400">
                        <div className="flex items-center text-purple-600 mb-3">
                           {specialActivityIcons[activity.type] || <PinIcon/>}
                           <h4 className="text-xl font-bold ml-2">{activity.type}：{activity.name}</h4>
                        </div>
                        <p className="text-gray-600">{activity.description}</p>
                    </div>
                ))}
            </div>
        </Section>
      </main>

      <footer className="text-center py-6 bg-gray-800 text-white mt-12">
        <p>&copy; {new Date().getFullYear()} AI 旅遊規劃師. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
