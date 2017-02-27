import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "easyui-container": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "minHeight": 200
    },
    "easyui-header": {
        "marginBottom": 10,
        "borderRadius": 5,
        "backgroundColor": "#DEDEDE",
        "boxShadow": "0 1px 6px #DEDEDE",
        "marginTop": 10,
        "height": 45
    },
    "easyui-content": {
        "marginBottom": 10,
        "borderRadius": 5,
        "backgroundColor": "#DEDEDE",
        "boxShadow": "0 1px 6px #DEDEDE",
        "minHeight": 600
    },
    "easyui-footer": {
        "marginBottom": 10,
        "borderRadius": 5,
        "backgroundColor": "#DEDEDE",
        "boxShadow": "0 1px 6px #DEDEDE",
        "minHeight": 100
    }
});