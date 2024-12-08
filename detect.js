




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