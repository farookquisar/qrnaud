//jshint esversion:6
//initVals();

//function initVals(){
console.log("Start Doc");
  var currentFile1 = "http://everyayah.com/data/"; //Global variable to track current file
  var reciterName = ""; //Global variable to track current file
  var audFileExt = ".mp3"; //Global variable to track current file
  var currentFile ="";
  //var vAudPlayer = document.getElementById('QurAudio');
  //var oAudio = document.getElementById('QurAudio');
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
  var showErr="";
  var reLoadReq =true;
  const cStateErr ="-onError";
  const cStateLoading ="-loading";
  const cStatePlaying ="-playing";
  var playTrck= 0;
  var gProceedFlag=false;

  var audios = [];
  var cnt=0;
  var vAyaPad;
  //var oAudio;
  var newAudio=null;
  var isCurPlaying=false;


  /*newAudio.onerror = function() {

      showUserMsg(cStateErr,"Please check Surah And Aya Number");
  };

  //onloadstart
  newAudio.onloadstart = function() {
      showUserMsg(cStateLoading,"Loading...");
  };

  //onplaying
  newAudio.onplaying = function() {

      if (vAyaFrm != "" && vSurah!="") {
      vAyaDisp=':'+vAyaFrm;
      showMsg=vSurah+vAyaDisp;

      }else if (vSurah!="") {
      showMsg="Surah: "+vSurah;

      }else {
      showMsg="";
      }
      showUserMsg(cStatePlaying,showMsg);
  };
//}
*/
//alert('init');


/*
   *******************************************
                   playAudio
   *******************************************
*/
/*function playAudio() {
  //location.reload();
  location = location.href;
  oAudio = document.getElementById('QurAudio');
  prepareAudioSource();
  oAudio.play();
}*/

function playAudioNew() {
  validateFromVals();

  if (goodToGo){
  prepareMediaSrc();
  playAud();
  enableDisableBut();
  }
  //document.getElementsByTagName("audio").remove();

  //document.getElementById("pauseBtn").disabled = false;
  //document.getElementById("playBtn").disabled = true;




// if(newAudio === null ) {
//   for (var i = vAyaFrm; i <= vAyaTo; i++) {
//  newAudio = document.createElement("audio");
//  newAudio.setAttribute("id", "QurAudio1");
//  newAudio.addEventListener("ended", audioEndEventListnerFn
// );
//
//
// vAyaPad=(i+"").padStart(3,'0');
// //newAudio.src = "http://www.everyayah.com/data/Alafasy_128kbps/"+vSurPad+vAyaPad+".mp3";
// console.log(newAudio.src);
// newAudio.src=currentFile1+reciterName+"/"+vSurPad+vAyaPad+audFileExt;
// audios.push(newAudio);
//
//
//
//   }
//   }


}


  function playAud(){
  audios[cnt].play();
  playTrck=cnt;
  document.getElementById("loadingmsg").innerHTML = audios[cnt].src+"";
  }

  /*
     *******************************************
                  audioEndEventListnerFn
     *******************************************
  */

  function audioEndEventListnerFn (){
    cnt++;
    if (cnt===audios.length){
      cnt=0;
    }
       playAud();
  }


  function prepareMediaSrc(){
    if(newAudio === null ) {
      for (var i = vAyaFrm; i <= vAyaTo; i++) {
     newAudio = document.createElement("audio");
     newAudio.setAttribute("id", "QurAudio1");
     newAudio.addEventListener("ended", audioEndEventListnerFn
    );


    vAyaPad=(i+"").padStart(3,'0');
    //newAudio.src = "http://www.everyayah.com/data/Alafasy_128kbps/"+vSurPad+vAyaPad+".mp3";
    console.log(newAudio.src);
    newAudio.src=currentFile1+reciterName+"/"+vSurPad+vAyaPad+audFileExt;
    audios.push(newAudio);



      }
      }
  }


  function validateFromVals(){

  }

  /*
     *******************************************
                  stopAudio
     *******************************************
  */

  function stopAudio() {

      if(newAudio !== null && audios.length>0  ) {
      audios[playTrck].pause();
    }

      enableDisableBut();





  }




/*
   *******************************************
                   NextAya
   *******************************************
*/

