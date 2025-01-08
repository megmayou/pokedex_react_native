import { ImageSourcePropType, StyleSheet, View, ViewProps } from "react-native";

type Props = ViewProps & {
  title: string;
  descritpion: string;
  image?: ImageSourcePropType;
};

export default function PokemonSpec({ style, ...rest }: Props) {
  return <View style={[style, styles.root]} {...rest}></View>;
}

const styles = StyleSheet.create({
  root: {},
});
