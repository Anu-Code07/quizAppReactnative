import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Vibration,
  TouchableNativeFeedback,
} from "react-native";
import React, { useContext, useState } from "react";
import QuestionCard from "./QuestionCard";
import { FontAwesome6 } from "@expo/vector-icons";
import { questionsList } from "./questions";
import CustomButton from "./CustomButton";
import { QuizContext } from "./Providers/QuizProvider";
import Card from "./Card";
const QuizScreen = () => {
  const {
    questionIndex,
    question,
    onQuestionChange,
    score,
    isFinished,
    restart,
  } = useContext<any>(QuizContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question {`${questionIndex + 1}/5`}</Text>
        </View>
        <View>
          {isFinished && (
            <Card title="Well Done">
              <Text style={styles.time}>{`Score: ${
                score > 5 ? 5 : score
              }/5`}</Text>
            </Card>
          )}
          {!isFinished && <QuestionCard question={question} />}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {questionIndex != 0 && (
            <CustomButton
              title="Back"
              leftIcons={
                <FontAwesome6 name="arrow-left" size={24} color="white" />
              }
              rightIcon={null}
              onPress={() => {
                onQuestionChange("backward");
              }}
              onLongPress={() => {
                console.error("Long Presss");
              }}
            />
          )}
          {questionIndex != 4 && (
            <CustomButton
              title="Next"
              rightIcon={
                <FontAwesome6 name="arrow-right" size={24} color="white" />
              }
              onPress={() => {
                onQuestionChange("forward");
              }}
              onLongPress={() => {
                console.error("Long Presss");
              }}
            />
          )}
          {/* {isFinished && (
            <CustomButton
              title="Finish"
              rightIcon={
                <FontAwesome6 name="arrow-right" size={24} color="white" />
              }
              onPress={() => {
                restart();
              }}
            />
          )} */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
  },
});
