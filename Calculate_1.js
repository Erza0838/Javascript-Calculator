// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id2")

let equalButton = document.getElementById("Equal_Button_Id")

const clearDisplayValues = document.getElementById("All_Clear_Button_Id") 

let numberAndOperatorValue = [numberIdButton.length, operationId.length]

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumberAndOperator = document.getElementById("Display_Output")

// Variable untuk menampilkan hasil perhitungan 
let showFinalResult = document.getElementById("Display_Result")

// Function untuk menampilkan angka
function NumberButtonActived()
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
function OperationButtonActived()
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
// Baris akhir function

// Listener untuk menampilkan simbol sama dengan 
function RunOperatorsButtons()
{	
	let newValues = [NumberButtonActived(), OperationButtonActived()]
	for(let allButtonValues of newValues)
	{	
		// allButtonValues
		if(!allButtonValues) 
		{	
			if(displayIdOfNumberAndOperator.innerText === "" || displayIdOfNumberAndOperator.innerText == undefined || displayIdOfNumberAndOperator.innerText == null) 		
			{	
				if(displayIdOfNumberAndOperator.style.display != "flex")
				{	
					if(displayIdOfNumberAndOperator.innerText.length < 1)
					{	
						equalButton.disabled = false
					}
				}
			}
		}
		else if(allButtonValues) 
		{	
			if(displayIdOfNumberAndOperator.innerText !== "" || displayIdOfNumberAndOperator.innerText != undefined || displayIdOfNumberAndOperator.innerText != null) 		
			{	
				if(displayIdOfNumberAndOperator.style.display = "flex")
				{	
					if(displayIdOfNumberAndOperator.innerText.length == 1 || displayIdOfNumberAndOperator.innerText.length > 1)
					{	
						equalButton.disabled = true
					}
				}
			}
		}
	}
}

// Baris akhir function 

// Function untuk menjalankan tombol sama dengan
function EqualButtonsConditions()
{	
	let allOperatorButtonsCondition = RunOperatorsButtons()
	allOperatorButtonsCondition + equalButton.addEventListener("click", () =>
	{	 
		displayIdOfNumberAndOperator.style.display = "none"	
	},false)
}
EqualButtonsConditions()
// Baris akhir function

// Function untuk memunculkan semua angka pada button
function ForOfLoopNumberButtons()
{
	for(let allNumbers of numberIdButton) 
	{
		allNumbers
	}
}
// Baris akhir function

// Function untuk memunculkan semua operator pada button
function ForOfLoopNumberButtons()
{
	for(let allOperators of numberIdButton) 
	{
		allOperators
	}
}
// Baris akhir function

// Bagian Promise
// let runCalculations = new Promise((IdNumberClicked) =>
// {	
// 	IdNumberClicked()
// })

// runCalculations.then((EqualButtonsConditions) =>
// {
// 	switch(RunOperatorsButtons)
// 	{	
// 		case "+" : console.log(Number(numberIdButton.value) + Number(numberIdButton.value))
// 		break
// 	}

// 	switch(RunOperatorsButtons) 
// 	{
// 		case false : return 
// 			break
// 	}
// })
// Baris akhr promise