function nextAya() {
stopAudio();
}

/*
   *******************************************
                 prevAya
   *******************************************
*/

function prevAya() {
if (vAyaFrm!="") {


    var curAya =0;
    curAya=parseInt(vAyaFrm) - 1;
    if (curAya<1) {
    curAya=1;
    }
    document.getElementById("ayaFrm").value = curAya;

    reLoadReq=true;
    playAudio();

}}


/*
   *******************************************
                      getFormVals
   *******************************************
*/
function getFormVals() {
  reciterName=document.getElementById("reciterList").value ;
  vSurah=document.getElementById("surah").value ;
  vAyaFrm=document.getElementById("ayaFrm").value ;
  vAyaTo=document.getElementById("ayaTo").value ;
  vSurPad=(vSurah+"").padStart(3,'0');
  vAyaFrmPad=(vAyaFrm+"").padStart(3,'0');
  vAyaToPad=(vAyaTo+"").padStart(3,'0');
}

/*
   *******************************************
                      getSurahVal
   *******************************************
*/



/*
   *******************************************
                      chkVals
   *******************************************
*/

function chkVals() {
  //vSurah=document.getElementById("surah").value ;
getSurahVal();

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
//onError


/*
   *******************************************
   chkAutoPlay
   *******************************************
*/

function chkAutoPlay(){

  if (allFormVals() && vAyaFrm!==vAyaTo){
     playAudioNew();
  }
}

function allFormVals(){
  if (   (vSurah) && (vAyaFrm) && (vAyaTo)  ){
    return true;
  }else{
    return false;
  }
}

function defaultAyaTo(){
  if (   (vSurah) && (vAyaFrm) && !(vAyaTo)  ){
     document.getElementById("ayaTo").value =vAyaFrm;
  }
}

function checkformVals(){

   manageErrMsg();
}

function manageErrMsg(){
  if    (   (!(vSurah))  && ( (vAyaFrm) || (vAyaTo) )      ) {
  document.getElementById("errMsg").innerHTML = "Surah Number Please";

}else if    (    ( !(vAyaFrm) && (vAyaTo) )      ) {
   document.getElementById("errMsg").innerHTML = "From Aya Number Please";
 }else if    (   (vSurah)  &&  (vAyaFrm) && (vAyaTo)     )      {
     document.getElementById("errMsg").innerHTML = "";
    }
}

/*
   *******************************************
   valChanged
   *******************************************
*/

function valChanged() {
 reLoadReq=true;
 getFormVals();
 stopAudio();
 defaultAyaTo();
 checkformVals();
 //chkAutoPlay();
 newAudio=null;
 audios = [];
 cnt=0;

enableDisableBut();

}//End valChanged

function enableDisableBut(){
  getFormVals();
  //isPlaying();
  if (!isPlaying() ) {//(vSurah !==null && vSurah !==""){
  document.getElementById("pauseBtn").disabled = true;
  document.getElementById("playBtn").disabled = false;
} else {
   document.getElementById("pauseBtn").disabled = false;
   document.getElementById("playBtn").disabled = true;
  }
}

/*
   *******************************************
   isPlaying
   *******************************************
*/
function isPlaying(audelem) {
if (audios[playTrck]){
   return !audios[playTrck].paused;
  // if (!audios[playTrck].paused){
    //isCurPlaying=true;
  // }
}}

/*
   *******************************************
   valChanged
   *******************************************
*/
function showUserMsg(pState,pMsg) {

      if (pState==cStateErr) {
      document.getElementById("loadingmsg").innerHTML = "";
      document.getElementById("playingNowMsg").innerHTML = "";
      document.getElementById("errMsg").innerHTML = "Error! "+pMsg;

      }else if (pState==cStateLoading) {
      document.getElementById("loadingmsg").innerHTML = pMsg;
      document.getElementById("playingNowMsg").innerHTML = "";
      document.getElementById("errMsg").innerHTML = "";

      }else if (pState==cStatePlaying) {
      document.getElementById("loadingmsg").innerHTML = "";
      document.getElementById("playingNowMsg").innerHTML = pMsg;
      document.getElementById("errMsg").innerHTML = "";

      }

}

/*
   *******************************************
   COMMENT
   *******************************************
*/
