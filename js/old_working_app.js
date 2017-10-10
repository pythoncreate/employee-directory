$.ajax({
    url: 'https://randomuser.me/api/?results=12&format=json',

    success: function(data){
		var employeesHTML ="";
		var employeesModal ="";
      	$.each(data.results, function(i, employee) {
      	employeesHTML += '<div class="employee">';
        employeesHTML += '<a href="">';
        employeesHTML += '<img class="employee-photo" src="' + employee.picture.large + '"></a>';
        employeesHTML += '<div class="info">';
        employeesHTML += '<div class="name">'+ employee.name.first + ' ' + employee.name.last + '</div>';
        employeesHTML += '<div class="email grey-font">'+ employee.email + '</div>';
        employeesHTML += '<div class="city grey-font">' + employee.location.city + '</div></div></div>';
        //create modal
        employeesModal += '<img class="employee-photo" src="' + employee.picture.large + '"></a>';
        employeesModal += '<div class="modal-data">';
        employeesModal += 'employee.name.first';

   		 });

      $('.employees').html(employeesHTML);
      $('.modal-text').html(employeesModal);
      
 	 },
 
});

// Get the modal
var modal = document.getElementById('myModal');

// When the user clicks on employee, open the modal 
$(document).ready(function(){
$('.employees').on("click", ".employee", function() {
    modal.style.display = "block";
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



