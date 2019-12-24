  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBpCx4r5K1JsIe8ymE9LSAIycHYlCv0oS8",
    authDomain: "contactform-3c3d5.firebaseapp.com",
    databaseURL: "https://contactform-3c3d5.firebaseio.com",
    projectId: "contactform-3c3d5",
    storageBucket: "contactform-3c3d5.appspot.com",
    messagingSenderId: "1015264388223",
    appId: "1:1015264388223:web:f1fa1c71485300addd0b4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let messagesRef = firebase.database().ref('messages')

  document.getElementById('contactForm').addEventListener('submit', submitForm)

  // submit form
  function submitForm(e){
      e.preventDefault()
      var name = getInputVal('name')
      var company = getInputVal('company')
      var email = getInputVal('email')
      var phone = getInputVal('phone')
      var message = getInputVal('message')

      // saves message
      saveMessage(name, company, email, phone, message)

      // show alert
      document.querySelector('.alert').style.display = 'block'

      // hide alert
      setTimeout(function(){
          document.querySelector('.alert').style.display = 'none'
      }, 3000)

      // clear form
      document.getElementById('contactForm').reset()
  }

  function getInputVal(id){
      return document.getElementById(id).value
  }

  function saveMessage(name, company, email, phone, message){
    let newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
  }


