
var fruitsList =[];

var objectId =0;

var dummy =[];
function addFruits(){
	
	
	var fruitName = document.getElementById('fruitName').value;
	var amount = document.getElementById('price').value;
	var quantity = document.getElementById('quantity').value;
		
	if("" === fruitName  ||  "" === amount || "" === quantity){


		Swal.fire({
			icon :'error',
			title : '',
			text : 'Please Enter the Fruit Details Properly...'
		});


	}else{
		fruitsList.push({
			"id":objectId,
			"fruitName" : fruitName,
			"amount" : amount,
			"quantity" : quantity
		});

		Swal.fire({
			icon :'success',
			title : '',
			text : fruitName+ '  added in your basket..'
		});
		objectId =objectId +1;
		console.log(fruitsList)	
		document.getElementById('fruitForm').reset();
	}
}

function viewFruitsListPrice(){
	
	soretd();

	console.log(fruitsList)

	const tableView  = document.querySelector('#tableView');
	const tablePriceView  = document.querySelector('#tablePriceView');

	$('#fruitsTable').empty();

	


	if(fruitsList.length > 0 ){

		var i = 1;
		var j = 0;
		

		tableView.style.display = 'none';
		tablePriceView.style.display ='block';
		var view = "no";

		fruitsList.forEach(function(item) {
			var totalAmount = 0.0;
			totalAmount = item.amount*item.quantity;

			document.querySelector("#fruitsTable").innerHTML += "<tr scope='row'><td>"+ i +"</td>"+
			"<td>"+item.fruitName+"</td>"+"<td>"+item.amount+"</td>"+
			"<td class='text-center'>"+item.quantity+"</td>"+"<td>"+totalAmount+"</td><td><span class='fa fa-trash text-danger' style='cursor:pointer' onclick='removeFruits(\""+j+"\",\""+item.fruitName+"\",\""+view+"\")'></span></td></tr>";			 

			i= i+1;
			j=j+1;
		});


	}else{
		Swal.fire({
			icon :'warning',
			title : '',
			text : 'No fruits added in your basket...'
		});
		tablePriceView.style.display ='none';
	}
	

}

function viewFruitsList(){

	soretd()

	console.log(fruitsList)
	
	const tableView  = document.querySelector('#tableView');
	const tablePriceView  = document.querySelector('#tablePriceView');

	$('#fruitsTableView').empty();

	if(fruitsList.length > 0 ){



		var i = 1;
		var j = 0;

		tableView.style.display = 'block';
		tablePriceView.style.display ='none';
		var view = "yes";

		fruitsList.forEach(function(item) {
		

			document.querySelector("#fruitsTableView").innerHTML += "<tr scope='row'><td>"+ i +"</td>"+
			"<td>"+item.fruitName+"</td>"+"<td>"+item.amount+"</td>"+
			"<td class='text-center'>"+item.quantity+"</td><td><span class='fa fa-trash text-danger' style='cursor:pointer'  onclick='removeFruits(\""+j+"\",\""+item.fruitName+"\",\""+view+"\")'></span></td></tr>";


			i= i+1;
			j=j+1;
		});


	}else{
		Swal.fire({
			icon :'warning',
			title : '',
			text : 'No fruits added in your basket...'
		});
		tableView.style.display = 'none';
	}
	

}


function removeFruits(val,val1,val3){
	
	debugger;
	
	

	var index = fruitsList.indexOf(val)

	//delete fruitsList[index];

	fruitsList.splice(index,1)

	Swal.fire({
			icon :'success',
			title : '',
			text : val1+' Removed in your basket...'
	});

	if(val3 === "yes"){
		viewFruitsList();
	}else{
		viewFruitsListPrice();
	}

	

}


function soretd(){


fruitsList.sort(function(a, b) {
  var nameA = a.fruitName.toUpperCase(); 
  var nameB = b.fruitName.toUpperCase(); 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});



}




