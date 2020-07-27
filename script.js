	var regArray = [];

 function initData() //check whether any previous data is avilable in local storage
{
	if (localStorage.regRecord) //if yes recreate table/array
		{
			regArray = JSON.parse(localStorage.regRecord);
			
			for(var i=0; i<regArray.length; i++)
				{
					prepareTableCell(regArray.length[i].Fname,regArray.length[i].Lname,regArray.length[i].Mono,regArray.length[i].Email,regArray.length[i].Seat,regArray.length[i].Tick,regArray.length[i].Pay,regArray.length[i].Day);
		
				}
		}
	
}
function addHtmlTableRow()
    {
		var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var mono = document.getElementById("mono").value;
        var email = document.getElementById("email").value;
        var seat = document.getElementById("seat").value;
        var tick = document.getElementById("tick").value;
        var pay = document.getElementById("pay").value;
        var day = document.getElementById("day").value;
        
		var regObj = {Fname:fname,Lname:lname,Mono:mono,Email:email,Seat:seat,Tick:tick,Pay:pay,Day:day};
		
		regArray.push(regObj);
		
       	localStorage.regRecord = JSON.stringify(regArray);
		//any obj type could be converted into JSON file
		prepareTableCell(fname,lname,mono,email,seat,tick,pay,day);
		
		//clr fields
		document.getElementById("fname").value ="";
        document.getElementById("lname").value ="";
        document.getElementById("mono").value ="";
        document.getElementById("email").value ="";
        document.getElementById("seat").value ="";
       	document.getElementById("tick").value ="";
       	document.getElementById("pay").value ="";
        document.getElementById("day").value ="";
        
    }

function prepareTableCell(fname,lname,mono,email,seat,tick,pay,day)
{
		var table = document.getElementById("table");
        var	newRow = table.insertRow(table.lenght);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
      	var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
		
        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = mono;
        cell4.innerHTML = email;
        cell5.innerHTML = seat;
        cell6.innerHTML = tick;
        cell7.innerHTML = pay;
        cell8.innerHTML = day;
}


function resetForm() {
  document.getElementById("myform").reset();
}
