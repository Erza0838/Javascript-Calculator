// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id")

let equalButton = document.getElementById("Equal_Button_Id")

const clearDisplayValues = document.getElementById("All_Clear_Button_Id") 

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumberAndOperator = document.getElementById("Display_Output_Calculate")

let displayNumberValue = document.getElementById("Display_Number")

let displayOperatorValue = document.getElementById("Display_Operator")

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

// Variable untuk for of loop
// let arithmeticId
// let idButton
// Baris akhir variable

// Function untuk menampilkan angka
function NumberButtonActived()
{
	for(let idButton of numberIdButton) 
	{
		let ClickIdNumber = idButton.addEventListener("click",() =>			
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
		let clickarithmeticBtn = arithmeticId.addEventListener("click",() =>
		{
			let displayingOperator = displayIdOfNumberAndOperator.append(innerText = arithmeticId.value)
			console.log(arithmeticId.value)
			for(var i = 0, len = operationId.length; i < len; i++)
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
	if(equalButtonClearElements != false || equalButtonClearElements != "")
	{
		console.log("Berhasil")
		switch(displayIdOfNumberAndOperator.childNodes)
		{	
			case !undefined : 
			case window.clickarithmeticBtn : 	
			switch(window.clickarithmeticBtn)
			{
				case "+" :  resultCalculationNumber = Number(displayIdOfNumberAndOperator.firstChild.childNodes) + Number(displayIdOfNumberAndOperator.lastChild.childNodes)
							CalculationResultShow(Number(resultCalculationNumber))
				break
				case "-" :  resultCalculationNumber = Number(displayIdOfNumberAndOperator.firstChild.childNodes) - Number(displayIdOfNumberAndOperator.lastChild.childNodes)
							CalculationResultShow(Number(resultCalculationNumber))
				break
			}
			break
		}
	}
}
NumberAndOperatorButtonsCondition()
// Baris akhir function                                                                                                                                                                                                                                                                                                                                                        