import React from "react";

import { Header, Left, Body, Right, Button, Icon, Title } from "native-base";

const HeaderBar = () => (
  <Header>
    <Left />
    <Body>
      <Title>Flash Cards</Title>
    </Body>
    <Right>
      <Button transparent>
        <Icon name="add" />
      </Button>
    </Right>
  </Header>
);

export default HeaderBar;
