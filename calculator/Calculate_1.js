// Baris code untuk menampilkan angka

// Variable untuk menyimpan id 
let numberIdButton = document.querySelectorAll("#Number_Button_Id");

// Variable untuk menampilkan angka ke monitor
let operationId = document.querySelectorAll("#Operation_Button_Id2");

let displayIdOfNumber = document.getElementById("Display_Output");

for (let idButton of numberIdButton) {

	let ClickIdNumber = idButton.addEventListener("click",
		function Number() {
			let displayingNumber = displayIdOfNumber.append(innerText = idButton.value);

			for (let arithmeticId of operationId) {

				arithmeticId.disabled = false;
			}
		}, false)
	// Baris akhir code

}

// Baris pengkondisian untuk menampilkan operasi matematika
let operationId = document.querySelectorAll("#Operation_Button_Id2");

let arithmeticOperation = document.getElementById("Display_Output");

for (let arithmeticId of operationId) {

	let clickarithmeticBtn = arithmeticId.addEventListener("click",
		function OperationFunction() {

			let displayingOperator = arithmeticOperation.append(innerText = arithmeticId.value);

			let operationId = document.querySelectorAll("#Operation_Button_Id2");

			for (var i = 0, len = operationId.length; i < len; i++) {
				operationId[i].disabled = true;
			}

			// switch (idButton.value) {
			// 	case idButton.value: return
			// 		break
			// }

		}, false)
}




