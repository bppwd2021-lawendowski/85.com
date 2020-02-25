//When the main form is submitted, show the modal with the form data
//$("#mainForm").on("submit", function(event) {
//    event.preventDefault();
//    
//    var emailAddress = $("#emailAddress").val();
//    var companyName = $("#companyName").val();
//    var bossName = $("#bossName").val();
//    var cellPhone = $("#cellPhone").val();
//
//    $(".modal-title").text("Employee Info");
//
//    $(".modal-body").html("Email Address: " + emailAddress + "<br>" + "Company: " + companyName + "<br>" + "Boss: " + bossName + "<br>" + "Cell: " + cellPhone );
//
//    $("#companyModal").modal("show");
//});
//
//When the Save Changes button on the modal is clicked add a new row
//$("#addEmployee").on("click", function() {
//    var emailAddress = $("#emailAddress").val();
//    var companyName = $("#companyName").val();
//    var bossName = $("#bossName").val();
//    var cellPhone = $("#cellPhone").val();
//
//    $("#employeeTable tr:last").after("<tr><td>" + emailAddress + "</td><td>" + companyName + "</td><td>" + bossName + "</td><td>" + cellPhone + "</td></tr>");
//});
