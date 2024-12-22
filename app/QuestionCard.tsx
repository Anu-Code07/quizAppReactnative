import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import AnsOption from "./AnsOption";
import Card from "./Card";
import { QuizContext } from "./Providers/QuizProvider";

const QuestionCard = ({ question }: any) => {

  return (
    <View>
      <Card title={question.title}>
        <View
          style={{
            gap: 10,
          }}
        >
          {question?.options?.map((options: any, index: number) => {
            return <AnsOption options={options} key={options} />;
          })}
        </View>
      </Card>
    </View>
  );
};

export default QuestionCard;
