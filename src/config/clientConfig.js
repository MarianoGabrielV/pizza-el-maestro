// src/config/clientConfig.js
export const clientConfig = {
  nombre: "Pizzería El Maestro",          // Nombre del local
  tipo: "pizzeria",                     // pizzeria | hamburgueseria | heladeria | etc.

  whatsapp: "+5491132935209",           // Teléfono del negocio (formato internacional)

  logo: "/images/elmaestro.png",    // Ruta dentro de /public (ej: public/images/logo-pizzeria.png)

  colores: {
    primario: "#e63946",
    secundario: "#1d3557",
    textoClaro: "#ffffff",
  },

  hero: {
    fondo: "/images/fondopizza.png",   // Imagen de fondo (ponela en /public/images/)
  },

  // // 🔔 NUEVO: configuración de horario por día
     // //horario: {
       // //enabled: true, // Master switch: si false, ignora horarios
      // //mensajeCerrado: "Ahora estamos cerrados. Consultá nuestros horarios.",
       // //dias: {
         // //lunes: { abierto: false, apertura: "19:00", cierre: "23:30" },
         // //martes: { abierto: false, apertura: "19:00", cierre: "23:30" },
         // //miercoles: { abierto: false, apertura: "19:00", cierre: "23:30" },
         // //jueves: { abierto: false, apertura: "19:00", cierre: "23:30" },
         // //viernes: { abierto: true, apertura: "20:30", cierre: "22:30" }, // hasta medianoche
         // //sabado: { abierto: true, apertura: "20:30", cierre: "22:30" },
         // //domingo: { abierto: true, apertura: "20:30", cierre: "22:30" },
     // // },
   // //},
};
