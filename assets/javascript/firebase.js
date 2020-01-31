


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDQbIbuFuRhfmolhdnBfi_jpWyN1ZyNueo",
    authDomain: "rockpaperscissors-d2102.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-d2102.firebaseio.com",
    projectId: "rockpaperscissors-d2102",
    storageBucket: "rockpaperscissors-d2102.appspot.com",
    messagingSenderId: "600671659645",
    appId: "1:600671659645:web:2233d1e8db5293cc54f314",
    measurementId: "G-T8MZKXKGBB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function getScores() {
    var player1spot = $(".player1score");
    var player2spot = $(".player2score");
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
            console.log(snapshot.val());
            console.log(snapshot.val().RPSscore1);
            console.log(snapshot.val().RPSscore2);
            var pastPlayer1Score = snapshot.val().RPSscore1;
            var pastPlayer2Score = snapshot.val().RPSscore2;
            player1spot.text('Player1: ' + pastPlayer1Score);
            player2spot.text('player2: ' + pastPlayer2Score);
        }, function (error) {  
        console.log("Error: " + error.code);
    }) //end of error and get data
};
getScores();

function writeData() {
    var player1spot = $(".player1score");
    var player1score = Number($(".player1score").text().charAt(9));
    console.log(player1spot);
    var player1score = player1score + 5;
    console.log('1: ' + player1score);
    console.log('b: ' + player1score);
    database.ref().set({
        RPSscore1: player1score + 1,
        RPSscore2: player1score + 20
        }); //end of set
}  //end of write data 
