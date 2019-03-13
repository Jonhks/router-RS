// let prueba = window.libreria
// console.log('este es el archivo')
// window.libreria.getId('vista').enrutar()
//   .ruta('/', './login.html', null , null)
  // .ruta('/muro', './muro.html', 'controlador', window.controlador.muro())
// .ruta('/actualizar-contacto', 'vistas/contactos/actualizar.html', null, null)

window.libreria.getId('vista').enrutar()
  .ruta('/', './login.html', 'contacto', null)
  .ruta('/muro', './muro.html', 'contacto', null)
  // .ruta('/listar-contactos', 'vistas/contactos/listar.html', 'contacto', null)
  // .ruta('/actualizar-contacto', 'vistas/contactos/actualizar.html', 'contacto', null)
