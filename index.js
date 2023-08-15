// saludo.js
export function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! ¡Bienvenido!`);
  }
  
  // index.js
  import { saludar } from './saludo';
  
  saludar("Juan");
