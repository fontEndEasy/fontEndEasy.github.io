import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "easyui-header": {
        "height": 126,
        "backgroundColor": "#1791BD"
    },
    "easyui-navwrap": {
        "width": 1200,
        "height": 126,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "flex"
    },
    "easyui-nav": {
        "height": 48,
        "alignSelf": "flex-start"
    },
    "easyui-navbar": {
        "height": 48,
        "alignSelf": "flex-end"
    },
    "easyui-content": {
        "width": 1200,
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "easyui-content easyui-ul": {
        "display": "flex",
        "flexDirection": "row",
        "flexWrap": "wrap",
        "flexGrow": 1,
        "flexShrink": 1
    }
});