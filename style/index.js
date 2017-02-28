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
        "flexShrink": 1,
        "justifyContent": "space-between",
        "perspective": 1200
    },
    "easyui-content easyui-ul > li": {
        "width": "24%",
        "alignItems": "flex-start",
        "height": 426,
        "border": "1px solid #DEDEDE",
        "flexGrow": 1,
        "flexShrink": 1,
        "marginTop": 6,
        "marginRight": 6,
        "marginBottom": 6,
        "marginLeft": 6,
        "WebkitBoxShadow": "0 1px 15px #DEDEDE",
        "boxShadow": "0 1px 15px #DEDEDE",
        "WebkitBorderRadius": 8,
        "borderRadius": 8,
        "backgroundColor": "#FFF"
    },
    "easyui-content easyui-ul > li:hover": {
        "border": "2px solid #15a7dc",
        "transform": "scale(1.05)",
        "WebkitTransform": "scale(1.05)",
        "boxShadow": "0 1px 15px #c0edfd"
    }
});