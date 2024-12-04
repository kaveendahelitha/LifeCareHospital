runOnce = false;

function showTab(tabNo){
    console.log(tabNo);

    if(runOnce == true){
        document.getElementsByClassName("select")[0].classList.remove("select");
    }else{
        document.getElementsByClassName("default-ui")[0].classList.add("hide");
    }
    document.getElementById("tab-"+ tabNo).classList.add("select");
    
    if(runOnce==true){
        document.getElementsByClassName("show")[0].classList.add("hide");
        document.getElementsByClassName("show")[0].classList.remove("show");
    }
    document.getElementById("typ-"+tabNo).classList.remove("hide");
    document.getElementById("typ-"+tabNo).classList.add("show");
    
    
    

    runOnce = true;
    
    // if(currentNo==tabNo){
    //     document.getElementsByClassName("select")[0].classList.remove("select");
    //     document.getElementsByClassName("default-ui")[0].classList.remove("hide");
    //     runOnce=false;
    // }
    
    // currentNo=tabNo;
}

///docT_No =0;

//function showTable(docNo){
   // console.log("doc"+docNo);

   // document.getElementById("mask").classList.add("show");
   // document.getElementById("mask").classList.remove("hide");
    
   // document.getElementById("table-doc-"+ docNo).classList.remove("popDown");
   // document.getElementById("table-doc-"+ docNo).classList.add("popUp");

  //  docT_No = docNo;
//}

//function closeTable(){

   // document.getElementById("mask").classList.add("hide");
   // document.getElementById("mask").classList.remove("show");
//
   // document.getElementById("table-doc-"+ docT_No).classList.remove("popUp");
   // document.getElementById("table-doc-"+ docT_No).classList.add("popDown");
//}