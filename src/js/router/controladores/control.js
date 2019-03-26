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
      signInSuccessUrl: `${ubicacion}muro`,
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
      console.log('hay usuario')
      location.href.replace(location.href = `${ubicacion}muro`)
    } else {
      console.log('No hay usuario activo')
    }
  },

// --------------------------------------------------------------------------MURO
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
    const sendButton = document.getElementById('send-button')
    const editButton = document.getElementById('edit-button')
    const textarea2 = document.getElementById('textarea2')
    const printBox = document.getElementById('printBox')


    textarea2.addEventListener('keyup', () => {
      if (textarea2.value.length > 0) {
        sendButton.removeAttribute('disabled')
      } else if (textarea2.value.length <= 0) {
        sendButton.setAttribute('disabled', true)
      }
    })


    imgUser.classList.remove('hide')
    nameUser.classList.remove('hide')
    loginA.classList.add('hide')
    hamburguesa.classList.add('block')
    logout.classList.remove('hide')
    // muro.classList.add('hide')

    const funLogOut = () => {
      firebase.auth().signOut()
        .then(() => {
          console.log('Usuario salio con exito')
          location.href.replace(location.href = `${ubicacion}/`)
        })
        .catch(error => console.error(error, ' algo salió mal'))
    }
    const printNav = () => {
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
        <li id="perfil-nav" ><a href="#/perfil-nav">Perfil</a></li>`
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
      console.log('hay usuario en el muro')
    } else {
      location.href.replace(location.href = `${ubicacion}/`)
      console.log('No hay usuario activo')
    }

    const progress = document.getElementById('progress')
    const content = document.getElementById('content')

    setTimeout(() => {
      progress.classList.add('hide')
      content.classList.remove('hide')

    }, 200)

    // ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' Firestore



    var db = firebase.firestore();
    const daFunct = () => {
      // console.log(textarea2.value.length)
      // var pruebaRef = db.collection('users').doc('alovelace');
      // date: firebase.firestore.Timestamp.fromDate(new Date())
      // pruebaRef.set({
      //   prueba: "3"
      // })
      db.collection("users").add({
          name: userLS.displayName,
          email: userLS.email,
          photo: userLS.photoURL,
          id: userLS.uid,
          msj: textarea2.value,
          date: new Date(),
          user: userLS,
          likes: 0,
        })
        .then(function (docRef) {
          M.toast({
            html: 'Mensaje enviado!'
          })
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      textarea2.value = ''
    }
    const postPublications = db.collection('users').orderBy('date', "desc")

    postPublications.onSnapshot(function (doc) {
      db.collection("users").onSnapshot((querySnapshot) => {
        // newData = []
        let str = ''
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`)
          let post = doc.data()
          str += `
          <div class="row ">
          <div class="col s12 m6 offset-m3">
            <div class="card z-depth-5 ">
              <a ><img class="circle left mi-circle" src="${post.photo}"></a>
              <div class="card-content mi-card ">
                <h5 class="card-title">${post.name}</h5>
                <hr>
                </div>
                <h3>${post.msj}</h3>
              <div class="card-action">
                <span class="left">${post.date}</span>
                <span class="center">
                  <a class="waves-effect waves-light btn"><i id="${doc.id}"  class="material-icons center btn-likes" data-likes="${post.likes}" >thumb_up</i></a>${post.likes}</span>
                <span class="right">
                  <span>
                    <a class="waves-effect waves-light btn"><i id="${doc.id}"  class="material-icons center btn-edit" data-msj="${post.msj}" >mode_edit</i></a>
                  </span>
                  <span>
                    <a class="waves-effect waves-dark btn "><i id="${doc.id}" class="material-icons center btn-delete">delete</i></a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>`

          // newData.push(doc.data())
        });
        printBox.innerHTML = str

        // console.log(newData)
        // const btnDelete = window.myFirebase.baseDD(newData, printBox)
        const btnDelete = document.getElementsByClassName('btn-delete')
        const btnEdit = document.getElementsByClassName('btn-edit')
        const btnLikes = document.getElementsByClassName('btn-likes')


        for (let i = 0; i < btnDelete.length; i++) {
          btnDelete[i].addEventListener('click', () => {
            const idBtn = btnDelete[i].id
            funDelete(idBtn)
          })
        }
        for (let i = 0; i < btnEdit.length; i++) {
          btnEdit[i].addEventListener('click', () => {
            const idBtn = btnEdit[i].id
            const msj = btnEdit[i].dataset.msj
            funEdit(idBtn, msj)
          })
        }
        for (let i = 0; i < btnLikes.length; i++) {
          btnLikes[i].addEventListener('click', () => {
            const idBtn = btnLikes[i].id
            const likes = parseInt(btnLikes[i].dataset.likes)
            funcLikes(idBtn, likes)
          })
        }
      });
    });

    sendButton.addEventListener('click', daFunct)



    const funDelete = (id) => {
      db.collection("users").doc(id).delete().then(function () {
        M.toast({
          html: `Mensaje eliminado con éxito!`
        })
        console.log("Document successfully deleted!");
      }).catch(function (error) {
        console.error("Error removing document: ", error);
      });
    }

    const funEdit = (id, msj) => {
      document.getElementById('text-ocultar').style.display = 'none'
      editButton.classList.remove('hide')
      sendButton.classList.add('hide')
      document.getElementById('textarea2').value = msj

      var refEdit = db.collection("users").doc(id);
      editButton.addEventListener('click', () => {
        let msjEditado = textarea2.value
        return refEdit.update({
            msj: msjEditado,
            date: new Date(),
          })
          .then(function () {
            editButton.classList.add('hide')
            sendButton.classList.remove('hide')
            textarea2.value = ''
            M.toast({
              html: `Mensaje editado con éxito!`
            })
            console.log("Document successfully updated!");
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      })
    }

    const funcLikes  = (id, like) => {
      var refEdit = db.collection("users").doc(id);
      return refEdit.update({
        likes: like += 1,
      })
    }



  }, // cierre de muro

  perfil: () => {
    const ubicacion = location.href
    
    console.log('estas en el perfil')
    var user = firebase.auth().currentUser;
    if (user) {
      console.log('hay usuario en el muro')
    } else {
      location.href.replace(location.href = `${ubicacion}/`)
      console.log('No hay usuario activo')
    }


    setTimeout(() => {
      progress.classList.add('hide')
      content.classList.remove('hide')

    }, 200)


  } // cierre de perfil
})