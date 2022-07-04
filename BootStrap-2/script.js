$(document).ready(function(){
    $("#btn").click(function (e) {
        setTimeout(() => {
            let alert = $("<div class='alert alert-danger'>If you want to see notifications,  <a href='mainpage.html'>click here</a></div>")
            $("#alertDiv").append(alert)
        }, 1000);
    });
})

