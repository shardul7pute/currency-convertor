//alert("Hello from js");

function convert(){
	//alert("In covert function!!!");
	
	//create object or refrences of HTML elements
	var frm,to,amount;
	
	frm=document.getElementById('from');
	to=document.getElementById('to');
	amount=document.getElementById('amt');
	res=document.getElementById('result');
	cu=document.getElementById('curr');
	
	
	
	/*document.write(frm+"<br>");
	document.write(to+"<br>");
	document.write(amount+"<br>");*/
	
	
	/*document.write("From :"+frm.value+"<br>");
	document.write("To :"+to.value+"<br>");
	document.write("Amount :"+amount.value+"<br>");*/
	
	 //var res=fetch('https://v6.exchangerate-api.com/v6/80e284be5a6fd3ec7d87ebec/latest/USD');
	 //document.write(res);
	
	var url='https://v6.exchangerate-api.com/v6/80e284be5a6fd3ec7d87ebec/latest/'+frm.value;
		fetch(url)
		
		//fetch('https://v6.exchangerate-api.com/v6/80e284be5a6fd3ec7d87ebec/latest/USD')
		
		.then(function(res){
			
			return res.json();
		}).then(function(data){

				//document.write(data+"<br>");
				//document.write(data['result']+"<br>");
				//document.write(data['base_code']+"<br>");
				//document.write(data['conversion_rates']+"<br>");
			 
			var cr=data['conversion_rates'];
			//document.write(cr[to.value]));
			cf=cr[to.value];
			
			var famt=cf*amount.value;
			//document.write("Final AMOUNT:"+famt);
			res.innerHTML=famt;
			cu.innerHTML=to.value;
			
		});
		
}
