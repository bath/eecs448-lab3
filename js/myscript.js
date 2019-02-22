function validate()
{
  let p1 = document.getElementById("PW1");
  let p2 = document.getElementById("PW2");
  if(p1 != p2)
  {
    alert("Passwords incorrect.");
  }
  else if(p1.length != 8)
  {
    alert("The password you entered was not long enough.");
  }


} //checks the two passwords
