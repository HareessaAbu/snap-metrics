import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                typewriter: 'typewriter 2s steps(11) forwards',
                caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
              },
              keyframes: {
                typewriter: {
                  to: {
                    left: '100%',
                  },
                },
                blink: {
                  '0%': {
                    opacity: '0',
                  },
                  '0.1%': {
                    opacity: '1',
                  },
                  '50%': {
                    opacity: '1',
                  },
                  '50.1%': {
                    opacity: '0',
                  },
                  '100%': {
                    opacity: '0',
                  },
                },
              },
        },
    },

    plugins: [forms],
};
