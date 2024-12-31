import Card from "@/components/Card";
import PokemonCard from "@/components/pokemon/PokemonCard";
import Row from "@/components/Row";
import SearchBar from "@/components/SearchBar";
import ThemedText from "@/components/ThemedText";
import getPokemonId from "@/functions/pokemon";
import { useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import useThemeColors from "@/hooks/useThemeColors";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = useThemeColors();
  const { data, isFetching, fetchNextPage } =
    useInfiniteFetchQuery("/pokemon?Limit=21");
  const pokemons = data?.pages.flatMap((page) => page.results) ?? [];
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <Row style={styles.header} gap={16}>
        <Image
          source={require("@/assets/images/pokeball.png")}
          width={24}
          height={24}
        />
        <ThemedText variant="headline" color="grayLight">
          Pokédex
        </ThemedText>
      </Row>
      <Row>
        <SearchBar value={search} onChange={setSearch} />
      </Row>

      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          contentContainerStyle={[styles.gridGap, styles.list]}
          columnWrapperStyle={styles.gridGap}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.tint} /> : null
          }
          onEndReached={() => fetchNextPage()}
          renderItem={({ item }) => (
            <PokemonCard
              id={getPokemonId(item.url)}
              name={item.name}
              style={{ flex: 1 / 3 }}
            />
          )}
          keyExtractor={(item) => item.url}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 4 },
  header: { paddingHorizontal: 12, paddingVertical: 8 },
  body: { flex: 1, marginTop: 16 },
  gridGap: { gap: 8 },
  list: { padding: 12 },
});
