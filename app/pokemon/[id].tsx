import Card from "@/components/Card";
import PokemonType from "@/components/pokemon/PokemonType";
import RootView from "@/components/RootView";
import Row from "@/components/Row";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { getPokemonArtwork } from "@/functions/pokemon";
import useFetchQuery from "@/hooks/useFetchQuery";
import useThemeColors from "@/hooks/useThemeColors";
import { types } from "@babel/core";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Pokemon() {
  const colors = useThemeColors();
  const params = useLocalSearchParams() as { id: string };
  const { data: pokemon } = useFetchQuery("/pokemon/[id]", { id: params.id });
  const mainType = pokemon?.types?.[0].type.name;
  const colorType = mainType ? Colors.type[mainType] : colors.tint;
  const types = pokemon?.types ?? [];

  return (
    <RootView style={{ backgroundColor: colorType }}>
      <View>
        <Image
          style={styles.pokeball}
          source={require("@/assets/images/pokeball_big.png")}
          width={208}
          height={208}
        />
        <Row style={styles.header}>
          <Pressable onPress={router.back}>
            <Row gap={8}>
              <Image
                source={require("@/assets/images/arrow_back.png")}
                width={32}
                height={32}
              />
              <ThemedText
                color="grayWhite"
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {pokemon?.name}
              </ThemedText>
            </Row>
          </Pressable>

          <ThemedText color="grayWhite" variant="subtitle2">
            #{params.id.padStart(3, "0")}
          </ThemedText>
        </Row>
        <View style={styles.body}>
          <Image
            style={styles.artwork}
            source={{
              uri: getPokemonArtwork(params.id),
            }}
            width={200}
            height={200}
          />
          <Card style={styles.card}>
            <Row gap={16}>
              {types.map((type) => (
                <PokemonType name={type.type.name} key={type.type.name} />
              ))}
            </Row>
            <ThemedText variant="subtitle1" style={{ color: colorType }}>
              About
            </ThemedText>
            <ThemedText variant="subtitle1" style={{ color: colorType }}>
              Base stats
            </ThemedText>
          </Card>
        </View>

        <Text> Pokemon {params.id}</Text>
      </View>
    </RootView>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 20,
    justifyContent: "space-between",
  },
  pokeball: {
    opacity: 0.1,
    position: "absolute",
    right: 8,
    top: 8,
  },
  artwork: {
    position: "absolute",
    top: -140,
    alignSelf: "center",
    zIndex: 2,
  },
  body: {
    marginTop: 144,
  },
  card: {
    padding: 20,
    paddingTop: 60,
    gap: 16,
    alignItems: "center",
  },
});
