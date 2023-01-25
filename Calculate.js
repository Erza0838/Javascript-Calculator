// Variable untuk menyimpan id angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id2")

// Variable untuk menampilkan angka ke monitor
let displayIdOfValue = document.getElementById("Display_Output")

let displayCalculateResult = document.getElementById("Display_Result")

let equalButtonId = document.getElementById("Equal_Button_Id")

// Baris code untuk menampilkan angka
	for (let idButton of numberIdButton)
	{		
		let ClickIdNumber = idButton.addEventListener("click", 
		function Number(displaying_Number)
		{	
			displaying_Number = displayIdOfValue.append(innerText = idButton.value)

			for(arithmeticId of operationId)
			{
				arithmeticId.disabled = false
			}
		},false)
	}	
// Baris akhir code 

// Code untuk menampilkan operator
for(let arithmeticId of operationId)	
{		
	let clickarithmeticBtn = arithmeticId.addEventListener("click", 
		function OperationFunction(displaying_Operators)
		{	
			displaying_Operators = displayIdOfValue.append(innerText = arithmeticId.value)

			for(var i = 0, len = operationId.length; i < len; i++) 
			{
				operationId[i].disabled = true
			}
		},false)
}
// Baris akhir code 

// Function untuk melakukan perhitungan 
	function CalculateValue(Value_Operator, Value_Number)
	{	
		for(Value_Operator of operationId)
		{	
			let newOperatorsValue = Value_Operator.value
		}

		for(Value_Number of numberIdButton)
		{	
			let newNumbersValue = Number(Value_Number.value)
		}

		switch(window.clickarithmeticBtn)
		{	
			case window.newOperatorsValue += "%" : 
				for(combineNumber of newNumbersValue)
				{
					console.log(combineNumber % combineNumber)
				}
			break
		}
		return window.newNumbersValue
	}

let resultCalculateValue = CalculateValue

	equalButtonId.addEventListener("click", resultCalculateValue,{once: true})