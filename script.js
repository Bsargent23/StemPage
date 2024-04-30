button.addEventListener("click", function() {
  alert("Hello, World!");
})

// create a function to save the madlib
function saveMadLib() {
  console.log("saveMadLib() called");
  var storyData = createMadLib()
  db.collection("madlibs").doc(storyData.storyName).set(storyData); alert(storyData.storyName + " saved to database!");
}
