import { StyleSheet, View, ViewProps } from "react-native";
import Row from "../Row";
import ThemedText from "../ThemedText";
import useThemeColors from "@/hooks/useThemeColors";

type Props = ViewProps & {
  name: string;
  value: number;
  color: string;
};

export default function PokemonStat({
  style,
  color,
  name,
  value,
  ...rest
}: Props) {
  const colors = useThemeColors();
  return (
    <Row gap={8} style={[style, styles.root]} {...rest}>
      <View style={[styles.name, { borderColor: colors.grayLight }]}>
        <ThemedText variant="subtitle3" style={{ color: color }}>
          {name}
        </ThemedText>
      </View>
      <View style={styles.number}>
        <ThemedText>{value.toString().padStart(3, "0")}</ThemedText>
      </View>
      <Row style={styles.bar}>
        <View
          style={[styles.barInner, { flex: 1, backgroundColor: color }]}
        ></View>
        <View
          style={[styles.barBackground, { flex: 1, backgroundColor: color }]}
        ></View>
      </Row>
    </Row>
  );
}

const styles = StyleSheet.create({
  root: {},
  name: {
    width: 31,
    paddingRight: 8,
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  number: {
    width: 23,
  },
  bar: {
    flex: 1,
    borderRadius: 20,
    height: 4,
    overflow: "hidden",
  },
  barInner: {
    width: 23,
  },
  barBackground: {
    width: 23,
  },
});
