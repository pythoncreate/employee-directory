//Get JSON DATA and stored data in variable Employees.
var employees;
var phone;

$.ajax({
    url: 'https://randomuser.me/api/?results=12&format=json',
    success: function(data){
    	employees = data.results;
    	displayEmployees(employees);
    	$('.extra-info').hide();
	}
});
//Create Function to Build Employee Car
function displayEmployees(employees){
	var employeesHTML = ""
	$.each(employees, function(i, employee) {
		employeesHTML += '<div class="employee">';
	    employeesHTML += '<img class="employee-photo" src="' + employee.picture.large + '"></a>';
	    employeesHTML += '<div class="info">';
	    employeesHTML += '<div class="name">'+ employee.name.first + ' ' + employee.name.last + '</div>';
	    employeesHTML += '<div class="email grey-font">'+ employee.email + '</div>';
	    employeesHTML += '<div class="city grey-font">' + employee.location.city + '</div></div>';
	    employeesHTML += '<div class="extra-info"><hr align="left" width="90%">';
	    employeesHTML += '<div class="phone">' + employee.phone + '</div>';
	    employeesHTML += '<div class="address">' + employee.location.street + ' ' + employee.location.city;
	    employeesHTML += ',' + employee.location.state + ' ' + employee.location.zip + '</div>';
	    employeesHTML += '<div class="birthday">Birthday: ' + employee.location.dob + '</div></div></div>';
 
	       });

    $('.employees').html(employeesHTML);
    return phone;
};

//Create Function to Build Modal
function displayModal(employees){
	var employeesModal="";
	//create modal
    employeesModal += $(employees).html();
    $('.modal-text').html(employeesModal);
}

//Click Event To Display Modal
var modal = document.getElementById('myModal');
$('.employees').on("click", ".employee", function() {
	  var current = $(this);
	  var extra = current.parent().find(".extra-info");
	  extra.css('display', 'block');
	  modal.style.display = "block";
	  displayModal(current);
});

// // When the user clicks on (x), close the modal
$('.close').on("click", function() {
    modal.style.display = "none";
});

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}