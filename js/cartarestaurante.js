function goBack() {
  window.history.back();
}

function irAInicio() {
  window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const nombre = localStorage.getItem("restauranteNombre");
  const categoria = localStorage.getItem("restauranteCategoria");
  const icono = localStorage.getItem("restauranteIcono");

  // Llenar cabecera
  document.querySelector(".restaurant-name").textContent = nombre;
  document.querySelector(".restaurant-type").textContent = categoria;
  document.querySelector(".restaurant-logo").textContent = icono?.includes("png") ? "" : icono;

  if (icono && icono.includes("png")) {
    const logo = document.querySelector(".restaurant-logo");
    logo.style.backgroundImage = `url('${icono}')`;
    logo.style.backgroundSize = 'cover';
    logo.textContent = "";
  }

  const tituloMenu = document.querySelector(".menu-header");
  if (tituloMenu && nombre) {
    tituloMenu.textContent = `Menú de ${nombre}`;
  }

  // === Menús por restaurante ===
  const menusPorRestaurante = {
"Chifa Cielo": [
  {
    emoji: "🍚",
    nombre: "Arroz Chaufa Especial",
    descripcion: "Arroz salteado al wok con pollo, cerdo, langostinos y tortilla.",
    precio: "S/24.90"
  },
  {
    emoji: "🍜",
    nombre: "Tallarín Saltado de Pollo",
    descripcion: "Tallarines chinos salteados con pollo, verduras y salsa oriental.",
    precio: "S/19.90"
  },
  {
    emoji: "🥟",
    nombre: "Wantán Frito",
    descripcion: "Crujientes bocados rellenos de cerdo y acompañados de salsa agridulce.",
    precio: "S/9.50"
  },
  {
    emoji: "🍢",
    nombre: "Pollo Tipakay",
    descripcion: "Pollo empanizado bañado en salsa agridulce con trozos de piña.",
    precio: "S/21.50"
  },
  {
    emoji: "🥠",
    nombre: "Galleta de la Suerte",
    descripcion: "Crujiente galleta con un mensaje sorpresa en su interior.",
    precio: "S/2.00"
  }
],

"Chicken Company": [
  {
    emoji: "🍗",
    nombre: "1/4 Pollo a la Brasa",
    descripcion: "Jugoso cuarto de pollo a la brasa con papas fritas y ensalada fresca.",
    precio: "S/25.90"
  },
  {
    emoji: "🍟",
    nombre: "Papas Fritas Rústicas",
    descripcion: "Papas gruesas con piel, crocantes y doradas.",
    precio: "S/9.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Fresca",
    descripcion: "Mix de lechugas, tomate, zanahoria rallada y aderezo especial.",
    precio: "S/7.50"
  },
  {
    emoji: "🥤",
    nombre: "Gaseosa Personal",
    descripcion: "Botella de 500ml de gaseosa helada, variedad de sabores.",
    precio: "S/4.50"
  },
  {
    emoji: "🍰",
    nombre: "Torta Helada",
    descripcion: "Porción de torta helada con capas de crema y bizcocho.",
    precio: "S/8.90"
  }
],

"Chifa El norteñito": [
  {
    emoji: "🍚",
    nombre: "Arroz Chaufa de Pollo",
    descripcion: "Arroz salteado al wok con trozos de pollo, cebolla china y sillao.",
    precio: "S/22.90"
  },
  {
    emoji: "🍜",
    nombre: "Tallarín Saltado Mixto",
    descripcion: "Tallarines salteados con pollo, res y verduras frescas en salsa oriental.",
    precio: "S/24.50"
  },
  {
    emoji: "🥟",
    nombre: "Wantán Frito",
    descripcion: "6 unidades de wantán crocante relleno de cerdo y salsa agridulce.",
    precio: "S/9.90"
  },
  {
    emoji: "🍢",
    nombre: "Pollo Tipakay",
    descripcion: "Filetes de pollo empanizados en salsa agridulce con trozos de piña.",
    precio: "S/21.50"
  },
  {
    emoji: "🥠",
    nombre: "Galleta de la Suerte",
    descripcion: "Crujiente galleta con mensaje sorpresa.",
    precio: "S/2.00"
  }
],

"El Angelo": [
  {
    emoji: "🦑",
    nombre: "Jalea Mixta",
    descripcion: "Crujiente combinación de calamares, pescado y mariscos fritos, acompañados de salsa criolla.",
    precio: "S/32.90"
  },
  {
    emoji: "🍤",
    nombre: "Camarones al Ajillo",
    descripcion: "Camarones salteados en mantequilla y ajo, servidos con arroz blanco.",
    precio: "S/27.50"
  },
  {
    emoji: "🐟",
    nombre: "Ceviche Clásico",
    descripcion: "Filete de pescado fresco marinado en limón, cebolla roja y ají limo.",
    precio: "S/30.00"
  },
  {
    emoji: "🍚",
    nombre: "Arroz con Mariscos",
    descripcion: "Arroz amarillo graneado con mezcla de mariscos y especias peruanas.",
    precio: "S/32.00"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Marina",
    descripcion: "Ensalada fresca con trozos de pulpo, calamar y langostinos.",
    precio: "S/18.90"
  }
],

"Roll de Diego": [
  {
    emoji: "🍣",
    nombre: "Maki Acevichado",
    descripcion: "Roll relleno de langostino y palta, bañado en salsa acevichada.",
    precio: "S/28.90"
  },
  {
    emoji: "🍣",
    nombre: "Maki Furai",
    descripcion: "Roll empanizado y crocante, relleno de queso crema y salmón.",
    precio: "S/29.90"
  },
  {
    emoji: "🍱",
    nombre: "Sashimi Mix",
    descripcion: "Láminas frescas de salmón, atún y pescado blanco.",
    precio: "S/35.00"
  },
  {
    emoji: "🥢",
    nombre: "Nigiri Dúo",
    descripcion: "2 piezas de salmón y 2 de langostino sobre arroz avinagrado.",
    precio: "S/16.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Wakame",
    descripcion: "Algas wakame sazonadas con semillas de sésamo y vinagreta oriental.",
    precio: "S/12.50"
  }
],

"Pollería Don Pollo": [
  {
    emoji: "🥩",
    nombre: "Parrilla de Carne",
    descripcion: "Variedad de cortes: bife, chorizo y costillas, acompañados de papas fritas y ensalada.",
    precio: "S/42.90"
  },
  {
    emoji: "🍗",
    nombre: "1/4 de Pollo a la Brasa",
    descripcion: "Jugoso pollo a la brasa servido con papas fritas y ensalada criolla.",
    precio: "S/25.90"
  },
  {
    emoji: "🥓",
    nombre: "Costillas BBQ",
    descripcion: "Costillas de cerdo bañadas en salsa barbacoa, con papas rústicas.",
    precio: "S/36.50"
  },
  {
    emoji: "🌭",
    nombre: "Chorizo Parrillero",
    descripcion: "Chorizo artesanal a la parrilla, acompañado de salsas especiales.",
    precio: "S/14.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Fresca",
    descripcion: "Mix de lechugas, tomates cherry, zanahoria rallada y aderezo de la casa.",
    precio: "S/12.50"
  }
],

"Pizzería Italia": [
  {
    emoji: "🍕",
    nombre: "Pizza Familiar Pepperoni",
    descripcion: "Pizza grande con salsa italiana, doble queso mozzarella y abundante pepperoni.",
    precio: "S/38.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Cuatro Quesos",
    descripcion: "Combinación deliciosa de mozzarella, parmesano, gouda y roquefort.",
    precio: "S/42.50"
  },
  {
    emoji: "🍝",
    nombre: "Spaghetti Bolognesa",
    descripcion: "Clásica pasta italiana con salsa de tomate y carne molida, servida con queso rallado.",
    precio: "S/24.90"
  },
  {
    emoji: "🫓",
    nombre: "Pan de Ajo",
    descripcion: "Pan crujiente horneado con mantequilla de ajo y hierbas italianas.",
    precio: "S/9.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Caprese",
    descripcion: "Rodajas de tomate fresco, mozzarella, hojas de albahaca y aceite de oliva.",
    precio: "S/14.90"
  }
],

"Postrería Borcelle": [
  {
    emoji: "🍨",
    nombre: "Helado Triple Sabor",
    descripcion: "Copa de helado con chocolate, vainilla y fresa, decorada con sirope y galletas.",
    precio: "S/15.90"
  },
  {
    emoji: "🍦",
    nombre: "Cono Clásico",
    descripcion: "Helado cremoso servido en cono crocante. Sabores a elección.",
    precio: "S/6.50"
  },
  {
    emoji: "🍰",
    nombre: "Cheesecake de Fresa",
    descripcion: "Suave tarta de queso con cobertura de fresas naturales.",
    precio: "S/12.90"
  },
  {
    emoji: "🥧",
    nombre: "Pie de Limón",
    descripcion: "Base crocante con relleno cítrico y merengue suave.",
    precio: "S/10.50"
  },
  {
    emoji: "🍫",
    nombre: "Brownie con Helado",
    descripcion: "Brownie tibio acompañado de bola de helado de vainilla y salsa de chocolate.",
    precio: "S/14.90"
  }
],

"Chili's": [
  {
    emoji: "🌮",
    nombre: "Tacos al Pastor",
    descripcion: "Tres tacos con cerdo marinado, piña, cebolla y cilantro en tortillas suaves.",
    precio: "S/22.90"
  },
  {
    emoji: "🥩",
    nombre: "Grilled Steak",
    descripcion: "Jugoso corte de carne a la parrilla servido con papas fritas y ensalada.",
    precio: "S/39.90"
  },
  {
    emoji: "🧀",
    nombre: "Queso Fundido",
    descripcion: "Queso derretido con chorizo, servido con tortillas calientes.",
    precio: "S/16.50"
  },
  {
    emoji: "🍗",
    nombre: "Boneless Wings",
    descripcion: "Trozos de pollo empanizados bañados en salsa Buffalo, con aderezo ranch.",
    precio: "S/18.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Santa Fe",
    descripcion: "Ensalada fresca con pollo a la parrilla, maíz, frijoles, y dressing picante.",
    precio: "S/19.90"
  }
],

"La ensaladeria": [
  {
    emoji: "🥗",
    nombre: "Ensalada César Clásica",
    descripcion: "Lechuga fresca, crutones, queso parmesano y aderezo César.",
    precio: "S/15.90"
  },
  {
    emoji: "🥑",
    nombre: "Ensalada Avocado Mix",
    descripcion: "Mix de lechugas, palta, tomate cherry, pepino y semillas.",
    precio: "S/18.50"
  },
  {
    emoji: "🍎",
    nombre: "Ensalada Sweet Apple",
    descripcion: "Espinaca, manzana roja, nueces, queso azul y vinagreta dulce.",
    precio: "S/17.90"
  },
  {
    emoji: "🍗",
    nombre: "Ensalada con Pollo a la Parrilla",
    descripcion: "Base de verduras mixtas con pechuga de pollo a la parrilla.",
    precio: "S/19.90"
  },
  {
    emoji: "🥒",
    nombre: "Ensalada Detox",
    descripcion: "Kale, zanahoria, pepino, brotes y aderezo bajo en calorías.",
    precio: "S/16.50"
  }
],

"Sopas del Perú": [
  {
    emoji: "🍲",
    nombre: "Sopa Criolla",
    descripcion: "Caldo de res con fideos, leche evaporada, huevo y especias peruanas.",
    precio: "S/19.90"
  },
  {
    emoji: "🥘",
    nombre: "Chupe de Camarones",
    descripcion: "Sopa cremosa de camarones, papas, huevo y queso, típica de Arequipa.",
    precio: "S/28.90"
  },
  {
    emoji: "🍖",
    nombre: "Caldo de Gallina",
    descripcion: "Caldo concentrado de gallina, con fideos, huevo duro y papa amarilla.",
    precio: "S/17.50"
  },
  {
    emoji: "🍜",
    nombre: "Aguadito de Pollo",
    descripcion: "Sopa de arroz con pollo, cilantro, zanahoria y maíz, muy reconfortante.",
    precio: "S/15.90"
  },
  {
    emoji: "🥣",
    nombre: "Sancochado Limeño",
    descripcion: "Sopa robusta con carnes, tubérculos, verduras y hierbas aromáticas.",
    precio: "S/24.50"
  }
],
"Sopas del Perú": [
  {
    emoji: "🍲",
    nombre: "Sopa Criolla",
    descripcion: "Caldo de res con fideos, leche evaporada, huevo y especias peruanas.",
    precio: "S/19.90"
  },
  {
    emoji: "🥘",
    nombre: "Chupe de Camarones",
    descripcion: "Sopa cremosa de camarones, papas, huevo y queso, típica de Arequipa.",
    precio: "S/28.90"
  },
  {
    emoji: "🍖",
    nombre: "Caldo de Gallina",
    descripcion: "Caldo concentrado de gallina, con fideos, huevo duro y papa amarilla.",
    precio: "S/17.50"
  },
  {
    emoji: "🍜",
    nombre: "Aguadito de Pollo",
    descripcion: "Sopa de arroz con pollo, cilantro, zanahoria y maíz, muy reconfortante.",
    precio: "S/15.90"
  },
  {
    emoji: "🥣",
    nombre: "Sancochado Limeño",
    descripcion: "Sopa robusta con carnes, tubérculos, verduras y hierbas aromáticas.",
    precio: "S/24.50"
  }
],

"Catering": [
  {
    emoji: "🍛",
    nombre: "Ají de Gallina",
    descripcion: "Tiernas hebras de pollo en crema de ají amarillo, nueces y queso, acompañado de arroz blanco.",
    precio: "S/21.90"
  },
  {
    emoji: "🥩",
    nombre: "Lomo Saltado",
    descripcion: "Trozos de lomo salteados con cebolla, tomate y papas fritas, servido con arroz.",
    precio: "S/29.90"
  },
  {
    emoji: "🍖",
    nombre: "Seco con Frejoles",
    descripcion: "Carne de res cocida en salsa de culantro, servida con frejoles y arroz.",
    precio: "S/26.50"
  },
  {
    emoji: "🥔",
    nombre: "Causa Limeña",
    descripcion: "Capas de puré de papa amarilla rellenas de pollo o atún, con salsa criolla.",
    precio: "S/17.50"
  },
  {
    emoji: "🍲",
    nombre: "Sopa Criolla",
    descripcion: "Caldo con carne de res, fideos, leche, huevo y especias, tradicionalmente limeña.",
    precio: "S/19.90"
  }
],

"Papilistas": [
  {
    emoji: "🥔",
    nombre: "Papa Rellena",
    descripcion: "Papa rellena de carne sazonada, acompañada de salsa criolla.",
    precio: "S/12.90"
  },
  {
    emoji: "🍛",
    nombre: "Ají de Gallina",
    descripcion: "Guiso cremoso de pollo deshilachado en salsa de ají amarillo, con arroz y aceituna.",
    precio: "S/17.50"
  },
  {
    emoji: "🥩",
    nombre: "Lomo Saltado",
    descripcion: "Trozos de carne salteados con cebolla, tomate y papas fritas, servido con arroz.",
    precio: "S/21.90"
  },
  {
    emoji: "🍲",
    nombre: "Sopa Criolla",
    descripcion: "Caldo de carne con fideos, leche evaporada, huevo y hierbas aromáticas.",
    precio: "S/14.00"
  },
  {
    emoji: "🍖",
    nombre: "Seco con Frejoles",
    descripcion: "Guiso de carne en salsa de culantro, acompañado de frejoles y arroz.",
    precio: "S/19.50"
  }
],

"Tacu Tacu": [
  {
    emoji: "🍛",
    nombre: "Tacu Tacu con Lomo",
    descripcion: "Tacu Tacu de frejoles y arroz, acompañado de lomo saltado con cebolla y tomate.",
    precio: "S/28.00"
  },
  {
    emoji: "🍖",
    nombre: "Tacu Tacu con Seco de Res",
    descripcion: "Tacu Tacu con jugoso seco de res en salsa de culantro.",
    precio: "S/26.90"
  },
  {
    emoji: "🐟",
    nombre: "Tacu Tacu con Pescado Frito",
    descripcion: "Tacu Tacu acompañado de filete de pescado crocante y salsa criolla.",
    precio: "S/24.50"
  },
  {
    emoji: "🍗",
    nombre: "Tacu Tacu con Pollo a la Plancha",
    descripcion: "Tacu Tacu servido con pechuga de pollo a la plancha y ensalada fresca.",
    precio: "S/22.90"
  },
  {
    emoji: "🥚",
    nombre: "Tacu Tacu a lo Pobre",
    descripcion: "Tacu Tacu con huevo frito, plátano y bistec.",
    precio: "S/27.00"
  }
],


"Costa y sierra": [
  {
    emoji: "🥗",
    nombre: "Ocopa Arequipeña",
    descripcion: "Rodajas de papa bañadas en crema de huacatay con queso, acompañadas de huevo duro y aceituna.",
    precio: "S/15.50"
  },
  {
    emoji: "🍤",
    nombre: "Camarones al Ajo",
    descripcion: "Camarones salteados en mantequilla, ajo y perejil, servidos con arroz blanco.",
    precio: "S/29.90"
  },
  {
    emoji: "🍚",
    nombre: "Arroz con Pato",
    descripcion: "Pato cocido en chicha de jora con culantro, servido sobre arroz verde.",
    precio: "S/26.90"
  },
  {
    emoji: "🥘",
    nombre: "Adobo Arequipeño",
    descripcion: "Cerdo macerado en chicha y ají panca, servido en salsa espesa, típico de Arequipa.",
    precio: "S/24.00"
  },
  {
    emoji: "🥔",
    nombre: "Solterito Arequipeño",
    descripcion: "Ensalada fresca de habas, queso, cebolla, aceitunas y tomate, aliñada con limón.",
    precio: "S/13.50"
  }
],

"El Cortijo": [
  {
    emoji: "🍗",
    nombre: "Ají de Gallina",
    descripcion: "Pechuga de gallina deshilachada en crema de ají amarillo, queso y nueces, acompañada de arroz blanco y aceituna.",
    precio: "S/21.90"
  },
  {
    emoji: "🥘",
    nombre: "Seco de Res con Frejoles",
    descripcion: "Carne de res guisada en cilantro y cerveza, servida con frejoles y arroz.",
    precio: "S/24.90"
  },
  {
    emoji: "🍛",
    nombre: "Carapulcra Limeña",
    descripcion: "Guiso de papa seca con trozos de cerdo, maní y especias criollas, acompañado de arroz.",
    precio: "S/18.50"
  },
  {
    emoji: "🍖",
    nombre: "Chancho al Palo",
    descripcion: "Trozos de cerdo cocidos lentamente al fuego hasta quedar crujientes, con ensalada y papa dorada.",
    precio: "S/28.00"
  },
  {
    emoji: "🥔",
    nombre: "Causa Limeña",
    descripcion: "Puré frío de papa amarilla con ají amarillo y limón, relleno de pollo y mayonesa.",
    precio: "S/14.90"
  }
],

"La Muralla": [
  {
    emoji: "🥘",
    nombre: "Seco con Frejoles",
    descripcion: "Tiernos trozos de carne de res cocidos en salsa de cilantro, acompañados de frejoles guisados y arroz blanco.",
    precio: "S/26.50"
  },
  {
    emoji: "🥔",
    nombre: "Rocoto Relleno",
    descripcion: "Rocoto arequipeño relleno de carne picada, pasas, aceitunas y especias, gratinado con queso y acompañado de pastel de papa.",
    precio: "S/22.90"
  },
  {
    emoji: "🍲",
    nombre: "Adobo Arequipeño",
    descripcion: "Guiso de cerdo cocinado lentamente en chicha de jora y ají panca, servido con pan y camote.",
    precio: "S/24.90"
  },
  {
    emoji: "🍛",
    nombre: "Solterito Arequipeño",
    descripcion: "Fresco plato frío de habas, queso fresco, tomate, cebolla y aceitunas aliñadas con vinagreta.",
    precio: "S/12.50"
  },
  {
    emoji: "🥩",
    nombre: "Costillar Arequipeño",
    descripcion: "Costillar de cerdo marinado en especias andinas, acompañado de papas doradas y ensalada.",
    precio: "S/28.90"
  }
],

"Somos Perú": [
  {
    emoji: "🍚",
    nombre: "Chaufa Mixto",
    descripcion: "Arroz salteado al wok con pollo, cerdo, langostinos, huevo y cebolla china, al estilo oriental.",
    precio: "S/22.90"
  },
  {
    emoji: "🥟",
    nombre: "Wantán Frito",
    descripcion: "Crujientes bocados rellenos de cerdo y verduras, servidos con salsa agridulce.",
    precio: "S/9.90"
  },
  {
    emoji: "🍜",
    nombre: "Tallarin Saltado Especial",
    descripcion: "Fideos salteados con pollo, verduras, cebolla y salsa oriental.",
    precio: "S/18.90"
  },
  {
    emoji: "🥢",
    nombre: "Pollo Tipakay",
    descripcion: "Trozos de pollo empanizado en salsa agridulce con piña y pimientos.",
    precio: "S/19.50"
  },
  {
    emoji: "🥠",
    nombre: "Galleta de la Suerte",
    descripcion: "Crujiente galleta con mensaje sorpresa, clásico cierre de comida chifa.",
    precio: "S/2.50"
  }
],

"Cevichería Tentaciones": [
  {
    emoji: "🐟",
    nombre: "Ceviche Clásico",
    descripcion: "Pescado fresco en jugo de limón, cebolla roja, ají limo y culantro, acompañado de camote y cancha.",
    precio: "S/30.00"
  },
  {
    emoji: "🦑",
    nombre: "Jalea Mixta",
    descripcion: "Fritura de pescados, calamares y mariscos, servida con yuca frita y salsa criolla.",
    precio: "S/36.90"
  },
  {
    emoji: "🍤",
    nombre: "Chicharrón de Mariscos",
    descripcion: "Langostinos, calamares y pescado empanizados, crocantes y dorados, con salsa tártara.",
    precio: "S/28.50"
  },
  {
    emoji: "🍚",
    nombre: "Arroz con Mariscos",
    descripcion: "Arroz salteado con mariscos, vino blanco, pimientos y salsa criolla.",
    precio: "S/32.00"
  },
  {
    emoji: "🥗",
    nombre: "Leche de Tigre",
    descripcion: "Concentrado cítrico del ceviche, con trozos de pescado, cancha serrana y ají limo.",
    precio: "S/15.90"
  }
],

"El gusto criollito": [
  {
    emoji: "🥘",
    nombre: "Sancochado",
    descripcion: "Tradicional caldo de carne, verduras y tubérculos, servido con ají criollo y arroz blanco.",
    precio: "S/24.90"
  },
  {
    emoji: "🍖",
    nombre: "Seco de Res",
    descripcion: "Guiso de carne de res en salsa de cilantro, acompañado de arroz blanco y frejoles.",
    precio: "S/22.50"
  },
  {
    emoji: "🍲",
    nombre: "Cau Cau",
    descripcion: "Guiso de mondongo y papas en salsa amarilla con hierbabuena y arroz.",
    precio: "S/18.90"
  },
  {
    emoji: "🍗",
    nombre: "Ají de Gallina",
    descripcion: "Pechuga de pollo deshilachada en crema de ají amarillo, nueces y queso, servida con arroz y aceituna.",
    precio: "S/21.90"
  },
  {
    emoji: "🥗",
    nombre: "Papa a la Huancaína",
    descripcion: "Papas sancochadas cubiertas con crema huancaína, huevo duro y aceitunas negras.",
    precio: "S/12.00"
  }
],

"Sazon Peruano": [
  {
    emoji: "🍛",
    nombre: "Pollo al Curry",
    descripcion: "Jugosos trozos de pollo cocidos en salsa cremosa de curry amarillo, acompañados de arroz basmati.",
    precio: "S/27.90"
  },
  {
    emoji: "🥘",
    nombre: "Paella Valenciana",
    descripcion: "Arroz español con mariscos, pollo, pimientos y azafrán, preparado al estilo tradicional.",
    precio: "S/32.50"
  },
  {
    emoji: "🍝",
    nombre: "Pasta Alfredo",
    descripcion: "Pasta fettuccine en cremosa salsa Alfredo con queso parmesano y trozos de pechuga de pollo.",
    precio: "S/23.90"
  },
  {
    emoji: "🥗",
    nombre: "Tabulé",
    descripcion: "Ensalada fresca de trigo bulgur con tomate, perejil, menta, cebolla y jugo de limón.",
    precio: "S/15.00"
  },
  {
    emoji: "🍲",
    nombre: "Sopa Tailandesa Tom Yum",
    descripcion: "Caldo picante y ácido con camarones, hongos, hierba limón y hojas de lima kaffir.",
    precio: "S/19.90"
  }
],

"Restaurant": [
  {
    emoji: "🍚",
    nombre: "Arroz Tapado",
    descripcion: "Capa de arroz blanco rellena de guiso criollo de carne molida, aceitunas y pasas, servido con huevo frito.",
    precio: "S/20.00"
  },
  {
    emoji: "🥘",
    nombre: "Estofado de Pollo",
    descripcion: "Pollo cocido en salsa criolla de tomate, arvejas y zanahorias, acompañado de arroz blanco.",
    precio: "S/18.50"
  },
  {
    emoji: "🍖",
    nombre: "Seco de Res",
    descripcion: "Guiso de carne de res sazonado con culantro, acompañado de frejoles y arroz blanco.",
    precio: "S/24.00"
  },
  {
    emoji: "🥔",
    nombre: "Causa Limeña",
    descripcion: "Capas de puré de papa amarilla con relleno de pollo y mayonesa, servido frío.",
    precio: "S/16.90"
  },
  {
    emoji: "🍲",
    nombre: "Sopa Criolla",
    descripcion: "Sopa caliente con fideos, carne, leche y huevo batido, al estilo limeño.",
    precio: "S/15.00"
  }
],

"Doña Lasagna": [
  {
    emoji: "🍝",
    nombre: "Lasaña de Carne",
    descripcion: "Capas de pasta fresca rellenas de salsa boloñesa, bechamel y queso gratinado al horno.",
    precio: "S/29.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Margherita",
    descripcion: "Pizza clásica con salsa de tomate, mozzarella fresca y hojas de albahaca.",
    precio: "S/24.50"
  },
  {
    emoji: "🥖",
    nombre: "Pan de Ajo",
    descripcion: "Pan crocante untado en mantequilla de ajo y perejil, ideal para compartir.",
    precio: "S/9.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Caprese",
    descripcion: "Rodajas de tomate y mozzarella fresca con pesto de albahaca y aceite de oliva.",
    precio: "S/14.90"
  },
  {
    emoji: "🍷",
    nombre: "Copa de Vino Tinto",
    descripcion: "Selección de vino italiano, perfecto para acompañar pastas y carnes.",
    precio: "S/12.00"
  }
],

"La casita de los Anticuchos": [
  {
    emoji: "🍢",
    nombre: "Anticuchos Clásicos",
    descripcion: "Brochetas de corazón de res marinadas en ají panca y especias, servidas con papa y choclo.",
    precio: "S/18.00"
  },
  {
    emoji: "🫓",
    nombre: "Rachi",
    descripcion: "Tripita crocante al carbón, servida con salsa criolla y papas doradas.",
    precio: "S/14.00"
  },
  {
    emoji: "🥔",
    nombre: "Papa Rellena",
    descripcion: "Papa rellena de carne, huevo y aceituna, acompañada de salsa criolla.",
    precio: "S/12.50"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Morada",
    descripcion: "Bebida tradicional peruana a base de maíz morado y especias.",
    precio: "S/5.00"
  }
],

"Barbeque": [
  {
    emoji: "🍝",
    nombre: "Fetuccini Alfredo",
    descripcion: "Fideos anchos en cremosa salsa Alfredo con queso parmesano.",
    precio: "S/23.90"
  },
  {
    emoji: "🍖",
    nombre: "Costillas BBQ",
    descripcion: "Costillas de cerdo bañadas en salsa barbacoa, servidas con papas fritas.",
    precio: "S/34.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada César",
    descripcion: "Lechuga fresca con aderezo César, crutones y parmesano rallado.",
    precio: "S/15.50"
  },
  {
    emoji: "🍷",
    nombre: "Copa de Vino",
    descripcion: "Vino tinto o blanco para maridar tus platos favoritos.",
    precio: "S/12.00"
  }
],

"Los criollos": [
  {
    emoji: "🍲",
    nombre: "Carapulcra con Sopa Seca",
    descripcion: "Carapulcra de cerdo con sopa seca chinchana, lleno de sabor tradicional.",
    precio: "S/19.90"
  },
  {
    emoji: "🍛",
    nombre: "Ají de Gallina",
    descripcion: "Pechuga de pollo deshilachada en crema de ají amarillo y queso.",
    precio: "S/17.50"
  },
  {
    emoji: "🥘",
    nombre: "Seco de Res",
    descripcion: "Carne de res guisada en salsa de cilantro, acompañada de frejoles y arroz.",
    precio: "S/21.00"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Morada",
    descripcion: "Refrescante bebida tradicional peruana.",
    precio: "S/4.50"
  }
],

"Cevichería don marino": [
  {
    emoji: "🍚",
    nombre: "Arroz con Mariscos",
    descripcion: "Arroz al estilo norteño con mariscos frescos y especias.",
    precio: "S/32.00"
  },
  {
    emoji: "🥗",
    nombre: "Ceviche Mixto",
    descripcion: "Pescado y mariscos frescos marinados en jugo de limón.",
    precio: "S/28.50"
  },
  {
    emoji: "🍤",
    nombre: "Jalea Mixta",
    descripcion: "Mariscos fritos, servidos con yuca crocante y salsa criolla.",
    precio: "S/30.00"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Morada",
    descripcion: "Bebida refrescante a base de maíz morado.",
    precio: "S/5.00"
  }
],

"Oh Peruano": [
  {
    emoji: "🍜",
    nombre: "Tallarín Saltado",
    descripcion: "Fideos salteados al wok con pollo, verduras y salsa oriental.",
    precio: "S/22.50"
  },
  {
    emoji: "🍚",
    nombre: "Chaufa Especial",
    descripcion: "Arroz chaufa con chancho, pollo y langostinos.",
    precio: "S/21.90"
  },
  {
    emoji: "🥟",
    nombre: "Wantán Frito",
    descripcion: "Crujientes bocados rellenos de carne y verduras.",
    precio: "S/10.50"
  },
  {
    emoji: "🥤",
    nombre: "Té Helado",
    descripcion: "Bebida refrescante para acompañar tu plato.",
    precio: "S/4.00"
  }
],

"Cevicheria Bahia": [
  {
    emoji: "🐟",
    nombre: "Pescado a lo Macho",
    descripcion: "Filete de pescado bañado en salsa picante con mariscos.",
    precio: "S/36.90"
  },
  {
    emoji: "🍤",
    nombre: "Langostinos al Ajillo",
    descripcion: "Langostinos salteados en mantequilla, ajo y perejil.",
    precio: "S/34.00"
  },
  {
    emoji: "🥗",
    nombre: "Ceviche Clásico",
    descripcion: "Pescado fresco marinado en limón y ají limo.",
    precio: "S/28.00"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Morada",
    descripcion: "Bebida típica peruana, ideal para mariscos.",
    precio: "S/5.00"
  }
],

"Esquites": [
  {
    emoji: "🍖",
    nombre: "Lomo Saltado",
    descripcion: "Tiras de lomo de res salteadas con cebolla, tomate y papas fritas.",
    precio: "S/29.90"
  },
  {
    emoji: "🥔",
    nombre: "Papa a la Huancaína",
    descripcion: "Rodajas de papa bañadas en crema de ají amarillo.",
    precio: "S/10.00"
  },
  {
    emoji: "🍛",
    nombre: "Ají de Gallina",
    descripcion: "Pollo deshilachado en crema de ají amarillo, con arroz blanco.",
    precio: "S/18.50"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Morada",
    descripcion: "Refresco tradicional peruano.",
    precio: "S/4.50"
  }
],

    "McDonald's": [
      {
        emoji: "🍔",
        nombre: "McCombo Clásico",
        descripcion: "1 Big Mac + papas medianas + gaseosa de 500ml",
        precio: "S/25.90"
      },
      {
        emoji: "🍟",
        nombre: "Papas Grandes",
        descripcion: "Papas fritas crocantes, tamaño grande",
        precio: "S/9.90"
      },
      {
        emoji: "🥤",
        nombre: "Coca-Cola Mediana",
        descripcion: "Gaseosa helada 500ml",
        precio: "S/6.90"
      }
    ],
    "Bembos": [
      {
        emoji: "🍔",
        nombre: "Hamburguesa Clásica",
        descripcion: "Hamburguesa con lechuga, tomate, queso y papas",
        precio: "S/22.90"
      },
      {
        emoji: "🍟",
        nombre: "Papas Bembos",
        descripcion: "Porción mediana de papas fritas",
        precio: "S/7.50"
      },
      {
        emoji: "🥤",
        nombre: "Bebida Mediana",
        descripcion: "Gaseosa helada 500ml",
        precio: "S/6.50"
      },
      {
        emoji: "🍾",
        nombre: "Bebida Mediana",
        descripcion: "Inka Cola 1Litro",
        precio: "S/16.50"
      }
    ],
    "KFC": [
      {
        emoji: "🍗",
        nombre: "Bucket 8 piezas",
        descripcion: "8 piezas de pollo crujiente con 2 guarniciones y gaseosa",
        precio: "S/59.90"
      },
      {
        emoji: "🥔",
        nombre: "Puré + Ensalada",
        descripcion: "Puré de papa con gravy + ensalada fresca",
        precio: "S/14.90"
      },
      {
        emoji: "🥤",
        nombre: "Pepsi Mediana",
        descripcion: "Gaseosa helada 500ml",
        precio: "S/5.90"
      }
    ],
    "Popeyes": [
      {
        emoji: "🍗",
        nombre: "Combo Popeyes Clásico",
        descripcion: "2 piezas de pollo frito + papas + gaseosa",
        precio: "S/19.90"
      },
      {
        emoji: "🍔",
        nombre: "Sandwich Cajún",
        descripcion: "Sándwich estilo cajún con pollo crocante",
        precio: "S/17.90"
      },
      {
        emoji: "🍟",
        nombre: "Papas Cajún",
        descripcion: "Papas sazonadas estilo cajún medianas",
        precio: "S/8.50"
      },
      {
        emoji: "🥤",
        nombre: "Refresco Grande",
        descripcion: "Bebida de tu elección 700ml",
        precio: "S/6.90"
      },
      {
        emoji: "🍰",
        nombre: "Pie de Manzana",
        descripcion: "Postre frito relleno de manzana dulce",
        precio: "S/4.90"
      }
    ],
    "Papa John's": [
      {
        emoji: "🍕",
        nombre: "Pizza Pepperoni Grande",
        descripcion: "Pizza grande con extra pepperoni y queso mozzarella",
        precio: "S/49.90"
      },
      {
        emoji: "🍕",
        nombre: "Pizza Suprema Familiar",
        descripcion: "Pizza familiar con jamón, champiñones, pimiento y cebolla",
        precio: "S/59.90"
      },
      {
        emoji: "🧄",
        nombre: "Pan de Ajo con Queso",
        descripcion: "Pan horneado con mantequilla de ajo y queso derretido",
        precio: "S/14.90"
      },
      {
        emoji: "🥤",
        nombre: "Gaseosa 1.5L",
        descripcion: "Gaseosa helada para compartir",
        precio: "S/8.50"
      },
      {
        emoji: "🍗",
        nombre: "Alitas BBQ (6 unidades)",
        descripcion: "Alitas de pollo bañadas en salsa BBQ",
        precio: "S/22.90"
      }
    ],
    "Subway": [
      {
        emoji: "🥪",
        nombre: "Sub de Pollo Teriyaki",
        descripcion: "Sándwich de pollo en salsa teriyaki con vegetales a elección",
        precio: "S/19.90"
      },
      {
        emoji: "🥪",
        nombre: "Sub Italiano BMT",
        descripcion: "Salami, pepperoni, jamón y vegetales frescos en pan artesanal",
        precio: "S/21.90"
      },
      {
        emoji: "🥗",
        nombre: "Ensalada Veggie",
        descripcion: "Mix de lechugas, tomates, pepinillos y zanahoria rallada",
        precio: "S/12.90"
      },
      {
        emoji: "🥤",
        nombre: "Bebida Refrescante",
        descripcion: "Bebida helada a elección (500ml)",
        precio: "S/5.90"
      },
      {
        emoji: "🍪",
        nombre: "Cookie de Chocolate",
        descripcion: "Galleta suave con chispas de chocolate",
        precio: "S/3.50"
      }
    ],
    "Chinatown": [
      {
        emoji: "🍚",
        nombre: "Arroz Chaufa Especial",
        descripcion: "Arroz chaufa con pollo, cerdo, langostinos y tortilla",
        precio: "S/24.90"
      },
      {
        emoji: "🥟",
        nombre: "Wantán Frito",
        descripcion: "6 unidades de wantán crocante con salsa agridulce",
        precio: "S/9.90"
      },
      {
        emoji: "🍜",
        nombre: "Tallarín Saltado con Pollo",
        descripcion: "Tallarines orientales salteados con verduras y pollo",
        precio: "S/19.90"
      },
      {
        emoji: "🍢",
        nombre: "Pollo Tipakay",
        descripcion: "Filetes de pollo empanizado en salsa agridulce con piña",
        precio: "S/21.50"
      },
      {
        emoji: "🥠",
        nombre: "Galleta de la Suerte",
        descripcion: "Crujiente galleta con mensaje sorpresa",
        precio: "S/2.00"
      }
    ],
    "Fridays": [
      {
        emoji: "🥩",
        nombre: "Jack Daniel’s Ribs",
        descripcion: "Costillas de cerdo con salsa Jack Daniel’s, papas fritas y ensalada",
        precio: "S/49.90"
      },
      {
        emoji: "🍔",
        nombre: "Fridays Cheeseburger",
        descripcion: "Hamburguesa con queso cheddar, tocino, cebolla caramelizada y papas",
        precio: "S/34.90"
      },
      {
        emoji: "🍤",
        nombre: "Shrimp Platter",
        descripcion: "Langostinos empanizados con dip tártara y papas fritas",
        precio: "S/42.50"
      },
      {
        emoji: "🥗",
        nombre: "Chicken Caesar Salad",
        descripcion: "Ensalada César con pollo a la parrilla y crutones",
        precio: "S/28.00"
      },
      {
        emoji: "🍰",
        nombre: "Brownie con Helado",
        descripcion: "Brownie tibio con bola de helado y salsa de chocolate",
        precio: "S/15.90"
      }
    ],
    "Dunkin'": [
      {
        emoji: "🍩",
        nombre: "Caja de Donas (6 unidades)",
        descripcion: "6 donas surtidas clásicas con glaseado y relleno",
        precio: "S/22.00"
      },
      {
        emoji: "☕",
        nombre: "Café Americano Mediano",
        descripcion: "Café recién hecho, ideal para llevar",
        precio: "S/6.00"
      },
      {
        emoji: "🥯",
        nombre: "Bagel con Queso Crema",
        descripcion: "Bagel tostado con abundante queso crema",
        precio: "S/9.50"
      },
      {
        emoji: "🥤",
        nombre: "Dunkin' Frozen",
        descripcion: "Bebida frappé congelada de café o vainilla",
        precio: "S/11.90"
      },
      {
        emoji: "🍪",
        nombre: "Galleta de Chocolate",
        descripcion: "Galleta grande con trozos de chocolate",
        precio: "S/4.90"
      }
    ],
    "Rockys": [
      {
        emoji: "🍗",
        nombre: "Pollo Entero Clásico",
        descripcion: "1 pollo a la brasa + papas + ensalada + gaseosa de 1.5L",
        precio: "S/69.90"
      },
      {
        emoji: "🍟",
        nombre: "Papas Rústicas",
        descripcion: "Papas fritas gruesas con piel, ideales para compartir",
        precio: "S/9.90"
      },
      {
        emoji: "🥗",
        nombre: "Ensalada Mixta",
        descripcion: "Fresca mezcla de lechuga, zanahoria y tomate con aderezo",
        precio: "S/7.50"
      },
      {
        emoji: "🥤",
        nombre: "Gaseosa Personal",
        descripcion: "Botella personal de 500ml, varias opciones",
        precio: "S/4.50"
      },
      {
        emoji: "🍰",
        nombre: "Torta Helada",
        descripcion: "Porción de torta helada clásica de la casa",
        precio: "S/8.90"
      }
    ],

"Satsuki Sushi": [
  {
    emoji: "🍣",
    nombre: "Nigiri Sampler",
    descripcion: "Selección de nigiris variados: salmón, atún y langostino.",
    precio: "S/29.90"
  },
  {
    emoji: "🥢",
    nombre: "Maki Acevichado",
    descripcion: "Roll relleno de langostino, bañado en salsa acevichada peruana.",
    precio: "S/24.90"
  },
  {
    emoji: "🍤",
    nombre: "Tempura Mixto",
    descripcion: "Langostinos y vegetales empanizados y fritos.",
    precio: "S/21.50"
  },
  {
    emoji: "🥤",
    nombre: "Té Verde Helado",
    descripcion: "Refrescante té verde frío.",
    precio: "S/6.00"
  }
],

"Tokyo Rolls": [
  {
    emoji: "🍣",
    nombre: "Tokyo Roll Especial",
    descripcion: "Roll con salmón, queso crema y cobertura de palta.",
    precio: "S/26.90"
  },
  {
    emoji: "🍙",
    nombre: "Onigiri de Salmón",
    descripcion: "Triángulos de arroz rellenos de salmón.",
    precio: "S/12.00"
  },
  {
    emoji: "🥟",
    nombre: "Gyozas",
    descripcion: "Empanaditas japonesas rellenas de cerdo y verduras.",
    precio: "S/15.50"
  },
  {
    emoji: "🥤",
    nombre: "Soda Japonesa Ramune",
    descripcion: "Bebida burbujeante en botella tradicional.",
    precio: "S/8.00"
  }
],

"Bento House": [
  {
    emoji: "🍱",
    nombre: "Bento de Pollo Teriyaki",
    descripcion: "Pollo teriyaki acompañado de arroz, ensalada y tamagoyaki.",
    precio: "S/28.50"
  },
  {
    emoji: "🥢",
    nombre: "Bento de Salmón",
    descripcion: "Filete de salmón a la plancha con guarniciones japonesas.",
    precio: "S/32.90"
  },
  {
    emoji: "🍙",
    nombre: "Onigiri Variados",
    descripcion: "Arroz relleno con distintos sabores: salmón, ciruela, atún.",
    precio: "S/14.90"
  },
  {
    emoji: "🥤",
    nombre: "Té Oolong",
    descripcion: "Bebida fría o caliente, ligera y aromática.",
    precio: "S/5.50"
  }
],

"Ramen Ichiban": [
  {
    emoji: "🍜",
    nombre: "Tonkotsu Ramen",
    descripcion: "Caldo cremoso de cerdo con chashu, huevo y fideos.",
    precio: "S/24.90"
  },
  {
    emoji: "🍜",
    nombre: "Shoyu Ramen",
    descripcion: "Caldo claro de soya con fideos, pollo y verduras.",
    precio: "S/22.50"
  },
  {
    emoji: "🥟",
    nombre: "Gyozas",
    descripcion: "Empanaditas rellenas, fritas o al vapor.",
    precio: "S/12.90"
  },
  {
    emoji: "🥤",
    nombre: "Té Matcha Frío",
    descripcion: "Té verde en polvo frío, refrescante.",
    precio: "S/7.00"
  }
],

"SushiGo!": [
  {
    emoji: "🍣",
    nombre: "Maki Philadelphia",
    descripcion: "Roll relleno de salmón, queso crema y palta.",
    precio: "S/21.90"
  },
  {
    emoji: "🍣",
    nombre: "Maki Dragón",
    descripcion: "Roll con langostino tempura y salsa especial.",
    precio: "S/25.00"
  },
  {
    emoji: "🥢",
    nombre: "Nigiri Mix",
    descripcion: "Selección de nigiris de pescado fresco.",
    precio: "S/19.50"
  },
  {
    emoji: "🥤",
    nombre: "Limonada Japonesa",
    descripcion: "Refrescante bebida con toque oriental.",
    precio: "S/5.50"
  }
],

"Nippon Fresh": [
  {
    emoji: "🍣",
    nombre: "Fusion Roll",
    descripcion: "Roll con sabores nikkei: ceviche y salsa acevichada.",
    precio: "S/27.90"
  },
  {
    emoji: "🍱",
    nombre: "Bento Fusion",
    descripcion: "Caja bento con sushi, makis y ensalada oriental.",
    precio: "S/29.90"
  },
  {
    emoji: "🥟",
    nombre: "Ebi Tempura",
    descripcion: "Langostinos crocantes en tempura ligera.",
    precio: "S/22.00"
  },
  {
    emoji: "🥤",
    nombre: "Sake Frío",
    descripcion: "Bebida tradicional japonesa.",
    precio: "S/10.00"
  }
],

"Leña y Carbón": [
  {
    emoji: "🍗",
    nombre: "Pollo Entero a la Brasa",
    descripcion: "Pollo entero con papas fritas, ensalada fresca y salsas.",
    precio: "S/58.90"
  },
  {
    emoji: "🥩",
    nombre: "Parrilla Mixta",
    descripcion: "Costillas, chorizo, pollo y papas al carbón.",
    precio: "S/45.50"
  },
  {
    emoji: "🍟",
    nombre: "Papas Familiares",
    descripcion: "Porción grande de papas fritas crocantes.",
    precio: "S/12.90"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Morada",
    descripcion: "Bebida típica peruana bien fría.",
    precio: "S/6.00"
  }
],

"Maky's": [
  {
    emoji: "🍗",
    nombre: "1/2 Pollo a la Brasa",
    descripcion: "Medio pollo con papas, ensalada y cremas.",
    precio: "S/28.90"
  },
  {
    emoji: "🥩",
    nombre: "Brochetas de Pollo",
    descripcion: "Brochetas de pollo grilladas con verduras.",
    precio: "S/19.90"
  },
  {
    emoji: "🍟",
    nombre: "Papas Maky's",
    descripcion: "Papas fritas con especias especiales de la casa.",
    precio: "S/10.50"
  },
  {
    emoji: "🥤",
    nombre: "Gaseosa Personal",
    descripcion: "Botella de 500ml de tu sabor favorito.",
    precio: "S/5.50"
  }
],

"Porsupollo": [
  {
    emoji: "🍗",
    nombre: "Combo Familiar",
    descripcion: "Pollo entero, papas, ensalada y gaseosa de 1.5L.",
    precio: "S/65.00"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Fresca",
    descripcion: "Mezcla de verduras con aderezo ligero.",
    precio: "S/8.50"
  },
  {
    emoji: "🍟",
    nombre: "Papas Fritas Grandes",
    descripcion: "Porción generosa de papas crocantes.",
    precio: "S/11.90"
  },
  {
    emoji: "🥤",
    nombre: "Limonada",
    descripcion: "Refrescante limonada natural.",
    precio: "S/5.00"
  }
],

"Pardos Chicken": [
  {
    emoji: "🍗",
    nombre: "Pollo Gourmet",
    descripcion: "Pollo marinado con finas hierbas y servido con papas.",
    precio: "S/39.90"
  },
  {
    emoji: "🥩",
    nombre: "Parrilla Pardos",
    descripcion: "Mix de carnes premium con guarniciones.",
    precio: "S/55.00"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada César",
    descripcion: "Clásica ensalada con pollo grillado y crutones.",
    precio: "S/16.90"
  },
  {
    emoji: "🥤",
    nombre: "Maracuyá Frozen",
    descripcion: "Bebida helada de maracuyá.",
    precio: "S/7.50"
  }
],

"Granja Azul": [
  {
    emoji: "🍗",
    nombre: "Pollo Tradicional",
    descripcion: "Sabor clásico de la Granja Azul, jugoso y dorado.",
    precio: "S/59.90"
  },
  {
    emoji: "🥔",
    nombre: "Puré de Papa",
    descripcion: "Puré cremoso con toque de mantequilla.",
    precio: "S/9.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Verde",
    descripcion: "Verduras frescas con vinagreta ligera.",
    precio: "S/8.90"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Morada Grande",
    descripcion: "Bebida tradicional peruana, jarra de 1 litro.",
    precio: "S/10.50"
  }
],

"Diego": [
  {
    emoji: "🍗",
    nombre: "1/4 Pollo Regional",
    descripcion: "Porción regional con sabor casero y papas.",
    precio: "S/17.90"
  },
  {
    emoji: "🥩",
    nombre: "Chorizo Parrillero",
    descripcion: "Chorizo artesanal a la parrilla.",
    precio: "S/12.00"
  },
  {
    emoji: "🥔",
    nombre: "Papas Criollas",
    descripcion: "Papas doradas con ají de huacatay.",
    precio: "S/9.00"
  },
  {
    emoji: "🥤",
    nombre: "Agua de Hierbas",
    descripcion: "Infusión refrescante fría.",
    precio: "S/4.50"
  }
],

"Norky's": [
  {
    emoji: "🍗",
    nombre: "Pollo Norky's",
    descripcion: "Pollo a la brasa tradicional con papas y ensalada.",
    precio: "S/56.90"
  },
  {
    emoji: "🍟",
    nombre: "Papas Especiales",
    descripcion: "Papas fritas extra crocantes con salsas.",
    precio: "S/11.00"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Fresca",
    descripcion: "Verduras crujientes con aliño ligero.",
    precio: "S/8.00"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Personal",
    descripcion: "Vaso de chicha morada tradicional.",
    precio: "S/4.50"
  }
],

"Pollo Real": [
  {
    emoji: "🍗",
    nombre: "Combo Real",
    descripcion: "Pollo entero, papas grandes y gaseosa de 1.5L.",
    precio: "S/61.90"
  },
  {
    emoji: "🥩",
    nombre: "Costillas BBQ",
    descripcion: "Costillas jugosas bañadas en salsa BBQ.",
    precio: "S/29.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada de la Casa",
    descripcion: "Mix de verduras y crutones crocantes.",
    precio: "S/9.90"
  },
  {
    emoji: "🥤",
    nombre: "Limonada Frozen",
    descripcion: "Bebida helada de limón natural.",
    precio: "S/6.50"
  }
],

"Brasa Express": [
  {
    emoji: "🍗",
    nombre: "1/2 Pollo Brasa",
    descripcion: "Medio pollo con papas crocantes y ensalada.",
    precio: "S/26.90"
  },
  {
    emoji: "🥩",
    nombre: "Parrilla Express",
    descripcion: "Selección rápida de carnes a la parrilla.",
    precio: "S/36.00"
  },
  {
    emoji: "🥔",
    nombre: "Papas Express",
    descripcion: "Porción rápida de papas fritas.",
    precio: "S/9.50"
  },
  {
    emoji: "🥤",
    nombre: "Gaseosa Express",
    descripcion: "Bebida personal 500ml.",
    precio: "S/4.90"
  }
],

"Qcharcos": [
  {
    emoji: "🥩",
    nombre: "Bife de Chorizo",
    descripcion: "Jugoso bife de chorizo a la parrilla, acompañado de papas fritas.",
    precio: "S/39.90"
  },
  {
    emoji: "🍖",
    nombre: "Costillar BBQ",
    descripcion: "Costillar bañado en salsa BBQ, servido con puré de papas.",
    precio: "S/45.00"
  },
  {
    emoji: "🍗",
    nombre: "Brochetas Mixtas",
    descripcion: "Brochetas de pollo, carne y verduras a la parrilla.",
    precio: "S/28.50"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Morada",
    descripcion: "Bebida típica peruana bien fría.",
    precio: "S/7.50"
  }
],

"El Gran Parrillero": [
  {
    emoji: "🥩",
    nombre: "Churrasco Especial",
    descripcion: "Gran churrasco marinado con hierbas, servido con ensalada y papas.",
    precio: "S/42.90"
  },
  {
    emoji: "🍖",
    nombre: "Costillas Ahumadas",
    descripcion: "Costillas suaves en salsa ahumada.",
    precio: "S/48.00"
  },
  {
    emoji: "🥓",
    nombre: "Tira de Asado",
    descripcion: "Deliciosa tira de asado al carbón.",
    precio: "S/39.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Fresca",
    descripcion: "Mezcla de vegetales crujientes.",
    precio: "S/9.50"
  }
],

"Asado Criollo": [
  {
    emoji: "🥩",
    nombre: "Costilla Criolla",
    descripcion: "Costilla a la brasa con sazón criolla, acompañada de papas doradas.",
    precio: "S/36.90"
  },
  {
    emoji: "🍗",
    nombre: "Pollo a la Parrilla",
    descripcion: "Jugoso pollo con especias criollas.",
    precio: "S/29.90"
  },
  {
    emoji: "🥔",
    nombre: "Papas Rústicas",
    descripcion: "Papas rústicas con especias.",
    precio: "S/10.00"
  },
  {
    emoji: "🥤",
    nombre: "Limonada Fresca",
    descripcion: "Refrescante limonada natural.",
    precio: "S/6.90"
  }
],

"Bife & Brasa": [
  {
    emoji: "🥩",
    nombre: "Bife Angus",
    descripcion: "Corte premium Angus, asado al punto perfecto.",
    precio: "S/59.90"
  },
  {
    emoji: "🍖",
    nombre: "Costillas Angus BBQ",
    descripcion: "Costillas tiernas en salsa BBQ.",
    precio: "S/54.00"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Gourmet",
    descripcion: "Selección gourmet de vegetales frescos.",
    precio: "S/14.50"
  },
  {
    emoji: "🥤",
    nombre: "Vino Tinto Copa",
    descripcion: "Copa de vino tinto para maridar.",
    precio: "S/12.00"
  }
],

"Carnívoro Grill": [
  {
    emoji: "🥩",
    nombre: "Pechuga de Chancho",
    descripcion: "Corte grueso de cerdo a la parrilla, jugoso y dorado.",
    precio: "S/32.00"
  },
  {
    emoji: "🍖",
    nombre: "Punta de Sazón",
    descripcion: "Corte especial de carne con especias.",
    precio: "S/37.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Grill",
    descripcion: "Vegetales grillados con aderezo ligero.",
    precio: "S/10.50"
  },
  {
    emoji: "🥤",
    nombre: "Gaseosa 500ml",
    descripcion: "Refresco frío para acompañar.",
    precio: "S/5.50"
  }
],

"Costillas & Sazón": [
  {
    emoji: "🍖",
    nombre: "Costillas BBQ",
    descripcion: "Costillas suaves y jugosas en salsa BBQ.",
    precio: "S/38.90"
  },
  {
    emoji: "🍗",
    nombre: "Pechuga de Pollo BBQ",
    descripcion: "Pechuga asada y bañada en salsa BBQ.",
    precio: "S/29.50"
  },
  {
    emoji: "🥔",
    nombre: "Papas Fritas",
    descripcion: "Clásicas papas fritas crocantes.",
    precio: "S/9.90"
  },
  {
    emoji: "🥤",
    nombre: "Cerveza Personal",
    descripcion: "Cerveza fría para acompañar.",
    precio: "S/8.50"
  }
],

"Chifa Central": [
  {
    "emoji": "🍚",
    "nombre": "Arroz Chaufa Especial",
    "descripcion": "Arroz salteado con pollo, cerdo, verduras y trozos de tortilla, con toque de sillao.",
    "precio": "S/24.90"
  },
  {
    "emoji": "🍜",
    "nombre": "Tallarín Saltado",
    "descripcion": "Fideos salteados con pollo, verduras y salsa oriental.",
    "precio": "S/22.50"
  },
  {
    "emoji": "🥟",
    "nombre": "Wantán Frito",
    "descripcion": "Crujientes wantanes rellenos de carne y acompañados de salsa tamarindo.",
    "precio": "S/12.90"
  },
  {
    "emoji": "🍛",
    "nombre": "Aeropuerto",
    "descripcion": "Combinación de arroz chaufa y tallarín saltado, salteados al wok con carnes y verduras.",
    "precio": "S/26.90"
  }
],


"Rancho Bravío": [
  {
    emoji: "🥩",
    nombre: "Picaña de Ternera",
    descripcion: "Picaña jugosa de ternera cocida al carbón.",
    precio: "S/42.00"
  },
  {
    emoji: "🍖",
    nombre: "Asado Rústico",
    descripcion: "Asado con sabor casero y especias.",
    precio: "S/38.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Rústica",
    descripcion: "Verduras frescas y hierbas aromáticas.",
    precio: "S/11.00"
  },
  {
    emoji: "🥤",
    nombre: "Chicha Rústica",
    descripcion: "Bebida tradicional peruana.",
    precio: "S/6.90"
  }
],

// === MENÚS BEBIDAS ===
"Refrescos Perú": [
  {
    emoji: "🥤",
    nombre: "Inca Kola 500ml",
    descripcion: "Gaseosa peruana clásica, sabor único y refrescante.",
    precio: "S/5.90"
  },
  {
    emoji: "🥤",
    nombre: "Coca-Cola Personal",
    descripcion: "Refresco clásico frío, 500ml.",
    precio: "S/5.50"
  },
  {
    emoji: "🧃",
    nombre: "Chicha Morada",
    descripcion: "Bebida tradicional peruana elaborada con maíz morado.",
    precio: "S/6.50"
  },
  {
    emoji: "🥤",
    nombre: "Sprite 500ml",
    descripcion: "Refrescante gaseosa sabor limón.",
    precio: "S/5.50"
  }
],

"Fruta y Sabor": [
  {
    emoji: "🍓",
    nombre: "Smoothie de Fresa",
    descripcion: "Batido cremoso de fresas frescas, endulzado ligeramente.",
    precio: "S/10.90"
  },
  {
    emoji: "🥭",
    nombre: "Jugo de Mango",
    descripcion: "Jugo 100% natural de mango, sin azúcar añadida.",
    precio: "S/9.50"
  },
  {
    emoji: "🍍",
    nombre: "Jugo de Piña",
    descripcion: "Refrescante jugo de piña recién exprimido.",
    precio: "S/8.90"
  },
  {
    emoji: "🍊",
    nombre: "Jugo de Naranja",
    descripcion: "Zumo de naranja natural, lleno de vitamina C.",
    precio: "S/7.50"
  }
],

"Pizzería Artesanal": [
  {
    emoji: "🍕",
    nombre: "Pizza Margarita",
    descripcion: "Clásica pizza con salsa de tomate, mozzarella y albahaca fresca.",
    precio: "S/29.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Pepperoni",
    descripcion: "Delgada masa, salsa especial y rodajas de pepperoni.",
    precio: "S/32.50"
  },
  {
    emoji: "🧀",
    nombre: "Pizza Cuatro Quesos",
    descripcion: "Mozzarella, gouda, parmesano y roquefort.",
    precio: "S/33.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Caprese",
    descripcion: "Tomate, mozzarella fresca y albahaca.",
    precio: "S/18.90"
  }
],

"La Toscana": [
  {
    emoji: "🍕",
    nombre: "Pizza Toscana",
    descripcion: "Salsa pomodoro, jamón, champiñones y aceitunas negras.",
    precio: "S/31.50"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Napolitana",
    descripcion: "Tomate natural, anchoas, ajo y orégano.",
    precio: "S/28.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Prosciutto",
    descripcion: "Base blanca con jamón serrano y rúcula.",
    precio: "S/34.90"
  },
  {
    emoji: "🫓",
    nombre: "Focaccia",
    descripcion: "Pan artesanal con aceite de oliva y romero.",
    precio: "S/14.50"
  }
],

"Pizza Factory": [
  {
    emoji: "🍕",
    nombre: "Pizza Artesanal Factory",
    descripcion: "Masa artesanal, salsa casera y variedad de toppings.",
    precio: "S/30.90"
  },
  {
    emoji: "🧀",
    nombre: "Calzone de Queso",
    descripcion: "Masa rellena de quesos fundidos.",
    precio: "S/27.50"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Veggie",
    descripcion: "Tomate, espinaca, champiñones y pimientos.",
    precio: "S/29.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada César",
    descripcion: "Lechuga fresca, pollo y aderezo césar.",
    precio: "S/19.90"
  }
],

"Mozzarella Mía": [
  {
    emoji: "🍕",
    nombre: "Pizza Fusión Oriental",
    descripcion: "Base de soya, pollo teriyaki y cebolla china.",
    precio: "S/33.00"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Mediterránea",
    descripcion: "Aceitunas, tomates secos, alcachofas y feta.",
    precio: "S/31.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Hawaiana",
    descripcion: "Jamón y piña en masa suave.",
    precio: "S/29.90"
  },
  {
    emoji: "🥖",
    nombre: "Pan de Ajo",
    descripcion: "Rebanadas de pan crujiente con mantequilla de ajo.",
    precio: "S/12.90"
  }
],

"Napolitano Express": [
  {
    emoji: "🍕",
    nombre: "Pizza Clásica Express",
    descripcion: "Mozzarella, tomate y orégano.",
    precio: "S/26.50"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Pepperoni Express",
    descripcion: "Rápida y deliciosa, con extra pepperoni.",
    precio: "S/28.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Jamón y Queso",
    descripcion: "Masa fina con jamón y mozzarella.",
    precio: "S/27.50"
  },
  {
    emoji: "🥤",
    nombre: "Bebida Mediana",
    descripcion: "Incluye gaseosa a elección.",
    precio: "S/5.50"
  }
],

"Pizza Loca": [
  {
    emoji: "🍕",
    nombre: "Pizza Americana",
    descripcion: "Salchicha, pepperoni, pimientos y extra queso.",
    precio: "S/30.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza BBQ Chicken",
    descripcion: "Pollo, cebolla caramelizada y salsa BBQ.",
    precio: "S/33.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Bacon Lovers",
    descripcion: "Con doble porción de bacon crujiente.",
    precio: "S/32.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Fresca",
    descripcion: "Mezcla de hojas verdes, tomates cherry y vinagreta.",
    precio: "S/15.90"
  }
],

"La Toscana": [
  {
    emoji: "🍕",
    nombre: "Pizza Cuatro Estaciones",
    descripcion: "Divide la pizza en secciones: jamón, champiñones, alcachofas y aceitunas.",
    precio: "S/32.50"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Calabresa",
    descripcion: "Con rodajas de salame picante y queso fundido.",
    precio: "S/31.90"
  },
  {
    emoji: "🫓",
    nombre: "Stromboli",
    descripcion: "Rollito de masa relleno de queso y pepperoni.",
    precio: "S/27.90"
  },
  {
    emoji: "🥗",
    nombre: "Insalata Mista",
    descripcion: "Verduras frescas y aderezo balsámico.",
    precio: "S/16.50"
  }
],

"Pizza Raúl": [
  {
    emoji: "🍕",
    nombre: "Pizza Artesanal Raúl",
    descripcion: "Masa crujiente con salsa casera y ingredientes frescos.",
    precio: "S/30.50"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Mexicana",
    descripcion: "Carne picante, jalapeños y cebolla morada.",
    precio: "S/33.00"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Blanca",
    descripcion: "Base de crema, champiñones y queso mozzarella.",
    precio: "S/28.90"
  },
  {
    emoji: "🥖",
    nombre: "Pan con Queso",
    descripcion: "Bastones de pan horneado con queso fundido.",
    precio: "S/11.90"
  }
],

"Pizza Hut": [
  {
    emoji: "🍕",
    nombre: "Pan Pizza Supreme",
    descripcion: "Con pepperoni, jamón, vegetales y queso extra.",
    precio: "S/34.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Meat Lovers",
    descripcion: "Carnes mixtas sobre base gruesa.",
    precio: "S/35.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Veggie Lovers",
    descripcion: "Vegetales variados y queso mozzarella.",
    precio: "S/30.90"
  },
  {
    emoji: "🥤",
    nombre: "Combo Bebida + Papas",
    descripcion: "Refresco + papas medianas.",
    precio: "S/12.50"
  }
],

"Pizzas Rústicas": [
  {
    emoji: "🍕",
    nombre: "Pizza Rústica Campesina",
    descripcion: "Tomates cherry, jamón serrano y rúcula.",
    precio: "S/33.20"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Marinara",
    descripcion: "Salsa pomodoro, ajo, orégano y aceite de oliva.",
    precio: "S/27.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Bacon Deluxe",
    descripcion: "Bacon crocante sobre salsa cremosa.",
    precio: "S/31.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Primavera",
    descripcion: "Verduras frescas con vinagreta suave.",
    precio: "S/17.90"
  }
],

"Mozzarella Express": [
  {
    emoji: "🍕",
    nombre: "Pizza Express Clásica",
    descripcion: "Listas en minutos, con mozzarella y tomate.",
    precio: "S/28.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Pepperoni Express",
    descripcion: "Extra pepperoni y salsa especial.",
    precio: "S/30.50"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Vegetal Express",
    descripcion: "Champiñones, pimientos y cebolla.",
    precio: "S/27.50"
  },
  {
    emoji: "🥤",
    nombre: "Refresco Mediano",
    descripcion: "Cualquier gaseosa incluida.",
    precio: "S/5.90"
  }
],

"Don Giovanni Pizza": [
  {
    emoji: "🍕",
    nombre: "Pizza Don Giovanni",
    descripcion: "Salsa secreta y combinación de quesos.",
    precio: "S/34.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Diavola",
    descripcion: "Salame picante y mozzarella.",
    precio: "S/32.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Carbonara",
    descripcion: "Base blanca, panceta y queso parmesano.",
    precio: "S/33.50"
  },
  {
    emoji: "🫓",
    nombre: "Garlic Bread",
    descripcion: "Pan de ajo crujiente con mantequilla.",
    precio: "S/13.90"
  }
],

"La pizza feliz": [
  {
    "emoji": "🍕",
    "nombre": "Pizza Hawaiana",
    "descripcion": "Clásica combinación de jamón, piña y queso mozzarella.",
    "precio": "S/29.90"
  },
  {
    "emoji": "🍕",
    "nombre": "Pizza Cuatro Quesos",
    "descripcion": "Deliciosa mezcla de mozzarella, parmesano, gorgonzola y provolone.",
    "precio": "S/31.50"
  },
  {
    "emoji": "🍕",
    "nombre": "Pizza Vegetariana",
    "descripcion": "Tomate, champiñones, pimientos y aceitunas sobre base de queso.",
    "precio": "S/28.90"
  },
  {
    "emoji": "🧄",
    "nombre": "Pan de Ajo",
    "descripcion": "Rebanadas de pan con mantequilla de ajo y perejil.",
    "precio": "S/11.90"
  }
],

"Viena Delicatessen": [
  {
    emoji: "🍫",
    nombre: "Brownie Clásico",
    descripcion: "Brownie esponjoso con trozos de chocolate oscuro.",
    precio: "S/9.90"
  },
  {
    emoji: "🍫",
    nombre: "Brownie con Nueces",
    descripcion: "Delicioso brownie con nueces crujientes.",
    precio: "S/11.50"
  },
  {
    emoji: "🍮",
    nombre: "Crema Volteada",
    descripcion: "Clásico flan peruano con caramelo.",
    precio: "S/8.90"
  },
  {
    emoji: "🥧",
    nombre: "Tarta de Manzana",
    descripcion: "Base de masa quebrada y manzanas caramelizadas.",
    precio: "S/12.50"
  }
],

"Delicias Dulces": [
  {
    emoji: "🍰",
    nombre: "Cheesecake de Fresa",
    descripcion: "Base de galleta, crema de queso y topping de fresa.",
    precio: "S/14.90"
  },
  {
    emoji: "🍰",
    nombre: "Cheesecake Maracuyá",
    descripcion: "Exquisito sabor tropical sobre base crocante.",
    precio: "S/13.90"
  },
  {
    emoji: "🥧",
    nombre: "Tarta de Limón",
    descripcion: "Relleno ácido y cobertura dulce.",
    precio: "S/12.50"
  },
  {
    emoji: "🍪",
    nombre: "Galletas Artesanales",
    descripcion: "Variedad de sabores y texturas.",
    precio: "S/8.90"
  }
],

"Gelato House": [
  {
    emoji: "🍦",
    nombre: "Gelato de Vainilla",
    descripcion: "Helado cremoso y artesanal de vainilla.",
    precio: "S/9.50"
  },
  {
    emoji: "🍦",
    nombre: "Gelato de Pistacho",
    descripcion: "Helado premium con auténtico pistacho.",
    precio: "S/10.90"
  },
  {
    emoji: "🍨",
    nombre: "Banana Split",
    descripcion: "Tres sabores de helado con frutas y salsa.",
    precio: "S/14.50"
  },
  {
    emoji: "🍧",
    nombre: "Sorbete de Mango",
    descripcion: "Refrescante y natural.",
    precio: "S/8.50"
  }
],

"Donuts & Más": [
  {
    emoji: "🍩",
    nombre: "Dona Glaseada",
    descripcion: "Clásica dona cubierta con glaseado dulce.",
    precio: "S/4.90"
  },
  {
    emoji: "🍩",
    nombre: "Dona Rellena de Fresa",
    descripcion: "Rellena de mermelada y cubierta de azúcar.",
    precio: "S/5.50"
  },
  {
    emoji: "🍩",
    nombre: "Dona de Chocolate",
    descripcion: "Bañada en chocolate oscuro.",
    precio: "S/5.90"
  },
  {
    emoji: "🍮",
    nombre: "Gelatina de Colores",
    descripcion: "Postre fresco y divertido.",
    precio: "S/3.50"
  }
],

"Cupcake City": [
  {
    emoji: "🧁",
    nombre: "Cupcake de Vainilla",
    descripcion: "Bizcocho suave con cobertura cremosa.",
    precio: "S/6.50"
  },
  {
    emoji: "🧁",
    nombre: "Cupcake Red Velvet",
    descripcion: "Relleno suave con frosting de queso crema.",
    precio: "S/7.20"
  },
  {
    emoji: "🧁",
    nombre: "Cupcake de Chocolate",
    descripcion: "Cobertura de ganache intenso.",
    precio: "S/6.90"
  },
  {
    emoji: "🍪",
    nombre: "Mini Galletas Decoradas",
    descripcion: "Coloridas y deliciosas.",
    precio: "S/5.90"
  }
],

"Postres Limeños": [
  {
    emoji: "🍮",
    nombre: "Suspiro a la Limeña",
    descripcion: "Postre clásico con manjar blanco y merengue.",
    precio: "S/10.50"
  },
  {
    emoji: "🍫",
    nombre: "Torta de Chocolate",
    descripcion: "Bizcocho húmedo con cobertura intensa.",
    precio: "S/11.90"
  },
  {
    emoji: "🥧",
    nombre: "Arroz con Leche",
    descripcion: "Tradicional postre casero peruano.",
    precio: "S/7.50"
  },
  {
    emoji: "🍮",
    nombre: "Mazamorra Morada",
    descripcion: "Clásico postre morado con frutas secas.",
    precio: "S/8.50"
  }
],


"Tacos del Rey": [
  {
    emoji: "🌮",
    nombre: "Taco Al Pastor",
    descripcion: "Tacos de cerdo adobado con piña y cebolla.",
    precio: "S/12.50"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Carnitas",
    descripcion: "Tierno cerdo desmenuzado con cilantro y salsa.",
    precio: "S/13.90"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Pollo",
    descripcion: "Pollo sazonado, cebolla y guacamole.",
    precio: "S/11.90"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Bistec",
    descripcion: "Delicioso bistec troceado con salsa picante.",
    precio: "S/14.20"
  }
],

"La Taquería Express": [
  {
    emoji: "🌮",
    nombre: "Taco Express",
    descripcion: "Taco rápido de carne sazonada con cebolla.",
    precio: "S/9.90"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Chorizo",
    descripcion: "Chorizo picante con cebolla y cilantro.",
    precio: "S/10.50"
  },
  {
    emoji: "🌮",
    nombre: "Taco Vegetariano",
    descripcion: "Verduras salteadas con queso rallado.",
    precio: "S/9.50"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Pollo BBQ",
    descripcion: "Pollo a la BBQ con ensalada fresca.",
    precio: "S/11.90"
  }
],

"Tacos Mamita": [
  {
    emoji: "🌮",
    nombre: "Taco Casero de Pollo",
    descripcion: "Sabor casero con pollo y salsa roja.",
    precio: "S/10.90"
  },
  {
    emoji: "🌮",
    nombre: "Taco Casero de Res",
    descripcion: "Carne jugosa con verduras salteadas.",
    precio: "S/12.50"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Chicharrón",
    descripcion: "Crujiente chicharrón con camote.",
    precio: "S/13.20"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Queso Fundido",
    descripcion: "Queso derretido con jalapeños.",
    precio: "S/9.80"
  }
],

"El Mexicano": [
  {
    emoji: "🌮",
    nombre: "Taco Tradicional",
    descripcion: "Carne sazonada con salsa mexicana.",
    precio: "S/11.90"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Cochinita",
    descripcion: "Cochinita pibil con cebolla encurtida.",
    precio: "S/14.50"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Camarones",
    descripcion: "Camarones al ajillo con guacamole.",
    precio: "S/15.90"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Lengua",
    descripcion: "Lengua en salsa roja, tradicional.",
    precio: "S/12.90"
  }
],

"Tacorama": [
  {
    emoji: "🌯",
    nombre: "Burrito Supremo",
    descripcion: "Burrito grande con carne, arroz y frijoles.",
    precio: "S/16.50"
  },
  {
    emoji: "🌯",
    nombre: "Burrito Vegetariano",
    descripcion: "Burrito relleno de verduras frescas.",
    precio: "S/13.90"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Bistec",
    descripcion: "Bistec jugoso con cebolla asada.",
    precio: "S/12.20"
  },
  {
    emoji: "🌮",
    nombre: "Taco de Pollo al Chipotle",
    descripcion: "Pollo en salsa chipotle picante.",
    precio: "S/11.80"
  }
],

"Viva Tacos": [
  {
    emoji: "🌮",
    nombre: "Taco Carnitas Tex-Mex",
    descripcion: "Carnitas con queso cheddar y salsa.",
    precio: "S/13.20"
  },
  {
    emoji: "🌮",
    nombre: "Taco Tex-Mex de Pollo",
    descripcion: "Pollo marinado con salsa BBQ.",
    precio: "S/12.00"
  },
  {
    emoji: "🌮",
    nombre: "Taco Tex-Mex Vegetariano",
    descripcion: "Verduras frescas con salsa tex-mex.",
    precio: "S/10.50"
  },
  {
    emoji: "🌮",
    nombre: "Taco Tex-Mex de Res",
    descripcion: "Carne picada con especias texanas.",
    precio: "S/13.90"
  }
],

"Green Garden": [
  {
    emoji: "🥗",
    nombre: "Ensalada Fresca",
    descripcion: "Mix de lechugas, tomate cherry, palta y vinagreta ligera.",
    precio: "S/18.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada César Light",
    descripcion: "Pollo a la parrilla, crutones y queso parmesano.",
    precio: "S/19.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada de Quinoa",
    descripcion: "Quinoa, verduras grilladas y aderezo balsámico.",
    precio: "S/20.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Tropical",
    descripcion: "Piña, espinaca, pollo y salsa de yogur.",
    precio: "S/17.80"
  }
],

"La Hortaliza": [
  {
    emoji: "🥗",
    nombre: "Ensalada Caprese",
    descripcion: "Mozzarella, tomate y albahaca con aceite de oliva.",
    precio: "S/16.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada de Pasta",
    descripcion: "Pasta fría con vegetales frescos y vinagreta.",
    precio: "S/18.20"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Verde",
    descripcion: "Mezcla de hojas verdes con pepino y aguacate.",
    precio: "S/15.50"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Mediterránea",
    descripcion: "Aceitunas, queso feta, tomate y pepino.",
    precio: "S/19.30"
  }
],

"Fresh Bowl": [
  {
    emoji: "🥗",
    nombre: "Bowl Griego",
    descripcion: "Queso feta, pepino, tomate, cebolla y aceitunas.",
    precio: "S/19.90"
  },
  {
    emoji: "🥗",
    nombre: "Bowl Veggie",
    descripcion: "Brócoli, zanahoria, maíz y hummus.",
    precio: "S/18.50"
  },
  {
    emoji: "🥗",
    nombre: "Bowl Protein",
    descripcion: "Pollo grillado, arroz integral y espinaca.",
    precio: "S/21.00"
  },
  {
    emoji: "🥗",
    nombre: "Bowl Oriental",
    descripcion: "Tofu, sésamo, fideos de arroz y salsa teriyaki.",
    precio: "S/20.30"
  }
],

"Ice Dream": [
  {
    emoji: "🍦",
    nombre: "Helado de Vainilla",
    descripcion: "Clásico helado artesanal con sabor intenso a vainilla.",
    precio: "S/8.50"
  },
  {
    emoji: "🍫",
    nombre: "Helado de Chocolate",
    descripcion: "Cremoso chocolate bitter artesanal.",
    precio: "S/9.00"
  },
  {
    emoji: "🍓",
    nombre: "Helado de Fresa",
    descripcion: "Hecho con fresas naturales y textura suave.",
    precio: "S/8.80"
  },
  {
    emoji: "🍪",
    nombre: "Cookies & Cream",
    descripcion: "Helado con trozos de galleta crocante.",
    precio: "S/9.20"
  }
],

"Gelato Feliz": [
  {
    emoji: "🍋",
    nombre: "Gelato de Limón",
    descripcion: "Sabor italiano fresco y cítrico.",
    precio: "S/9.50"
  },
  {
    emoji: "🥭",
    nombre: "Gelato de Mango",
    descripcion: "Mango maduro convertido en gelato artesanal.",
    precio: "S/9.90"
  },
  {
    emoji: "🍫",
    nombre: "Gelato de Nutella",
    descripcion: "Suave gelato italiano de crema de avellanas.",
    precio: "S/10.50"
  },
  {
    emoji: "🍑",
    nombre: "Gelato de Durazno",
    descripcion: "Textura cremosa con sabor auténtico a durazno.",
    precio: "S/9.80"
  }
],

"Frozen Magic": [
  {
    emoji: "🍍",
    nombre: "Helado de Piña",
    descripcion: "Refrescante sabor tropical, ideal para el verano.",
    precio: "S/8.90"
  },
  {
    emoji: "🍈",
    nombre: "Helado de Melón",
    descripcion: "Helado frutal ligero y dulce.",
    precio: "S/8.60"
  },
  {
    emoji: "🍒",
    nombre: "Helado de Cereza",
    descripcion: "Sabor intenso y color vibrante.",
    precio: "S/9.10"
  },
  {
    emoji: "🥭",
    nombre: "Helado de Maracuyá",
    descripcion: "Ácido y dulce, para paladares exóticos.",
    precio: "S/9.20"
  }
],

"Helados Donato": [
  {
    emoji: "🥥",
    nombre: "Helado de Coco",
    descripcion: "Cremoso helado de coco artesanal.",
    precio: "S/9.30"
  },
  {
    emoji: "🍫",
    nombre: "Helado de Brownie",
    descripcion: "Helado cremoso con trozos de brownie.",
    precio: "S/10.20"
  },
  {
    emoji: "🍦",
    nombre: "Helado Crema Donato",
    descripcion: "Receta secreta cremosa y dulce.",
    precio: "S/8.90"
  },
  {
    emoji: "🍮",
    nombre: "Helado de Caramelo",
    descripcion: "Caramelo salado y suave textura.",
    precio: "S/9.60"
  }
],

"IceBox": [
  {
    emoji: "🍦",
    nombre: "Helado Soft Clásico",
    descripcion: "Helado suave y ligero en cono.",
    precio: "S/7.50"
  },
  {
    emoji: "🍫",
    nombre: "Helado Soft Chocolate",
    descripcion: "Helado soft con intenso sabor a chocolate.",
    precio: "S/7.90"
  },
  {
    emoji: "🍭",
    nombre: "Helado Soft Mix",
    descripcion: "Mezcla de vainilla y fresa soft.",
    precio: "S/8.10"
  },
  {
    emoji: "🍒",
    nombre: "Helado Soft Cherry",
    descripcion: "Sabor cereza con suave textura.",
    precio: "S/8.30"
  }
],

"Sweet Cream": [
  {
    emoji: "🍦",
    nombre: "Helado de Crema Pastelera",
    descripcion: "Helado inspirado en la pastelería francesa.",
    precio: "S/9.80"
  },
  {
    emoji: "🍓",
    nombre: "Helado de Fresa Cheesecake",
    descripcion: "Sabor a fresa combinado con cheesecake.",
    precio: "S/10.50"
  },
  {
    emoji: "🍪",
    nombre: "Helado de Galletas",
    descripcion: "Helado cremoso con trozos de galleta dulce.",
    precio: "S/9.30"
  },
  {
    emoji: "🍫",
    nombre: "Helado Trufa",
    descripcion: "Helado gourmet de trufa de chocolate.",
    precio: "S/11.00"
  }
],

"Palettas & Cía": [
  {
    emoji: "🍓",
    nombre: "Paleta de Fresa",
    descripcion: "Paleta helada elaborada con fresas naturales.",
    precio: "S/6.50"
  },
  {
    emoji: "🥭",
    nombre: "Paleta de Mango",
    descripcion: "Refrescante sabor a mango maduro.",
    precio: "S/6.80"
  },
  {
    emoji: "🥥",
    nombre: "Paleta de Coco",
    descripcion: "Suave y cremosa paleta de coco.",
    precio: "S/7.20"
  },
  {
    emoji: "🍫",
    nombre: "Paleta ChocoManía",
    descripcion: "Paleta helada cubierta de chocolate.",
    precio: "S/7.50"
  }
],

"Nevado Express": [
  {
    emoji: "🍦",
    nombre: "Helado Nevado Clásico",
    descripcion: "Helado suave para delivery rápido.",
    precio: "S/7.90"
  },
  {
    emoji: "🍫",
    nombre: "Helado Nevado Chocolate",
    descripcion: "Helado cremoso sabor chocolate intenso.",
    precio: "S/8.50"
  },
  {
    emoji: "🍓",
    nombre: "Helado Nevado Fresa",
    descripcion: "Helado clásico con sabor a fresa fresca.",
    precio: "S/8.30"
  },
  {
    emoji: "🍍",
    nombre: "Helado Nevado Piña",
    descripcion: "Helado suave y refrescante sabor piña.",
    precio: "S/8.10"
  }
],

"Cevichería del Norte": [
  {
    emoji: "🦐",
    nombre: "Ceviche Mixto Norteño",
    descripcion: "Ceviche de pescado, calamar y langostinos con toque picante y camote.",
    precio: "S/28.90"
  },
  {
    emoji: "🐟",
    nombre: "Jalea Mixta",
    descripcion: "Variedad de mariscos fritos con yucas y salsa criolla.",
    precio: "S/32.50"
  },
  {
    emoji: "🦑",
    nombre: "Arroz con Mariscos",
    descripcion: "Arroz norteño salteado con mix de mariscos frescos.",
    precio: "S/27.90"
  },
  {
    emoji: "🦀",
    nombre: "Chupe de Cangrejo",
    descripcion: "Delicioso chupe cremoso con cangrejo y hierbas norteñas.",
    precio: "S/34.00"
  }
],

"Mariscos Lai Lai": [
  {
    emoji: "🦐",
    nombre: "Langostinos al Tamarindo",
    descripcion: "Langostinos salteados en salsa agridulce china.",
    precio: "S/31.50"
  },
  {
    emoji: "🐙",
    nombre: "Pulpo en Salsa de Ostión",
    descripcion: "Pulpo tierno bañado en salsa oriental.",
    precio: "S/29.90"
  },
  {
    emoji: "🦀",
    nombre: "Cangrejo Kung Pao",
    descripcion: "Mariscos con maní y toque picante oriental.",
    precio: "S/33.00"
  },
  {
    emoji: "🦑",
    nombre: "Calamares Crispy",
    descripcion: "Calamares crocantes con salsa dulce-picante china.",
    precio: "S/26.90"
  }
],

"Mar y Sol": [
  {
    emoji: "🐟",
    nombre: "Ceviche Clásico",
    descripcion: "Fresco pescado marinado en limón, cebolla y ají limo.",
    precio: "S/26.50"
  },
  {
    emoji: "🦐",
    nombre: "Tiradito de Mariscos",
    descripcion: "Láminas de pescado y mariscos con crema picante.",
    precio: "S/28.90"
  },
  {
    emoji: "🦀",
    nombre: "Parihuela Especial",
    descripcion: "Sopa contundente de mariscos, ideal para el frío.",
    precio: "S/35.00"
  },
  {
    emoji: "🦑",
    nombre: "Chicharrón de Calamar",
    descripcion: "Calamares fritos acompañados de salsa tártara.",
    precio: "S/25.90"
  }
],
"Pasta Bella": [
  {
    emoji: "🍝",
    nombre: "Spaghetti Bolognesa",
    descripcion: "Clásico spaghetti con salsa de carne y tomate casero",
    precio: "S/22.90"
  },
  {
    emoji: "🍝",
    nombre: "Fettuccine Alfredo",
    descripcion: "Pasta cremosa con salsa de queso parmesano y mantequilla",
    precio: "S/24.50"
  },
  {
    emoji: "🥗",
    nombre: "Pasta Caprese",
    descripcion: "Pasta fría con tomate, mozzarella y albahaca fresca",
    precio: "S/19.90"
  },
  {
    emoji: "🍝",
    nombre: "Lasagna Clásica",
    descripcion: "Capas de pasta, carne y bechamel gratinadas al horno",
    precio: "S/26.90"
  }
],

"Tacos Dorados": [
  {
    emoji: "🌮",
    nombre: "Tacos Dorados de Pollo",
    descripcion: "Crujientes tacos rellenos de pollo y especias mexicanas",
    precio: "S/18.50"
  },
  {
    emoji: "🌮",
    nombre: "Tacos de Carnitas",
    descripcion: "Carnitas jugosas con salsa verde y cebolla",
    precio: "S/20.90"
  },
  {
    emoji: "🌮",
    nombre: "Tacos Al Pastor",
    descripcion: "Carne de cerdo marinada con piña y achiote",
    precio: "S/19.50"
  },
  {
    emoji: "🥑",
    nombre: "Guacamole Casero",
    descripcion: "Acompañado de totopos recién fritos",
    precio: "S/12.00"
  }
],

"Dragon Wok": [
  {
    emoji: "🥡",
    nombre: "Chow Mein",
    descripcion: "Fideos salteados con verduras y pollo al wok",
    precio: "S/21.90"
  },
  {
    emoji: "🥢",
    nombre: "Arroz Chaufa",
    descripcion: "Arroz frito con trozos de pollo y vegetales chinos",
    precio: "S/19.90"
  },
  {
    emoji: "🥟",
    nombre: "Gyosas",
    descripcion: "Empanaditas rellenas de cerdo y vegetales, al vapor",
    precio: "S/15.50"
  },
  {
    emoji: "🍤",
    nombre: "Camarones Kung Pao",
    descripcion: "Camarones picantes con maní y salsa especial",
    precio: "S/24.90"
  }
],

"Ceviche Royal": [
  {
    emoji: "🐟",
    nombre: "Ceviche Clásico",
    descripcion: "Pescado fresco marinado en limón y ají limo",
    precio: "S/28.00"
  },
  {
    emoji: "🦑",
    nombre: "Jalea Mixta",
    descripcion: "Mariscos y pescado frito con yuca crocante",
    precio: "S/32.50"
  },
  {
    emoji: "🦐",
    nombre: "Causa de Mariscos",
    descripcion: "Masa de papa amarilla rellena con mariscos en salsa",
    precio: "S/18.90"
  },
  {
    emoji: "🍲",
    nombre: "Chupe de Pescado",
    descripcion: "Caldo cremoso con pescado, mariscos y huevo",
    precio: "S/25.50"
  }
],
"Pizza Napoli": [
  {
    emoji: "🍕",
    nombre: "Pizza Margherita",
    descripcion: "Tomate, mozzarella y albahaca fresca",
    precio: "S/21.90"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Pepperoni",
    descripcion: "Pizza con salsa, mozzarella y rodajas de pepperoni",
    precio: "S/23.50"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Cuatro Quesos",
    descripcion: "Mozzarella, parmesano, gorgonzola y provolone",
    precio: "S/25.90"
  },
  {
    emoji: "🥗",
    nombre: "Ensalada Caprese",
    descripcion: "Mozzarella fresca, tomate y pesto",
    precio: "S/14.50"
  }
],

"Cantina Maya": [
  {
    emoji: "🌯",
    nombre: "Burrito Maya",
    descripcion: "Grande burrito de carne asada con guacamole",
    precio: "S/22.90"
  },
  {
    emoji: "🌮",
    nombre: "Tacos de Cochinita",
    descripcion: "Cerdo adobado estilo Yucatán, cebolla morada",
    precio: "S/20.90"
  },
  {
    emoji: "🥑",
    nombre: "Guacamole Maya",
    descripcion: "Guacamole casero con nachos crocantes",
    precio: "S/13.50"
  },
  {
    emoji: "🍹",
    nombre: "Mezcal Artesanal",
    descripcion: "Shot de mezcal premium con sal y naranja",
    precio: "S/15.90"
  }
],

"Golden Panda": [
  {
    emoji: "🥟",
    nombre: "Dim Sum Variado",
    descripcion: "Selección de bocados al vapor",
    precio: "S/18.90"
  },
  {
    emoji: "🥡",
    nombre: "Pollo Agridulce",
    descripcion: "Crujiente pollo en salsa dulce y piña",
    precio: "S/20.50"
  },
  {
    emoji: "🍜",
    nombre: "Sopa Wantán",
    descripcion: "Caldo claro con dumplings rellenos",
    precio: "S/14.50"
  },
  {
    emoji: "🍤",
    nombre: "Langostinos Cantonés",
    descripcion: "Salteados con verduras frescas",
    precio: "S/25.90"
  }
],

"Inca Grill": [
  {
    emoji: "🥩",
    nombre: "Anticuchos",
    descripcion: "Brochetas de corazón de res a la brasa con papas",
    precio: "S/18.50"
  },
  {
    emoji: "🍖",
    nombre: "Parrilla Mixta",
    descripcion: "Variedad de carnes al estilo peruano",
    precio: "S/32.00"
  },
  {
    emoji: "🍚",
    nombre: "Arroz Chaufa Criollo",
    descripcion: "Arroz frito peruano con trozos de cerdo y soya",
    precio: "S/20.90"
  },
  {
    emoji: "🌽",
    nombre: "Choclo con Queso",
    descripcion: "Clásico aperitivo andino",
    precio: "S/9.90"
  }
],

"La Nonna": [
  {
    emoji: "🍝",
    nombre: "Ravioles de Ricotta",
    descripcion: "Ravioles rellenos con salsa de tomate casera",
    precio: "S/24.00"
  },
  {
    emoji: "🥗",
    nombre: "Insalata Mista",
    descripcion: "Ensalada mixta con vegetales frescos",
    precio: "S/15.00"
  },
  {
    emoji: "🍕",
    nombre: "Pizza Prosciutto",
    descripcion: "Pizza con jamón italiano y rúcula fresca",
    precio: "S/27.50"
  },
  {
    emoji: "🍝",
    nombre: "Tagliatelle al Pesto",
    descripcion: "Pasta con salsa de albahaca y queso parmesano",
    precio: "S/23.90"
  }
]
  };

  const menuContainer = document.querySelector(".menu-items");
  menuContainer.innerHTML = "";

  const menuData = menusPorRestaurante[nombre];

  if (menuContainer && menuData) {
    menuData.forEach(plato => {
      const item = document.createElement("div");
      item.className = "menu-item";
      item.innerHTML = `
        <div style="width: 80px; height: 80px; border-radius: 8px; background: #fff5f0; display: flex; align-items: center; justify-content: center; font-size: 30px;">
          ${plato.emoji}
        </div>
        <div class="menu-content">
          <h3 class="menu-name">${plato.nombre}</h3>
          <p class="menu-desc">${plato.descripcion}</p>
          <div class="menu-footer">
            <span class="price">${plato.precio}</span>
            <button class="add-btn">AGREGAR AL CARRITO</button>
          </div>
        </div>
      `;
      const btn = item.querySelector(".add-btn");
      btn.addEventListener("click", () => {
        agregarAlCarrito(plato);
      });
      menuContainer.appendChild(item);
    });
  } else {
    menuContainer.innerHTML = `<p style="padding: 10px;">No hay menú disponible para este restaurante.</p>`;
  }
});

