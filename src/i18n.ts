import { createI18n } from 'vue-i18n';
import type { MessageSchema } from "@/interfaces/i18n"; // Importa el tipo de esquema de mensajes
import en from '@/assets/locales/en.json';
import es from '@/assets/locales/es.json';

// Configuración de i18n con TypeScript
export default createI18n<[MessageSchema], 'en' | 'es'>({
  legacy: false, // Usa la API de Composition
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en', // Idioma de respaldo
  messages: { en, es },
});