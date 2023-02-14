// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id")

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

let equalButtonClearElements

let numberButtonsCondition 

let numberButtonValue

let operatorSymbolValue
// Function untuk menampilkan angka
function NumberButtonActived()
{
	for(let idButton of numberIdButton) 
	{
		let ClickIdNumber = idButton.addEventListener("click",
			function Number() 
			{
				let displayingNumber = displayIdOfNumberAndOperator.append(innerText = idButton.value)
				console.log(idButton.value)
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
				console.log(arithmeticId.value)
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
		if(displayIdOfNumberAndOperator.innerText.length > 1 || displayIdOfNumberAndOperator.innerText.length == 1)
		{
			displayIdOfNumberAndOperator.style.display = "none"
		}
		else if(displayIdOfNumberAndOperator.innerText.length == 0)
		{
			return 
		}
		// while(displayIdOfNumberAndOperator.firstChild)
		// {
		// 	displayIdOfNumberAndOperator.removeChild(displayIdOfNumberAndOperator.firstChild)
		// }
	},false)
}
equalButtonClearElements = EqualButtonsConditions()
// Baris akhir function 

// Function untuk menampilkan hasil perhitungan ke layar
function CalculationResultShow(CalculationResult)
{
	showFinalResult.append(innerText = CalculationResult)
	return CalculationResult
}
// Baris akhir function

// Function untuk menampilkan hasil perhitungan ke layar
function NumberAndOperatorButtonsCondition()				
{
	for(let numberIdValue of numberIdButton)
	{	
		numberButtonValue = numberIdValue.value
	}
	for(let operationIdValue of operationId)
	{	
		operatorSymbolValue = operationIdValue.value
	}
	if(equalButtonClearElements != false) 
	{
		console.log("Berhasil")
		if(displayIdOfNumberAndOperator.childNodes != null || displayIdOfNumberAndOperator.childNodes != "")
		{	
			switch(displayIdOfNumberAndOperator.childNodes)
			{	
				// displayIdOfNumberAndOperator.innerText
				case operatorSymbolValue : 
				switch(operatorSymbolValue)
				{
					case "+" : for(let compareValue = 0; displayIdOfNumberAndOperator.childNodes.length > compareValue; compareValue++)
								{
									resultCalculationNumber = Number(displayIdOfNumberAndOperator.childNodes[compareValue]) + Number(displayIdOfNumberAndOperator.childNodes[compareValue])
									CalculationResultShow(resultCalculationNumber)
									break
								}
					break
				}
				break
			}
		}
	}	
	return resultCalculationNumber
}
NumberAndOperatorButtonsCondition()
// Baris akhir function 