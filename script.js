var initialPrice = document.querySelector('#initial-price'); 
var quantityStocks = document.querySelector('#quantity-stocks');
var currentPrice = document.querySelector('#current-price');
var submitButton = document.querySelector('#submit-btn');
var outputE = document.querySelector('#output'); 

// function calculateProfitandLoss(){
//     var initial = initialPrice.value; 
//     var final = currentPrice.value; 

//     var result = final-initial; 
    
//     if(result>0){
//         var profit = (result/initial)*100;
//         outputE.innerText = 'you have made a profit of ' + profit +'%'; 
        
//     }
//     else{
//         var loss = (result/initial)*100; 
//         outputE.innerText = 'you have made a loss of ' + loss +'%'

//     }
    
    
// }
//part 1 write the logic of the function 
function calculateProfitandLoss(initial, quantity,current){
    if(initial>current){
        var loss = (initial-current); 
        var totalLoss = (initial-current)*quantity; 
        var lossPercentage = (loss/initial)*100; 
        showMessage(`you have made a total loss of ${totalLoss} and the loss in percentage is ${lossPercentage} %`);
    }
    else if(current > initial){
        var profit = (current-initial); 
        var totalProft = profit*quantity; 
        var profitPercentage = (profit/initial)*100; 
        showMessage(`you have made a total profit of ${totalProft} and the profit in percentage is ${profitPercentage} %`);
    }
    else{
        showMessage(`you have made no loss or profit`);
    }

}
//PART-2 take all inputs from submit handler
function submitHandler(){
    var ip = Number(initialPrice.value);
    var cp = Number(currentPrice.value);
    var qty = Number(quantityStocks.value);

    calculateProfitandLoss(ip,qty,cp); 

}

//part 3 show message -- instead of console.log while prac or doing ouput.innertext every time call this function
function showMessage(message){
    outputE.innerText = message; 
}

submitButton.addEventListener("click", submitHandler)