import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { theme } from "../styles/theme";
import { logo } from "../assets/images";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Actions } from "react-native-router-flux";
import ActionButton from "./../components/ActionButton";
import ButtonGroup from "../templates/ButtonGroup";
import { useBack } from "../hooks/useBack";

const fetchFonts = () => {
  return Font.loadAsync({
    "do-hyeon": require("../assets/fonts/DoHyeon.ttf"),
  });
};

const ScrollViewStyled = styled(ScrollView)`
  flex: 1;
  background-color: ${theme.background_default};
  padding: 10px;
  flex-direction: column;
`;

const HeaderStyled = styled(Text)`
  color: ${theme.color_default};
  text-align: center;
  font-size: 60px;
  font-family: do-hyeon;
  color: ${theme.header_color_primary};
  margin: 25px auto 0 auto;
  padding: 0 15px;
`;

const SubheaderStyled = styled(Text)`
  color: ${theme.color_default};
  font-size: ${parseInt(theme.fontSize_default) + 4}px;
  margin: 20px 15px;
  text-align: center;
`;

const Board = styled(View)`
  background-color: ${theme.background_board};
`;

const Dashboard: React.FC = () => {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  useBack();

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <ScrollViewStyled contentContainerStyle={{ alignItems: "center" }}>
      <HeaderStyled>DASHBOARD</HeaderStyled>
      <SubheaderStyled>Create, organize and execute your tasks</SubheaderStyled>
      <ButtonGroup />
      <Board></Board>
    </ScrollViewStyled>
  );
};

export default Dashboard;
