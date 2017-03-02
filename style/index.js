import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "easyui-header": {
        "backgroundColor": "#e8e7e7"
    },
    "easyui-navwrap": {
        "width": 1200,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center"
    },
    "easyui-nav": {
        "alignSelf": "stretch",
        "alignContent": "center",
        "marginTop": 10
    },
    "easyui-navbar": {
        "alignSelf": "stretch",
        "alignContent": "center",
        "display": "flex",
        "justifyContent": "flex-start",
        "flexDirection": "row",
        "marginTop": 16,
        "marginBottom": 10
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
        "justifyContent": "space-between"
    },
    "easyui-content easyui-ul > li": {
        "width": "20%",
        "alignItems": "flex-start",
        "height": 426,
        "flexGrow": 1,
        "flexShrink": 1,
        "marginTop": 12,
        "marginRight": 12,
        "marginBottom": 12,
        "marginLeft": 12,
        "boxShadow": "0 1px 42px #DEDEDE",
        "backgroundColor": "#FFF",
        "borderTop": "2px solid #1b8ec3"
    },
    "easyui-nav img-head": {
        "height": 182,
        "width": 252,
        "background": "#1791BD url(../images/img_002.jpg) no-repeat -178px -240px !important",
        "boxShadow": "0 2px 5px #cac9c9",
        "border": "2px solid #fff",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2
    },
    "easyui-navbar p i": {
        "display": "inline-block",
        "width": 40,
        "height": 40,
        "verticalAlign": "middle",
        "position": "absolute",
        "left": -52
    },
    "easyui-navbar p strong": {
        "fontWeight": "normal",
        "fontSize": 14
    },
    "easyui-navbar  p": {
        "height": 40,
        "lineHeight": 40,
        "color": "#656464",
        "alignSelf": "flex-start",
        "width": "100%",
        "position": "relative"
    },
    "easyui-navbar  p:after": {
        "content": "''",
        "display": "block",
        "height": 2,
        "backgroundColor": "#1b98ca",
        "MozTransform": "scaleX(0)",
        "WebkitTransform": "scaleX(0)",
        "transform": "scaleX(0)",
        "MozTransition": "all .2s ease-in-out",
        "WebkitTransition": "all .2s ease-in-out",
        "transition": "all .2s ease-in-out"
    },
    "easyui-navbar  p:hover": {
        "cursor": "pointer",
        "display": "block"
    },
    "easyui-navbar  p > label": {
        "cursor": "pointer",
        "display": "block"
    },
    "easyui-navbar  p:hover:after": {
        "transform": "scaleY(1)"
    },
    "easyui-navbar userinfo": {
        "display": "flex",
        "justifyContent": "flex-start",
        "flexDirection": "row"
    },
    "easyui-navbar instroduction": {
        "marginRight": 25,
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "flex": 1,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "backgroundColor": "#FFF",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2,
        "WebkitBoxShadow": "0 0 1px #DEDEDE",
        "MozBoxShadow": "0 0 1px #DEDEDE",
        "boxShadow": "0 0 1px #DEDEDE",
        "borderTop": "2px solid #2a99c5"
    },
    "easyui-navbar skill": {
        "position": "relative",
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "flex": 2,
        "marginLeft": 25,
        "border": "1px solid #f7f2f2",
        "backgroundColor": "#FFF",
        "WebkitBoxShadow": "0 0 1px #DEDEDE",
        "MozBoxShadow": "0 0 1px #DEDEDE",
        "boxShadow": "0 0 1px #DEDEDE",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2,
        "borderTop": "2px solid #2a99c5"
    },
    "easyui-navbar skill skill-name": {
        "fontWeight": "bold",
        "marginTop": 10
    },
    "easyui-navbar skill skill-list div": {
        "color": "#989696",
        "marginBottom": 6,
        "fontSize": 14
    },
    "easyui-navbar skill skill-container": {
        "marginTop": 20
    },
    "easyui-navbar skill:after": {
        "content": "'撑握技能^.^'",
        "display": "block",
        "fontSize": 20,
        "color": "#1185b3",
        "position": "absolute",
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10,
        "borderRadius": 5,
        "backgroundColor": "#FFF",
        "right": -33,
        "top": -52,
        "lineHeight": "100%",
        "verticalAlign": "middle",
        "textAlign": "center",
        "WebkitTransform": "rotate(45deg)",
        "transform": "rotate(45deg)",
        "WebkitBoxShadow": "0 0 5px #DEDEDE",
        "MozBoxShadow": "0 0 5px #DEDEDE",
        "boxShadow": "0 0 5px #DEDEDE",
        "MozTransform": "rotate(45deg)",
        "WebkitBorderRadius": 5,
        "MozBorderRadius": 5,
        "MozWritingMode": "vertical-lr",
        "MozTransition": "all .3s ease-in-out",
        "WebkitTransition": "all .3s ease-in-out",
        "transition": "all .3s ease-in-out",
        "borderTop": "2px solid #2a99c5"
    },
    "easyui-navbar skill-animate": {
        "WebkitAnimationName": "bounce",
        "animationName": "bounce",
        "MozAnimationName": "bounce",
        "animationDuration": "1s",
        "animationIterationCount": 2,
        "animationTimingFunction": "ease",
        "animationFillMode": "forwards"
    },
    "easyui-navbar address": {
        "lineHeight": 20,
        "marginBottom": 6,
        "marginTop": 6,
        "height": 40
    },
    "easyui-navbar major": {
        "lineHeight": 20,
        "marginBottom": 6,
        "marginTop": 6,
        "height": 40
    },
    "easyui-navbar education": {
        "lineHeight": 20,
        "marginBottom": 6,
        "marginTop": 6,
        "height": 40
    },
    "easyui-navbar address label": {
        "height": 40
    },
    "easyui-navbar major label": {
        "height": 40
    },
    "easyui-navbar education label": {
        "height": 40
    },
    "easyui-navbar address strong": {
        "display": "block",
        "maxWidth": 320,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "easyui-navbar major strong": {
        "display": "block",
        "maxWidth": 320,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "easyui-navbar education strong": {
        "display": "block",
        "maxWidth": 320,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "easyui-navbar name strong": {
        "float": "right"
    },
    "easyui-navbar gender strong": {
        "float": "right"
    },
    "easyui-navbar telphone strong": {
        "float": "right"
    },
    "easyui-navbar height strong": {
        "float": "right"
    },
    "easyui-navbar qq strong": {
        "float": "right"
    },
    "easyui-navbar email strong": {
        "float": "right"
    },
    "easyui-navbar weixin strong": {
        "float": "right"
    },
    "easyui-navbar icon-email": {
        "backgroundImage": "url(../images/email.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center 3px !important"
    },
    "easyui-navbar icon-address": {
        "backgroundImage": "url(../images/address.svg)"
    },
    "easyui-navbar icon-major": {
        "backgroundImage": "url(../images/major.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center 3px !important"
    },
    "easyui-navbar icon-education": {
        "backgroundImage": "url(../images/education.svg)"
    },
    "easyui-navbar icon-name": {
        "backgroundImage": "url(../images/head.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center 3px !important"
    },
    "easyui-navbar icon-gender": {
        "backgroundImage": "url(../images/boy.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center 3px !important"
    },
    "easyui-navbar icon-telphone": {
        "backgroundImage": "url(../images/tel.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center 3px !important"
    },
    "easyui-navbar icon-height": {
        "backgroundImage": "url(../images/height.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center 3px !important"
    },
    "easyui-navbar icon-qq": {
        "background": "url(../images/qq.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center 3px !important"
    },
    "easyui-navbar icon-weixin": {
        "background": "url(../images/weixin.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center 3px !important"
    },
    "easyui-navbar address icon-address": {
        "backgroundPosition": "center 3px !important",
        "width": 40,
        "height": 40,
        "left": -52,
        "backgroundRepeat": "no-repeat"
    },
    "easyui-navbar major icon-major": {
        "backgroundPosition": "center 3px !important",
        "width": 40,
        "height": 40,
        "left": -52,
        "backgroundRepeat": "no-repeat"
    },
    "easyui-navbar education icon-education": {
        "backgroundPosition": "center 3px !important",
        "width": 40,
        "height": 40,
        "left": -52,
        "backgroundRepeat": "no-repeat"
    }
});