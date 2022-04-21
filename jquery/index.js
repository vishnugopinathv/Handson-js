//question 1- create two byttons one hide and one to show a paragarph

$("#show").click(()=>{
    $("#paragraph").show();
});
$("#hide").click(()=>{
    $("#paragraph").hide();
});

//question 2- change the heading of the page using ajax 

$("#changehead").click(()=>{
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success:(data)=>{
            document.getElementById("heading").innerText=data.title;
        }
    })
});