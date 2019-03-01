
function validate() //checks the two passwords
{
  let p1 = document.getElementById("PW1").value;
  let p2 = document.getElementById("PW2").value;
  if(p1 != p2)
  {
    alert("Passwords incorrect.");
  }
  else if(p1.length != 8)
  {
    alert("The password you entered was not long enough.");
  }


}

let counter = 0;
function counterCheckPos()
{
  if(counter > imgArray.length-1)
  {
    counter = 0;
  }
}

function counterCheckNeg()
{
  if (counter < 0)
  {
    counter = imgArray.length-1;
  }
}


function prev()
{
  let img = document.getElementById("imgTag");
  counter--;
  counterCheckNeg();
  img.src = imgArray[counter];
}

function fwd()
{
  let img = document.getElementById("imgTag");
  counter++;
  counterCheckPos();
  img.src = imgArray[counter];
}

let imgArray = [
  "https://www.aquinas-sta.org/uploaded/faculty_photos/28000036.jpg",
  "https://www.aquinas-sta.org/uploaded/faculty_photos/28011721.jpg",
  "https://www.aquinas-sta.org/uploaded/faculty_photos/28000014.jpg",
  "https://www.aquinas-sta.org/uploaded/faculty_photos/28000024.jpg",
  "https://bobcat.grahamdigital.com/image/upload/view?width=1280&height=720&method=crop&url=https://media.local10.com/photo/2019/01/15/Patrick-O%27Dea_1547573276765_17505875_ver1.0_640_360.jpg",
]
