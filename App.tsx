import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import QuizScreen from "./app/QuizScreen";
import QuizProvider from "./app/Providers/QuizProvider";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizProvider>
        <StatusBar style="light" />
        <View style={styles.container}>
          <QuizScreen />
        </View>
      </QuizProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
});
