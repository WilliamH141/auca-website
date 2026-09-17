const config = {
  plugins: {
    // pin tailwind's resolve base to this project so it doesn't depend on the dev server's cwd
    "@tailwindcss/postcss": { base: import.meta.dirname },
  },
};

export default config;
