/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		fontWeight: {
    			'mega-bold': '900'
    		},
    		fontFamily: {
    			league: [
    				'League Gothic',
    				'sans-serif'
    			],
    			aleo: [
    				'Aleo',
    				'serif'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		animation: {
    			meteor: 'meteor 5s linear infinite',
    			shine: 'shine var(--duration) infinite linear',
    			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
    			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
    		},
    		keyframes: {
    			meteor: {
    				'0%': {
    					transform: 'rotate(215deg) translateX(0)',
    					opacity: '1'
    				},
    				'70%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'rotate(215deg) translateX(-500px)',
    					opacity: '0'
    				}
    			},
    			shine: {
    				'0%': {
    					'background-position': '0% 0%'
    				},
    				'50%': {
    					'background-position': '100% 100%'
    				},
    				to: {
    					'background-position': '0% 0%'
    				}
    			},
    			'border-beam': {
    				'100%': {
    					'offset-distance': '100%'
    				}
    			},
    			orbit: {
    				'0%': {
    					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
    				}
    			}
    		}
    	}
    },
    plugins: [tailwindcssAnimate],
};