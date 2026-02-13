function tax ()
{
    let a=document.getElementById("a").value;
    if (a>=20000001)
    {
    let tax=140000+(a-1500000)*(30/100);
    let sc=tax*(25/100);
    let result=tax+sc;
    document.getElementById("result").innerHTML="Tax amount Rs. " + result;
    }
    else if (a>=10000001)
    {
    let tax=140000+(a-1500000)*(30/100);
    let sc=tax*(15/100);
    let result=tax+sc;
    document.getElementById("result").innerHTML="Tax amount Rs. " + result;
    } 
    else if (a>=5000001)
    {
    let tax=140000+(a-1500000)*(30/100);
    let sc=tax*(10/100);
    let result=tax+sc;
    document.getElementById("result").innerHTML="Tax amount Rs. " + result;
    }
    else if (a>=1500001)
    {
    let result=140000+(a-1500000)*(30/100);
    document.getElementById("result").innerHTML="Tax amount Rs. " + result;
    }
    else if (a>=1200001)
    {
    let result=80000+(a-1200000)*(20/100);
    document.getElementById("result").innerHTML="Tax amount Rs. " + result;
    }
    else if (a>=1000001)
    {
    let result=50000+(a-1000000)*(15/100);
    document.getElementById("result").innerHTML="Tax amount Rs. " + result;
    }
    else if (a>=700001)
    {
    let result=20000+(a-700000)*(10/100);
    document.getElementById("result").innerHTML="Tax amount Rs. " + result;
    }
    else if (a>=300001)
    {
    let result=a*5/100;
    document.getElementById("result").innerHTML="Tax amount Rs. " + result;
    }
    else if (a>=1)
    {
    result.innerHTML="No tax amount";
    }
    else
    {
    result.innerHTML="Enter the income amount for calculation";
    }
}
