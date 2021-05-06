nameofstudent=[];
function button_click() {
    var name1=document.getElementById("student_series1").value;
    var name2=document.getElementById("student_series2").value;
    var name3=document.getElementById("student_series3").value;
    var name4=document.getElementById("student_series4").value;
    nameofstudent.push(name1);
    nameofstudent.push(name2); 
    nameofstudent.push(name3);
    nameofstudent.push(name4);
    document.getElementById("eashan").innerHTML=nameofstudent;
    document.getElementById("button_sumbit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";

}
function button_click2() {
    nameofstudent.sort();  
    document.getElementById("eashan").innerHTML=nameofstudent;
}