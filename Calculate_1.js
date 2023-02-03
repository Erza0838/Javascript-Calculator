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
		if(allButtonValues) 
		{	
			if(displayIdOfNumberAndOperator.innerText !== "" || displayIdOfNumberAndOperator.innerText != undefined || displayIdOfNumberAndOperator.innerText != null) 		
			{	
				if(displayIdOfNumberAndOperator.style.display = "flex")
				{	
					if(displayIdOfNumberAndOperator.innerText.length == 1 || displayIdOfNumberAndOperator.innerText.length > 1)
					{	
						return equalButton.disabled = true
					}
				}
			}
			// return equalButton.disabled = false
		}
		else if(!allButtonValues) 
		{	
			if(displayIdOfNumberAndOperator.innerText === "" || displayIdOfNumberAndOperator.innerText == undefined || displayIdOfNumberAndOperator.innerText == null) 		
			{	
				if(displayIdOfNumberAndOperator.style.display != "flex")
				{	
					if(displayIdOfNumberAndOperator.innerText.length < 1)
					{	
						return equalButton.disabled = false
					}
				}
			}
			// return equalButton.disabled = true
		}
	}
}
// Baris akhir function 

// Function untuk menjalankan tombol sama dengan
function EqualButtonsConditions()
{	
	let allOperatorButtonsCondition = RunOperatorsButtons()
	for(let shownumberAndOperatorValue of numberAndOperatorValue)
	{
		for(let zeroValue = 0; shownumberAndOperatorValue > zeroValue; zeroValue++)
		{
			let equalButtonIndeks = equalButton[zeroValue]
			allOperatorButtonsCondition + equalButtonIndeks.addEventListener("click", () =>
			{	 
				console.log("Button Aktif")
				displayIdOfNumberAndOperator.style.display = "none"
			},{once:true})
		}
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