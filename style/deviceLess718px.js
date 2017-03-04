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
        "width": "100%",
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
        "marginTop": 10,
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "stretch"
    },
    "easyui-navbar": {
        "alignSelf": "stretch",
        "alignContent": "center",
        "display": "flex",
        "justifyContent": "flex-start",
        "flexDirection": "column",
        "marginTop": 10,
        "marginBottom": 10
    },
    "easyui-content": {
        "width": "100%",
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
        "width": "100%",
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
        "borderTop": "2px solid #1a8cc1",
        "opacity": 0,
        "paddingTop": 10,
        "paddingLeft": 10,
        "paddingRight": 10,
        "color": "#696464"
    },
    "easyui-nav img-head": {
        "flex": 1,
        "height": 182,
        "background": " url(../images/blue-photo.svg) no-repeat center bottom  !important",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2
    },
    "easyui-nav resume": {
        "flex": 1,
        "alignSelf": "stretch",
        "fontSize": 18,
        "fontFamily": "'arail', 'microsoft'",
        "color": "#1a8cc1",
        "textAlign": "center",
        "height": 32,
        "verticalAlign": "middle",
        "marginTop": 10
    },
    "easyui-nav resume resume-en": {
        "fontSize": 14,
        "color": "#989696"
    },
    "easyui-navbar p i": {
        "display": "inline-block",
        "width": 26,
        "height": 26,
        "verticalAlign": "middle",
        "position": "absolute",
        "left": -32,
        "top": 7
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
        "backgroundColor": "#1a8cc1",
        "WebkitTransform": "scaleX(0)",
        "MozTransform": "scaleX(0)",
        "transform": "scaleX(0)",
        "WebkitTransition": "all .2s ease-in-out",
        "MozTransition": "all .2s ease-in-out",
        "transition": "all .2s ease-in-out"
    },
    "easyui-navbar  p:hover": {
        "cursor": "pointer",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6
    },
    "easyui-navbar  p > label": {
        "cursor": "pointer",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6
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
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "flex": 1,
        "paddingRight": 10,
        "backgroundColor": "#FFF",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2,
        "WebkitBoxShadow": "0 0 1px #DEDEDE",
        "MozBoxShadow": "0 0 1px #DEDEDE",
        "boxShadow": "0 0 1px #DEDEDE",
        "borderTop": "2px solid #1a8cc1",
        "opacity": 0,
        "paddingLeft": 44
    },
    "easyui-navbar skill": {
        "position": "relative",
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "WebkitFlex": 2,
        "MozFlex": 2,
        "flex": 2,
        "marginTop": 25,
        "border": "1px solid #f7f2f2",
        "backgroundColor": "#FFF",
        "WebkitBoxShadow": "0 0 1px #DEDEDE",
        "MozBoxShadow": "0 0 1px #DEDEDE",
        "boxShadow": "0 0 1px #DEDEDE",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2,
        "borderTop": "2px solid #1a8cc1",
        "opacity": 0
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
    "easyui-navbar skill-animate": {
        "WebkitAnimationName": "bounce",
        "MozAnimationName": "bounce",
        "animationName": "bounce",
        "WebkitAnimationDuration": "1s",
        "MozAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationIterationCount": 2,
        "MozAnimationIterationCount": 2,
        "animationIterationCount": 2,
        "WebkitAnimationTimingFunction": "ease",
        "MozAnimationTimingFunction": "ease",
        "animationTimingFunction": "ease",
        "WebkitAnimationFillMode": "forwards",
        "MozAnimationFillMode": "forwards",
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
    "easyui-navbar age strong": {
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
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar icon-address": {
        "backgroundImage": "url(../images/address.svg)"
    },
    "easyui-navbar icon-major": {
        "backgroundImage": "url(../images/major.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar icon-education": {
        "backgroundImage": "url(../images/education.svg)"
    },
    "easyui-navbar icon-name": {
        "backgroundImage": "url(../images/head.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar icon-gender": {
        "backgroundImage": "url(../images/boy.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar icon-telphone": {
        "backgroundImage": "url(../images/tel.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar icon-age": {
        "backgroundImage": "url(../images/age.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar icon-height": {
        "backgroundImage": "url(../images/height.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar icon-qq": {
        "background": "url(../images/qq.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar icon-weixin": {
        "background": "url(../images/weixin.svg)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center !important",
        "backgroundSize": "contain"
    },
    "easyui-navbar address icon-address": {
        "backgroundPosition": "center !important",
        "width": 26,
        "height": 26,
        "left": -32,
        "backgroundRepeat": "no-repeat"
    },
    "easyui-navbar major icon-major": {
        "backgroundPosition": "center !important",
        "width": 26,
        "height": 26,
        "left": -32,
        "backgroundRepeat": "no-repeat"
    },
    "easyui-navbar education icon-education": {
        "backgroundPosition": "center !important",
        "width": 26,
        "height": 26,
        "left": -32,
        "backgroundRepeat": "no-repeat"
    },
    "loading": {
        "position": "absolute",
        "width": 200,
        "height": 200,
        "marginLeft": -100,
        "marginTop": -100,
        "left": "50%",
        "top": "50%",
        "backgroundColor": "#FFF",
        "zIndex": 3,
        "WebkitBorderRadius": "25% 25%",
        "MozBorderRadius": "25% 25%",
        "borderRadius": "25% 25%"
    },
    "mask": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "backgroundColor": "#deeaeb",
        "width": "100%",
        "opacity": 1
    },
    "loading loading-eyes": {
        "width": 42,
        "height": 42,
        "WebkitBorderRadius": "50% 50%",
        "MozBorderRadius": "50% 50%",
        "borderRadius": "50% 50%",
        "WebkitAnimationTimingFunction": "linear",
        "MozAnimationTimingFunction": "linear",
        "animationTimingFunction": "linear",
        "WebkitAnimationIterationCount": "infinite",
        "MozAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "WebkitAnimationFillMode": "backwards",
        "MozAnimationFillMode": "backwards",
        "animationFillMode": "backwards",
        "WebkitAnimationDuration": "1s",
        "MozAnimationDuration": "1s",
        "animationDuration": "1s",
        "backgroundColor": "#1a8cc1",
        "position": "absolute",
        "top": 75
    },
    "loading loading-leyes": {
        "WebkitAnimationName": "rotatelEyes",
        "MozAnimationName": "rotatelEyes",
        "animationName": "rotatelEyes",
        "WebkitAnimationDirection": "normal",
        "MozAnimationDirection": "normal",
        "animationDirection": "normal",
        "left": 30
    },
    "loading loading-reyes": {
        "WebkitAnimationName": "rotaterEyes",
        "MozAnimationName": "rotaterEyes",
        "animationName": "rotaterEyes",
        "WebkitAnimationDirection": "reverse",
        "MozAnimationDirection": "reverse",
        "animationDirection": "reverse",
        "right": 30
    },
    "loading loading-eyes rotate": {
        "width": 16,
        "height": 16,
        "WebkitBorderRadius": "50% 50%",
        "MozBorderRadius": "50% 50%",
        "borderRadius": "50% 50%",
        "backgroundColor": "#FFF",
        "display": "block",
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "marginTop": -8,
        "marginLeft": -8
    },
    "loading loading-mouth": {
        "width": 62,
        "height": 48,
        "background": "url(../images/eyes.svg) no-repeat center center !important",
        "position": "absolute",
        "bottom": 58,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3,
        "WebkitAnimationName": "closeAndOpenMouth",
        "MozAnimationName": "closeAndOpenMouth",
        "animationName": "closeAndOpenMouth",
        "WebkitAnimationDuration": "1.8s",
        "MozAnimationDuration": "1.8s",
        "animationDuration": "1.8s",
        "WebkitAnimationDirection": "normal",
        "MozAnimationDirection": "normal",
        "animationDirection": "normal",
        "WebkitAnimationFillMode": "backwards",
        "MozAnimationFillMode": "backwards",
        "animationFillMode": "backwards",
        "WebkitAnimationTimingFunction": "cubic-bezier(1,1,.1,1)",
        "MozAnimationTimingFunction": "cubic-bezier(1,1,.1,1)",
        "animationTimingFunction": "cubic-bezier(1,1,.1,1)",
        "WebkitAnimationIterationCount": "infinite",
        "MozAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "display": "none"
    },
    "loading loading-lmouth": {
        "left": 20
    },
    "loading loading-rmouth": {
        "right": 20
    },
    "loading loading-bar": {
        "height": 20,
        "width": "100%",
        "position": "absolute",
        "bottom": 35,
        "overflow": "hidden"
    },
    "loading loading-bar span": {
        "WebkitAnimationName": "navAnim",
        "MozAnimationName": "navAnim",
        "animationName": "navAnim",
        "WebkitAnimationDuration": "3s",
        "MozAnimationDuration": "3s",
        "animationDuration": "3s",
        "WebkitAnimationDirection": "normal",
        "MozAnimationDirection": "normal",
        "animationDirection": "normal",
        "WebkitAnimationFillMode": "backwards",
        "MozAnimationFillMode": "backwards",
        "animationFillMode": "backwards",
        "WebkitAnimationTimingFunction": "cubic-bezier(1,.3,0,.9)",
        "MozAnimationTimingFunction": "cubic-bezier(1,.3,0,.9)",
        "animationTimingFunction": "ease-in-out",
        "WebkitAnimationIterationCount": "infinite",
        "MozAnimationIterationCount": "infinite",
        "animationIterationCount": "infinite",
        "display": "inline-block",
        "position": "absolute",
        "width": 10,
        "height": 10,
        "borderRadius": "50% 50%",
        "backgroundColor": "#1a8cc1",
        "verticalAlign": "middle",
        "top": "50%",
        "marginTop": -5
    },
    "loading loading-bar span:nth-child(1)": {
        "WebkitAnimationDelay": ".1s",
        "MozAnimationDelay": ".1s",
        "animationDelay": ".1s"
    },
    "loading loading-bar span:nth-child(2)": {
        "WebkitAnimationDelay": ".4s",
        "MozAnimationDelay": ".4s",
        "animationDelay": ".4s"
    },
    "loading loading-bar span:nth-child(3)": {
        "WebkitAnimationDelay": ".7s",
        "MozAnimationDelay": ".7s",
        "animationDelay": ".7s"
    },
    "easyui-footer": {
        "height": 150,
        "borderTop": "2px solid #1a8cc1",
        "backgroundColor": "#FFF"
    }
});