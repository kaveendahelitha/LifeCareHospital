var docTypeID;
var runOnce = false;

function updateDocType(){

    var select1 = document.getElementById('docType');
    // var selectDocType = select.options[select.selectedIndex].text;
    var selectDocType = select1.options[select1.selectedIndex].value;
    console.log(selectDocType);

    document.getElementsByClassName("show")[0].classList.add("hide");
    document.getElementsByClassName("show")[0].classList.remove("show");
    document.getElementById("list-"+selectDocType).classList.remove("hide");
    document.getElementById("list-"+selectDocType).classList.add("show");
    
    docTypeID = "ls-"+selectDocType;
    runOnce = true;
}

function updateTimeTable(){
    if (runOnce == false){
        docTypeID = "ls-docType-1";
    }
    console.log(docTypeID);
    var select2 = document.getElementById(docTypeID);
    var selectDoc = select2.options[select2.selectedIndex].value;
    console.log(selectDoc);

    document.getElementsByClassName("show")[1].classList.add("hide");
    document.getElementsByClassName("show")[1].classList.remove("show");
    document.getElementById("table-"+selectDoc).classList.remove("hide");
    document.getElementById("table-"+selectDoc).classList.add("show");
       
}

var n=0;
var a=0;
var t=0;
function checkForm(){
  
    let name = document.forms["eChanell"]["pName"].value;
    let age = document.forms["eChanell"]["age"].value;
    let tel = document.forms["eChanell"]["telNo"].value;
    if(name == "" && n==0){
        document.getElementById("pName").classList.add("error");
        n=1;
    }else if(name != "" && n==1){
        document.getElementById("pName").classList.remove("error");    
        n=0;
    }

    //age
    if(age == "" && a==0){
        document.getElementById("age").classList.add("error");
        a=1;
    }else if(age !="" && a==0 && (age<1 || age>100) ){
        document.getElementById("age").classList.add("error");
        a=1;
    }
    else if(age != "" && a==1 && age<=100 && age>=1){
        document.getElementById("age").classList.remove("error");    
        a=0;
    }

    //tell Number
    if(tel == "" && t==0){
        document.getElementById("telNo").classList.add("error");
        t=1;
    }else if(tel !="" && t==0 && tel.length !=10){
        document.getElementById("telNo").classList.add("error");
        t=1;
    }
    else if(tel != "" && t==1 && tel.length==10){
        document.getElementById("telNo").classList.remove("error");    
        t=0;
    }
    
    if(n==1 || a==1 || t==1){
        return false;
    }else{
        return true;
    }
}