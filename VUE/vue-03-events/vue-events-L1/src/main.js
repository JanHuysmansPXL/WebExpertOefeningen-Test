// importeer de methode createApp van vue (dat zich in de node_modules map bevindt)
import { createApp } from 'vue';

// importeer het root bestand voor de vue applicatie
import App from './App.vue'

// Maak een nieuwe vue instantie aan en steek deze in de constante application
const app = createApp(App);

// Geef aan dat de app moet weergegeven worden binnen het element met id app.
app.mount('#app')