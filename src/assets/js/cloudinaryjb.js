
'use strict';

(function() {

  var cl = new cloudinary.Cloudinary({cloud_name: "des7ayfwu", secure: true});


  var kitts = cl.imageTag('re-ve_logos/kitts_u3ywyg_mcahma', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var bpi = cl.imageTag('re-ve_logos/bpifrance_n121ze', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var ibis = cl.imageTag('re-ve_logos/Ibis_Hôtel_logo_2012_uv9vy9', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var mercure = cl.imageTag('re-ve_logos/Mercure_Hotels_Logo_2013.svg_vi8dv1', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var qovoltis = cl.imageTag('re-ve_logos/logo-qovoltis-211-or_ykhlzy', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var kitts = cl.imageTag('re-ve_logos/kitts_u3ywyg_mcahma', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var getaround = cl.imageTag('re-ve_logos/getaround_ysy2ew', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();

  var audi = cl.imageTag('convoicar_website/audi_s5wkiy', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var firststop = cl.imageTag('convoicar_website/firststop_uku9rt', {effect: "colorize", color: "#ffffff", height: 40, quality: 100, crop: "scale", format: "png"}).toHtml();
  var topgarage = cl.imageTag('convoicar_website/topgarage_j5vofs', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var lexus = cl.imageTag('convoicar_website/lexus_pcqxzs', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var mini = cl.imageTag('convoicar_website/mini', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var vwvu = cl.imageTag('convoicar_website/vwvu_c875ni', {effect: "colorize", color: "#ffffff", height: 70, quality: 100, crop: "scale", format: "png"}).toHtml();
  var vw = cl.imageTag('convoicar_website/vw_bt0oor', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var toyota = cl.imageTag('convoicar_website/toyota', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var seat = cl.imageTag('convoicar_website/seat_uoveak', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var fiat = cl.imageTag('convoicar_website/fiat1234', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var jeep = cl.imageTag('convoicar_website/jeep_s8qpih', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var alfaromeo = cl.imageTag('convoicar_website/alfaromeo', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var bmw = cl.imageTag('convoicar_website/bmw2', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  var maserati = cl.imageTag('convoicar_website/maserati', {effect: "colorize", color: "#ffffff", height: 50, quality: 100, crop: "scale", format: "png"}).toHtml();
  

if (document.getElementById("img-band1")!==null) {
document.getElementById("img-band1").innerHTML = audi;
};
if (document.getElementById("img-band2")!==null) {
document.getElementById("img-band2").innerHTML = audi
};
if (document.getElementById("img-band3")!==null) {
document.getElementById("img-band3").innerHTML = getaround;
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
    document.getElementById("img-band9").innerHTML = jeep;
    }
    if (document.getElementById("img-band10")!==null) {
      document.getElementById("img-band10").innerHTML = jeep;
      }
      if (document.getElementById("img-band11")!==null) {
        document.getElementById("img-band11").innerHTML = jeep;
        }

})();
