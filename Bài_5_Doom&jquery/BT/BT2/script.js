var amountInput= document.querySelector(".money")
var annualInput= document.querySelector(".interest")
var repaymentInput= document.querySelector(".repayment")

var monthlyPayment= document.getElementById("permonth")
var totalPayment= document.getElementById("sum")
var totalInterest= document.getElementById("result")
var calculateButton = document.querySelector(".calculate")

var amount,annual, payments, monthly, x

calculateButton.addEventListener("click", ()=>{
 

    amount= parseFloat(amountInput.value)
    annual= parseFloat(annualInput.value)/100/12
    payments= parseFloat(repaymentInput.value)*12
    x = Math.pow(1 + annual, payments)

    monthly = (amount*x*annual)/(x-1)

    monthlyPayment.value= monthly.toFixed(2)
    totalPayment.value= (monthly * payments).toFixed(2)
    totalInterest.value= ((monthly*payments)-amount).toFixed(2)
}
)
