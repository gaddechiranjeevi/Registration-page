let email,phone,timeforcall;
let name=document.getElementById("name").value;
 email=document.getElementById("email").value;
 phone=document.getElementById("phone").value;
 timeforcall=document.getElementById("time for call").value;
 localStorage.setItem("name",name);
 localStorage.setItem("email",email);
 localStorage.setItem("phone",phone);
 localStorage.setItem("time for call",timeforcall);
