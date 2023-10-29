let weight=document.getElementById("weight");
let height=document.getElementById("height");
let weightinputkg=document.getElementById("weightinputkg");
let heightinputmeter=document.getElementById("heightinputmeter");

let result=document.querySelector(".result");
let form=document.querySelector(".form");

weight.addEventListener("change", ()=>{
    if(weight.value=='kg'){
        weightinputkg.style.display="block";
    }

});

height.addEventListener("change", ()=>{
    if(height.value=='meter'){
        heightinputmeter.style.display="block";
    }
});

function calculate(){
    let heightinmt=0;
    let weightinkg=0;

    if(weight.value=='kg'){
        weightinkg=weightinputkg.value;
    }

    if(height.value=='meter'){
        heightinmt=heightinputmeter.value;
    }
    let bmi= weightinkg / (heightinmt * heightinmt);

    let status='';

    if(bmi<18.5)
    {
        status="You need to gain weight";
    }
    else if(bmi>=18.5 && bmi<=24.5)
    {
        status="Your weight is normal";
    }
    else if(bmi>=24.5 && bmi<=29.9)
    {
        status="You are overweight";
    }
    else
    {
        status="You are obese";
    }
    result.style.display="block";
    form.style.display="none";

    result.querySelector(".result h2").innerHTML=`Your BMI is: ${bmi.toFixed(2)}`;

    result.querySelector(".result p").innerHTML=status;
}