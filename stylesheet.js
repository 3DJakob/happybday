import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "#000",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "canvas": {
        "cursor": "crosshair",
        "display": "block"
    },
    "div": {
        "fontFamily": "'Alegreya Sans', sans-serif",
        "fontWeight": "100",
        "color": "#fff",
        "position": "absolute",
        "overflow": "visible",
        "height": 0,
        "width": 100 * vw,
        "textAlign": "center",
        "marginTop": 35 * vh,
        "marginRight": 0,
        "marginBottom": 35 * vh,
        "marginLeft": 0,
        "userSelect": "none",
        "MozUserSelect": "none",
        "KhtmlUserSelect": "none",
        "WebkitUserSelect": "none",
        "OUserSelect": "none"
    },
    "h1": {
        "fontSize": "40pt"
    },
    "i": {
        "color": "#fff"
    }
});