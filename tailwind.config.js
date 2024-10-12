import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', ...defaultTheme.fontFamily.serif],
            },
            colors: {
				primary: {
					50: '#edfcf4',
					100: '#d3f8e2',
					200: '#aaf0ca',
					300: '#3acd8b',
					400: '#19c77f',
					500: '#0b905c',
					600: '#08744c',
					700: '#095c3e',
					800: '#095c3e',
					900: '#094b35',
					DEFAULT: '#19C77F',
				},

				secondary: '#303030',
				muted: '#71717A'
			},

        },
    },
    plugins: [forms],
};
