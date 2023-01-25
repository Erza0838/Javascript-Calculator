// Baris code untuk menampilkan angka
if(ClickIdNumber = "click")
{
	// Variable untuk menyimpan id 
	let numberIdButton = document.querySelectorAll("#Number_Button_Id")

	// Variable untuk menampilkan angka ke monitor
	let displayIdOfNumber = document.getElementById("Display_Output")

	for (let idButton of numberIdButton)
	{		
		let ClickIdNumber = idButton.addEventListener("click", 
		function Number()
		{
			displayIdOfNumber.append(innerText = idButton.value)
		}, false)
	}
}
// Baris akhir code 

	// Baris pengkondisian untuk menampilkan operasi matematika
	while(window.ClickIdNumber && window.ClickIdNumber === null && window.ClickIdNumber === "")
	{
		if(window.clickarithmeticBtn = "click")
		{	
			let operationId = document.querySelectorAll("#Operation_Button_Id2")

				let arithmeticOperation = document.getElementById("Display_Output")

			for (let arithmeticId of operationId)
			{		
				let clickarithmeticBtn = arithmeticId.addEventListener("click", 
					function OperationFunction()
					{	
						arithmeticOperation.append(innerText = "")
							return innerText
					}, false)	
			}
		}
		break
	}

while(window.ClickIdNumber && window.ClickIdNumber !== null && window.ClickIdNumber !== "")	
{
	if(window.ClickIdNumber.value !== null && window.ClickIdNumber.value !== "")
	{
		if(window.clickarithmeticBtn = "click")
		{	
			let operationId = document.querySelectorAll("#Operation_Button_Id2")

				let arithmeticOperation = document.getElementById("Display_Output")

			for (let arithmeticId of operationId)
			{		
				let clickarithmeticBtn = arithmeticId.addEventListener("click", 
					function OperationFunction()
					{	
						arithmeticOperation.append(innerText = arithmeticId.value)
							return innerText
					}, false)	
			}
		}
	}
}
	// Baris akhir pengkondisian
// Baris akhir code untuk menampilkan operasi matematika