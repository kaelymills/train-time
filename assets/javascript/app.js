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
	var name = "";
	var destination = "";
	var time = 0;
	var frequency = "";


// Capture Button Click
$("#addUser").on("click", function() {

	// Grabbed values from text boxes
	name = $('#newTrain').val().trim();
	destination = $('#newDestination').val().trim();
	time = $('#newTime').val().trim();
	frequency = $('#newFrequency').val().trim();


	// Code for handling the push
	database.ref().push({
		name: name,
		destination: destination,
		time: time,
		frequency, frequency
	})

	// Don't refresh the page!
	return false;
});

//Firebase data to print in 'Today's Trains Table'
	database.ref().on("child_added", function(childSnapshot) {
		console.log(childSnapshot.val().name);
		console.log(childSnapshot.val().destination);
		console.log(childSnapshot.val().time);
		console.log(childSnapshot.val().frequency);
		// console.log(moment(convertedDate).format("'LT'"));

		var tRow = $("<tr/>");
		var nameDiv = $("<td/>").html(childSnapshot.val().name);
		var destinationDiv = $("<td/>").html(childSnapshot.val().destination);
		var frequencyDiv = $("<td/>").html(childSnapshot.val().frequency);
		tRow.append(nameDiv).append(destinationDiv).append(frequencyDiv);
		$("#todaysTrains").append(tRow)

	})


		// var tRow = $("<tr/>");
		// var nameDiv = $("<td/>").html(childSnapshot.val().name);
		// var destinationDiv = $("<td/>").html(childSnapshot.val().destination);
		// var theDate = childSnapshot.val().time;
		// var dateDiv = $("<td/>").html(moment(theDate).format("MM/DD/YY"));
		// console.log(dateDiv);
		// var monthsDiv = $("<td/>").html(moment().diff(theDate, "months"));
		// tRow.append(nameDiv).append(roleDiv).append(dateDiv).append(monthsDiv);
		// $("#currentEmployees").append(tRow)


database.ref().on('child_added', function(snapshot){
	console.log(snapshot.val().empName)
	var tabrow = $("<th>");
	var namedat = $("<th>");
	var destdat = $("<th>");
	var freqdat = $("<th>");
	var nextdat = $("<th>");
	var minsdat = $("<th>");
	var snap = snapshot.val();
	var firstrun = moment(snap.firstrun, 'nextArrivals');
	var frequency = snap.frequency;
	console.log(firstrun)
	console.log(frequency)
	var sincefirst = moment().diff(firstrun, 'frequencies');
	console.log(sincefirst)
	var sincelast = sincefirst % frequency;
	console.log(sincelast);
	var minutesaway = frequency - sincelast;
	console.log(minutesaway);
	nextarrival = moment().add(minutesaway, 'minutesAway');
	console.log(nextarrival);
	namedat.text(snap.name)
	destdat.text(snap.destination)
	freqdat.text(snap.frequency)
	nextdat.text(moment(nextarrival).format("nextArrivals"));
	minsdat.text(minutesaway)
	namedat.appendTo(tabrow)
	destdat.appendTo(tabrow)
	freqdat.appendTo(tabrow)
	nextdat.appendTo(tabrow)
	minsdat.appendTo(tabrow)
	tabrow.appendTo($("#todaysTrains"))

	}, function(error){
		console.log(error.code);
		console.log(error.message);
	});
// });
