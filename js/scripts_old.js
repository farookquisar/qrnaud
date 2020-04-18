var vAudPlayer = document.getElementById('AudPlayer');
var vUrl1="";//http://everyayah.com/data/";
var vUrl2="";//_64kbps/";
var reciter="";
var gAudSrc="";
var vSurah ="";
var vAyaFrm ="";
var vAyaTo ="";
var vSurPad="";//vSurah.padStart(3,'0');
var vAyaFrmPad="";//vAyaFrm.padStart(3,'0');
var vAyaToPad="";//vAyaTo.padStart(3,'0');
var vTotAyas=0;
var gCurAya=0;
var gCurAyaPad="";

btnToggle();


function playSound() {
  if (gCurAya==0) {
    gCurAya=vAyaFrm;

  }
  gCurAyaPad=(gCurAya+"").padStart(3,'0');
  gAudSrc=vUrl1+reciter+vUrl2+vSurPad+gCurAyaPad+".mp3";
  vAudPlayer.src = gAudSrc;//audioUrl.getAttribute('data-url'); //grab the data-url
  //alert(vAudPlayer.loop);
  //alert('gCurAya:'+gCurAya);
  //alert('gCurAyaPad:'+gCurAyaPad);

  vAudPlayer.play();
}

function stopAud() {
  //vAudPlayer.pause();
  //vAudPlayer = document.getElementById('AudPlayer');
  //vAudPlayer.pause();
//vAudPlayer.currentTime = 0;
//vAudPlayer.src="";
vAudPlayer.pause();
vAudPlayer.currentTime = 0;
btnToggle();

}



/* playFullSurah BEG
–––––––––––––––––––––––––––––––––––––––––––––––––– */

function playFullSurah() {
vUrl1="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/mishary-rashid-alafasy/mishary-rashid-alafasy-";
vUrl2="-muslimcentral.com.mp3";
gAudSrc=vUrl1+vSurPad+vUrl2;
//alert(gAudSrc);
alert(gAudSrc);
vAudPlayer.src = gAudSrc;
playSound();
}

/* playFullSurah END
–––––––––––––––––––––––––––––––––––––––––––––––––– */





/* playFullSurah BEG
–––––––––––––––––––––––––––––––––––––––––––––––––– */

function startPlaying() {
  vSurah =document.getElementById("surah").value;
  vAyaFrm =document.getElementById("ayaFrm").value;
  vAyaTo =document.getElementById("ayaTo").value;
  vSurPad=vSurah.padStart(3,'0');
  vAyaFrmPad=vAyaFrm.padStart(3,'0');
  vAyaToPad=vAyaTo.padStart(3,'0');

  if (vAyaFrm!="") {
    preloadAudio();
  }else {
    playFullSurah();
  }


}

/* playFullSurah END
–––––––––––––––––––––––––––––––––––––––––––––––––– */


/* preloadAudio BEG
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function preloadAudio()
{
  //var audioButtons = document.querySelectorAll("button[data-type='audio']") //select all button elements with data-type = audio
  //vAudPlayer = new Audio();

  //vAudPlayer = document.getElementById('AudPlayer');
  vAudPlayer.loop=false;
  //vAudPlayer = document.getElementById('AudPlayer');
  vUrl1="http://everyayah.com/data/";
  vUrl2="_64kbps/";
  reciter="";
  gAudSrc="";
  /*vSurah ="";
  vAyaFrm ="";
  vAyaTo ="";
  vSurPad=vSurah.padStart(3,'0');
  vAyaFrmPad=vAyaFrm.padStart(3,'0');
  vAyaToPad=vAyaTo.padStart(3,'0');*/
  vTotAyas=0;
  gCurAya=0;
  gCurAyaPad="";
  btnToggle();


  vTotAyas=(vAyaTo-vAyaFrm)+1;
  reciter="Alafasy";
  var vCurayaPad;
  if (vAyaFrm==vAyaTo) {
    vAudPlayer.loop=true;
  }else {
    vAudPlayer.loop=false;
  }


  //alert("preloadAudio");
  for (var i = vAyaFrm; i <= vTotAyas; i++)
  {

    vCurayaPad=""+(i+"").padStart(3,'0');
    gAudSrc=vUrl1+reciter+vUrl2+vSurPad+vCurayaPad+".mp3";
    //loop all audio elements
    //audioButtons[i].setAttribute("disabled", true); //disable the element
    //var preloader = new Audio();
    //preloader.addEventListener("loadeddata", alert('loaded'), true); // use bind to link the audio button to the function
    //alert(gAudSrc);
    vAudPlayer.src = gAudSrc;//audioButtons[i].getAttribute("data-url"); //trigger the download
    //vAudPlayer.load();
  }

  playSound();
}



/* addEventListener BEG
–––––––––––––––––––––––––––––––––––––––––––––––––– */
//document.body.addEventListener("load", preloadAudio, true);
vAudPlayer.addEventListener("ended", function () {
   //alert("ended");
   if ( vAyaTo>gCurAya) {
   gCurAya++;
   //alert('if1');

 }else if (vAyaTo==vAyaFrm) {
   //alert('if2');
   //vAudPlayer.loop=true;
 }else if (gCurAya==vAyaTo) {
   gCurAya=vAyaFrm;
 }
  playSound();
});

/* chkVals BEG
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function chkVals() {
  const btns = document.querySelectorAll("button");
  var hasFilled=false;
  vSurah = document.getElementById("surah").value;//document.forms["signup-form"]["surah"].value;
  vAyaFrm = document.getElementById("ayaFrm").value;//document.forms["signup-form"]["ayaFrm"].value;
  vAyaTo = document.getElementById("ayaTo").value;

  if (vSurah == "") {
    hasFilled = false ;
  }else {
    hasFilled = true ;
  }
    hasFilled ? (document.getElementById("playBtn").disabled = false) : (document.getElementById("playBtn").disabled = true);

    //if (vAyaTo=="" && vAyaFrm!="") {
      //alert("if3");
      document.getElementById("ayaTo").value=vAyaFrm;
    //}
}




/* chkAyaTo BEG
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function chkAyaTo(){
  //var vAyaTo = document.getElementById("ayaTo").value;//document.forms["qrnform"]["ayaTo"].value;
  if (vAyaTo == ""){
    document.getElementById("ayaTo").value=document.getElementById("ayaFrm").value;//document.forms["qrnform"]["ayaTo"].value=document.forms["qrnform"]["ayaFrm"].value;
  }
}


/* fOnfocus BEG
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function fOnfocus(xthis) {
  document.getElementById(xthis).value="";
}

function btnToggle() {
  var x = document.getElementById("stpBtnDiv");
  var y = document.getElementById("playBtnDiv");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
