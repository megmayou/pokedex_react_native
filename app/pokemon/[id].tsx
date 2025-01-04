import RootView from "@/components/RootView";
import Row from "@/components/Row";
import ThemedText from "@/components/ThemedText";
import useFetchQuery from "@/hooks/useFetchQuery";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Pokemon() {
  const params = useLocalSearchParams() as { id: string };
  const { data } = useFetchQuery("/pokemon/[id]", { id: params.id });
  return (
    <RootView>
      <Row>
        <Row>
          <Image
            source={require("@/assets/images/arrow_back.png")}
            width={32}
            height={32}
          />
        </Row>
        <ThemedText color="grayWhite" variant="headline">
          #{params.id.padStart(3, "0")}
        </ThemedText>
      </Row>
      <Text> Pokemon {params.id}</Text>
    </RootView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 20,
    justifyContent: "space-between",
  },
});
