export interface IEventModel {
  id: number;
  name: string;
  date: Date;
  price: number;
  time: string;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string
  };
  onlineUrl?: string;
  sessions: ISessionModel[];
}

export interface ISessionModel {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}
