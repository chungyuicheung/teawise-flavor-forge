
export interface Tea {
  id: number;
  name: string;
  type: string;
  origin: string;
  year: number;
  rating: number;
  brewCount: number;
  dateAdded: string;
  notes: string;
  image: string;
  flavorProfile: string[];
  price: number;
}

export interface TeaRecord {
  name: string;
  type: string;
  origin: string;
  year: string;
  grade: string;
  weight: number;
  waterTemp: number;
  steepTime: number;
  rounds: number;
  rating: number;
  notes: string;
  flavorTags: string[];
  brewingMethod: string;
}

export interface RecentTea {
  id: number;
  name: string;
  type: string;
  origin: string;
  year: string;
  rating: number;
  brewCount: number;
  lastBrewed: string;
  flavorProfile: string[];
}
