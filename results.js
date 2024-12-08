/////////// detect.html //////////////

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90

});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takephoto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("snapshotresult").innerHTML = "<img id='camera' src='" + data_uri + "'>"
    });

}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/10O5mb0fr/model.json", modelloaded);

function modelloaded() {
    console.log("modelloaded");
}




function nextQuestion(){
    window.location = "results.html";

}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/apKQuhwHT/model.json",modelloaded);
    
function analyze() {
    img = document.getElementById("camera");
    classifier.classify(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
document.getElementById("object").innerHTML=results[0].label;



    }

}






////////////////////// results.html////////////////



function submit1(){
    localStorage.setItem("symptoms",document.getElementById("symptoms").value); 

}

function submit2(){
    localStorage.setItem("question1",document.getElementById("question1").value); 

}

function submit3(){
    localStorage.setItem("follow",document.getElementById("follow").value); 

}

function submit4(){
    localStorage.setItem("question2",document.getElementById("question2").value); 

}

function submit5(){
    localStorage.setItem("question3",document.getElementById("question3").value); 

}
function submit6(){
    localStorage.setItem("question4",document.getElementById("question4").value); 

}

function submit7(){
    localStorage.setItem("question5",document.getElementById("question5").value); 

}

function submit8(){
    localStorage.setItem("question6",document.getElementById("question6").value); 

}

function submit9(){
    localStorage.setItem("question7",document.getElementById("question7").value); 

}
function submit10(){
    localStorage.setItem("question8",document.getElementById("question8").value); 

}

function next(){
    window.location = "final.html";

}


////// final.html ///////////////////


function findResults(){
  

 // Prompt the user for input



   // Check if the value exists and display it
   if (localStorage.getItem("symptoms")=="Diameter larger than 6 mm "|| "Asymmetry" ||" Border irregularity "||"Variable color, including a colored halo around it") {
       document.getElementById(a).innerHTML= userInput;
     } 


}