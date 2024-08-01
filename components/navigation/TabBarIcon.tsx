import {
  Fontisto,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ComponentProps } from "react";

type IconSet =
  | typeof Fontisto
  | typeof Ionicons
  | typeof AntDesign
  | typeof MaterialCommunityIcons;

type IconProps<T extends IconSet> = ComponentProps<T> & {
  iconSet: T extends typeof Fontisto
    ? "Fontisto"
    : T extends typeof Ionicons
    ? "Ionicons"
    : T extends typeof AntDesign
    ? "AntDesign"
    : "MaterialCommunityIcons";
};

export function TabBarIcon<T extends IconSet>({
  iconSet,
  style,
  ...rest
}: IconProps<T>) {
  const iconStyle = [{ marginBottom: -3 }, style];
  const iconSize = 28;

  switch (iconSet) {
    case "Fontisto":
      return (
        <Fontisto
          size={iconSize}
          style={iconStyle}
          {...(rest as ComponentProps<typeof Fontisto>)}
        />
      );
    case "Ionicons":
      return (
        <Ionicons
          size={iconSize}
          style={iconStyle}
          {...(rest as ComponentProps<typeof Ionicons>)}
        />
      );
    case "AntDesign":
      return (
        <AntDesign
          size={iconSize}
          style={iconStyle}
          {...(rest as ComponentProps<typeof AntDesign>)}
        />
      );
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          size={iconSize}
          style={iconStyle}
          {...(rest as ComponentProps<typeof MaterialCommunityIcons>)}
        />
      );
    default:
      throw new Error(`Unsupported icon set: ${iconSet}`);
  }
}