function agregarAlCarrito(plato) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const index = carrito.findIndex(item => item.nombre === plato.nombre);
  if (index !== -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({
      nombre: plato.nombre,
      precio: plato.precio,
      emoji: plato.emoji,
      cantidad: 1
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  toggleCart();
  renderizarSidecart();
}
// === Reseñas de ejemplo por restaurante ===
const reseñasPorRestaurante = {
  "McDonald's": [
    {
      nombre: "Luis M.",
      fecha: "2025-06-20",
      texto: "¡Me encantó! La hamburguesa llegó caliente y con buena presentación."
    },
    {
      nombre: "Carla V.",
      fecha: "2025-06-19",
      texto: "El servicio fue rápido y el combo estaba completo. Muy bien."
    }
  ],
  "Bembos": [
    {
      nombre: "Andrés Q.",
      fecha: "2025-06-18",
      texto: "Me gustó el sabor de la hamburguesa, pero la entrega tardó un poco."
    },
    {
      nombre: "Lucía R.",
      fecha: "2025-06-19",
      texto: "¡Delicioso! Las papas estaban crujientes y la bebida bien fría."
    },
    {
      nombre: "Carlos M.",
      fecha: "2025-06-17",
      texto: "Muy buena presentación. El pan de la hamburguesa estaba suave."
    }
  ],
  "KFC": [
    {
      nombre: "Juan C.",
      fecha: "2025-06-18",
      texto: "Buen sabor y entrega puntual. Las papas podrían mejorar."
    }
  ],
  "Popeyes": [
    {
      nombre: "Valeria C.",
      fecha: "2025-06-19",
      texto: "El pollo estaba crocante y sabroso. Me encantó el combo spicy."
    },
    {
      nombre: "Miguel H.",
      fecha: "2025-06-18",
      texto: "Llegó caliente y a tiempo. La bebida estaba bien fría. Muy buen servicio."
    },
    {
      nombre: "Soledad M.",
      fecha: "2025-06-17",
      texto: "Buen sabor, pero las papas estaban algo frías. Igual volveré a pedir."
    }
  ],
  "Papa John's": [
    {
      nombre: "Daniel A.",
      fecha: "2025-06-19",
      texto: "La pizza llegó en su punto. Masa suave y mucho queso, muy recomendable."
    },
    {
      nombre: "Lucía G.",
      fecha: "2025-06-18",
      texto: "Buena atención y la pizza familiar estaba deliciosa. Volveré a pedir pronto."
    }
  ],
  "Subway": [
    {
      nombre: "Mariana L.",
      fecha: "2025-06-20",
      texto: "El sándwich de pollo teriyaki estaba muy fresco. Ideal para una comida ligera."
    },
    {
      nombre: "Carlos E.",
      fecha: "2025-06-19",
      texto: "Buena variedad de ingredientes y atención rápida. Me encantó la opción saludable."
    }
  ],
  "Chinatown": [
    {
      nombre: "Lucía Z.",
      fecha: "2025-06-20",
      texto: "El arroz chaufa estaba delicioso y bien servido. ¡Volveré pronto!"
    },
    {
      nombre: "Renzo P.",
      fecha: "2025-06-18",
      texto: "Buen sabor y llegó caliente. El tallarín saltado muy sabroso."
    }
  ],
  "Fridays": [
    {
      nombre: "Mariela V.",
      fecha: "2025-06-19",
      texto: "El ambiente y la comida siempre me encantan. El combo Jack Daniels estuvo espectacular."
    },
    {
      nombre: "Eduardo T.",
      fecha: "2025-06-17",
      texto: "Buena atención y hamburguesa jugosa. El postre llegó un poco derretido, pero igual rico."
    }
  ],
  "Dunkin'": [
    {
      nombre: "Lucía F.",
      fecha: "2025-06-20",
      texto: "Las donas estaban frescas y deliciosas. El café, como siempre, muy bueno."
    },
    {
      nombre: "Kevin M.",
      fecha: "2025-06-18",
      texto: "Buen sabor y buena presentación. Ideal para un desayuno rápido."
    }
  ],
  "Rockys": [
    {
      nombre: "Valeria T.",
      fecha: "2025-06-20",
      texto: "El pollo a la brasa de Rockys sigue siendo uno de los mejores del Perú. ¡Muy recomendable!"
    },
    {
      nombre: "Jorge A.",
      fecha: "2025-06-19",
      texto: "Sabor tradicional peruano que no decepciona. Las papas estaban bien crocantes."
    }
  ],
"Chifa El norteñito": [
  {
    "nombre": "Valeria T.",
    "fecha": "2025-06-20",
    "texto": "El arroz chaufa estuvo delicioso, con buen sabor ahumado y porciones generosas. ¡Muy recomendable!"
  },
  {
    "nombre": "Jorge A.",
    "fecha": "2025-06-19",
    "texto": "Me encantó el tallarín saltado y los wantanes crujientes. Se nota la sazón tradicional del norte en cada plato."
  }
],

"Chicken Company": [
  {
    "nombre": "Marisol G.",
    "fecha": "2025-06-20",
    "texto": "El pollo estaba jugoso y con un sabor espectacular. Las papas fritas crocantes y las cremas deliciosas. ¡Volvería sin dudarlo!"
  },
  {
    "nombre": "Ricardo V.",
    "fecha": "2025-06-19",
    "texto": "Muy buena atención y el pollo broaster es de los mejores que he probado. Ideal para compartir en familia o con amigos."
  }
],

"El Angelo": [
  {
    "nombre": "Natalia R.",
    "fecha": "2025-06-20",
    "texto": "El ceviche estuvo súper fresco y con el punto exacto de limón. Me encantó la variedad de mariscos y la presentación de los platos. ¡Recomendadísimo!"
  },
  {
    "nombre": "Esteban C.",
    "fecha": "2025-06-19",
    "texto": "Probé la parihuela y estaba deliciosa, llena de sabor y mariscos frescos. El lugar es cómodo y la atención fue excelente."
  }
],

"Roll de Diego": [
  {
    "nombre": "Andrea S.",
    "fecha": "2025-06-20",
    "texto": "Los makis acevichados estuvieron deliciosos, frescos y con un sabor increíble. Me gustó mucho la presentación y el ambiente tranquilo del lugar."
  },
  {
    "nombre": "Bruno T.",
    "fecha": "2025-06-19",
    "texto": "Probé varios rolls y todos estuvieron buenísimos. El de salmón es mi favorito. La atención fue rápida y muy amable. ¡Recomendado para los fans del sushi!"
  }
],

"Pollería Don Pollo": [
  {
    "nombre": "Sofía L.",
    "fecha": "2025-06-20",
    "texto": "El pollo a la brasa estaba jugoso y con un sabor espectacular. Las papas doradas y las cremas caseras hicieron la diferencia. ¡Definitivamente volveré!"
  },
  {
    "nombre": "Javier M.",
    "fecha": "2025-06-19",
    "texto": "Buena atención y ambiente familiar. El pollo broaster estuvo buenazo y las porciones son generosas. Perfecto para compartir en grupo."
  },
  {
    "nombre": "Carolina P.",
    "fecha": "2025-06-18",
    "texto": "Esperaba más sabor en el pollo. Estaba un poco seco y las papas llegaron frías. Ojalá mejoren pronto porque el lugar me gusta."
  },
  {
    "nombre": "Renzo H.",
    "fecha": "2025-06-17",
    "texto": "La atención fue un poco lenta y el local estaba algo lleno, pero las cremas estaban deliciosas y el pollo tenía buen sabor."
  }
],

"Pizzería Italia": [
  {
    "nombre": "Daniela V.",
    "fecha": "2025-06-20",
    "texto": "La pizza margarita estaba deliciosa, masa delgada y buen sabor en la salsa. Me encantó el ambiente acogedor del lugar. ¡Volveré pronto!"
  },
  {
    "nombre": "Marco E.",
    "fecha": "2025-06-19",
    "texto": "Pedí una pizza cuatro quesos y me pareció un poco salada. La atención fue rápida, pero podrían mejorar en el sabor de algunos ingredientes."
  },
  {
    "nombre": "Lucía B.",
    "fecha": "2025-06-18",
    "texto": "Excelente lugar para ir en familia. La pizza hawaiana estuvo buenísima y las porciones son generosas. ¡Recomendado!"
  },
  {
    "nombre": "Óscar T.",
    "fecha": "2025-06-17",
    "texto": "No me gustó mucho la pizza que pedí, la masa estaba algo cruda y la espera fue larga. Ojalá mejoren pronto porque el lugar tiene potencial."
  }
],

"Postrería Borcelle": [
  {
    "nombre": "Valeria P.",
    "fecha": "2025-06-20",
    "texto": "Probé el cheesecake de maracuyá y estaba espectacular, cremoso y no tan dulce. El lugar es pequeño pero muy acogedor. ¡Totalmente recomendado!"
  },
  {
    "nombre": "Ignacio S.",
    "fecha": "2025-06-19",
    "texto": "Las porciones me parecieron algo pequeñas para el precio. El sabor es bueno, pero creo que podrían mejorar en la relación calidad-precio."
  },
  {
    "nombre": "Melissa R.",
    "fecha": "2025-06-18",
    "texto": "Me encantaron los éclairs y la atención fue súper amable. Es un lugar perfecto para una tarde de café y postres deliciosos."
  },
  {
    "nombre": "Raúl C.",
    "fecha": "2025-06-17",
    "texto": "La torta de chocolate estaba un poco seca y me tocó esperar bastante para que me atendieran. Espero que solo haya sido un mal día."
  }
],

"Chili's": [
  {
    "nombre": "Gabriela M.",
    "fecha": "2025-06-20",
    "texto": "Pedí las costillas BBQ y estaban deliciosas, súper suaves y con mucho sabor. Además, la atención fue rápida y amable. ¡Volveré pronto!"
  },
  {
    "nombre": "Renato D.",
    "fecha": "2025-06-19",
    "texto": "El ambiente es chévere, pero sentí que los precios están algo altos para las porciones. La hamburguesa estuvo rica, aunque llegó un poco fría."
  },
  {
    "nombre": "Patricia L.",
    "fecha": "2025-06-18",
    "texto": "Me encanta venir con amigos. Las fajitas estuvieron buenísimas y las bebidas también. Ideal para pasar un buen rato."
  },
  {
    "nombre": "Tomás G.",
    "fecha": "2025-06-17",
    "texto": "La atención fue lenta y mi plato demoró demasiado. La comida estaba bien de sabor, pero creo que deberían mejorar el servicio en horas punta."
  }
],
"La ensaladeria": [
  {
    "nombre": "Camila F.",
    "fecha": "2025-06-20",
    "texto": "Pedí la ensalada César y me encantó, súper fresca y con buen aderezo. El lugar es bonito y perfecto para almuerzos ligeros. ¡Volveré seguro!"
  },
  {
    "nombre": "Diego S.",
    "fecha": "2025-06-19",
    "texto": "Me pareció un poco caro para la cantidad de ensalada que sirven. Los ingredientes son frescos, pero esperaba porciones más generosas."
  },
  {
    "nombre": "Lorena J.",
    "fecha": "2025-06-18",
    "texto": "Excelente atención y gran variedad de opciones. Probé la ensalada oriental y estuvo deliciosa. Ideal si buscas algo saludable y rico."
  },
  {
    "nombre": "Mateo L.",
    "fecha": "2025-06-17",
    "texto": "La ensalada que pedí llegó algo desordenada y el aguacate estaba muy maduro. Creo que pueden mejorar en la presentación y selección de ingredientes."
  }
],

"Sopas del Perú": [
  {
    "nombre": "Ana L.",
    "fecha": "2025-06-20",
    "texto": "La sopa criolla estuvo deliciosa, con bastante carne y bien sazonada. Me recordó a las sopas caseras de mi abuela. ¡Recomendado totalmente!"
  },
  {
    "nombre": "Fernando R.",
    "fecha": "2025-06-19",
    "texto": "Buena atención, pero la parihuela me pareció un poco salada. El lugar es cómodo, aunque algo pequeño en horas punta."
  },
  {
    "nombre": "Mónica C.",
    "fecha": "2025-06-18",
    "texto": "Probé el chupe de camarones y estuvo espectacular. Buena porción y sabor intenso. Ideal para un almuerzo contundente."
  },
  {
    "nombre": "Eduardo T.",
    "fecha": "2025-06-17",
    "texto": "La sopa menestrón llegó algo fría y sin tanto sabor como esperaba. Creo que pueden mejorar en la temperatura y sazón de los platos."
  }
],

"Catering": [
  {
    "nombre": "Verónica H.",
    "fecha": "2025-06-20",
    "texto": "Contratamos el catering para un cumpleaños y estuvo excelente. El ají de gallina y la causa limeña fueron los favoritos. ¡Todo llegó puntual y bien presentado!"
  },
  {
    "nombre": "Luis A.",
    "fecha": "2025-06-19",
    "texto": "La comida estuvo rica, pero creo que podrían mejorar las porciones. El lomo saltado estaba muy bien sazonado, aunque llegó algo tibio."
  },
  {
    "nombre": "Karina P.",
    "fecha": "2025-06-18",
    "texto": "Quedé encantada con el servicio. Pedí un buffet criollo y todos los invitados quedaron felices. Muy buena coordinación y sabor casero."
  },
  {
    "nombre": "Héctor M.",
    "fecha": "2025-06-17",
    "texto": "Tuvimos algunos problemas con la entrega que se retrasó casi media hora. La comida estaba sabrosa, pero deberían ser más puntuales para eventos."
  }
],

"Papilistas": [
  {
    "nombre": "Liliana G.",
    "fecha": "2025-06-20",
    "texto": "El seco de res estuvo buenazo, súper suave y lleno de sabor. Me encantó la porción generosa y la atención fue rápida. ¡Volveré sin dudarlo!"
  },
  {
    "nombre": "Hugo B.",
    "fecha": "2025-06-19",
    "texto": "Pedí ají de gallina y estaba bien, pero sentí que le faltaba un poco de sabor. El lugar es cómodo, aunque algo ruidoso en hora punta."
  },
  {
    "nombre": "Mariela F.",
    "fecha": "2025-06-18",
    "texto": "Excelente opción de comida criolla. Probé el lomo saltado y estaba espectacular, con buen punto de cocción. El servicio también fue muy amable."
  },
  {
    "nombre": "Alonso M.",
    "fecha": "2025-06-17",
    "texto": "La causa limeña no estaba tan fresca como esperaba y la espera fue un poco larga. Ojalá puedan mejorar esos detalles porque el local tiene potencial."
  }
],

"Tacu Tacu": [
  {
    "nombre": "Estefanía R.",
    "fecha": "2025-06-20",
    "texto": "El tacu tacu con lomo saltado estuvo increíble, bien sazonado y con porciones generosas. Me encantó la atención del personal. ¡Súper recomendado!"
  },
  {
    "nombre": "José P.",
    "fecha": "2025-06-19",
    "texto": "La comida estuvo rica, pero me pareció algo grasosa. Pedí ají de gallina y aunque tenía buen sabor, llegó un poco fría."
  },
  {
    "nombre": "Milagros C.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente lugar para disfrutar comida criolla! Probé el seco de cabrito y estaba espectacular. El local es acogedor y bien decorado."
  },
  {
    "nombre": "Ramiro L.",
    "fecha": "2025-06-17",
    "texto": "La atención fue algo lenta y el arroz estaba un poco pasado. Aunque el sabor del lomo saltado estaba muy bueno, deberían mejorar el servicio."
  }
],

"Costa y sierra": [
  {
    "nombre": "Rocío V.",
    "fecha": "2025-06-20",
    "texto": "Probé el arroz con mariscos y estuvo espectacular, con buen sabor y mariscos frescos. El ambiente es familiar y acogedor. ¡Totalmente recomendado!"
  },
  {
    "nombre": "Víctor M.",
    "fecha": "2025-06-19",
    "texto": "La comida tiene buen sabor, pero el tiempo de espera fue demasiado largo. Pedí seco de res y aunque estaba rico, llegó casi frío."
  },
  {
    "nombre": "Pamela S.",
    "fecha": "2025-06-18",
    "texto": "Me encantó el chupe de camarones. Porciones generosas y excelente atención. Ideal para disfrutar comida criolla auténtica."
  },
  {
    "nombre": "César L.",
    "fecha": "2025-06-17",
    "texto": "El lomo saltado estaba sabroso, pero la porción me pareció pequeña para el precio. Además, el local estaba algo lleno y ruidoso."
  }
],

"El Cortijo": [
  {
    "nombre": "Nataly S.",
    "fecha": "2025-06-20",
    "texto": "El ají de gallina estuvo delicioso, cremoso y bien sazonado. Me encantó el ambiente rústico del local. ¡Definitivamente volveré!"
  },
  {
    "nombre": "Andrés F.",
    "fecha": "2025-06-19",
    "texto": "Buena atención, pero el arroz con pato me pareció un poco seco. El sabor estaba bien, pero esperaba algo más jugoso."
  },
  {
    "nombre": "Lorena D.",
    "fecha": "2025-06-18",
    "texto": "Excelente lugar para disfrutar comida criolla. Probé el anticucho y estaba en su punto, suave y bien sazonado. Además, el servicio fue rápido."
  },
  {
    "nombre": "Julio M.",
    "fecha": "2025-06-17",
    "texto": "La causa limeña estaba un poco simple de sabor y el plato llegó tibio. El lugar es bonito, pero deberían cuidar más la temperatura de los platos."
  }
],

"La Muralla": [
  {
    "nombre": "Valeria Q.",
    "fecha": "2025-06-20",
    "texto": "El rocoto relleno estuvo espectacular, bien sazonado y picante en su punto. El ambiente del local es súper acogedor. ¡Volveré pronto!"
  },
  {
    "nombre": "Miguel R.",
    "fecha": "2025-06-19",
    "texto": "Pedí adobo arequipeño y aunque el sabor estaba bueno, la carne me pareció un poco dura. La atención fue amable, pero algo lenta."
  },
  {
    "nombre": "Fabiola L.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente lugar para probar comida arequipeña auténtica! Probé el chupe de camarones y estaba delicioso, con buen sabor y porción generosa."
  },
  {
    "nombre": "Sandro P.",
    "fecha": "2025-06-17",
    "texto": "Me decepcionó un poco el pastel de papa, estaba algo seco. Sin embargo, el resto de platos se veían bien y el lugar es bonito."
  }
],

"Somos Perú": [
  {
    "nombre": "Luisa C.",
    "fecha": "2025-06-20",
    "texto": "El arroz chaufa estuvo delicioso, bien salteado y con sabor ahumado. Me encantó la variedad en la carta. ¡Totalmente recomendado!"
  },
  {
    "nombre": "Carlos M.",
    "fecha": "2025-06-19",
    "texto": "La comida estuvo bien, pero el aeropuerto estaba un poco grasoso para mi gusto. El lugar es limpio y la atención fue rápida."
  },
  {
    "nombre": "Janet F.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente opción para comer chifa! Probé el tallarín saltado y estaba perfecto, con buena porción y sabor intenso. Volveré pronto."
  },
  {
    "nombre": "Raúl S.",
    "fecha": "2025-06-17",
    "texto": "El wantán frito estaba algo duro y frío. La atención fue amable, pero creo que pueden mejorar en la frescura de los platos."
  }
],

"Cevichería Tentaciones": [
  {
    "nombre": "Adriana T.",
    "fecha": "2025-06-20",
    "texto": "El ceviche mixto estuvo espectacular, fresco y con un toque picante perfecto. Además, el lugar tiene una vista linda al mar. ¡Volveré seguro!"
  },
  {
    "nombre": "Eduardo S.",
    "fecha": "2025-06-19",
    "texto": "Pedí arroz con mariscos y aunque estaba bien de sabor, me pareció algo aceitoso. La atención fue rápida, pero podrían mejorar la presentación de los platos."
  },
  {
    "nombre": "María J.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente cevichería! Probé la leche de tigre y estaba deliciosa, bien concentrada y fresca. Ideal para los amantes de los mariscos."
  },
  {
    "nombre": "Oscar B.",
    "fecha": "2025-06-17",
    "texto": "La jalea llegó un poco fría y el pescado estaba algo seco. El lugar es bonito, pero deberían cuidar mejor la temperatura de los platos."
  }
],

"El gusto criollito": [
  {
    "nombre": "Ruth M.",
    "fecha": "2025-06-20",
    "texto": "El lomo saltado estuvo espectacular, bien jugoso y con sabor intenso. Me encantó el ambiente tradicional y la atención fue muy cordial. ¡Recomendado!"
  },
  {
    "nombre": "Jorge H.",
    "fecha": "2025-06-19",
    "texto": "La comida es rica, pero sentí que el arroz con pollo estaba un poco seco. El lugar es cómodo, aunque algo pequeño cuando se llena."
  },
  {
    "nombre": "Cynthia P.",
    "fecha": "2025-06-18",
    "texto": "Probé el ají de gallina y estaba delicioso, cremoso y bien servido. Sin duda es un buen lugar para disfrutar comida criolla auténtica."
  },
  {
    "nombre": "Alberto F.",
    "fecha": "2025-06-17",
    "texto": "La atención fue algo lenta y mi causa limeña llegó algo desarmada. Los sabores son buenos, pero deberían cuidar más la presentación de los platos."
  }
],

"Sazon Peruano": [
  {
    "nombre": "Patricia V.",
    "fecha": "2025-06-20",
    "texto": "Probé el risotto de mariscos y estuvo delicioso, con buen sabor y textura cremosa. Me encantó que también tienen opciones peruanas e internacionales. ¡Volveré seguro!"
  },
  {
    "nombre": "Sebastián T.",
    "fecha": "2025-06-19",
    "texto": "La carta es variada, pero el pad thai que pedí estaba un poco dulce para mi gusto. La atención fue rápida, aunque el local estaba algo lleno."
  },
  {
    "nombre": "Elena R.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente lugar para probar sabores de distintas partes del mundo! Pedí lasañas y estaban buenísimas. Ambiente agradable y servicio atento."
  },
  {
    "nombre": "Víctor L.",
    "fecha": "2025-06-17",
    "texto": "El pollo tikka masala que pedí estaba algo picante y llegó tibio. Tienen platos interesantes, pero deberían cuidar mejor la temperatura al servir."
  }
],
"Restaurant": [
  {
    "nombre": "Mariela Z.",
    "fecha": "2025-06-20",
    "texto": "El seco de cabrito estuvo espectacular, súper tierno y bien sazonado. Me encantó el toque casero de los platos. ¡Definitivamente volveré!"
  },
  {
    "nombre": "Héctor P.",
    "fecha": "2025-06-19",
    "texto": "La comida estuvo bien, pero el arroz chaufa criollo me pareció un poco grasoso. El local es agradable, aunque algo ruidoso a la hora de almuerzo."
  },
  {
    "nombre": "Sandra L.",
    "fecha": "2025-06-18",
    "texto": "Probé la causa limeña y estaba deliciosa, fresca y bien presentada. Me gustó mucho la atención del personal, muy amables y atentos."
  },
  {
    "nombre": "Pedro N.",
    "fecha": "2025-06-17",
    "texto": "La atención fue lenta y el ají de gallina llegó tibio. El sabor estaba bien, pero deberían cuidar más la temperatura y los tiempos de servicio."
  }
],

"Doña Lasagna": [
  {
    "nombre": "Fiorella R.",
    "fecha": "2025-06-20",
    "texto": "La lasagna de carne estuvo increíble, con capas bien definidas y salsa deliciosa. El lugar es acogedor y perfecto para una cena italiana. ¡Recomendado!"
  },
  {
    "nombre": "Mauricio L.",
    "fecha": "2025-06-19",
    "texto": "La pizza estaba rica, pero la masa me pareció un poco gruesa. La atención fue rápida, aunque el local estaba algo lleno y ruidoso."
  },
  {
    "nombre": "Isabel T.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente lugar para los amantes de la comida italiana! Probé los ravioles de espinaca y estaban buenísimos, con una salsa cremosa espectacular."
  },
  {
    "nombre": "Raúl G.",
    "fecha": "2025-06-17",
    "texto": "Pedí fettuccine Alfredo y la salsa estaba algo insípida. Me gustó el ambiente del local, pero deberían mejorar el sabor en algunos platos."
  }
],

"La casita de los Anticuchos": [
  {
    "nombre": "Luciana V.",
    "fecha": "2025-06-20",
    "texto": "Los anticuchos estaban espectaculares, bien dorados y suaves por dentro. Me encantó el ambiente tradicional y el aroma que se siente apenas entras. ¡Súper recomendado!"
  },
  {
    "nombre": "Hernán S.",
    "fecha": "2025-06-19",
    "texto": "El sabor estuvo bien, pero me parecieron un poco pequeños los anticuchos para el precio. La atención fue amable, aunque algo lenta en hora punta."
  },
  {
    "nombre": "Flor C.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente lugar para disfrutar comida criolla! Probé los rachi y estaban deliciosos, bien sazonados y con buen punto de cocción."
  },
  {
    "nombre": "Dante P.",
    "fecha": "2025-06-17",
    "texto": "Pedí anticuchos y la porción llegó algo fría, lo que le quitó sabor. El local tiene buen ambiente, pero deberían cuidar más la temperatura al servir."
  }
],

"Barbeque": [
  {
    "nombre": "Gianna B.",
    "fecha": "2025-06-20",
    "texto": "Probé las costillas a la barbacoa con salsa italiana y estuvieron deliciosas, súper suaves y llenas de sabor. Además, las pastas son buenísimas. ¡Recomendado!"
  },
  {
    "nombre": "Leonardo C.",
    "fecha": "2025-06-19",
    "texto": "La pizza estaba bien, pero la masa me pareció algo gruesa para mi gusto. El lugar es bonito, aunque un poco ruidoso en las noches."
  },
  {
    "nombre": "Valeria N.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente lugar para disfrutar carne y comida italiana! Pedí fettuccine Alfredo y estaba espectacular, con la salsa cremosa perfecta."
  },
  {
    "nombre": "Mauricio R.",
    "fecha": "2025-06-17",
    "texto": "Pedí lasagna y aunque el sabor era bueno, estaba algo fría en el centro. La atención fue amable, pero podrían mejorar el control de la temperatura."
  }
],

"Los criollos": [
  {
    "nombre": "Melisa A.",
    "fecha": "2025-06-20",
    "texto": "Probé el arroz con pato y estuvo delicioso, con la carne bien suave y mucho sabor. El ambiente tiene música criolla en vivo que le da un toque especial. ¡Me encantó!"
  },
  {
    "nombre": "Rodrigo F.",
    "fecha": "2025-06-19",
    "texto": "La comida es rica, pero sentí que el ají de gallina estaba un poco simple de sabor. El lugar estaba lleno y la atención se demoró un poco más de lo esperado."
  },
  {
    "nombre": "Paola L.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente opción de comida criolla! Probé el lomo saltado y estuvo en su punto, jugoso y bien servido. El personal es muy amable."
  },
  {
    "nombre": "Gustavo R.",
    "fecha": "2025-06-17",
    "texto": "Pedí una causa limeña y llegó algo desarmada. El sabor estaba bien, pero deberían cuidar más la presentación. El local es acogedor, eso sí."
  }
],

"Cevichería don marino": [
  {
    "nombre": "Gabriela T.",
    "fecha": "2025-06-20",
    "texto": "El ceviche mixto estuvo espectacular, súper fresco y con el punto exacto de picante. Además, el lugar es amplio y tiene un ambiente muy agradable. ¡Volveré pronto!"
  },
  {
    "nombre": "Jhonatan R.",
    "fecha": "2025-06-19",
    "texto": "La parihuela estaba rica, pero un poco salada para mi gusto. El servicio fue rápido, aunque el local estaba algo lleno a la hora del almuerzo."
  },
  {
    "nombre": "Natalia S.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente cevichería! Probé la leche de tigre y fue una maravilla, bien concentrada y con un sabor intenso. Muy recomendable para los amantes de los mariscos."
  },
  {
    "nombre": "Ernesto V.",
    "fecha": "2025-06-17",
    "texto": "Pedí jalea y lamentablemente llegó un poco fría y el pescado estaba algo seco. El ambiente es bonito, pero deberían cuidar más la temperatura de los platos."
  }
],

"Oh Peruano": [
  {
    "nombre": "Ivonne L.",
    "fecha": "2025-06-20",
    "texto": "Probé el arroz chaufa especial y estuvo delicioso, con buen sabor ahumado y porción generosa. Me encantó la variedad de la carta. ¡Recomendado!"
  },
  {
    "nombre": "Martín S.",
    "fecha": "2025-06-19",
    "texto": "La comida estuvo bien, pero el aeropuerto me pareció algo grasoso. El lugar es limpio, aunque había bastante ruido en hora punta."
  },
  {
    "nombre": "Cecilia R.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente chifa! Probé los tallarines saltados y estaban en su punto, con bastante carne y verduras crujientes. La atención fue rápida y amable."
  },
  {
    "nombre": "Bryan C.",
    "fecha": "2025-06-17",
    "texto": "El wantán frito llegó algo frío y duro. El sabor general estuvo bien, pero deberían cuidar más la frescura y la temperatura de los platos."
  }
],

"Cevicheria Bahia": [
  {
    "nombre": "Karina M.",
    "fecha": "2025-06-20",
    "texto": "El ceviche de pescado estuvo espectacular, bien fresco y con un punto perfecto de picante. Me encantó el ambiente junto al mar. ¡Recomendadísimo!"
  },
  {
    "nombre": "Luis F.",
    "fecha": "2025-06-19",
    "texto": "La parihuela tenía buen sabor, pero estaba un poco salada para mi gusto. El servicio fue amable, aunque algo lento porque el local estaba lleno."
  },
  {
    "nombre": "Patricia C.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente lugar para disfrutar mariscos! Probé la leche de tigre y estaba súper concentrada y deliciosa. Ideal para los amantes de la comida marina."
  },
  {
    "nombre": "Renzo G.",
    "fecha": "2025-06-17",
    "texto": "Pedí jalea y llegó algo fría, además el pescado estaba un poco seco. El lugar es bonito, pero deberían cuidar mejor la temperatura de los platos."
  }
],

"Esquites": [
  {
    "nombre": "Andrea V.",
    "fecha": "2025-06-20",
    "texto": "Probé el seco de cabrito y estuvo delicioso, súper suave y con un sabor casero espectacular. El ambiente es acogedor y perfecto para ir en familia. ¡Volveré pronto!"
  },
  {
    "nombre": "Julián R.",
    "fecha": "2025-06-19",
    "texto": "La comida tiene buen sabor, pero el arroz con pollo estaba algo seco. El servicio fue amable, aunque un poco lento en hora punta."
  },
  {
    "nombre": "Pamela S.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente lugar de comida criolla! Pedí anticuchos y estaban en su punto, suaves y bien sazonados. Además, las porciones son generosas."
  },
  {
    "nombre": "Bruno L.",
    "fecha": "2025-06-17",
    "texto": "Pedí causa limeña y aunque el sabor estaba bien, llegó un poco fría. El local es bonito, pero deberían cuidar más la temperatura de los platos."
  }
],

"Chifa Central": [
  {
    "nombre": "Estela R.",
    "fecha": "2025-06-20",
    "texto": "Probé el arroz chaufa especial y estuvo delicioso, con sabor ahumado y buena porción. Me encantó el ambiente del local. ¡Recomendado!"
  },
  {
    "nombre": "José M.",
    "fecha": "2025-06-19",
    "texto": "El tallarín saltado estaba bien, pero sentí que tenía demasiado aceite. La atención fue rápida, aunque el lugar estaba algo lleno y ruidoso."
  },
  {
    "nombre": "Lucía F.",
    "fecha": "2025-06-18",
    "texto": "¡Excelente chifa! Probé los wantanes fritos y estaban crujientes y bien rellenos. El servicio es amable y los precios son razonables."
  },
  {
    "nombre": "Raúl D.",
    "fecha": "2025-06-17",
    "texto": "Pedí aeropuerto y lamentablemente llegó un poco frío y algo grasoso. El sabor estaba bien, pero deberían cuidar mejor la temperatura y la presentación."
  }
],

"Satsuki Sushi": [
    {
      "nombre": "Verónica M.",
      "fecha": "2025-06-20",
      "texto": "Probé los makis acevichados y estuvieron espectaculares, frescos y con muy buena presentación. ¡Definitivamente volveré!"
    },
    {
      "nombre": "Juan R.",
      "fecha": "2025-06-19",
      "texto": "El sabor es bueno, pero sentí que el arroz estaba un poco pasado. La atención fue amable aunque algo lenta en hora punta."
    }
  ],
  "Tokyo Rolls": [
    {
      "nombre": "Andrea C.",
      "fecha": "2025-06-20",
      "texto": "Excelente variedad de rolls. Probé uno de salmón con palta y estaba delicioso. Buen ambiente y servicio rápido."
    },
    {
      "nombre": "Ricardo P.",
      "fecha": "2025-06-19",
      "texto": "Los makis estaban ricos, pero me parecieron pequeños para el precio. El lugar es bonito pero algo ruidoso."
    }
  ],
  "Bento House": [
    {
      "nombre": "Camila S.",
      "fecha": "2025-06-20",
      "texto": "Pedí un bento con sushi y estuvo buenísimo, fresco y bien presentado. Ideal para almuerzos rápidos y sabrosos."
    },
    {
      "nombre": "Héctor D.",
      "fecha": "2025-06-19",
      "texto": "La comida es rica, pero la porción de sushi me pareció pequeña. Buena atención, aunque podrían mejorar los tiempos de entrega."
    }
  ],
  "Ramen Ichiban": [
    {
      "nombre": "Diana T.",
      "fecha": "2025-06-20",
      "texto": "El ramen estuvo increíble, con caldo bien concentrado y fideos en su punto. Además, el sushi que pedí estaba fresco y delicioso."
    },
    {
      "nombre": "Luis V.",
      "fecha": "2025-06-19",
      "texto": "El ramen estaba bien, pero el sushi llegó algo tibio y sin tanto sabor. El local es pequeño y se llena rápido."
    }
  ],
  "SushiGo!": [
    {
      "nombre": "Pamela G.",
      "fecha": "2025-06-20",
      "texto": "Me encanta SushiGo! Sus rolls siempre están frescos y tienen buenas promociones. Perfecto para llevar o pedir delivery."
    },
    {
      "nombre": "Carlos L.",
      "fecha": "2025-06-19",
      "texto": "La comida es buena, pero a veces el arroz se siente un poco seco. La atención es rápida y el personal muy amable."
    }
  ],
  "Nippon Fresh": [
    {
      "nombre": "Melissa F.",
      "fecha": "2025-06-20",
      "texto": "Probé los nigiris y estaban fresquísimos. Me gustó la presentación y el sabor auténtico. ¡Muy recomendable!"
    },
    {
      "nombre": "Eduardo J.",
      "fecha": "2025-06-19",
      "texto": "Buen sushi en general, aunque el tamaño de los rolls podría ser más grande. El local es moderno y agradable."
    }
  ], 

    "Leña y Carbón": [
    {
      "nombre": "Cecilia A.",
      "fecha": "2025-06-20",
      "texto": "El pollo a la brasa estuvo jugoso y con buen sabor ahumado. Me encantaron las papas crocantes y las cremas. ¡Volveré pronto!"
    },
    {
      "nombre": "Oscar V.",
      "fecha": "2025-06-19",
      "texto": "Buena atención, pero sentí que el pollo estaba algo seco esta vez. El lugar es cómodo, aunque un poco lleno en hora punta."
    }
  ],
  "Maky's": [
    {
      "nombre": "Patricia R.",
      "fecha": "2025-06-20",
      "texto": "¡Excelente lugar! El pollo broaster estuvo delicioso y las porciones son generosas. Ideal para ir en familia."
    },
    {
      "nombre": "Luis M.",
      "fecha": "2025-06-19",
      "texto": "La comida es buena, pero las papas llegaron un poco frías. El servicio fue rápido, aunque el local estaba bastante lleno."
    }
  ],
  "Porsupollo": [
    {
      "nombre": "Diana F.",
      "fecha": "2025-06-20",
      "texto": "Me encantó el sabor del pollo, bien dorado y jugoso. Además, tienen buenas promociones familiares. ¡Recomendado!"
    },
    {
      "nombre": "Andrés C.",
      "fecha": "2025-06-19",
      "texto": "El pollo estaba sabroso, pero sentí que el tamaño de la porción fue más pequeño que otras veces. El ambiente es agradable."
    }
  ],
  "Pardos Chicken": [
    {
      "nombre": "Marisol J.",
      "fecha": "2025-06-20",
      "texto": "Siempre me gusta venir a Pardos Chicken. El pollo es delicioso y las cremas son lo máximo. ¡Ideal para reuniones!"
    },
    {
      "nombre": "Víctor T.",
      "fecha": "2025-06-19",
      "texto": "La comida es rica, pero me parece un poco cara para las porciones que sirven. El lugar es bonito, eso sí."
    }
  ],
  "Granja Azul": [
    {
      "nombre": "Natalia Q.",
      "fecha": "2025-06-20",
      "texto": "El pollo estuvo espectacular, suave y lleno de sabor. Además, el ambiente es elegante y perfecto para ocasiones especiales."
    },
    {
      "nombre": "Esteban L.",
      "fecha": "2025-06-19",
      "texto": "Todo bien, aunque el pollo llegó un poco frío. El lugar es bonito, pero deberían cuidar más la temperatura de los platos."
    }
  ],
  "Diego": [
    {
      "nombre": "Rosa P.",
      "fecha": "2025-06-20",
      "texto": "¡Delicioso pollo a la brasa! Jugoso y con buen sabor. Me gustó mucho la atención rápida y las porciones generosas."
    },
    {
      "nombre": "Henry Z.",
      "fecha": "2025-06-19",
      "texto": "La comida es buena, aunque esta vez el pollo me pareció algo seco. El local es amplio y cómodo para grupos."
    }
  ],
  "Norky's": [
    {
      "nombre": "Carla H.",
      "fecha": "2025-06-20",
      "texto": "El pollo estuvo excelente, con ese sabor tradicional que nunca decepciona. Buen lugar para comer en familia."
    },
    {
      "nombre": "Fernando E.",
      "fecha": "2025-06-19",
      "texto": "Buena sazón, pero las papas llegaron un poco blandas. La atención fue rápida, aunque había bastante gente."
    }
  ],
  "Pollo Real": [
    {
      "nombre": "Luz S.",
      "fecha": "2025-06-20",
      "texto": "Me encantó el sabor del pollo, súper jugoso y bien sazonado. Además, el local es limpio y la atención fue amable."
    },
    {
      "nombre": "Jorge B.",
      "fecha": "2025-06-19",
      "texto": "El sabor estuvo bien, pero sentí que las cremas estaban algo simples. El lugar es cómodo y perfecto para ir en familia."
    }
  ],
  "Brasa Express": [
    {
      "nombre": "Fabiola D.",
      "fecha": "2025-06-20",
      "texto": "Rápido y rico. El pollo a la brasa estuvo sabroso y las papas doradas perfectas. Ideal para una comida rápida y rica."
    },
    {
      "nombre": "Rubén N.",
      "fecha": "2025-06-19",
      "texto": "El pollo estuvo bien, pero la atención fue algo lenta. Para algo express, esperaba un servicio más rápido."
    }
  ], 

    "Qcharcos": [
    {
      "nombre": "Daniela E.",
      "fecha": "2025-06-20",
      "texto": "Pedí el bife de chorizo y estuvo espectacular, jugoso y bien sazonado. El ambiente es rústico y agradable. ¡Volveré pronto!"
    },
    {
      "nombre": "Marco J.",
      "fecha": "2025-06-19",
      "texto": "La carne es buena, pero esta vez llegó un poco fría. El servicio fue amable, aunque algo lento en hora punta."
    }
  ],
  "El Gran Parrillero": [
    {
      "nombre": "Lorena S.",
      "fecha": "2025-06-20",
      "texto": "Excelente parrilla, las costillas estuvieron deliciosas y se deshacían en la boca. Ideal para compartir en familia."
    },
    {
      "nombre": "Álvaro R.",
      "fecha": "2025-06-19",
      "texto": "Buena calidad de carnes, pero me pareció un poco caro para las porciones que sirven. El lugar es amplio y cómodo."
    }
  ],
  "Asado Criollo": [
    {
      "nombre": "Verónica P.",
      "fecha": "2025-06-20",
      "texto": "Probé la entraña y estaba perfecta, suave y con gran sabor. Me encantó el toque criollo en las guarniciones."
    },
    {
      "nombre": "Henry S.",
      "fecha": "2025-06-19",
      "texto": "La carne estuvo bien, aunque un poco grasosa para mi gusto. El ambiente es acogedor, pero había algo de ruido."
    }
  ],
  "Bife & Brasa": [
    {
      "nombre": "Gabriela T.",
      "fecha": "2025-06-20",
      "texto": "¡Me encantó! Pedí un bife ancho y estaba perfectamente cocido. Las papas rústicas también estuvieron deliciosas."
    },
    {
      "nombre": "Rubén V.",
      "fecha": "2025-06-19",
      "texto": "La carne tenía buen sabor, pero me pareció algo pequeña la porción. La atención fue rápida y cordial."
    }
  ],
  "Carnívoro Grill": [
    {
      "nombre": "Marisol L.",
      "fecha": "2025-06-20",
      "texto": "Excelente lugar para amantes de la carne. Probé el tomahawk y fue una delicia, jugoso y bien presentado."
    },
    {
      "nombre": "Pedro G.",
      "fecha": "2025-06-19",
      "texto": "La comida estuvo bien, aunque la parrilla mixta llegó un poco fría. El lugar es bonito, pero deberían cuidar la temperatura."
    }
  ],
  "Costillas & Sazón": [
    {
      "nombre": "Elena M.",
      "fecha": "2025-06-20",
      "texto": "Las costillas BBQ estuvieron espectaculares, súper suaves y llenas de sabor. Me encantó la salsa casera."
    },
    {
      "nombre": "Javier B.",
      "fecha": "2025-06-19",
      "texto": "La comida es rica, pero el servicio fue algo lento. Las costillas llegaron bien de sabor, aunque un poco grasosas."
    }
  ],
  "Rancho Bravío": [
    {
      "nombre": "Tatiana F.",
      "fecha": "2025-06-20",
      "texto": "Probé el churrasco y estuvo delicioso, bien jugoso y en su punto. El ambiente tiene un estilo campestre que me encantó."
    },
    {
      "nombre": "Sandro C.",
      "fecha": "2025-06-19",
      "texto": "La carne estuvo bien, pero la porción de guarnición fue algo pequeña. El lugar es amplio y perfecto para reuniones grandes."
    }
  ],

    "Refrescos Perú": [
    {
      "nombre": "Ana P.",
      "fecha": "2025-06-20",
      "texto": "Probé el refresco de maracuyá y estuvo delicioso, súper natural y no tan dulce. Me encanta que usen frutas frescas. ¡Recomendado!"
    },
    {
      "nombre": "Fernando L.",
      "fecha": "2025-06-19",
      "texto": "Los sabores son buenos, pero sentí que el jugo de piña estaba un poco aguado. El local es limpio y la atención es rápida."
    }
  ],
  "Fruta y Sabor": [
    {
      "nombre": "Paola S.",
      "fecha": "2025-06-20",
      "texto": "¡Excelente lugar! Pedí jugo de fresa y estaba súper fresco y bien servido. Ideal para una bebida saludable en medio del día."
    },
    {
      "nombre": "Jorge T.",
      "fecha": "2025-06-19",
      "texto": "Los jugos tienen buen sabor, aunque el de mango estaba algo espeso para mi gusto. El ambiente es agradable y tienen buena variedad."
    }
  ],

    "Pizzería Artesanal": [
    {
      "nombre": "Lucía R.",
      "fecha": "2025-06-20",
      "texto": "La pizza margarita estuvo espectacular, masa delgada y salsa deliciosa. Me encanta que usen ingredientes frescos. ¡Volveré seguro!"
    },
    {
      "nombre": "Erick M.",
      "fecha": "2025-06-19",
      "texto": "Buen sabor, pero me pareció algo caro para el tamaño de las pizzas. El lugar es bonito y acogedor."
    }
  ],
  "La pizza feliz": [
    {
      "nombre": "Gabriela V.",
      "fecha": "2025-06-20",
      "texto": "Probé la pizza hawaiana y estuvo buenísima, con bastante queso y buen balance de dulce y salado. Atención rápida y amable."
    },
    {
      "nombre": "Renato H.",
      "fecha": "2025-06-19",
      "texto": "La pizza tiene buen sabor, pero la masa estaba algo dura esta vez. El local es sencillo, pero limpio."
    }
  ],
  "Pizza Factory": [
    {
      "nombre": "Sofía L.",
      "fecha": "2025-06-20",
      "texto": "¡Me encantó Pizza Factory! Probé la cuatro quesos y estaba cremosa y deliciosa. Además, tienen buenas promociones."
    },
    {
      "nombre": "Javier P.",
      "fecha": "2025-06-19",
      "texto": "La pizza estuvo bien, pero llegó un poco fría en delivery. El sabor sigue siendo muy bueno."
    }
  ],
  "Mozzarella Mía": [
    {
      "nombre": "Andrea C.",
      "fecha": "2025-06-20",
      "texto": "La pizza pepperoni estuvo deliciosa, con buena cantidad de queso y salsa. Lugar acogedor y buena música."
    },
    {
      "nombre": "Samuel T.",
      "fecha": "2025-06-19",
      "texto": "Buena pizza, pero me pareció que el borde estaba algo quemado. La atención fue rápida."
    }
  ],
  "Napolitano Express": [
    {
      "nombre": "Fiorella B.",
      "fecha": "2025-06-20",
      "texto": "Probé la pizza napolitana y estaba riquísima, con masa suave y tomate fresco. Ideal para almuerzos rápidos."
    },
    {
      "nombre": "Oscar F.",
      "fecha": "2025-06-19",
      "texto": "La pizza estaba bien, aunque la porción me pareció pequeña para el precio. El local es práctico y rápido."
    }
  ],
  "Pizza Loca": [
    {
      "nombre": "Mariana S.",
      "fecha": "2025-06-20",
      "texto": "¡Excelente sabor! Pedí la pizza vegetariana y estaba deliciosa, con bastantes vegetales frescos. Buen precio y atención."
    },
    {
      "nombre": "Esteban R.",
      "fecha": "2025-06-19",
      "texto": "Buena pizza, pero la salsa estaba un poco salada para mi gusto. El lugar es divertido y colorido."
    }
  ],
  "La Toscana": [
    {
      "nombre": "Daniela P.",
      "fecha": "2025-06-20",
      "texto": "Probé la pizza caprese y me encantó, ligera y llena de sabor. El ambiente es elegante y acogedor."
    },
    {
      "nombre": "Héctor C.",
      "fecha": "2025-06-19",
      "texto": "La pizza estuvo bien, pero me pareció algo aceitosa. El servicio es bueno, aunque algo lento en horas punta."
    }
  ],
  "Pizza Raúl": [
    {
      "nombre": "Carla M.",
      "fecha": "2025-06-20",
      "texto": "Me encantó la pizza de jamón y queso. Sencilla, pero deliciosa y bien servida. Ideal para una comida rápida."
    },
    {
      "nombre": "Mauricio V.",
      "fecha": "2025-06-19",
      "texto": "La pizza estaba buena, pero el queso se sintió un poco graso. El local es pequeño, pero cómodo."
    }
  ],
  "Pizza Hut": [
    {
      "nombre": "Patricia F.",
      "fecha": "2025-06-20",
      "texto": "Clásico sabor que nunca falla. Pedí la pan pizza y estaba deliciosa, con bastante queso y salsa. ¡Súper recomendado!"
    },
    {
      "nombre": "Iván S.",
      "fecha": "2025-06-19",
      "texto": "Buena pizza, aunque sentí que la masa estaba algo gruesa. La atención fue rápida y el local limpio."
    }
  ],
  "Pizzas Rústicas": [
    {
      "nombre": "Nataly H.",
      "fecha": "2025-06-20",
      "texto": "La pizza rústica con chorizo estuvo espectacular, crujiente y con sabor casero. Lugar acogedor y bien decorado."
    },
    {
      "nombre": "Alonso J.",
      "fecha": "2025-06-19",
      "texto": "El sabor es bueno, pero la pizza llegó algo fría. La atención es amable, pero podrían mejorar la rapidez."
    }
  ],
  "Mozzarella Express": [
    {
      "nombre": "Betsy L.",
      "fecha": "2025-06-20",
      "texto": "Rápido y rico. Probé la pizza napolitana y estaba muy fresca. Ideal para almuerzos rápidos o delivery."
    },
    {
      "nombre": "Cristian N.",
      "fecha": "2025-06-19",
      "texto": "La pizza estuvo bien, aunque el queso estaba algo grasoso. El servicio es veloz y el local limpio."
    }
  ],
  "Don Giovanni Pizza": [
    {
      "nombre": "Valeria G.",
      "fecha": "2025-06-20",
      "texto": "¡Excelente experiencia! La pizza cuatro estaciones estuvo increíble, con sabores bien balanceados. El ambiente es muy italiano."
    },
    {
      "nombre": "Felipe D.",
      "fecha": "2025-06-19",
      "texto": "Buena pizza, aunque la porción me pareció algo pequeña. El sabor es muy bueno y auténtico."
    }
  ],

   "Viena Delicatessen": [
    {
      "nombre": "Claudia R.",
      "fecha": "2025-06-20",
      "texto": "Probé el strudel de manzana y estaba delicioso, crujiente y no tan dulce. El lugar es elegante y perfecto para una tarde de café."
    },
    {
      "nombre": "José M.",
      "fecha": "2025-06-19",
      "texto": "Los postres son buenos, pero me parecieron algo caros para el tamaño de las porciones. La atención es excelente, eso sí."
    }
  ],
  "Delicias Dulces": [
    {
      "nombre": "Marcela P.",
      "fecha": "2025-06-20",
      "texto": "¡Me encantó! Pedí un cheesecake de maracuyá y estaba espectacular, cremoso y con buen equilibrio de sabores."
    },
    {
      "nombre": "Ricardo V.",
      "fecha": "2025-06-19",
      "texto": "Los postres están bien, pero sentí que el brownie estaba un poco seco. El local es bonito y la atención es rápida."
    }
  ],
  "Gelato House": [
    {
      "nombre": "Paty G.",
      "fecha": "2025-06-20",
      "texto": "El gelato de pistacho estuvo increíble, muy cremoso y con sabor intenso. Lugar perfecto para el verano."
    },
    {
      "nombre": "Esteban R.",
      "fecha": "2025-06-19",
      "texto": "Buen helado, pero me pareció algo caro para el tamaño del cono. La variedad de sabores es amplia."
    }
  ],
  "Donuts & Más": [
    {
      "nombre": "Lucero D.",
      "fecha": "2025-06-20",
      "texto": "Probé las donuts glaseadas y estaban deliciosas, suaves y frescas. ¡Recomendado para un antojo dulce!"
    },
    {
      "nombre": "Henry S.",
      "fecha": "2025-06-19",
      "texto": "Las donuts son ricas, aunque esta vez el relleno de crema estaba un poco escaso. El lugar es limpio y colorido."
    }
  ],
  "Cupcake City": [
    {
      "nombre": "Fiorella M.",
      "fecha": "2025-06-20",
      "texto": "¡Amo sus cupcakes! Probé el de red velvet y estaba espectacular, súper esponjoso y con crema deliciosa."
    },
    {
      "nombre": "Óscar C.",
      "fecha": "2025-06-19",
      "texto": "Los cupcakes tienen buen sabor, pero me parecieron algo pequeños para el precio. El local es lindo y bien decorado."
    }
  ],
  "Postres Limeños": [
    {
      "nombre": "Milagros F.",
      "fecha": "2025-06-20",
      "texto": "Probé el suspiro limeño y estaba riquísimo, súper cremoso y no tan empalagoso. Ideal para los que aman los postres peruanos."
    },
    {
      "nombre": "Raúl T.",
      "fecha": "2025-06-19",
      "texto": "El arroz con leche estuvo bien, pero un poco espeso para mi gusto. El sabor tradicional se mantiene, eso sí."
    }
  ],

   "Tacos del Rey": [
    {
      "nombre": "Sandra V.",
      "fecha": "2025-06-20",
      "texto": "Los tacos al pastor estuvieron buenísimos, llenos de sabor y bien servidos. Me encantó el toque picante. ¡Volveré pronto!"
    },
    {
      "nombre": "Kevin R.",
      "fecha": "2025-06-19",
      "texto": "La comida es buena, pero los tacos que pedí llegaron algo fríos. El lugar es bonito, aunque pequeño y se llena rápido."
    }
  ],
  "La Taquería Express": [
    {
      "nombre": "Rocío L.",
      "fecha": "2025-06-20",
      "texto": "¡Excelente lugar para comer rápido! Probé los tacos de carnitas y estaban deliciosos. Buena atención y precios accesibles."
    },
    {
      "nombre": "Martín D.",
      "fecha": "2025-06-19",
      "texto": "Los tacos estaban ricos, pero me parecieron algo pequeños para el precio. El local es práctico y limpio."
    }
  ],
  "Tacos Mamita": [
    {
      "nombre": "Pamela J.",
      "fecha": "2025-06-20",
      "texto": "Probé los tacos de pollo y estuvieron espectaculares, jugosos y bien condimentados. Buen ambiente y atención amable."
    },
    {
      "nombre": "Oscar M.",
      "fecha": "2025-06-19",
      "texto": "El sabor es bueno, pero sentí que las tortillas estaban algo duras. El lugar es colorido y alegre."
    }
  ],
  "El Mexicano": [
    {
      "nombre": "Valeria C.",
      "fecha": "2025-06-20",
      "texto": "¡Me encantó! Pedí tacos de carne asada y estaban jugosos y llenos de sabor. Además, tienen salsas variadas y deliciosas."
    },
    {
      "nombre": "Luis P.",
      "fecha": "2025-06-19",
      "texto": "Los tacos estaban bien, pero me parecieron un poco grasosos. El local es amplio y el ambiente agradable."
    }
  ],
  "Tacorama": [
    {
      "nombre": "Melissa F.",
      "fecha": "2025-06-20",
      "texto": "Probé los tacos vegetarianos y estuvieron increíbles, llenos de sabor y frescura. Ideal para algo diferente y saludable."
    },
    {
      "nombre": "Alberto N.",
      "fecha": "2025-06-19",
      "texto": "Buen sabor en general, aunque el guacamole estaba un poco ácido. El lugar es moderno y bien decorado."
    }
  ],
  "Viva Tacos": [
    {
      "nombre": "Brenda T.",
      "fecha": "2025-06-20",
      "texto": "¡Excelente servicio y sabor! Probé los tacos de pescado y estaban frescos y bien sazonados. Me encantó la variedad de salsas."
    },
    {
      "nombre": "Renzo G.",
      "fecha": "2025-06-19",
      "texto": "La comida estuvo bien, pero el taco que pedí estaba un poco frío. El lugar es divertido y con buena música."
    }
  ],
    "Green Garden": [
    {
      "nombre": "Alejandra S.",
      "fecha": "2025-06-20",
      "texto": "Probé la ensalada César y estaba deliciosa, súper fresca y con aderezo casero espectacular. ¡Ideal para almuerzos ligeros!"
    },
    {
      "nombre": "Felipe R.",
      "fecha": "2025-06-19",
      "texto": "La ensalada estaba bien, pero me pareció algo pequeña para el precio. El ambiente es agradable y moderno."
    }
  ],
  "La Hortaliza": [
    {
      "nombre": "Carolina M.",
      "fecha": "2025-06-20",
      "texto": "¡Excelente lugar! Pedí la ensalada oriental y estuvo riquísima, llena de sabor y bien presentada. Perfecto si buscas algo saludable."
    },
    {
      "nombre": "Jorge C.",
      "fecha": "2025-06-19",
      "texto": "Los ingredientes son frescos, pero sentí que el aderezo de mi ensalada griega estaba un poco ácido. El local es limpio y tranquilo."
    }
  ],
  "Fresh Bowl": [
    {
      "nombre": "Lucía T.",
      "fecha": "2025-06-20",
      "texto": "La ensalada tropical estuvo espectacular, con frutas frescas y un aderezo dulce ligero. ¡Muy recomendable para quienes buscan algo diferente!"
    },
    {
      "nombre": "Eduardo N.",
      "fecha": "2025-06-19",
      "texto": "Buena variedad de ensaladas, aunque mi bowl llegó algo desordenado. El sabor es bueno, pero podrían mejorar la presentación."
    }
  ],

  "Ice Dream": [
    {
      "nombre": "Florencia G.",
      "fecha": "2025-06-20",
      "texto": "Probé el helado de vainilla y estuvo delicioso, cremoso y con sabor natural. El lugar es lindo y tiene muchas opciones."
    },
    {
      "nombre": "Leonardo H.",
      "fecha": "2025-06-19",
      "texto": "Los sabores son buenos, pero me pareció algo caro para el tamaño del cono. La atención es amable."
    }
  ],
  "Gelato Feliz": [
    {
      "nombre": "Tatiana M.",
      "fecha": "2025-06-20",
      "texto": "¡Me encantó! Pedí gelato de pistacho y estaba increíble, súper cremoso y con sabor intenso. Totalmente recomendable."
    },
    {
      "nombre": "Renzo P.",
      "fecha": "2025-06-19",
      "texto": "El gelato estaba bien, aunque un poco dulce para mi gusto. El lugar es pequeño, pero acogedor."
    }
  ],
  "Frozen Magic": [
    {
      "nombre": "Patricia L.",
      "fecha": "2025-06-20",
      "texto": "Probé el helado de frutos rojos y fue delicioso, refrescante y con buen equilibrio de sabores. ¡Ideal para el verano!"
    },
    {
      "nombre": "Jorge M.",
      "fecha": "2025-06-19",
      "texto": "Los helados son ricos, pero la espera fue algo larga. El local estaba lleno y no había suficientes mesas."
    }
  ],
  "Helados Donato": [
    {
      "nombre": "Sofía R.",
      "fecha": "2025-06-20",
      "texto": "El helado de chocolate estuvo espectacular, súper intenso y cremoso. Me encanta venir aquí con amigos."
    },
    {
      "nombre": "Víctor Q.",
      "fecha": "2025-06-19",
      "texto": "Buena calidad, aunque el helado de menta estaba un poco aguado. El ambiente es tranquilo y familiar."
    }
  ],
  "IceBox": [
    {
      "nombre": "Carla S.",
      "fecha": "2025-06-20",
      "texto": "Probé el helado de mango y estuvo buenísimo, muy fresco y natural. Ideal para los días de calor."
    },
    {
      "nombre": "Daniel F.",
      "fecha": "2025-06-19",
      "texto": "El sabor es bueno, pero el helado se derritió muy rápido. El servicio es rápido y el local moderno."
    }
  ],
  "Sweet Cream": [
    {
      "nombre": "Gina V.",
      "fecha": "2025-06-20",
      "texto": "¡Delicioso helado artesanal! Probé el sabor cheesecake y estaba espectacular, cremoso y bien presentado."
    },
    {
      "nombre": "Hugo L.",
      "fecha": "2025-06-19",
      "texto": "Buena variedad de sabores, aunque el helado de coco estaba un poco insípido. El lugar es lindo y bien decorado."
    }
  ],
  "Palettas & Cía": [
    {
      "nombre": "Mariana F.",
      "fecha": "2025-06-20",
      "texto": "Probé la paleta de maracuyá y estaba deliciosa, súper refrescante y con sabor natural. ¡Recomendado!"
    },
    {
      "nombre": "Oscar G.",
      "fecha": "2025-06-19",
      "texto": "Las paletas son ricas, pero me parecieron algo pequeñas para el precio. El local es moderno y colorido."
    }
  ],
  "Nevado Express": [
    {
      "nombre": "Valeria N.",
      "fecha": "2025-06-20",
      "texto": "El helado de lúcuma estuvo riquísimo, cremoso y con sabor auténtico. Ideal para los amantes de sabores peruanos."
    },
    {
      "nombre": "Henry B.",
      "fecha": "2025-06-19",
      "texto": "El sabor estaba bien, pero sentí que el helado tenía demasiados cristales de hielo. El servicio fue rápido."
    }
  ],
   "Cevichería del Norte": [
    {
      "nombre": "Verónica L.",
      "fecha": "2025-06-20",
      "texto": "Probé el ceviche mixto y estuvo espectacular, súper fresco y con buen toque picante. Me encantó la atención y el ambiente norteño."
    },
    {
      "nombre": "Gustavo R.",
      "fecha": "2025-06-19",
      "texto": "El sabor del ceviche estaba bien, pero las porciones me parecieron algo pequeñas. El lugar es agradable, aunque algo lleno al mediodía."
    }
  ],
  "Mariscos Lai Lai": [
    {
      "nombre": "Patricia S.",
      "fecha": "2025-06-20",
      "texto": "¡Excelente lugar para mariscos! Probé la jalea mixta y estaba crujiente y con mariscos frescos. ¡Volveré seguro!"
    },
    {
      "nombre": "Jorge M.",
      "fecha": "2025-06-19",
      "texto": "La comida estuvo rica, aunque la parihuela me pareció un poco salada. El servicio es rápido y el local limpio."
    }
  ],
  "Mar y Sol": [
    {
      "nombre": "Lorena P.",
      "fecha": "2025-06-20",
      "texto": "Pedí leche de tigre y estaba deliciosa, bien concentrada y refrescante. Ideal para los amantes del marisco."
    },
    {
      "nombre": "Oscar D.",
      "fecha": "2025-06-19",
      "texto": "Buen sabor en general, pero el pescado de mi ceviche estaba algo duro. El ambiente es bonito y tiene buena decoración marina."
    }
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  const listaReseñas = document.querySelector(".reviews-list");
  const btnEnviarReseña = document.querySelector(".review-submit");
  const textarea = document.querySelector(".review-input");

  const restauranteActual = localStorage.getItem("restauranteNombre");
  const clave = `reseñas_${restauranteActual}`;

  // 1. Cargar reseñas fijas hardcodeadas
  const reseñasFijas = reseñasPorRestaurante[restauranteActual] || [];

  // 2. Cargar reseñas del localStorage
  const reseñasGuardadas = JSON.parse(localStorage.getItem(clave)) || [];

  // 3. Juntar las dos listas
  const reseñasCombinadas = [...reseñasFijas, ...reseñasGuardadas];

  // 4. Ordenar (las nuevas son más recientes)
  reseñasCombinadas.sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha);
  });

  // 5. Tomar solo las 5 últimas
  const reseñasAMostrar = reseñasCombinadas.slice(0, 5);

  listaReseñas.innerHTML = "";

  reseñasAMostrar.forEach((res) => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <div class="review-avatar">${res.nombre?.[0] || "A"}</div>
      <div class="review-content">
        <div class="review-name">${res.nombre || "Anónimo"}</div>
        <div class="review-date">${res.fecha}</div>
        <div class="review-text">${res.texto}</div>
        <div class="review-actions">
          <div class="review-action">♡</div>
          <div class="review-action">💬</div>
        </div>
      </div>
    `;
    listaReseñas.appendChild(div);
  });

  if (reseñasAMostrar.length === 0) {
    listaReseñas.innerHTML =
      "<p style='padding: 10px;'>No hay reseñas aún para este restaurante.</p>";
  }

  // Evento para añadir reseña
  btnEnviarReseña?.addEventListener("click", function () {
    const texto = textarea.value.trim();

    if (!texto) {
      alert("Por favor ingresa un comentario.");
      return;
    }

    let nombreUsuario = localStorage.getItem("nombreUsuario");
    if (!nombreUsuario || nombreUsuario.trim() === "") {
      nombreUsuario = "Anónimo";
    }

    const fechaActual = new Date().toISOString().split("T")[0];

    const nuevaReseña = {
      nombre: nombreUsuario,
      fecha: fechaActual,
      texto: texto,
    };

reseñasGuardadas.unshift(nuevaReseña);

if (reseñasGuardadas.length > 5) {
  reseñasGuardadas.splice(5);
}

    localStorage.setItem(clave, JSON.stringify(reseñasGuardadas));

    // Volver a mostrar las reseñas combinadas
    const nuevasCombinadas = [...reseñasFijas, ...reseñasGuardadas];
    nuevasCombinadas.sort((a, b) => {
      return new Date(b.fecha) - new Date(a.fecha);
    });

    const ultimas5 = nuevasCombinadas.slice(0, 5);

    listaReseñas.innerHTML = "";

    ultimas5.forEach((res) => {
      const div = document.createElement("div");
      div.className = "review-item";
      div.innerHTML = `
        <div class="review-avatar">${res.nombre?.[0] || "A"}</div>
        <div class="review-content">
          <div class="review-name">${res.nombre || "Anónimo"}</div>
          <div class="review-date">${res.fecha}</div>
          <div class="review-text">${res.texto}</div>
          <div class="review-actions">
            <div class="review-action">♡</div>
            <div class="review-action">💬</div>
          </div>
        </div>
      `;
      listaReseñas.appendChild(div);
    });

    textarea.value = "";
  });
});

