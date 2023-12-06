import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'branco': '#F9F9F9',
        'branquissimo': '#FFFFFF',
        'preto': '#151515',
        'cinza_medio': '#767D86',
        'cinza_claro': '#F4EEEE',
        'cinza_roxo': '#EBEDF3',
        'roxo_claro': '#DBDFEA',
        'roxo_medio': '#ABB4CE',
        'vermelho': '#EF4B4B',
        'azul_escuro': '#116A7B',
        'bege': '#EEE9DA',
        'bege_claro': '#F7F5EB',
      }
    },

  },
  plugins: [],
} satisfies Config;
