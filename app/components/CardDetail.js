import React from "react";
import { Card } from "./base/Card";
import { HorizontalLine } from "./base/HorizontalLine";
import CardHeader from "./CardHeader";
import QuizHistory from "./QuizHistory";

const CardDetail = ({ deck }) => {
  return (
    <Card padding={35}>
      <CardHeader center deck={deck} />

      <HorizontalLine />
      <QuizHistory deck={deck} />
    </Card>
  );
};

export default CardDetail;
