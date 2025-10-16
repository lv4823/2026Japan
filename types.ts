
export interface TransportationRecommendation {
  name: string;
  details: string;
  estimatedCost: number;
}

export interface Accommodation {
  name: string;

  dates: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  details: string;
  photoSpot?: string;
  food?: string;
}

export interface DailyPlan {
  day: number;
  date: string;
  theme: string;
  schedule: ScheduleItem[];
}

export interface SpecialActivity {
    type: string;
    name: string;
    description: string;
}

export interface Itinerary {
  tripTitle: string;
  tripSubtitle: string;
  duration: string;
  overview: string;
  transportation: {
    summary: string;
    recommendations: TransportationRecommendation[];
  };
  accommodations: Accommodation[];
  dailyItinerary: DailyPlan[];
  specialActivities: SpecialActivity[];
}
