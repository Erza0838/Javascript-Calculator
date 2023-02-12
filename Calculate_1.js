// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id")

let equalButton = document.getElementById("Equal_Button_Id")

const clearDisplayValues = document.getElementById("All_Clear_Button_Id") 

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumberAndOperator = document.getElementById("Display_Output")

// Variable untuk menamplkan simbol operator
let operatorSymbolInnerText = [displayIdOfNumberAndOperator]

// Variable untuk menampilkan hasil perhitungan 
let showFinalResult = document.getElementById("Display_Result")

// Variable untuk menyimpan perhitungan angka
let resultCalculationNumber

let newValues

let runCalculations

// const showOperatorSymbol = OperationButtonActived()

// const showNumberText = NumberButtonActived()
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

// Function untuk menampilkan hasil perhitungan ke layar
function NumberAndOperatorButtonsCondition()
{   
	if(EqualButtonsConditions())
	{	
		for(let showOperatorButtons of operationId)
		{	
			if(showOperatorButtons == "+" && OperationButtonActived == "+")
			{	
				for(let addValue = 0; numberIdButton.length > addValue; addValue++)
				{	
					if(displayIdOfNumberAndOperator.hasChildNodes())
					{	
						resultCalculationNumber = Number(Number(numberIdButton.at([addValue])) + Number(numberIdButton.at([addValue])))
						CalculationResultShow(resultCalculationNumber)
						// showFinalResult.append(innerText = CalculationResult)
						return resultCalculationNumber					
					}
				}
			}
		}
	}
}
NumberAndOperatorButtonsCondition()
// Baris akhir function 