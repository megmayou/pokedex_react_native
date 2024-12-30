import { Shadows } from "@/constants/Shadows";
import useThemeColors from "@/hooks/useThemeColors";
import { View } from "react-native";
import { type ViewProps, type ViewStyle } from "react-native";

type Props = ViewProps;

export default function Card({ style, ...rest }: Props) {
  const colors = useThemeColors();
  return (
    <View
      style={[style, styles, { backgroundColor: colors.grayWhite }]}
      {...rest}
    />
  );
}
const styles = {
  borderRadius: 8,
  overflow: "hidden",
  ...Shadows.dp2,
} satisfies ViewStyle;
