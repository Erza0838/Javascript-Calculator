// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id2")

let equalButton = document.getElementById("Equal_Button_Id")

const clearDisplayValues = document.getElementById("All_Clear_Button_Id") 

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumberAndOperator = document.getElementById("Display_Output")

// Variable untuk menampilkan hasil perhitungan 
let showFinalResult = document.getElementById("Display_Result")

// Variable untuk menyimpan perhitungan angka
let resultCalculationNumber

let newValues

let runCalculations
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

// Function untuk mengaktifkan tombol angka dan operator
// Function untuk mengaktifkan tombol sama dengan
function RunOperatorsButtons()
{	
	newValues = [NumberButtonActived(), OperationButtonActived()]
	for(let allButtonValues of newValues)
	{	
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
		while(displayIdOfNumberAndOperator.firstChild)
		{
			displayIdOfNumberAndOperator.removeChild(displayIdOfNumberAndOperator.firstChild)
		}
	},false)
}

// Function untuk menampilkan hasil perhitungan ke layar
function CalculationResultShow(CalculationResult)
{
	showFinalResult.append(innerText = CalculationResult)
	return CalculationResult
}
// Baris akhir function

function IdNumberClicked(newInitialitationValues)
{
	if(newValues[1] == "+")
	{	
		for(let addValue = 0; numberIdButton.length > addValue; addValue++)
		{	
			if(displayIdOfNumberAndOperator.hasChildNodes())
			{	
				if(displayIdOfNumberAndOperator.innerText !== "")
				{	
					resultCalculationNumber = Number(numberIdButton.value[addValue]) + Number(numberIdButton.value[addValue])
					CalculationResultShow(resultCalculationNumber)
				}
			}
		}
	}
}

// Function berisi Promise untuk menampilkan hasil perhitungan ke layar
function NumberAndOperatorButtonsCondition()
{
	runCalculations = new Promise((IdNumberClicked) =>	
	{	
		if(EqualButtonsConditions())
		{	
			IdNumberClicked(newValues[1])
		}
	})
	// runCalculations.then((newValues) =>	
	// {	
	// 	if(newValues[1] == "+")
	// 	{	
	// 		for(let addValue = 0; numberIdButton.length > addValue; addValue++)
	// 		{	
	// 			if(displayIdOfNumberAndOperator.hasChildNodes())
	// 			{	
	// 				if(displayIdOfNumberAndOperator.innerText !== "")
	// 				{	
	// 					resultCalculationNumber = Number(numberIdButton[addValue]) + Number(numberIdButton[addValue])
	// 					CalculationResultShow(resultCalculationNumber)
	// 				}
	// 			}
	// 		}
	// 	}
	// 	// if(newValues[1] == "+")
	// 	// {	
	// 	// 	while(newValues[0])
	// 	// 	{
	// 	// 		for(let addValue = 0; numberIdButton.length > addValue; addValue++)
	// 	// 		{	
	// 	// 			if(displayIdOfNumberAndOperator.innerText == "" || displayIdOfNumberAndOperator.innerText == null)
	// 	// 			{	
	// 	// 				resultCalculationNumber = Number(numberIdButton[addValue]) + Number(numberIdButton[addValue])
	// 	// 				if(resultCalculationNumber != "" || resultCalculationNumber != null)
	// 	// 				{
	// 	// 					CalculationResultShow(resultCalculationNumber)
	// 	// 				}
	// 	// 			}
	// 	// 		}
	// 	// 		break
	// 	// 	}
	// 	// }
	// 	// switch(newInitialitationValues)
	// 	// {	
	// 	// 	case "+" : 
	// 	// 			for(let addValue = 0; addValue < numberIdButton.length; addValue++)
	// 	// 			{	
	// 	// 				if(displayIdOfNumberAndOperator.hasChildNodes())
	// 	// 				{	
	// 	// 					if(displayIdOfNumberAndOperator.innerText !== "")
	// 	// 					{	
	// 	// 						if(displayIdOfNumberAndOperator.innerText[addValue])
	// 	// 						{
	// 	// 							// resultCalculationNumber = [numberIdButton[addValue]] + [numberIdButton[addValue]]
	// 	// 							resultCalculationNumber = newInitialitationValues[addValue] + newInitialitationValues[addValue]
	// 	// 							CalculationResultShow(resultCalculationNumber)
	// 	// 						}								
	// 	// 					}
	// 	// 				}
	// 	// 				else 
	// 	// 				{
	// 	// 					return
	// 	// 				}
	// 	// 			}
	// 	// 	break
	// 	// 	case "-" : 
	// 	// 			for(let reduceValue = 0; reduceValue < numberIdButton.length; reduceValue++)
	// 	// 			{	
	// 	// 				if(displayIdOfNumberAndOperator.hasChildNodes())
	// 	// 				{	
	// 	// 					if(displayIdOfNumberAndOperator.innerText !== "")
	// 	// 					{	
	// 	// 						if(displayIdOfNumberAndOperator.innerText[reduceValue])
	// 	// 						{
	// 	// 							showFinalResult.append(innerText = numberIdButton[reduceValue] - numberIdButton[reduceValue])
	// 	// 						}								
	// 	// 					}
	// 	// 				}
	// 	// 				else 
	// 	// 				{
	// 	// 					return
	// 	// 				}
	// 	// 			}
	// 	// 	break
	// 	// 	case "*" : 
	// 	// 			for(let mulitipliedValue = 0; mulitipliedValue < numberIdButton.length; mulitipliedValue++)
	// 	// 			{	
	// 	// 				if(displayIdOfNumberAndOperator.hasChildNodes())
	// 	// 				{	
	// 	// 					if(displayIdOfNumberAndOperator.innerText !== "")
	// 	// 					{	
	// 	// 						if(displayIdOfNumberAndOperator.innerText[mulitipliedValue])
	// 	// 						{
	// 	// 							showFinalResult.append(innerText = numberIdButton[mulitipliedValue] * numberIdButton[mulitipliedValue])
	// 	// 						}								
	// 	// 					}
	// 	// 				}
	// 	// 				else 
	// 	// 				{
	// 	// 					return
	// 	// 				}
	// 	// 			}
	// 	// 	break
	// 	// 	case "/" : 
	// 	// 			for(let dividedValue = 0; dividedValue < numberIdButton.length; dividedValue++)
	// 	// 			{	
	// 	// 				if(displayIdOfNumberAndOperator.hasChildNodes())
	// 	// 				{	
	// 	// 					if(displayIdOfNumberAndOperator.innerText !== "")
	// 	// 					{	
	// 	// 						if(displayIdOfNumberAndOperator.innerText[dividedValue])
	// 	// 						{
	// 	// 							showFinalResult.append(innerText = numberIdButton[dividedValue] / numberIdButton[dividedValue])
	// 	// 						}								
	// 	// 					}
	// 	// 				}
	// 	// 				else 
	// 	// 				{
	// 	// 					return
	// 	// 				}
	// 	// 			}
	// 	// }
	// })
	return runCalculations
}
NumberAndOperatorButtonsCondition()
// Baris akhir function 
// Baris akhir promise