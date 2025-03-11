/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'background-table': 'radial-gradient(50% 50% at 50% 50%, #442D00 0%, rgba(68, 45, 0, 0) 100%)',
  			'custom-gradient1': 'radial-gradient(50% 50% at 50% 50%, #442D00 0%, rgba(68, 45, 0, 0) 100%)',
  			'custom-gradient': 'linear-gradient(to bottom, rgba(51, 51, 51, 0.3) 0%, rgba(51, 51, 51, 0) 100%)',
  			'border-image-source': 'linear-gradient(92.08deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.55) 49.5%, rgba(255, 255, 255, 0) 100%)',
  			'enquire-gradient': 'radial-gradient(50% 50% at 50% 50%, #FFF4B3 0%, #FFE235 100%)',
  			ribbon: 'linear-gradient(90deg, #DA512B 0%, #A23214 50%, #DA512B 100%)'
  		},
  		dropShadow: {
  			shadow: '4px solid #D0B721'
  		},
  		colors: {
  			'enquire-border': 'rgba(255, 255, 255, 0.1)',
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
  			'shadow-border': '2px solid',
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
  		borderRadius: {
  			enquire: '32.4898px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			button: '50px solid #FFFFFF1A',
  			'custom-bottom-shadow': '0 10px 15px rgba(211, 211, 211, 0.5)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
