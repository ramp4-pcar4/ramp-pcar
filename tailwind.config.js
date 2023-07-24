module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.vue', './node_modules/ramp-storylines/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                'inset-bottom': 'inset 0px -6px 5px 0px rgba(0, 0, 0, 0.14)',
                top: '0px -6px 5px 0px rgba(0, 0, 0, 0.14)'
            },
            flex: {
                2: '2 2 0%'
            },
            colors: {
                teal: 'rgba(241,249,255,1)',
                'teal-dark': 'rgba(211,236,255,1)',
                'light-blue': 'rgba(188,224,253,1)',
                'light-blue-transparent': 'rgba(188,224,253,0.7)',
                'light-blue-dark': 'rgba(159,211,253,1)',
                orange: '#ff9f43',
                'dark-blue': '#001a49',
                green: '#a8dea8',
                'black-transparent': 'rgba(0,0,0,0.70)'
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: '#000000',
                        h1: {
                            color: '#000000'
                        },
                        h2: {
                            color: '#000000'
                        },
                        h3: {
                            color: '#000000'
                        }
                    }
                },
                white: {
                    css: {
                        color: '#FFFFFF',
                        h1: {
                            color: '#FFFFFF'
                        },
                        h2: {
                            color: '#FFFFFF'
                        },
                        h3: {
                            color: '#FFFFFF'
                        },
                        a: {
                            color: '#FFFFFF'
                        }
                    }
                }
            })
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
};
