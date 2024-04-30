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









button.addEventListener("click", function() {
  alert("Hello, World!");
})

// create a function to save the madlib
function saveMadLib() {
  console.log("saveMadLib() called");
  var storyData = createMadLib()
  db.collection("madlibs").doc(storyData.storyName).set(storyData); alert(storyData.storyName + " saved to database!");
}
