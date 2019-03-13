// window.controlador = {
//   login: () => {
//     const ubicacion = location.href
//     ui.start('#firebaseui-auth-container', {
//       signInOptions: [{
//           provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//           signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
//         },
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         // firebase.auth.PhoneAuthProvider.PROVIDER_ID
//       ],
//       // Other config options...
//     });

//     var uiConfig = {
//       callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//           // User successfully signed in.
//           // Return type determines whether we continue the redirect automatically
//           // or whether we leave that to developer to handle.
//           return true;
//         },
//         uiShown: function () {
//           // The widget is rendered.
//           // Hide the loader.
//           document.getElementById('loader').style.display = 'none';
//         }
//       },
//       // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//       signInFlow: 'popup',
//       // signInSuccessUrl: `${ubicacion}muro`,
//       signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         // firebase.auth.PhoneAuthProvider.PROVIDER_ID
//       ],
//       // Terms of service url.
//       tosUrl: '<your-tos-url>',
//       // Privacy policy url.
//       privacyPolicyUrl: '<your-privacy-policy-url>'
//     };

//     // The start method will wait until the DOM is loaded.
//     ui.start('#firebaseui-auth-container', uiConfig);



//     var user = firebase.auth().currentUser;
//     console.log(user)
//     if (user) {
//       // User is signed in.
//       // location.href.replace(location.href = `${ubicacion}muro`)
//       console.log(user)
//     } else {
//       // location.href.replace(location.href = `${ubicacion}`)
//       console.log('No hay usuario activo')

//       // No user is signed in.
//     }
//   },
//   muro: () => {
//     console.log('estas en el muro')
//   //   const ubicacion = location.href
//   //   var user = firebase.auth().currentUser;
//   //   console.log(user)
//   //   if (user) {
//   //     // User is signed in.
//   //     // location.href.replace(location.href = `${ubicacion}muro`)
//   //     console.log(user)
//   //   } else {
//   //     location.href.replace(location.href = `${ubicacion}`)
//   //     console.log('No hay usuario activo')

//   //     // No user is signed in.
//   //   }
//   }

// }


window.libreria.controlador('contacto', {
  crear: function () {
  console.log('estas en el login')
  },
  eliminar: function () {
    console.log('estas en el muro')
  },
 
})