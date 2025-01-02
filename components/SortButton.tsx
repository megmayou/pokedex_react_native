import useThemeColors from "@/hooks/useThemeColors";
import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  value: "id" | "name";
  onChange: (v: "id" | "name") => void;
};

export default function SortButton({ value, onChange }: Props) {
  const colors = useThemeColors();
  const [isModalVisible, setModalVisibility] = useState(false);
  const onButtonPress = () => {
    setModalVisibility(true);
  };

  const onClose = () => {
    setModalVisibility(false);
  };
  return (
    <>
      <Pressable onPress={onButtonPress}>
        <View style={[styles.button, { backgroundColor: colors.grayWhite }]}>
          <Image
            source={
              value === "id"
                ? require("@/assets/images/number.png")
                : require("@/assets/images/alpha.png")
            }
            width={16}
            height={16}
          />
        </View>
      </Pressable>

      <Modal transparent visible={isModalVisible} onRequestClose={onClose}>
        <Pressable style={styles.backdrop} onPress={onClose}></Pressable>
        <View style={[styles.popup, { backgroundColor: colors.tint }]}>
          Hello world
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 32,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  popup: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
