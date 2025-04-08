import { View } from "react-native";
import React from "react";
import { CollectionOrEventType } from "@/constants/types";
import CollectionItem from "@/components/CollectionItem";

type Props = {
  itemList: CollectionOrEventType[];
};

const CollectionComponent = ({ itemList }: Props) => {
  return (
    <View style={{ gap: 15 }}>
      {itemList.map((item, index) => (
        <CollectionItem item={item} index={index} key={index} />
      ))}
    </View>
  );
};

export default CollectionComponent;
