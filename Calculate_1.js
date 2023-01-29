// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id2")

let equalButton = document.getElementById("Equal_Button_Id")

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumberAndOperator = document.getElementById("Display_Output")

// Variable untuk menampilkan hasil perhitungan 
let showFinalResult = document.getElementById("Display_Result")

// Variable untuk mengakses DOM 
let getDomElement = displayIdOfNumberAndOperator.childNodes.nodeValue
// Baris akhir variable

// Function untuk menampilkan angka
function numberButtonActived()
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

// Listener untuk menampilkan simbol sama dengan 
function equalButtonClicked()
{	
	let newValue = new Array([numberButtonActived(),operationButtonActived()])

	let equalButtonInactive = equalButton.disbled += false

	for(let enabledValue of newValue)
	{	
		for(let comparedValue = 0; enabledValue.value > comparedValue.value; enabledValue++)
		{	
			let showNumberAndOperator = getDomElement[enabledValue]
			if(showNumberAndOperator.style.display = "flex" && showNumberAndOperator.innerText.length == 1 || showNumberAndOperator.innerText.length > 1)
			{
				let equalButtonActive
				if(showNumberAndOperator && equalButtonActive != equalButtonInactive)
				{	
					equalButton.addEventListener("click", () =>
					{	 
						displayIdOfNumber.style.display = "none"
					},{once:true})
					return equalButtonActive.removeAttribute("disabled")
				}	
			}
		}
	}
}
equalButtonClicked()
// Baris akhir function 

// Function untuk membuat tombol sama dengan aktiv
// function enabledEachClick()
// {
// 	if(numberButtonActived() && operationButtonActived())
// 	{
// 		let equalButtonAactive = equalButton.disabled
// 		return equalButtonActive += true
// 	}
// }
// if(enabledEachClick())
// {	
// 	equalButton.addEventListener("click", () =>
// 	{	 
// 		displayIdOfNumber.style.display = "none"
// 	},{once:true})
// }
// Baris akhir function

let runCalculations = new Promise((IdNumberClicked) =>
{	
	IdNumberClicked()
})
runCalculations.then((equalButtonClicked) =>
{
	switch(window.arithmeticId)
	{	
		case "+" : let sumValue = showFinalResult.innerText = Number(numberIdButton.value) + Number(numberIdButton.value)
		break
	}
})
// Baris akhir code