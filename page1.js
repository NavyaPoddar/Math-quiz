function adduser(){
    var username1 = document.getElementById("username1").value;
    var username2 = document.getElementById("username2").value;
    localStorage.setItem("name1",username1);
    localStorage.setItem("name2",username2);
    window.location="page2.html";
    
}