import mixpanel from "mixpanel-browser";

mixpanel.init("da7a516955a42122902ce32525adf66e", {
    persistence: "localStorage",
    secure_cookie: true,
});

const Mixpanel = {
    identify: (id) => {
        mixpanel.identify(id);
    },
    alias: (id) => {
        mixpanel.alias(id);
    },
    track: (name, props) => {
        mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            mixpanel.people.set(props);
        }
    },
    TYPES:{
        USER_SIGN_OUT: "USER_SIGN_OUT",
        GO_TO_HOME: "GO_TO_HOME",
        GO_TO_ABOUT: "GO_TO_ABOUT",
        GO_TO_PRODUCT_LIST: "GO_TO_PRODUCT_LIST",
        GO_TO_PRODUCT_LIST_USER: "GO_TO_PRODUCT_LIST_USER",
        GO_TO_EDIT_USER: "GO_TO_PRODUCT_LIST_USER",
        GO_TO_CART: "GO_TO_CART",
        ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
        REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
    }
}
export default Mixpanel;