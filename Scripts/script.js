
/*--------------  toggle button --------------*/
const donationBtn = document.getElementById("donation-btn")
const historyBtn = document.getElementById("history-btn")
const historySection = document.getElementById("history-section")
const donationSection = document.getElementById("donation-section")

// reusable function
function btnClickFunction(event){
    if(event.target === historyBtn){
        historySection.classList.remove("hidden");
        historySection.classList.add("flex");
        donationSection.classList.add("hidden");
// bg-light-green hover:bg-hover-green text-black
// border-2 border-slate-300 text-slate-600 hover:bg-slate-200
        donationBtn.classList.add("border-slate-300", "text-slate-600", "hover:bg-slate-200")
        historyBtn.classList.add("bg-light-green", "hover:bg-hover-green", "text-black", "border-hover-green")
        donationBtn.classList.remove("bg-light-green", "hover:bg-hover-green", "text-black", "border-hover-green")
        historyBtn.classList.remove("border-slate-300", "text-slate-600", "hover:bg-slate-200")
    }
    else if(event.target === donationBtn){
        donationSection.classList.remove("hidden");
      donationSection.classList.add("flex");
      historySection.classList.add("hidden");

      historyBtn.classList.add("border-slate-300", "text-slate-600", "hover:bg-slate-200")
        donationBtn.classList.add("bg-light-green", "hover:bg-hover-green", "text-black", "border-hover-green")
        historyBtn.classList.remove("bg-light-green", "hover:bg-hover-green", "text-black", "border-hover-green")
        donationBtn.classList.remove("border-slate-300", "text-slate-600", "hover:bg-slate-200")
    }
    
    // donationBtn.classList.add()
}

donationBtn.addEventListener('click', btnClickFunction)
historyBtn.addEventListener('click', btnClickFunction)




/*--------------  modal section --------------*/

const modalSection = document.getElementById('modal-section')

document.getElementById('modal-close').addEventListener('click', function(){
    modalSection.classList.remove('flex')
    modalSection.classList.add('hidden')
})




/*--------------  donation section --------------*/

const totalAmount = document.getElementById('total-amount')

// amount span
const noakhaliAmount = document.getElementById('noakhali-amount')
const feniAmount = document.getElementById('feni-amount')
const quotaAmount = document.getElementById('quota-amount')

// amount text field
const noakhaliText = document.getElementById('noakhali-text')
const feniText = document.getElementById('feni-text')
const quotaText = document.getElementById('quota-text')

// donation submit button
const noakhaliBtn = document.getElementById('noakhali-btn')
const feniBtn = document.getElementById('feni-btn')
const quotaBtn = document.getElementById('quota-btn')

// donation fund name
const noakhaliFund = document.getElementById('noakhali-fund')
const feniFund = document.getElementById('feni-fund')
const quotaFund = document.getElementById('quota-fund')



// preventing default
noakhaliBtn.addEventListener('click', prevent)
feniBtn.addEventListener('click', prevent)
quotaBtn.addEventListener('click', prevent)

// reusable function
function prevent(event){
    event.preventDefault()
}



// creating an object for each fund
const noakhaliObj = {
    amountSpan: noakhaliAmount,
    textField: noakhaliText,
    fundName: noakhaliFund,
    formBtn: noakhaliBtn,
    clickEvent: function(){
        this.formBtn.addEventListener('click', function(event){
            donateMoney(event, noakhaliObj)
        })
    }
}

const feniObj = {
    amountSpan: feniAmount,
    textField: feniText,
    fundName: feniFund,
    formBtn: feniBtn,
    clickEvent: function(){
        this.formBtn.addEventListener('click', function(event){
            donateMoney(event, feniObj)
        })
    }
}

const quotaObj = {
    amountSpan: quotaAmount,
    textField: quotaText,
    fundName: quotaFund,
    formBtn: quotaBtn,
    clickEvent: function(){
        this.formBtn.addEventListener('click', function(event){
            donateMoney(event, quotaObj)
        })
    }
}

// reusable function
function donateMoney(event, obj){
    // console.log(obj.textField.value)

    let donationAmount = obj.textField.value
    if(donationAmount <= 0 || isNaN(Number(donationAmount))){
        alert('Please Select a Valid Amount!')
        obj.textField.value = ''
        return null
    }
    else if(Number(donationAmount) > Number(totalAmount.innerHTML)){
        alert("You don't have enough money in your account!")
        obj.textField.value = ''
        return null
    }

    obj.amountSpan.innerHTML = parseFloat(obj.amountSpan.innerHTML) + parseFloat(donationAmount)
    totalAmount.innerHTML = parseFloat(totalAmount.innerHTML) - parseFloat(donationAmount)

    const historyDiv = document.getElementById('history-div')
    const newHistory = document.createElement('div')

    newHistory.innerHTML = historyDiv.innerHTML
    newHistory.classList.add(...historyDiv.classList)
    newHistory.classList.remove('hidden')

    const currentDate = new Date()
    newHistory.querySelector('#history-date').innerHTML = currentDate.toString()
    newHistory.querySelector('#history-amount').innerHTML = donationAmount
    newHistory.querySelector('#history-fund').innerHTML = obj.fundName.innerHTML

    document.getElementById('history-alert').classList.add('hidden')

    historySection.appendChild(newHistory)

    modalSection.classList.remove('hidden')
    modalSection.classList.add('flex')

    obj.textField.value = ''
}

// execute addEventListener
noakhaliObj.clickEvent()
feniObj.clickEvent()
quotaObj.clickEvent()