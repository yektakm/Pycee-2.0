
chrome.runtime.sendMessage({todo: "showpageaction"});

function sendButtonMssg1(){
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if (request.todo == "run"){
            var stopButton = document.getElementById("stop-btn");
            stopButton.addEventListener("click", stopTheCode);
        }
    })
}

function sendButtonMssg2(){
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if (request.todo == "run"){
            runButton = document.getElementById("run-btn");
            runButton.addEventListener("click", runTheCode);
        }
    })
}

function runTheCode(){
    console.log("Run button is clicked");

    var rawCodeText = document.getElementsByTagName("body")[0].getElementsByTagName("div")[0]
    .getElementsByClassName("main-content d-flex")[0].getElementsByClassName("container")[0]
    .getElementsByClassName("split")[0].getElementsByTagName("div")[0]
    .getElementsByClassName(" ace_editor ace-tm")[0].getElementsByClassName("ace_scroller")[0]
    .getElementsByClassName("ace_content")[0].getElementsByClassName("ace_layer ace_text-layer")[0].getElementsByClassName("ace_line");

    var i=0;
    var code_text = ``; 
    for (i=0; i<rawCodeText.length; i++){
        code_text += rawCodeText[i].textContent;
        code_text += `\n`;
    }
    
    /*
    var solutionArea = document.getElementById("output")
    var solution_text = "found 3 solutions: ....";
    //console.log(solutionArea);
    solutionArea.innerHTML += `<div>` + solution_text + `</div>`;
    //console.log(solutionArea);
    console.log(code_text);*/

    var solutions = `Generally, it means that you are providing an index for which a list element does not exist.
    E.g, if your list was [1, 3, 5, 7], and you asked for the element at index
    10, you would be well out of bounds and receive an error, as only elements 0
    through 3 exist.`
    
    printSolutions(solutions);

    chrome.runtime.sendMessage({todo: "btn_is_pushed"});
    sendButtonMssg1();
}

function printSolutions(solutions){

    var numberOfSolution = 5;

    document.getElementById("d").style.height = "350px" //change heigth of output box
    var start_text = "found 5 solutions: ....";

    var result = document.createElement("div");   //create a div that contain all results from stackoverflow  
    result.setAttribute("id", "result");   
    document.getElementById("output").appendChild(result);    //add this div to div output
    result.innerHTML += `<div id="d1">` + start_text + `</div>`;      // print the number of result that found   
   
    var List = document.createElement("ul");    //create list for slutions
    List.setAttribute("id", "list"); 
    document.getElementById("result").appendChild(List);


    for(i=0 ; i< numberOfSolution ; i++){    //in this loop create items of list
        var Li = document.createElement("li");
        Li.setAttribute("id", i.toString());              
        document.getElementById("list").appendChild(Li);         
        
        var solutionNumber = document.createElement("div");     // a div for number of solution
        solutionNumber.setAttribute("id", "s"+i.toString());             
        var textnode = document.createTextNode("solution "+(i+1)+" :");         
        solutionNumber.appendChild(textnode); 
        document.getElementById(i.toString()).appendChild(solutionNumber);

        var description = document.createElement("div");    // a div for show solution
        description.setAttribute("id", "d"+i.toString());             
        textnode = document.createTextNode(solutions);         
        description.appendChild(textnode);
        document.getElementById(i.toString()).appendChild(description); 
   
    }
}


function stopTheCode(){
    console.log("Program stopped");
    chrome.runtime.sendMessage({todo: "btn_is_pushed"});
    sendButtonMssg2();
}
/*
//
look 



ireally dont know why it doesnt pushhhhh
        var node = document.getElementsByTagName("body")[0].getElementsByClassName("notebook-vertical")[0]
                        .getElementsByClassName("notebook-horizontal")[0].getElementsByClassName("layout vertical grow")[0]
                        .getElementsByClassName("layout horizontal grow")[0].getElementsByClassName("layout vertical grow notebook-tab-content")[0]
                        .getElementsByClassName("overflow-flexbox-workaround")[0].getElementsByClassName("notebook-container")[0]
                        .getElementsByClassName("notebook-scrolling-horizontal")[0].getElementsByClassName("notebook-content-background")[0]
                        .getElementsByClassName("notebook-content ")[0].getElementsByClassName("notebook-cell-list")[0]
                        .getElementsByClassName("cell code icon-scrolling")[0].getElementsByClassName("main-content")[0]
                        .getElementsByClassName("codecell-input-output")[0].getElementsByClassName("inputarea horizontal layout code")[0]
                        .getElementsByClassName("editor flex lazy-editor")[0].getElementsByClassName("editor flex monaco")[0]
                        .getElementsByClassName("monaco-editor no-user-select showUnused showDeprecated vs")[0].getElementsByClassName("overflow-guard")[0]
                        .getElementsByClassName("monaco-scrollable-element editor-scrollable vs")[0].getElementsByClassName("lines-content monaco-editor-background")[0]
                        .getElementsByClassName("view-lines monaco-mouse-cursor-text")[0].getElementsByClassName("view-line")[0];

        console.log(node)
        var text = document.getElementsByTagName("body")[0].getElementsByClassName("notebook-vertical")[0]
                        .getElementsByClassName("notebook-horizontal")[0].getElementsByClassName("layout vertical grow")[0]
                        .getElementsByClassName("layout horizontal grow")[0].getElementsByClassName("layout vertical grow notebook-tab-content")[0]
                        .getElementsByClassName("overflow-flexbox-workaround")[0].getElementsByClassName("notebook-container")[0]
                        .getElementsByClassName("notebook-scrolling-horizontal")[0].getElementsByClassName("notebook-content-background")[0]
                        .getElementsByClassName("notebook-content ")[0].getElementsByClassName("notebook-cell-list")[0]
                        .getElementsByClassName("cell code icon-scrolling")[0].getElementsByClassName("main-content")[0]
                        .getElementsByClassName("codecell-input-output")[0].getElementsByClassName("output")[0].getElementsByClassName("output-content")[0]
                        .getElementsByClassName("output-iframe-container")[0].getElementsByClassName("output-iframe-sizer").[0]
                        .getElementsByClassName("execute_result output_text").[0]
        console.log(text)
        node.textContent = "<p>This is <strong>my</strong> paragraph.</p>";*/
var runButton = document.getElementById("run-btn");
runButton.addEventListener("click", runTheCode);


