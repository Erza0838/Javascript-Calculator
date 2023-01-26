// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id2")

let equalButton = document.getElementById("Equal_Button_Id")

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumber = document.getElementById("Display_Output")

let arithmeticOperation = document.getElementById("Display_Output")

// Variable untuk menampilkan hasil perhitungan 
let showFinalResult = document.getElementById("Display_Result")

for (let idButton of numberIdButton) 
{
	let ClickIdNumber = idButton.addEventListener("click",
		function Number() 
		{
			let displayingNumber = displayIdOfNumber.append(innerText = idButton.value)
			for (let arithmeticId of operationId) 
			{
				arithmeticId.disabled = false
			}
		}, false)
}
// Baris akhir code

// Baris pengkondisian untuk menampilkan operasi matematika
for(let arithmeticId of operationId) 
{
	let clickarithmeticBtn = arithmeticId.addEventListener("click",
		function OperationFunction() 
		{
			let displayingOperator = arithmeticOperation.append(innerText = arithmeticId.value)
			for (var i = 0, len = operationId.length; i < len; i++)
			{
				operationId[i].disabled = true
			}
		}, false)
}

// Listener untuk menampilkan simbol sama dengan 
let equalButtonClicked = equalButton.addEventListener("click",function CalculatedNumber()
{	 
	let numberAndOperator = [window.displayingNumber, window.displayingOperator]
	for(let newEmptyValue of numberAndOperator) 
	{
		for(var nullValue = 0; newEmptyValue > nullValue; nullValue++)
		{	
			if(nullValue.length == numberAndOperator.length)
			{	
				let showEmptyArray = showFinalResult
				showEmptyArray.innerText = delete newEmptyValue[nullValue]
			}
		}
	}
},{once:true})

// Listener untuk menampilkan hasil perhitungan
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