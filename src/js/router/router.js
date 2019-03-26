window.libreria.getId('vista').enrutar()
  .ruta('/', './login.html', 'contacto', function(){
    libreria.getCtrl().login()
  })
  .ruta('/muro', './muro.html', 'contacto', function(){
    libreria.getCtrl().muro()
  })
  .ruta('/perfil-nav', './perfil-nav.html', 'contacto', function(){
    libreria.getCtrl().perfil()
  })
