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

// create a function to show the answers

function saveAnswers() {

  console.log("Answers() called");
  
  var Yourname = document.getElementById("Yourname").value;

  var grade =
    document.getElementById("grade").value;

  var learn =
    document.getElementById("learn").value;

    document.getElementById("StudentAnswers").innerHTML = "Your name is: " + Yourname + "</u>, . Grade: <u>" + grade + "</u>." + " You want to learn about: <u>" + learn + "</u>.";

  var StudentAnswers= document.getElementById("StudentAnswers").innerHTML;
  console.log("StudentAnswers: " + StudentAnswers);
  
    var storyData = {
      timestamp: Date.now(),
      StudentAnswers: StudentAnswers,
      learn: learn,
      grade: grade,
      Yourname: Yourname

    };

    console.log("storyData: " + storyData);

    var storyJSON = JSON.stringify(storyData);
    console.log("storyJSON: " + storyJSON);
    db.collection("Answers").doc(storyData.Yourname).set(storyData); alert(storyData.Yourname + " saved to database!");
  
}

// create a function to save the story
//function saveAnswer() {
  //console.log("saveAnswer() called");
  //var storyData = saveAnswer()
    //db.collection("Answers").doc(storyData.storyName).set(storyData); alert(storyData.storyName + " saved to database!");
//}


// make sure that data is going to firestore
//collectionName = "test runs";
//docName = "test run 2";
//data = { myName: "Dan Stille", class: "Web Development" };
//db.collection(collectionName).doc(docName).set(data);
//console.log("data: " + data);
//alert(docName + " saved to database!!");