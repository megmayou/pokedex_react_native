import { Colors } from "@/constants/Colors";
import { View, ViewStyle } from "react-native";
import ThemedText from "../ThemedText";
import useThemeColors from "@/hooks/useThemeColors";

type Props = {
  name: keyof (typeof Colors)["type"];
};

export default function PokemonType({ name }: Props) {
  return (
    <View style={[rootStyle, { backgroundColor: Colors.type[name] }]}>
      <ThemedText
        color="grayWhite"
        variant="subtitle3"
        style={{ textTransform: "capitalize" }}
      >
        {name}
      </ThemedText>
    </View>
  );
}

const rootStyle = {
  flex: 0,
  height: 20,
  paddingHorizontal: 8,
  borderRadius: 8,
} satisfies ViewStyle;
