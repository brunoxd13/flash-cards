import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import SimpleCardContainer from "../components/SimpleCardContainer";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate("NewDeck")}
      >
        <AntDesign name="pluscircle" size={30} color="white" />
      </TouchableOpacity>
    )
  });

  return (
    <View style={{ flex: 1, padding: 3, backgroundColor: "#E5E5E5" }}>
      <ScrollView>
        <SimpleCardContainer />
      </ScrollView>
    </View>
  );
};

export default Home;
