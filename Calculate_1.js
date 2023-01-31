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
	var saveNumberValue
	for(let idButton of numberIdButton) 
	{	
		// console.log(saveNumberValue)
		let ClickIdNumber = idButton.addEventListener("click",() =>
		{
			let displayingNumber = displayIdOfNumberAndOperator.append(innerText = idButton.value)
			for(let arithmeticId of operationId) 
			{	
				arithmeticId.disabled = false
				// console.log(saveNumberValue)
			}
		}, false)
		return saveNumberValue = idButton.value
	}
}
console.log(numberButtonActived())
// Baris akhir function 

// Baris pengkondisian untuk menampilkan operasi matematika
function operationButtonActived()
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

// Function untuk memeriksa tombol angka
// function EnabledNumberButtonCondition()
// {
// 	let numberButton = [numberButtonActived()]
	
// 	for(let numberButtonTrue of numberButton) 
// 	{
// 		numberButtonTrue
// 	}
// }
// Baris akhir function

// Function untuk memeriksa tombol operator
function EnabledOperationButtonCondition()
{
	let equalButton = [operationButtonActived()]
	
	for(let operationButtonTrue of equalButton) 
	{
		operationButtonTrue
	}
}
// Baris akhir function

// function RunEqualButton() 
// {	
// 	const saveEnabledNumberButtonCondition = EnabledNumberButtonCondition()
// 	if(saveEnabledNumberButtonCondition || saveEnabledNumberButtonCondition != undefined)
// 	{
// 		for(let nullValue = 0; saveEnabledNumberButtonCondition > nullValue.length; nullValue++)
// 		{	
// 			let numberValueHasBenShows = displayIdOfNumberAndOperator.childNodes[nullValue].nodeValue
// 			if(numberValueHasBenShows != null || numberValueHasBenShows !== "")
// 			{
// 				if(numberValueHasBenShows > 1 || numberValueHasBenShows == 1)
// 				{
// 					let equalButtonCanctive = equalButton.disabled += true
// 					return equalButtonCanctive
// 				}
// 				else if(numberValueHasBenShows < 1 || numberValueHasBenShows != 1)
// 				{
// 					let equalButtonInactive = equalButton.disabled += false
// 					return equalButtonInactive
// 				}
// 			}
// 		}
// 	}
// }
// RunEqualButton() 

// Listener untuk menampilkan simbol sama dengan 
// function EqualButtonClicked()
// {	
// 	let newValue = [numberButtonActived(), operationButtonActived()]
// 	let equalButtonInactiveCondition = equalButton.disbled += false
// 	for(let enabledValue of newValue)
// 	{	
// 		if(enabledValue)
// 		{	
// 			for(let comparedValue = 0; enabledValue.value > comparedValue.value; enabledValue++)
// 			{	
// 				let showNumberAndOperator = displayIdOfNumberAndOperator.childNodes[enabledValue].nodeValue
// 				if(showNumberAndOperator)
// 				{
// 					if(showNumberAndOperator != null || showNumberAndOperator !== "")
// 					{
// 						if(displayIdOfNumberAndOperator.style.display = "flex" && showNumberAndOperator.innerText.length == 1 || showNumberAndOperator.innerText.length > 1)
// 						{
// 							let equalButtonActiveCondition = equalButton.disbled += true
// 							return equalButtonActiveCondition 
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// Baris akhir function 

// Function untuk membuat tombol sama dengan aktiv
// function EnabledEachequalButtonClicked()
// {	
// 	switch(RunEqualButton())	
// 	{
// 		case true : 
// 					equalButton.addEventListener("click", () =>
// 					{	 
// 						console.log("Button Enabled")
// 						displayIdOfNumberAndOperator.style.display = "none"
// 					},{once:true})
// 		break
// 	}
// }
// EnabledEachequalButtonClicked()
// Baris akhir function

// Funciton untuk uji coba
function testEqualButton()
{	
	let variable = displayIdOfNumberAndOperator.childNodes += numberButtonActived(window.idButton)
	let buttonTrue = equalButton.disabled = true
	switch(variable)
	{
		case variable : 
		case variable.length > 1 : console.log(variable)
		break
	}
}
let runEqualButton = testEqualButton()

if(runEqualButton)
{
	window.buttonTrue+equalButton.addEventListener("click", () =>
	{	 
		console.log("Button Enabled")
		displayIdOfNumberAndOperator.style.display = "none"
	},{once:true})
}

function Operators()
{
	let mathOperators = ["+", "-", "/", "*"]

	let savemathOperators
	for(let itterateMathOperators of mathOperators)
	{	
		console.log(savemathOperators = itterateMathOperators)
	}
}
Operators()
// Baris akhir function


let runCalculations = new Promise((IdNumberClicked) =>
{	
	IdNumberClicked()
})
runCalculations.then((EnabledEachequalButtonClicked) =>
{
	switch(operationButtonActived)
	{	
		case "+" : let sumValue = showFinalResult.innerText = Number(numberIdButton.value) + Number(numberIdButton.value)
		break
	}
})
// Baris akhir code