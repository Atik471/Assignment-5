
//  toggle button
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