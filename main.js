https://teachablemachine.withgoogle.com/models/E_fvh70uK/
function detectAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier.ml5.soundClassifier(, modelReady);
}

function modelReady(){
    classifier.classify(gotReasults);
}
function gotResults(error, results) {
if(error) {
    console.log(error);
}else{
    console.log(results);
    random_number_r = Math.floor(Math.random()) * 255 + 1;
    random_number_g = Math.floor(Math.random()) * 255 + 1;
    random_number_b = Math.floor(Math.random()) * 255 + 1;

    
}
}