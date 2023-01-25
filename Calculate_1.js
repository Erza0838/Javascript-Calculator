// Baris code untuk menampilkan angka
let numberIdButton = document.querySelectorAll("#Number_Button_Id")

// Variable untuk menyimpan id oeprator
let operationId = document.querySelectorAll("#Operation_Button_Id2")

let equalButton = document.getElementById("Equal_Button_Id")

// Variable untuk menampilkan angka ke monitor
let displayIdOfNumber = document.getElementById("Display_Output")

// Variable untuk menampilkan hasil perhitungan 
let showFinalResult = document.getElementById("Display_Result")

for (let idButton of numberIdButton) 
{
	let ClickIdNumber = idButton.addEventListener("click",
		function Number() 
		{
			let displayingNumber = displayIdOfNumber.append(innerText = idButton.value)

			let operationId = document.querySelectorAll("#Operation_Button_Id2")
			for (let arithmeticId of operationId) 
			{
				arithmeticId.disabled = false;
			}
		}, false)
}
// Baris akhir code

// Baris pengkondisian untuk menampilkan operasi matematika
let arithmeticOperation = document.getElementById("Display_Output")

for(let arithmeticId of operationId) 
{
	let clickarithmeticBtn = arithmeticId.addEventListener("click",
		function OperationFunction() 
		{
			let displayingOperator = [arithmeticOperation.append(innerText = arithmeticId.value)]

			let operationId = document.querySelectorAll("#Operation_Button_Id2");

			for (var i = 0, len = operationId.length; i < len; i++)
			{
				operationId[i].disabled = true;
			}
		}, false)
}

// Listener untuk menampilkan hasil perhitungan
// let runCalculations = new Promise((IdNumberClicked) =>
// {
// 	let saveNumberAndOperator = displayingNumber += displayingOperator

// 	switch(window.ClickIdNumber && window.clickarithmeticBtn)
// 	{
// 		case numberIdButton.value :
// 		case operationId.value :  
// 		switch(operationId)
// 		{	
// 			case "+" : if(saveNumberAndOperator.length > 0 && isNaN(saveNumberAndOperator))
// 					   {	
// 							let sumValue = +numberIdButton.value + +numberIdButton.value
// 							resolve(IdNumberClicked(sumValue))
// 					   }
// 			break
// 		}
// 		break
// 	}
// })

// runCalculations.then( function(sumValue) 
// {	
// 	equalButton.addEventListener("click",function CalculatedNumber()
// 	{	 
// 		let lastValue = displayingOperator.push(equalButton.value)

// 		return saveNumberAndOperator.innerText = sumValue
// 	},{once:true})
// })

equalButton.addEventListener("click",function CalculatedNumber()
{	 
	let lastValue = displayingOperator.push().innerText = equalButton.value

	return lastValue
},{once:true})
// Baris akhir code