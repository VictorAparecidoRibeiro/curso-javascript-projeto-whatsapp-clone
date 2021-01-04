import firebase from "firebase";

//const firebase = require('firebase');
require('firebase/firestore')

export class Firebase {
constructor(){


    window._initializedFirebase = false;

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    this._config ={
        apiKey: "AIzaSyB2chjJh4ZTpz4HYLuBWXfqEzUqo5HUPFg",
        authDomain: "whatsappclone-6e6e1.firebaseapp.com",
        databaseURL: "https://whatsappclone-6e6e1.firebaseio.com",
        projectId: "whatsappclone-6e6e1",
        storageBucket: "whatsappclone-6e6e1.appspot.com",
        messagingSenderId: "175809297083",
        appId: "1:175809297083:web:3fbb70e0b1396db8c5c79e",
        measurementId: "G-XW9TQR679N"
    };
    this.init();

}

init(){

    if(!window._initializedFirebase){

        var firebaseConfig = this._config;
        firebase.initializeApp(firebaseConfig);

        firebase.firestore().settings({
        
        });

        firebase.analytics();

        window._initializedFirebase = true;

    }
}


static db(){

    return firebase.firestore();
}

static hd(){

    return firebase.storage();

}

initAuth(){

    return new Promise((s,f)=>{

        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result =>{
            let token = result.credential.accessToken;

            let user = result.user;

            s({
                user, token
            }
            );
        })
        .catch(err=>{
            f(err);
        })
    });
}

}