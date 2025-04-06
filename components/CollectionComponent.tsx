import { View } from "react-native";
import React from "react";

import { CollectionType } from "@/assets/data/collectionData";
import CollectionItem from "@/components/CollectionItem";

type Props = {
  itemList: CollectionType[];
};

const CollectionComponent = ({ itemList }: Props) => {
  const collections = itemList.slice(0, 4);

  return (
    <View style={{ gap: 15 }}>
      {collections.map((item, index) => (
        <CollectionItem item={item} index={index} key={index} />
      ))}
    </View>
  );
};

export default CollectionComponent;
