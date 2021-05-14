/**
 * Custom theme for Scalefusion
 */
import { responsiveFontSizes } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

function pxToRem(value) {
    return `${value / 16}rem`;
}

/**
 * Customize theme options
 */
let newTheme = createMuiTheme({
    breakpoints,
    palette: {
        primary: {
            light: "#fff",
            main: "#6772e5" //'#5533FF'
        },

        secondary: {
            main: "#f44336",
        },

        text: {
            primary: "#5E5E5E",
            white: "#fff"
        },

        background: {
            default: "#eeeeee"
        }
    },

    typography: {
        [breakpoints.up("md")]: {
            fontSize: 70
        },
        [breakpoints.up("xs")]: {
            fontSize: 10
        },
        [breakpoints.up("sm")]: {
            fontSize: 10
        },
        // fontSize: 10,
        // fontSize: 14,
        // htmlFontSize: 16,
        fontFamily: "roboto"
    },

    // Override styles using CSS API
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                borderRadius: 2,
                fontSize: 14
            }
        },

        MuiOutlinedInput: {
            root: {
                borderRadius: 2
            }
        },

        // MuiTab: {
        //     wrapper: {
        //         flexDirection:'row',
        //     },
        // },
        MuiTab: {
            // Tab font size
            root: {
                [breakpoints.down("sm")]: {
                    fontSize: pxToRem(11)
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(13)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(15)
                }
            }
        },
        MuiTabs: {
            // Tab font size
            root: {
                [breakpoints.down("sm")]: {
                    fontSize: pxToRem(11)
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(12)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(13)
                },
            }
        },
        MuiTypography: {
            // headline: {
            //     fontSize: pxToRem(24),
            //     [breakpoints.up("md")]: {
            //         fontSize: pxToRem(32)
            //     }
            // },
            // h3: {
            //     fontSize: pxToRem(14),
            //     [breakpoints.up("md")]: {
            //         fontSize: pxToRem(18)
            //     }
            // },
            // paragraph: {
            //     fontSize: pxToRem(10),
            //     [breakpoints.up("md")]: {
            //         fontSize: pxToRem(13)
            //     }
            // },
            // title: {
            //     fontSize: pxToRem(21),
            //     [breakpoints.up("md")]: {
            //         fontSize: pxToRem(24)
            //     }
            // },
            body1: {
                fontSize: pxToRem(10),

                [breakpoints.up("xs")]: {
                    fontSize: pxToRem(12)
                },
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(14)
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(15)
                }
            }
            // body2: {
            //     fontSize: pxToRem(14),
            //     [breakpoints.up("md")]: {
            //         fontSize: pxToRem(16)
            //     }
            // },
            // button: {
            //     fontSize: pxToRem(14),
            //     [breakpoints.up("md")]: {
            //         fontSize: pxToRem(16)
            //     }
            // }
        }
    }
});

newTheme = responsiveFontSizes(newTheme);

export default newTheme;
