import React from "react";
import { ScrollView } from "react-native";
import SimpleCard from "./base/SimpleCard";
import { Content } from "native-base";

const SimpleCardContainer = ({ categories }) => {
  return (
    <ScrollView>
      <Content padder>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </Content>
    </ScrollView>
  );
};

export default SimpleCardContainer;
