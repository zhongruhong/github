Vue.component("Buttom",{
    props:{
        htmlType: {
            type: String,
            default: "button"
        },
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String
        },
        template: `
        <button
            @click="click"
            :type="htmlType" 
            :class='["btn", {
                "btn-default": type === "default",
                "btn-primary": type === "primary",
                "btn-success": type === "success",
                "btn-danger": type === "danger",
                "btn-lg": size === "lg",
                "btn-sm": size === "sm",
                "btn-xs": size === "xs",
            }]'
        >
            <slot />
        </button>
        `
    }
})