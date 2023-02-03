// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id2")

let equalButton = document.getElementById("Equal_Button_Id")

let numberAndOperatorValue = [operationId, operationId]

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
function OperationButtonActiced()
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
	let newValues = [NumberButtonActived(), OperationButtonActiced()]
	for(let allButtonValues of newValues)
	{	
		if(allButtonValues) 
		{	
			if(allButtonValues !== "" && allButtonValues != undefined) 		
			{	
				if(displayIdOfNumberAndOperator.style.display = "flex")
				{	
					if(displayIdOfNumberAndOperator.textContent.length == 1 && displayIdOfNumberAndOperator.textContent.length > 1)
					{	
						if(enabledEqualButton != false)
						{
							return equalButton.disabled = true
						}
					}
				}
			}
		}
		// if(!allButtonValues) 
		// {	
		// 	if(allButtonValues === "" && allButtonValues == undefined) 		
		// 	{	
		// 		if(displayIdOfNumberAndOperator.style.display !== "flex")
		// 		{	
		// 			if(displayIdOfNumberAndOperator.textContent.length != 1 && displayIdOfNumberAndOperator.textContent.length < 1)
		// 			{	
		// 				if(enabledEqualButton == false)
		// 				{
		// 					return equalButton.disabled = false
		// 				}
		// 			}
		// 		}
		// 	}
		// }
		else 
		{
			return equalButton.disabled = false
		}
	}
	return newValues
}
// Baris akhir function 

// Function untuk menjalankan tombol sama dengan
function EqualButtonsConditions()
{	
	let allOperatorButtonsCondition = RunOperatorsButtons()
	for(let emptyValues = 0; emptyValues > numberAndOperatorValue.length; emptyValues++)
	{	
		allOperatorButtonsCondition + equalButton.addEventListener("click"[emptyValues], () =>
		{	 
			console.log("Button Aktif")
			displayIdOfNumberAndOperator.style.display = "none"
		},{once:true})
	}
}
EqualButtonsConditions()
// Baris akhir function


// let runCalculations = new Promise((IdNumberClicked) =>
// {	
// 	IdNumberClicked()
// })
// runCalculations.then((equalButtonClicked) =>
// {
// 	switch(window.arithmeticId)
// 	{	
// 		case "+" : let sumValue = showFinalResult.innerText = Number(numberIdButton.value) + Number(numberIdButton.value)
// 		break
// 	}
// })