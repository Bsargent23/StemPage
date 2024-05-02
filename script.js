// setup firebase app and firestore database
const firebaseConfig = {
  apiKey: "AIzaSyB8tHNj99VUVdIMnuqwoH4KQb2uUANK0jE",
  authDomain: "stem-page-1e819.firebaseapp.com",
  projectId: "stem-page-1e819",
  storageBucket: "stem-page-1e819.appspot.com",
  messagingSenderId: "948404571707",
  appId: "1:948404571707:web:18c51ffe309a2b0e73161e",
  measurementId: "G-X151KH794L"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");





// create a function to save the madlib
function saveMadLib() {
  console.log("saveMadLib() called");
  var storyData = createMadLib()
  db.collection("madlibs").doc(storyData.storyName).set(storyData); alert(storyData.storyName + " saved to database!");
}


// make sure that data is going to firestore
collectionName = "test runs";
docName = "test run 2";
data = { myName: "Dan Stille", class: "Web Development" };
db.collection(collectionName).doc(docName).set(data);
console.log("data: " + data);
alert(docName + " saved to database!!");