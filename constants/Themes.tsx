import { Theme } from "@react-navigation/native";
import { Colors } from "./Colors"

const NavigationContainerLightTheme: Theme = {
    colors: {
        primary: Colors.normal.green,
        background: Colors.normal.light,
        card: Colors.strong.light,
        text: Colors.normal.green,
        border: Colors.standard.borders.light,
        notification: Colors.strong.red,
    },
    dark: false
}

const NavigationContainerColorTheme: Theme = {
    colors: {
        primary: Colors.weak.blue,
        background: Colors.normal.blue,
        card: Colors.strong.blue,
        text: Colors.weak.blue,
        border: Colors.standard.borders.blue,
        notification: Colors.strong.red,
    },
    dark: false
}

export { NavigationContainerLightTheme, NavigationContainerColorTheme };