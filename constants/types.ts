import { ImageSourcePropType } from "react-native";

export type CollectionOrEventType = {
  id?: number;
  title: string;
  image: ImageSourcePropType;
  date?: string;
  description?: string;
};

export type PlaceType = {
  id: string;
  name: string;
  address: string;
  image?: string;
};

export type EventType = {
  id: string;
  title: string;
  description: string;
  date: string;
  place: PlaceType;
};
