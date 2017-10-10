//Get JSON DATA and stored data in variable Employees.
var employees;

$.ajax({
    url: 'https://randomuser.me/api/?results=12&format=json',

    success: function(data){
    	employees = data.results;
    	displayEmployees(employees);
    	console.log(employees);
	}
});

//Create Function to Build Employee Car
function displayEmployees(employees){
	var employeesHTML = ""
	$.each(employees, function(i, employee) {
		employeesHTML += '<div class="employee">';
	    employeesHTML += '<a href="">';
	    employeesHTML += '<img class="employee-photo" src="' + employee.picture.large + '"></a>';
	    employeesHTML += '<div class="info">';
	    employeesHTML += '<div class="name">'+ employee.name.first + ' ' + employee.name.last + '</div>';
	    employeesHTML += '<div class="email grey-font">'+ employee.email + '</div>';
	    employeesHTML += '<div class="city grey-font">' + employee.location.city + '</div></div></div>';
	       });

    $('.employees').html(employeesHTML);

};

//Create Function to Build Modal
function displayModal(employees, id){
	var employeesModal;
	//create modal
    employeesModal += '<div>' + employees[id].cell + '</div';

    $('.modal-text').html(employeesModal);

}

//Click Event To Display Modal
var modal = document.getElementById('myModal');
$('.employees').on("click", ".employee", function() {
	$.each(employees, function(i, employee) {
		var id = $(this).attr('data-id');
	    modal.style.display = "block";
	    displayModal(employees, id);
	    console.log('click');
	});
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


console.log(employees);