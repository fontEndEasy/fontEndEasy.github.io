import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box",
        "fontFamily": "'arail', 'microsoft yehei'",
        "fontSize": 16,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "WebkitTransition": "all .3s ease-in-out",
        "MozTransition": "all .3s ease-in-out",
        "transition": "all .3s ease-in-out",
        "WebkitTapHighlightColor": "transparent",
        "MozTapHighlightColor": "transparent",
        "MsTapHighlightColor": "transparent",
        "tapHighlightColor": "transparent"
    },
    "::-webkit-scrollbar": {
        "width": 5,
        "backgroundColor": "#e8e7e7"
    },
    "::-webkit-scrollbar-thumb": {
        "backgroundColor": "#bfbdbb"
    },
    "::-webkit-scrollbar-track-piece": {
        "borderLeft": "1px solid #d2d1d0"
    },
    "body": {
        "backgroundColor": "#F5F5F5",
        "overflowX": "hidde"
    },
    "ul": {
        "listStyle": "none"
    },
    "a": {
        "textDecoration": "none"
    }
});