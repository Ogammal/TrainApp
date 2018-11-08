
// Initialize Firebase
var config = {
apiKey: "AIzaSyBKGihfxcpApHYEBB75QdSW7-plv2LMlb0",
authDomain: "trainapp-b99cf.firebaseapp.com",
databaseURL: "https://trainapp-b99cf.firebaseio.com",
projectId: "trainapp-b99cf",
storageBucket: "trainapp-b99cf.appspot.com",
messagingSenderId: "567224334255"
};

firebase.initializeApp(config);

var name;
var destination;
var time;
var frequency;

var database = firebase.database();

$('#add-train').on('click', function() {
    event.preventDefault();
    name=$('#name-input').val().trim();
    destination=$('#destination-input').val().trim();
    time=$('#time-input').val().trim();
    frequency=$('#frequency-input').val().trim();

     database.ref().push( {
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
     });
 });

 database.ref().on("child_added", function(snap) {
    var tr = $("<tr>");
       tr.append("<td>" + snap.val().name + "</td>");
       tr.append("<td>" + snap.val().destination + "</td>");
       tr.append("<td>" + snap.val().frequency + "</td>");
       tr.append("<td>" + snap.val().time + "</td>");
       tr.append("<td>" + Math.floor(Math.random() * snap.val().frequency) + "</td>");
       $("#table-body").append(tr);
});