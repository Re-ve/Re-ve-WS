
'use strict';

(function() {

  var cl = new cloudinary.Cloudinary({cloud_name: "des7ayfwu", secure: true});


  var kitts = cl.imageTag('re-ve_logos/kitts_u3ywyg_mcahma', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var bpi = cl.imageTag('re-ve_logos/bpifrance_n121ze', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var ibis = cl.imageTag('re-ve_logos/Ibis_Hôtel_logo_2012_uv9vy9', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var mercure = cl.imageTag('re-ve_logos/Mercure_Hotels_Logo_2013.svg_vi8dv1', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var qovoltis = cl.imageTag('re-ve_logos/logo-yespark_bhvvkm', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var kitts = cl.imageTag('re-ve_logos/kitts_u3ywyg_mcahma', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var getaround = cl.imageTag('re-ve_logos/getaround_ysy2ew', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var avere = cl.imageTag('re-ve_logos/arton7632_psypik', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var nissan = cl.imageTag('re-ve_logos/nissan', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var ouicar = cl.imageTag('re-ve_logos/ouicar', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var convoicar = cl.imageTag('re-ve_logos/convoicar', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();

if (document.getElementById("img-band1")!==null) {
document.getElementById("img-band1").innerHTML = getaround;
};
if (document.getElementById("img-band2")!==null) {
document.getElementById("img-band2").innerHTML = convoicar
};
if (document.getElementById("img-band3")!==null) {
document.getElementById("img-band3").innerHTML = ouicar;
};
if (document.getElementById("img-band4")!==null) {
document.getElementById("img-band4").innerHTML = ibis;
};
if (document.getElementById("img-band5")!==null) {
document.getElementById("img-band5").innerHTML = kitts;
};
if (document.getElementById("img-band6")!==null) {
document.getElementById("img-band6").innerHTML = qovoltis;
};
if (document.getElementById("img-band7")!==null) {
document.getElementById("img-band7").innerHTML = mercure;
};
if (document.getElementById("img-band8")!==null) {
  document.getElementById("img-band8").innerHTML = getaround;
  }
  if (document.getElementById("img-band9")!==null) {
    document.getElementById("img-band9").innerHTML = avere;
    }
    if (document.getElementById("img-band10")!==null) {
      document.getElementById("img-band10").innerHTML = convoicar;
      }
      if (document.getElementById("img-band11")!==null) {
        document.getElementById("img-band11").innerHTML = nissan;
        }

})();
