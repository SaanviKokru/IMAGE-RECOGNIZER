Webcam.attach("#camera");
camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
     image_format:'jpeg',
    jpeg_quality:90
});
function capture_image(){
Webcam.snap(function(Data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+Data_uri+'"/>';
});}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/u5KNAgKC_/model.json',model_loaded);

function model_loaded(){
    {

console.log("model")
    }
}
function identify_image(){
image = document.getElementById('selfie_image');
classifier.classify(image,gotResult);
}
function gotResult(error,result)
{
    if(error){
        console.error();
    }
    else{
        console.log(result)
        document.getElementById("object_value").innerHTML=result[0].label;
        document.getElementById("Accuracy_value").innerHTML=result[0].confidence.toFixed(3);
    }


}