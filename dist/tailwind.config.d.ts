declare const config: {
    darkMode: ["class"];
    content: string[];
    prefix: string;
    theme: {
        container: {
            center: true;
            padding: string;
            screens: {
                "2xl": string;
            };
        };
        extend: {
            colors: {
                border: string;
                input: string;
                ring: string;
                background: string;
                foreground: string;
                primary: {
                    DEFAULT: string;
                    foreground: string;
                };
                secondary: {
                    DEFAULT: string;
                    foreground: string;
                };
                destructive: {
                    DEFAULT: string;
                    foreground: string;
                };
                muted: {
                    DEFAULT: string;
                    foreground: string;
                };
                accent: {
                    DEFAULT: string;
                    foreground: string;
                };
                popover: {
                    DEFAULT: string;
                    foreground: string;
                };
                card: {
                    DEFAULT: string;
                    foreground: string;
                };
                success: {
                    DEFAULT: string;
                    foreground: string;
                };
                warning: {
                    DEFAULT: string;
                    foreground: string;
                };
                info: {
                    DEFAULT: string;
                    foreground: string;
                };
            };
            borderRadius: {
                "2xl": string;
                xl: string;
                lg: string;
                md: string;
                sm: string;
                full: string;
            };
            fontFamily: {
                sans: [string, string, string];
                mono: [string, string];
            };
            keyframes: {
                "accordion-down": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "accordion-up": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "fade-in": {
                    from: {
                        opacity: string;
                    };
                    to: {
                        opacity: string;
                    };
                };
                "fade-out": {
                    from: {
                        opacity: string;
                    };
                    to: {
                        opacity: string;
                    };
                };
                "slide-up": {
                    from: {
                        transform: string;
                    };
                    to: {
                        transform: string;
                    };
                };
                "slide-down": {
                    from: {
                        transform: string;
                    };
                    to: {
                        transform: string;
                    };
                };
                "slide-in-from-top": {
                    from: {
                        transform: string;
                    };
                    to: {
                        transform: string;
                    };
                };
                "slide-in-from-bottom": {
                    from: {
                        transform: string;
                    };
                    to: {
                        transform: string;
                    };
                };
                "slide-in-from-left": {
                    from: {
                        transform: string;
                    };
                    to: {
                        transform: string;
                    };
                };
                "slide-in-from-right": {
                    from: {
                        transform: string;
                    };
                    to: {
                        transform: string;
                    };
                };
                "scale-in": {
                    from: {
                        transform: string;
                        opacity: string;
                    };
                    to: {
                        transform: string;
                        opacity: string;
                    };
                };
                "scale-out": {
                    from: {
                        transform: string;
                        opacity: string;
                    };
                    to: {
                        transform: string;
                        opacity: string;
                    };
                };
                "dialog-scale-in": {
                    from: {
                        transform: string;
                        opacity: string;
                    };
                    to: {
                        transform: string;
                        opacity: string;
                    };
                };
                "dialog-scale-out": {
                    from: {
                        transform: string;
                        opacity: string;
                    };
                    to: {
                        transform: string;
                        opacity: string;
                    };
                };
                "lucky-tap": {
                    "0%": {
                        transform: string;
                    };
                    "50%": {
                        transform: string;
                    };
                    "100%": {
                        transform: string;
                    };
                };
                "lucky-bounce": {
                    "0%, 100%": {
                        transform: string;
                    };
                    "50%": {
                        transform: string;
                    };
                };
                "lucky-pulse": {
                    "0%, 100%": {
                        opacity: string;
                    };
                    "50%": {
                        opacity: string;
                    };
                };
                shimmer: {
                    "0%": {
                        backgroundPosition: string;
                    };
                    "100%": {
                        backgroundPosition: string;
                    };
                };
                "spin-slow": {
                    from: {
                        transform: string;
                    };
                    to: {
                        transform: string;
                    };
                };
                "toast-slide-in": {
                    from: {
                        transform: string;
                        opacity: string;
                    };
                    to: {
                        transform: string;
                        opacity: string;
                    };
                };
                "toast-slide-out": {
                    from: {
                        transform: string;
                        opacity: string;
                    };
                    to: {
                        transform: string;
                        opacity: string;
                    };
                };
            };
            animation: {
                "accordion-down": string;
                "accordion-up": string;
                "fade-in": string;
                "fade-out": string;
                "slide-up": string;
                "slide-down": string;
                "slide-in-from-top": string;
                "slide-in-from-bottom": string;
                "slide-in-from-left": string;
                "slide-in-from-right": string;
                "scale-in": string;
                "scale-out": string;
                "dialog-scale-in": string;
                "dialog-scale-out": string;
                "lucky-tap": string;
                "lucky-bounce": string;
                "lucky-pulse": string;
                shimmer: string;
                "spin-slow": string;
                "toast-slide-in": string;
                "toast-slide-out": string;
            };
            spacing: {
                "lucky-xs": string;
                "lucky-sm": string;
                "lucky-md": string;
                "lucky-lg": string;
                "lucky-xl": string;
                "lucky-2xl": string;
            };
        };
    };
    plugins: any[];
};

export { config as default };
