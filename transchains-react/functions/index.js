const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const app = require('express')();
const cors = require('cors');

app.use(cors());

app.post('/messages', (req, res) => {
    console.log("request: "+JSON.stringify(req.body));
    const id = req.body.id;
    const message = req.body.message;
    const updateFields = {
        message,
        status: "available"
    }
    const messagesRef = admin.database().ref('/messages');
    messagesRef.child(id).update(updateFields).then(ref => {
        res.send("OK");
    });
});

app.put('/messages', (req, res) => {
    const messagesRef = admin.database().ref('/messages');
    const parentQuery = messagesRef.orderByChild("status").equalTo("available").limitToFirst(1);
    parentQuery.once("value", snap => {
        const parent = Object.keys(snap)[0];
        messagesRef.child(parent).update({"status": "assigned"});
        const newMessage = {
            parent,
            status: "new"
        };
        massegesRef.post(newMessage).then(ref => {
            res.status(200).json({key: ref.key});
        });
    });
});

exports.app = functions.https.onRequest(app);