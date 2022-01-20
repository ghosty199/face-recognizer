Webcam.attach("#camera")
camera=document.getElementById("camera")
Webcam.set({
    width:350,height:300, image_format:'png',
    png_quality:90
    
})
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfe_image" src="'+data_uri+'">'
    })
}