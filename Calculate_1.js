// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id")

// Variable untuk menyimpan id koma
let dotSymbol = document.getElementById("Dot_Button_Id")

let equalButton = document.getElementById("Equal_Button_Id")

const clearDisplayValues = document.getElementById("All_Clear_Button_Id")

const clearDisplayNumberAndOperator = document.getElementById("Clear_Button_Id")

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumberAndOperator = document.getElementById("Display_Output_Calculate")

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

let clickEventOperatorsAndNumbersWork
// Function untuk menampilkan angka
function NumberButtonActived()
{
	for(let idButton of numberIdButton) 
	{	
		idButton.addEventListener("click",() =>			
		{
			displayIdOfNumberAndOperator.append(innerText = idButton.value)
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
		arithmeticId.addEventListener("click",() =>
		{
			displayIdOfNumberAndOperator.append(innerText = arithmeticId.value)
			for(var i = 0, len = operationId.length; i < len; i++)
			{
				operationId[i].disabled = true
			}
		}, false)
	}
}
// Baris akhir function

// Function untuk menampilkan simbol koma
function DotButtonActived()
{
	dotSymbol.addEventListener("click", () => 
	{
		displayIdOfNumberAndOperator.append(innerText = dotSymbol.value)
	},false)
}
this.DotButtonActived()
// Baris akhir function 

// Function untuk mengaktifkan tombol angka dan operator
function RunOperatorsButtons()
{	
	newValues = [this.NumberButtonActived(), this.OperationButtonActived()]
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
	let allOperatorButtonsCondition = this.RunOperatorsButtons()
	clickEventOperatorsAndNumbersWork = allOperatorButtonsCondition += equalButton.addEventListener("click", () =>
	{	 
		if(displayIdOfNumberAndOperator.innerText.length > 1 || displayIdOfNumberAndOperator.innerText.length == 1)
		{
			displayIdOfNumberAndOperator.style.display = "none"
			switch(isNaN(displayIdOfNumberAndOperator.innerText))
			{	
				case !null : resultCalculationNumber = eval(displayIdOfNumberAndOperator.innerText) 
													  this.CalculationResultShow(resultCalculationNumber)
				break
				case "." : resultCalculationNumber = eval(parseFloat(displayIdOfNumberAndOperator.innerText)) 
							this.CalculationResultShow(resultCalculationNumber)
				break
				default : 
				break
			}
		}
		else if(displayIdOfNumberAndOperator.innerText.length == 0)
		{
			return 
		}
	},false)
}
equalButtonClearElements = this.EqualButtonsConditions()
// Baris akhir function 

// Function untuk menampilkan hasil perhitungan ke layar
function CalculationResultShow(CalculationResult)
{
	showFinalResult.append(innerText = CalculationResult)
	return CalculationResult
}
// Baris akhir function 

// Function untuk menghapus semua angka yang tampil
function ClearAllNumberAndOperator()
{
	clearDisplayValues.addEventListener("click", () => 
	{	
		if(displayIdOfNumberAndOperator.innerText != "" && displayIdOfNumberAndOperator.hasChildNodes())
		{
			while(displayIdOfNumberAndOperator.firstChild)
			{
				displayIdOfNumberAndOperator.removeChild(displayIdOfNumberAndOperator.firstChild)
			}
		}
	},false)		
}
this.ClearAllNumberAndOperator()
// Baris akhir function

// Function untuk menghapus angka yang tampil 
function ClearNumberAndOperator()
{
	clearDisplayNumberAndOperator.addEventListener("click", () => 
	{	
		if(displayIdOfNumberAndOperator.innerText != "" || displayIdOfNumberAndOperator.innerText != null)
		{
			if(displayIdOfNumberAndOperator.hasChildNodes()) 
			{
				displayIdOfNumberAndOperator.removeChild(displayIdOfNumberAndOperator.lastChild)
			}
		}
	},false)		
}
this.ClearNumberAndOperator()
// Baris akhir function

// Function untuk menghapus semua hasil perhitungan yang tampil
function ClearAllFinalResult()
{
	clearDisplayValues.addEventListener("click", () => 
	{	
		if(showFinalResult.innerText != "" && showFinalResult.hasChildNodes())
		{
			while(showFinalResult.firstChild)
			{
				showFinalResult.removeChild(showFinalResult.firstChild)
			}
		}
	},false)		
}
this.ClearAllFinalResult()
// Baris akhir function

// Function untuk menghapus hasil perhitungan yang tampil 
function ClearFinalResult()
{
	clearDisplayNumberAndOperator.addEventListener("click", () => 
	{	
		if(showFinalResult.innerText != "" && showFinalResult.innerText != null)
		{
			if(showFinalResult.hasChildNodes())
			{
				showFinalResult.removeChild(showFinalResult.lastChild)
			}
		}
	},false)		
}
this.ClearFinalResult()
// Baris akhir function