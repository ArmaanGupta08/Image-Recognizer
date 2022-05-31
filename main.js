Webcam.set({
    width: 590,
    height: 440,
    image_formal: "png",
    png_quality: 1080
});

Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML="<img id='image_captured' src='"+data_uri+"'>"
    })
}
console.log("ml5version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2fBJj3wVg/model.json",modelloaded);

function modelloaded(){
    console.log("model est loaded")
}

function identify(){
    img=document.getElementById("image_captured")
    classifier.classify(img,got_result)
}

function got_result(error,result){
    if (error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label
        var accuracy= (result[0].confidence * 100).toFixed(0) + "%"
        document.getElementById("object_accuracy").innerHTML=accuracy
    }
}

