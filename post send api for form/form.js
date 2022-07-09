var Username=document.getElementById('Username')
var fname=document.getElementById('fname')
var lname=document.getElementById('lname')
var Email=document.getElementById('Email')


function sumbitBtn() {
var person ={
    method:"post",

   body: JSON.stringify({
    Username:Username.value,
    Email:Email.value,
    Firstname:fname.value,
    LastName:lname.value
   }) ,

 }
//  console.log(person);
 fetch("http://127.0.0.1:5500",person)
 .then((Response)=>{
 return Response.json();
 }).then((data)=>{
     console.log(data);
 })
}








