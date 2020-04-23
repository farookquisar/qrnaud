var currentFile1 = "http://www.everyayah.com/data/"; //Global variable to track current file
var reciterName = ""; //Global variable to track current file
var currentFile3 = ".mp3"; //Global variable to track current file
var currentFile ="";
//var vAudPlayer = document.getElementById('QurAudio');
var oAudio = document.getElementById('QurAudio');
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
var vAyaDisp="";
var showMsg="";
var showErr=""
var reLoadReq =true;
//alert('init');


/*
   *******************************************
                   playAudio
   *******************************************
*/
function playAudio() {

  prepareAudioSource();




reciterName=document.getElementById("reciterList").value ;
vSurah=document.getElementById("surah").value ;
vAyaFrm=document.getElementById("ayaFrm").value ;
vSurPad=(vSurah+"").padStart(3,'0');
vAyaFrmPad=(vAyaFrm+"").padStart(3,'0');

if (vSurah!="" && vAyaFrm==""){

    if (reciterName=='Alafasy_64kbps'){
      currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/mishary-rashid-alafasy/mishary-rashid-alafasy-"+vSurPad+"-muslimcentral.com.mp3";;


    }else if (reciterName=='Abdul_Basit_Mujawwad_128kbps') {
     currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/abdul-basit-mujawwad/abdul-basit-mujawwad-"+vSurPad+".mp3";

    }else if (reciterName=='Ghamadi_40kbps') {
     currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/saad-al-ghamdi/saad-al-ghamdi-surah-"+vSurPad+".mp3";

    }else if (reciterName=='Minshawy_Mujawwad_192kbps') {
     currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/muhammad-siddiq-minshawi/muhammad-siddiq-al-minshawi-surah-"+vSurPad+".mp3";

    }else if (reciterName=='khalefa_al_tunaiji_64kbps') {
     currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/khalifa-al-tunaiji/khalifa-al-tunaiji-"+vSurPad+"-muslimcentral.com.mp3";

    }else if (reciterName=='Husary_128kbps_Mujawwad') {
     currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/mahmoud-khalil-al-husary/mahmoud-khalil-al-husary-surah-"+vSurPad+".mp3";

    }else if (reciterName=='Abdurrahmaan_As-Sudais_192kbps') {
     currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/abdul-rahman-al-sudais/abdul-rahman-al-sudais-surah-"+vSurPad+"_64kb.mp3";

    }else if (reciterName=='Saood_ash-Shuraym_128kbps') {
     currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/saud-al-shuraim/saud-al-shuraim-"+vSurPad+".mp3";
    }

}else if (vSurah==""){

// alert('Enter Surah Number');
document.getElementById("loadingmsg").innerHTML = "";
document.getElementById("errMsg").innerHTML = "Error! Enter Surah Number";

}else {
  currentFile=currentFile1+reciterName+"/"+vSurPad+vAyaFrmPad+currentFile3;
}


console.log(currentFile);



if (window.HTMLAudioElement && vSurah !="") {
try {

  document.getElementById("nextBtn").disabled = false;
  document.getElementById("pauseBtn").disabled = false;
  document.getElementById("prevBtn").disabled = false;
//oAudio = document.getElementById('QurAudio');
//var btn = document.getElementById('playBtn');


// if(!oAudio.paused) {
// console.log('Not paused');
//
// }
// //oAudio.loop=true;
// //oAudio.controls = true;
// console.log(oAudio.currentTime);
// if (oAudio.currentTime ==0) {
// oAudio.src=currentFile;
// }

if (reLoadReq) {
oAudio.src=currentFile;
reLoadReq=false;
}

oAudio.play();
//oAudio.play();



// var audioURL = document.getElementById('mylist'); //Skip loading if current file hasn't changed.
// if (audioURL.value !== currentFile) {
// oAudio.src = audioURL.value;
// currentFile = audioURL.value;
// }// Tests the paused attribute and set state.
//FRKCOMMENT-B

// if (btn.textContent=='Play') {
// oAudio.play();
// btn.textContent = "Stop";
// }
// else if (btn.textContent=='Stop') {
//   oAudio.pause();
//   oAudio.currentTime = 0;
// btn.textContent = "Play";
// }
// else {
// oAudio.play();
// btn.textContent = "Stop";
// }


}

catch (err) {
// Fail silently but show in F12 developer tools console
alert('Check Surah/Aya Number');
if(window.console && console.error("Error1:" + e));
alert('Check Surah/Aya Number');
}

}}

/*
   *******************************************
                   NextAya
   *******************************************
*/

function nextAya() {

  // document.getElementById("ayaFrm").value = parseInt(vAyaFrm) + 1;
  // playAudio();

  try {
    document.getElementById("ayaFrm").value = parseInt(vAyaFrm) + 1;
    playAudio();
  } catch (e) {
     alert('Errorr');
  } finally {

  }

}

/*
   *******************************************
                 prevAya
   *******************************************
*/

function prevAya() {
  var curAya =0;
  curAya=parseInt(vAyaFrm) - 1;
  if (curAya<1) {
   curAya=1;
  }

  document.getElementById("ayaFrm").value = curAya;


  playAudio();

}

/*
   *******************************************
                stopAudio
   *******************************************
*/

function stopAudio() {

  oAudio = document.getElementById('QurAudio');
oAudio.pause();
//oAudio.currentTime = 0;

}
/*
   *******************************************
                      chkVals
   *******************************************
*/

function chkVals() {
  vSurah=document.getElementById("surah").value ;


if (vSurah == "") {
hasFilled = false ;
}else {
  hasFilled = true ;
}
  hasFilled ? (document.getElementById("playBtn").disabled = false) : (document.getElementById("playBtn").disabled = true);


}

/*
   *******************************************
                   DIRECT PLAY
   *******************************************
*/
function playAyaKursi() {
  document.getElementById("surah").value=2 ;
  document.getElementById("ayaFrm").value =255;
  reLoadReq=true;
  playAudio();
}

function playMulk() {
  document.getElementById("surah").value=67;
  document.getElementById("ayaFrm").value ="";
  reLoadReq=true;
  playAudio();
}

function playKahf() {
  document.getElementById("surah").value=18 ;
  document.getElementById("ayaFrm").value ="";
  reLoadReq=true;
  playAudio();
}

function playSajada() {
  document.getElementById("surah").value=32 ;
  document.getElementById("ayaFrm").value ="";
  reLoadReq=true;
  playAudio();
}


/*
   *******************************************
            Events (Error, Load, Loaded)
   *******************************************
*/
oAudio.onerror = function() {
    //alert("Error! Please check Surah And Aya Number");
    showErr="Error! Please check Surah And Aya Number";
    showMsg="";



    document.getElementById("loadingmsg").innerHTML = showMsg;
    document.getElementById("errMsg").innerHTML = showErr;

};

oAudio.onloadstart = function() {
  document.getElementById("loadingmsg").innerHTML = "Loading...";
  document.getElementById("errMsg").innerHTML = "";
};

oAudio.onloadeddata = function() {
vAyaFrm
if (vAyaFrm != "") {
vAyaDisp=':'+vAyaFrm;
showMsg=vSurah+vAyaDisp;
}else {
  showMsg="Surah: "+vSurah;
}


  document.getElementById("loadingmsg").innerHTML = showMsg;
};



/*
   *******************************************
   COMMENT
   *******************************************
*/

function valChanged() {
 reLoadReq=true;
}

/*
   *******************************************
   COMMENT
   *******************************************
*/

/*
   *******************************************
   COMMENT
   *******************************************
*/
