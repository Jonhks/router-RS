var inicio = function () {
  var elemento = null,
    marco = null,
    rutas = {},
    controladores = {},
    ctrlActual = null,
    libreria = {
      getId: function (id) {
        elemento = document.getElementById(id)
        return this
      },
      get: function (id) {
        return document.getElementById(id)
      },
      noSubmit: function () {
        elemento.addEventListener('submit', function (e) {
          e.preventDefault();
        }, false)
        return this
      },
      controlador: function (nombre, ctrl) {
        controladores[nombre] = {
          'controlador': ctrl
        }
      },
      getCtrl: function () {
        return ctrlActual
      },
      enrutar: function () {
        marco = elemento
        return this
      },
      ruta: function (ruta, plantilla, controlador, carga) {
        rutas[ruta] = {
          plantilla,
          controlador,
          carga
        }
        return this
      },
      manejadorRutas: function () {
        var hash = window.location.hash.substring(1) || '/',
          destino = rutas[hash],
          xhr = new XMLHttpRequest()
        if (destino && destino.plantilla) {
          if (destino.controlador) {
            ctrlActual = controladores[destino.controlador].controlador
            console.log()
          }
          xhr.addEventListener('load', function () {
            marco.innerHTML = this.responseText
            setTimeout(function(){
              if (typeof destino.carga === 'function') {
                destino.carga()
              }
            }, 500)
          }, false)
          xhr.open('get', destino.plantilla, true)
          xhr.send(null)
        } else {
          window.location.hash = '#/'
        }
      }
    }
  return libreria
}
if (typeof window.libreria === 'undefined') {
  window.libreria = inicio()
  window.addEventListener('load', libreria.manejadorRutas, false)
  window.addEventListener('hashchange', libreria.manejadorRutas, false)
} else {
  console.log('se llama a la libreria nuevamente')
}


// ----------------------------------

// const inicio = () => {
//   let elemento = null
//   let marco = null
//   let rutas = {}
//   let controladores = {}
//   let ctrlActual
//   const libreria = {
//     getId: (id) => {
//       elemento = document.getElementById(id)
//       return this
//     },
//     noSubmit: () => {
//       elemento.addEventListener('submit', e => {
//         e.preventDefault()
//       })
//       return this
//     },
//     controlador: (nombre, ctrl) => {
//       controladores[nombre] = {
//         'controlador': ctrl
//       }
//     },
//     enrutar: () =>  marco = elemento,
//     ruta: (ruta, plantilla, controlador, carga) => {
//       rutas[ruta] = {
//         plantilla,
//         controlador,
//         carga
//       }
//       return this
//     },
//     manejadorRutas: () => {
//       var hash = window.location.hash.substring(1) || '/',
//         destino = rutas[hash],
//         xhr = new XMLHttpRequest()
//       if (destino && destino.plantilla) {
//         if(destino.controlador){
//           ctrlActual = destino.controlador
//         }
//         xhr.addEventListener('load', () =>{
//           marco.innerHTML = this.responseText
//         })
//         xhr.open('get', destino.plantilla)
//         HTMLTextAreaElement.send(null)
//       } else {
//         window.location.hash = '#/'
//       }
//     },
//   }
//   return libreria
// }
// if(typeof window.libreria === 'undefined'){
//   window.libreria = inicio()
//   window.addEventListener('load', libreria.manejadorRutas)
//   window.addEventListener('hashchange', libreria.manejadorRutas)
// } else {
//   console.log('se esta llamando a la libreria de nuevo')
// } 

// const inicio = () => {
//   let elemento = null
//   let marco = null
//   let rutas = {}
//   let controladores = {}
//   let ctrlActual
//   const libreria = {
//     getId: (id) => elemento = document.getElementById(id),

//     noSubmit: () => elemento.addEventListener('submit', e => {
//       e.preventDefault();
//     }),

//     controlador: (nombre, ctrl) => controladores[nombre] = {
//       'controlador': ctrl
//     },

//     enrutar: () => marco = elemento,

//     ruta: (ruta, plantilla, controlador, carga) => {
//       return rutas[ruta] = {
//         plantilla,
//         controlador,
//         carga
//       }
//     },

//     manejadorRutas: () => {
//       let hash = window.location.hash.substring(1) || '/',
//         destino = rutas[hash],
//         xhr = new XMLHttpRequest()
//       if (destino && destino.plantilla) {
//         if(destino.controlador){
//           ctrlActual = destino.controlador
//         }
//         xhr.addEventListener('load', () => {
//           marco.innerHTML = this.responseText
//         })
//         xhr.open('get', destino.plantilla)
//         xhr.send(null)
//       } else {
//         window.location.hash = '#/'
//       }
//     },
//   }
//   return libreria
// }

// if (typeof window.libreria === 'undefined') {
//   window.libreria = inicio()
//   window.addEventListener('load', libreria.manejadorRutas, false)
//   window.addEventListener('hashchange', libreria.manejadorRutas, false)
// } else {
//   console.log('se llama a la libreria nuevamente')
// }