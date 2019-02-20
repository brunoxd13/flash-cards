import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import SimpleCardContainer from "../components/SimpleCardContainer";
import { AntDesign } from "@expo/vector-icons";

const ButtonAddDeck = styled.TouchableOpacity`
  margin-right: 10px;
`;

const MainContainer = styled.View`
  flex: 1;
  padding: 3px;
  background-color: #e5e5e5;
`;

const Home = () => {
  return (
    <MainContainer>
      <ScrollView>
        <SimpleCardContainer />
      </ScrollView>
    </MainContainer>
  );
};

Home.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <ButtonAddDeck onPress={() => navigation.navigate("NewDeck")}>
      <AntDesign name="pluscircle" size={30} color="white" />
    </ButtonAddDeck>
  )
});

export default Home;
