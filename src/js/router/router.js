window.libreria.getId('vista').enrutar()
  .ruta('/', './login.html', 'contacto', function(){
    libreria.getCtrl().login()
  })
  .ruta('/muro', './muro.html', 'contacto', function(){
    libreria.getCtrl().muro()
  })
