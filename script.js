
const decrementBtn = document.getElementsByClassName("decrement-Btn")
const incrementBtn = document.getElementsByClassName("increment-Btn")
const resetBtn = document.getElementsByClassName("Reset-Btn")


// clicking decrement button
decrementBtn[0].addEventListener("click", () => { 
    const displayValue = document.getElementsByClassName("display-value");
    const value = Number(displayValue[0].innerText);
    if(value === 0){
      alert("negative value not allowed");
    }else{
      displayValue[0].innerText = value -1;
    }
});

// for increment button click
incrementBtn[0].addEventListener("click", () => {
  const displayValue = document.getElementsByClassName("display-value")
    const value = Number(displayValue[0].innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue[0].innerText = value + 1;
    }
  });
  
  // for reset button click
  resetBtn[0].addEventListener("click", () => {
    const displayValue = document.getElementsByClassName("display-value")
    displayValue[0].innerText = 0;
  });
