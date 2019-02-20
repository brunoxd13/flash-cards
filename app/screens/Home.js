import React from "react";
import styled from "styled-components/native";
import { MainContainer } from "../components/base/MainContainer";
import SimpleCardContainer from "../components/SimpleCardContainer";
import { AntDesign } from "@expo/vector-icons";

const ButtonAddDeck = styled.TouchableOpacity`
  margin-right: 10px;
`;

const Home = () => {
  return (
    <MainContainer>
      <SimpleCardContainer />
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
