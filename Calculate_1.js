// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id2")

let equalButton = document.getElementById("Equal_Button_Id")

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumberAndOperator = document.getElementById("Display_Output")

// Variable untuk menampilkan hasil perhitungan 
let showFinalResult = document.getElementById("Display_Result")

// Function untuk menampilkan angka
function numberButtonActived()
{
	for(let idButton of numberIdButton) 
	{
		let ClickIdNumber = idButton.addEventListener("click",
			function Number() 
			{
				let displayingNumber = displayIdOfNumberAndOperator.append(innerText = idButton.value)
				for(let arithmeticId of operationId) 
				{
					arithmeticId.disabled = false
				}
			}, false)
	}
}
// Baris akhir function 

// Baris pengkondisian untuk menampilkan operasi matematika
function operationButtonActiced()
{
	for(let arithmeticId of operationId) 
	{
		let clickarithmeticBtn = arithmeticId.addEventListener("click",
			function OperationFunction() 
			{
				let displayingOperator = displayIdOfNumberAndOperator.append(innerText = arithmeticId.value)
				for (var i = 0, len = operationId.length; i < len; i++)
				{
					operationId[i].disabled = true
				}
			}, false)
	}
}
operationButtonActiced()
// Baris akhir function

// Listener untuk menampilkan simbol sama dengan 
function equalButtonClicked()
{	
	if(numberButtonActived())
	{	
		let enabledEqualButton = equalButton.disabled = true
		equalButton.addEventListener("click", () =>
		{	 
			displayIdOfNumber.style.display = "none"
		},{once:true})
		return enabledEqualButton
		// if(displayIdOfNumberAndOperator.nodeValue != "" && displayIdOfNumberAndOperator.nodeValue > 1)
		// {	
		// 	if(enabledEqualButton || enabledEqualButton != false)
		// 	{
		// 		equalButton.addEventListener("click", () =>
		// 		{	 
		// 			return displayIdOfNumber.style.display = "none"
		// 		},{once:true})
		// 		return enabledEqualButton
		// 	}
		// }
	}
}
equalButtonClicked()
// Baris akhir function 

let runCalculations = new Promise((IdNumberClicked) =>
{	
	IdNumberClicked()
})
runCalculations.then((equalButtonClicked) =>
{
	switch(window.arithmeticId)
	{	
		case "+" : let sumValue = showFinalResult.innerText = Number(numberIdButton.value) + Number(numberIdButton.value)
		break
	}
})
// Baris akhir code