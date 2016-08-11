  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkyzK7YKWks6XUBTdA55HSETDZwCJwlLY",
    authDomain: "train-times-4fc9a.firebaseapp.com",
    databaseURL: "https://train-times-4fc9a.firebaseio.com",
    storageBucket: "train-times-4fc9a.appspot.com",
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
	var database = firebase.database()

	// Initial Values
	var trainName = "";
	var destination = "";
	var time = 0;
	var frequency = "";


// Capture Button Click
$("#addUser").on("click", function() {

	// Grabbed values from text boxes
	trainName = $('#nameinput').val().trim();
	destination = $('#roleinput').val().trim();
	time = $('#startinput').val().trim();
	frequency = $('#rateinput').val().trim();


	// Code for handling the push
	database.ref().push({
		name: name,
		destination: destination,
		// startDate: startDate,
		time: time,
		frequency, frequency
	})

	// Don't refresh the page!
	return false;
});