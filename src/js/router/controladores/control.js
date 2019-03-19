libreria.controlador('contacto', {
  login: () => {
    const userLS = JSON.parse(localStorage.getItem('user'))
    const ubicacion = location.href
    const logout = document.getElementById('logout')
    const imgUser = document.getElementById('img-user')
    const miNav = document.getElementById('mi-nav')
    const nameUser = document.getElementById('name-user')
    const loginA = document.getElementById('loginA')
    const hamburguesa = document.getElementById('hamburguesa')
    logout.classList.add('hide')
    imgUser.classList.add('hide')
    nameUser.classList.add('hide')
    logout.classList.add('hide')
    loginA.classList.add('hide')
    hamburguesa.classList.remove('block')

    console.log('estas en el login')
    ui.start('#firebaseui-auth-container', {
      signInOptions: [{
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
    });

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          console.log('estas en el login arriba');
          localStorage.setItem('user', JSON.stringify(authResult.user))
          return true;
        },
        uiShown: function () {
          document.getElementById('loader').style.display = 'none';
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: `${ubicacion}`,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    ui.start('#firebaseui-auth-container', uiConfig);
    var user = firebase.auth().currentUser;
    if (user) {
      location.href.replace(location.href = `${ubicacion}#/muro`)
    } else {
      console.log('No hay usuario activo')
    }
  },


  muro: () => {
    const ubicacion = location.href
    const userLS = JSON.parse(localStorage.getItem('user'))
    const logout = document.getElementById('logout')
    const imgUser = document.getElementById('img-user')
    const miNav = document.getElementById('mi-nav')
    const nameUser = document.getElementById('name-user')
    const loginA = document.getElementById('loginA')
    const hamburguesa = document.getElementById('hamburguesa')
    const muro = document.getElementById('muro')

    imgUser.classList.remove('hide')
    nameUser.classList.remove('hide')
    loginA.classList.add('hide')
    hamburguesa.classList.add('block')
    logout.classList.remove('hide')
    muro.classList.add('hide')

    const funLogOut = () => {
      firebase.auth().signOut()
        .then(() => {
          console.log('Usuario salio con exito')
          location.href.replace(location.href = `${ubicacion}/`)
        })
        .catch(error => console.error(error, ' algo salió mal'))
    }
    const printNav = () => {
      console.log(userLS)
      let str = `
        <li>
        <div id="perfil" class="user-view mi-nav">
        <div class="background">
        <img src="${userLS.photoURL}">
        </div>
        <a href="#user"><img class="circle" src="${userLS.photoURL}"></a>
        <a href="#name"><span class="white-text name">${userLS.displayName}</span></a>
        <a href="#email"><span class="white-text email">${userLS.email}</span></a>
        </div>
        </li>
        <li><a href="#!"><i class="material-icons"></i>Hola ${userLS.displayName} <span id="name"></span></a></li>
        <li id="log-out2"><a>Logout</a></li>
        <li>
        <div class="divider"></div>
        </li>
        <li><a class="waves-effect" href="#!">Perfil</a></li>`
      miNav.innerHTML = str
      imgUser.innerHTML = `<img class="circle" src="${userLS.photoURL}" width="30"></img>`
      nameUser.innerHTML = `<a>${userLS.displayName}</a>`
    }

    printNav()
    const logout2 = document.getElementById('log-out2')
    logout2.addEventListener('click', funLogOut)
    logout.addEventListener('click', funLogOut)


    console.log('estas en el muro')
    var user = firebase.auth().currentUser;
    if (user) {

      console.log(user)
    } else {
      location.href.replace(location.href = `${ubicacion}/`)
      console.log('No hay usuario activo')
    }
  }, // cierre de muro 

})