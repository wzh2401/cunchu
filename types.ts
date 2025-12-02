export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'SSD' | 'HDD' | 'NAS' | 'USB' | 'SD';
  features: string[];
  rating: number;
  reviews: number;
  specs: {
    capacity: string;
    interface: string;
    speed?: string;
  };
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}
