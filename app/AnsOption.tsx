import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext } from "react";
import { QuizContext } from "./Providers/QuizProvider";

const AnsOption = ({ options }: any) => {
  const { selectedOptions, setSelectedOptions } = useContext<any>(QuizContext);
  const isSelected = options == selectedOptions;
  return (
    <Pressable
      onPress={() => setSelectedOptions(options)}
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? "#E1f396" : "white",
        },
      ]}
    >
      <Text>{options}</Text>
    </Pressable>
  );
};

export default AnsOption;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    // backgroundColor: "#E1f396",
    padding: 20,
    borderColor: "lightgray",
    borderRadius: 100,
  },
});
