import { ImageSourcePropType } from "react-native";

export type EventSliderType = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const imageSlider: EventSliderType[] = [
  {
    id: 0,
    title: "Событие одно",
    image: require("@/assets/images/sliderImages/1.jpg"),
    description: "30 января - 30 июня",
  },
  {
    id: 1,
    title: "Событие два",
    image: require("@/assets/images/sliderImages/2.jpg"),
    description: "30 января - 30 июня",
  },
  {
    id: 2,
    title: "Событие три",
    image: require("@/assets/images/sliderImages/3.jpg"),
    description: "30 января - 30 июня",
  },
  {
    id: 3,
    title: "Событие четыре",
    image: require("@/assets/images/sliderImages/4.jpg"),
    description: "30 января - 30 июня",
  },
];
