var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	
	// use the push function as - names_of_people.push(GuestName);
	Name_Of_The_Guest_Array.push(Guest_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
	console.log(Name_Of_The_Guest_Array);
	var length_of_the_array = Name_Of_The_Guest_Array.length;
	console.log(length_of_the_array);
   }



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		names_of_people_array.sort();           // add the sort function here
		// .sort();
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
