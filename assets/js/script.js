$(".saveBtn").on("click", function () {
    console.log(this);
    var note = $(this).siblings(".description").val();
    var hour = $(this).siblings(".hour").text();
    console.log(note);
    console.log(hour);
    localStorage.setItem(hour, note);
    localStorage.getItem("9 AM");
})

//display time and date in header
var currentDay = moment().format("MMM Do, YYYY, hh:mm A");
$("#currentDay").text(currentDay);

$(".hour").each(function (index) {
    var getHour = $(this).text();
    console.log($(this).text());
    $(this).siblings(".description").val(localStorage.getItem(getHour));

});

//Identifies the current hour in relation to each row
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        // Compares row id to current hour and sets color accordingly
        if (currentHour === rowHour) {
            setColor(row, "#ff6961");
        } else if (currentHour < rowHour) {
            setColor(row, "#77dd77");
        } else {
            setColor(row, "#d3d3d3");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
};