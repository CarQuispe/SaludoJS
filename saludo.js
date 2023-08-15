/*alert("Presiona OK si estas list@ para empezar con javascript");

export function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! ¡Bienvenido!`);
  }
  */
  function saludar(nombre, genero, edad) {
    let saludo = "";
  
    if (genero === "masculino") {
      saludo = "Sr.";
    } else if (genero === "femenino") {
      if (edad < 18) {
        saludo = "Señorita";
      } else {
        saludo = "Sra.";
      }
    }
 
    
    const hora = new Date().getHours();
  
    if (hora >= 0 && hora < 12) {
      saludo += " Buenos días";
    } else if (hora >= 12 && hora < 18) {
      saludo += " Buenas tardes";
    } else {
      saludo += " Buenas noches";
    }
  
    console.log(`${saludo}, ${nombre}!`);
  }
  

  
  
  
  
  
  
