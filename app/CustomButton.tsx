import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PressableProps,
  TouchableOpacityProps,
} from "react-native";
import React, { ComponentProps } from "react";
type CustomButtonProps = {
  title: string;
  rightIcon?: React.ReactNode;
  leftIcons?: React.ReactNode;
} & ComponentProps<typeof TouchableOpacity>;
const CustomButton = ({
  title,
  rightIcon,
  leftIcons,
  ...touchableOpacityProps
}: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...touchableOpacityProps}>
      <View style={styles.buttonIconLeft}>{leftIcons}</View>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.buttonIcon}>{rightIcon}</View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#034694",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flex: 1,
    width: "100%",
    marginRight: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
  buttonIconLeft: {
    position: "absolute",
    left: 20,
  },
});

export default CustomButton;
