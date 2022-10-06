const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#yourBMI");

calculate.addEventListener("click" , ()=>{
    //BMI = Body Mass Index
    //m = Mass Means Weight (KG)
    //h = Height (CM)
    //Formula = B = m/h²
    
    let bmi = weight.value / (height.value/100) ** 2;
    if(bmi < 18.5){
        yourBMI.innerHTML = `Hasil BMI : <span> ${bmi.toFixed(2)} </span>`+
        "<br>" +
        "Kurang Berat Badan";
    } else if(bmi > 18.5 & bmi <= 24.9){
        yourBMI.innerHTML = `Hasil BMI : <span> ${bmi.toFixed(2)} </span>`+
        "<br>" +
        "Normal";
    } else if(bmi >= 25 && bmi <= 29.9){
        yourBMI.innerHTML = `Hasil BMI : <span> ${bmi.toFixed(2)} </span>`+
        "<br>" +
        "Kelebihan Berat Bedan";
    } else if(bmi > 30){
        yourBMI.innerHTML = `Hasil BMI : <span> ${bmi.toFixed(2)} </span>`+
        "<br>" +
        "Obesitas";
    }
    
    
});