import { StyleSheet } from "react-native";
import Header from "@/components/Header";
import { ThemedLayout } from "@/components/ThemedLayout";
import CardSection from "@/components/HomeScreenComponents/CardSection";

export default function HomeScreen() {
  return (
    <ThemedLayout>
      <Header />
      <CardSection />
    </ThemedLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
  },
});
