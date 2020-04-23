//jshint esversion:6
//initVals();
//
//function initVals(){
  //var currentFile1 = "http://everyayah.com/data/"; //Global variable to track current file
  var currentFile1 = "https://cdnverse.mp3quran.net/data/"; //Global variable to track current file
  //https://cdnverse.mp3quran.net/data/Alafasy_128kbps/
  var reciterName = ""; //Global variable to track current file
  var audFileExt = ".mp3"; //Global variable to track current file
  var currentFile ="";
  var vSurah ="";
  var vAyaFrm ="";
  var vAyaTo ="";
  var vSurPad="";//vSurah.padStart(3,'0');
  var vAyaFrmPad="";//vAyaFrm.padStart(3,'0');
  var vAyaToPad="";//vAyaTo.padStart(3,'0');
  var vAyaDisp="";
  var showMsg="";
  var showErr="";
  var reLoadReq =true;
  const cStateErr ="-onError";
  const cStateLoading ="-loading";
  const cStatePlaying ="-playing";
  const surahId ="surah";
  const ayaFrmId ="ayaFrm";
  const ayaToId ="ayaTo";
  const playBtnId="playBtn";
  const pauseBtnId="pauseBtn";
  const nextBtnId="nextBtn";
  const prevBtnId ="prevBtn";
  const ayaKursiId="ayaKursi";
  const surahMulkId="surahMulk";
  const surahSajadaId="surahSajada";
  const surahKahfId ="surahKahf";
  var totPlaycnt=0;


  const reciterNameId ="reciterList";
  var playTrck= 0;
  var gProceedFlag=false;
  var tmpSwapNum=0;
  var onFocusVal=1;
  var lastEventTriggerId="";
  var lastTriggerItemVal="";
  var lastEventType="";
  var curEventTriggerId="";
  var curTriggerItemVal="";
  var curEventType="";

  var audios = [];
  var audioAyas=[];
  var cnt=0;
  var vAyaPad;
  //var oAudio;
  var newAudio=null;
  var isCurPlaying=false;
  goodToGo=true;

//All Buttons
  document.getElementById(playBtnId).addEventListener("click", xEventListner);
  document.getElementById(pauseBtnId).addEventListener("click", xEventListner);
  document.getElementById(nextBtnId).addEventListener("click", xEventListner);
  document.getElementById(prevBtnId).addEventListener("click", xEventListner);
  document.getElementById(ayaKursiId).addEventListener("click", xEventListner);
  document.getElementById(surahMulkId).addEventListener("click", xEventListner);
  document.getElementById(surahSajadaId).addEventListener("click", xEventListner);
  document.getElementById(surahKahfId).addEventListener("click", xEventListner);

//All Inputs
  document.getElementById(ayaFrmId).addEventListener("change", xEventListner);
  document.getElementById(ayaFrmId).addEventListener("focus", xEventListner);
  document.getElementById(ayaFrmId).addEventListener("keyup", xEventListner);  //
  document.getElementById(ayaToId).addEventListener("change", xEventListner);
  document.getElementById(ayaToId).addEventListener("focus", xEventListner);
  document.getElementById(ayaToId).addEventListener("keyup", xEventListner);  //
  document.getElementById(surahId).addEventListener("change", xEventListner);
  document.getElementById(surahId).addEventListener("focus", xEventListner);
  document.getElementById(surahId).addEventListener("keyup", xEventListner);
//   input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("myBtn").click();
//   }
// });
  //Select List
  document.getElementById(reciterNameId).addEventListener("change", xEventListner);
  //reciterName=document.getElementById(reciterNameId).value ;


//   var audio = document.createElement('audio');
//   audio.setAttribute('controls', 'controls');
//
//   var ogg = document.createElement('source');
//   ogg.setAttribute('src', 'http://everyayah.com/data/Alafasy_128kbps/001001.mp3');
//   ogg.setAttribute('type', 'audio/mp3');
//
//   var mp3 = document.createElement('source');
//   mp3.setAttribute('src', 'http://everyayah.com/data/Alafasy_128kbps/001002.mp3');
//   mp3.setAttribute('type', 'audio/mp3');
//
//   audio.appendChild(ogg);
//   audio.appendChild(mp3);
// audio.load();
// //audio.play();
// var sound      = document.createElement('audio');
// sound.id       = 'audio-player';
// sound.controls = 'controls';
// sound.src      = 'http://everyayah.com/data/Alafasy_128kbps/001002.mp3';
// sound.type     = 'audio/mpeg';
// document.getElementById('song').appendChild(sound);




function xEventListner(event) {





lastEventTriggerId=curEventTriggerId;
lastTriggerItemVal=curTriggerItemVal;
lastEventType=curEventType;
//var evntTrgt =event.currentTarget;
curEventTriggerId=event.target.id;
curTriggerItemVal=event.target.value;
curEventType=event.type;

  /*
   *********************************************************************************************************************************
                                                              focus Event
   *********************************************************************************************************************************
*/
  if (event.type=="focus"){

      // if (curEventTriggerId==surahId){
      //       if (curTriggerItemVal ){
      //       enableDisableBut();
      //       }else {
      //       }
      // }

      event.target.value="";
      //enableDisableBut();

  }

  /*
   *********************************************************************************************************************************
                                                              change Event
   *********************************************************************************************************************************
*/

  if (event.type=="change"){

    if (curEventTriggerId===reciterNameId){
       stopAudio();
    }

    /*    //------------------------------------------Surah
        if (event.target.id==surahId){
        vSurah=event.target.value ;
        vSurPad=(vSurah+"").padStart(3,'0');


        //------------------------------------------Aya From
        }else if (event.target.id==ayaFrmId){
        vAyaFrm=event.target.value ;
        vAyaTo=document.getElementById(ayaToId).value;
        if (!vAyaTo){
        document.getElementById(ayaToId).value=vAyaFrm;
        vAyaTo=vAyaFrm;
        vAyaToPad=(vAyaTo+"").padStart(3,'0');
        }else if ( vAyaTo<vAyaFrm) {
        tmpSwapNum=vAyaTo;
        document.getElementById(ayaToId).value=vAyaFrm;
        vAyaTo=vAyaFrm;
        document.getElementById(ayaFrmId).value=tmpSwapNum;
        vAyaFrm=tmpSwapNum;
        vAyaToPad=(vAyaTo+"").padStart(3,'0');
        }
        vAyaFrmPad=(vAyaFrm+"").padStart(3,'0');


        //------------------------------------------Aya To
        }else if (event.target.id==ayaToId){
        vAyaTo=event.target.value ;
        vAyaFrm=document.getElementById(ayaFrmId).value;

        if (!vAyaFrm){
        document.getElementById(ayaFrmId).value=vAyaTo;
        vAyaFrm=vAyaTo;
        vAyaFrmPad=(vAyaFrm+"").padStart(3,'0');

        }else if ( vAyaTo<vAyaFrm) {
        tmpSwapNum=vAyaTo;
        document.getElementById(ayaToId).value=vAyaFrm;
        vAyaTo=vAyaFrm;
        document.getElementById(ayaFrmId).value=tmpSwapNum;
        vAyaFrm=tmpSwapNum;
        vAyaFrmPad=(vAyaFrm+"").padStart(3,'0');
        }


        vAyaToPad=(vAyaTo+"").padStart(3,'0');
        //------------------------------------------reciterNameId
        }else if (event.target.id==reciterNameId){
        reciterName=document.getElementById(reciterNameId).value ;
        }

        resetPlayVals();
        stopAudio();
        enableDisableBut();*/

  }

  /*
   *********************************************************************************************************************************
                                                              keyup Event
   *********************************************************************************************************************************
*/

  if (event.type=="keyup"){
      stopAudio();

      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById(playBtnId).click();

      }
      /*enableDisableBut();

      var ayaToVal = document.getElementById(ayaToId).value;
      var ayaFrmVal = document.getElementById(ayaFrmId).value;

      if  ((curEventTriggerId===ayaFrmId) && (!ayaToVal) ||  ayaToVal< ayaFrmVal ){
      setAyaToVal(ayaFrmVal);
    }*/

      /*var ayaToVal = document.getElementById(ayaToId).value;
      var ayaFrmVal = document.getElementById(ayaFrmId).value;
      if ( ((curEventTriggerId===ayaFrmId) && (!ayaToVal))  ||  (lastEventTriggerId===ayaFrmId && lastTriggerItemVal===ayaToVal && lastEventType===")  ) {  //(  (!ayaToVal) || (ayaToVal===ayaFrmVal) )){
      document.getElementById(ayaToId).value=curTriggerItemVal;
    }else if (    (curEventTriggerId===ayaToId && (!ayaFrmVal ))      ||  (lastEventTriggerId===ayaToId && lastTriggerItemVal===ayaFrmVal && lastEventType==="keyup")  ) {
      document.getElementById(ayaFrmId).value=curTriggerItemVal;
      }

*/

  }

  /*
   *********************************************************************************************************************************
                                                              onclick Event
   *********************************************************************************************************************************
*/
  if (event.type=="click"){

        if (curEventTriggerId==="playBtn" ){
        playAudioNew();
        }else if (curEventTriggerId==="pauseBtn"){
        stopAudio();
        }else if (curEventTriggerId==="nextBtn"){
        nextAya();
        }else if (curEventTriggerId==="prevBtn"){
        prevAya();
        }else if (curEventTriggerId==="ayaKursi"){
        playAyaKursi();
        }else if (curEventTriggerId==="surahMulk"){
        playMulk();
        }else if (curEventTriggerId==="surahSajada"){
        playSajada();
        }else if (curEventTriggerId==="surahKahf"){
        playKahf();
        }





  }
  /*
   *********************************************************************************************************************************
                                                              xEventListner End
   *********************************************************************************************************************************
  */
} //xEventListner

function getFormInputs() {
  //vSurah=edocument.getElementById(surahId).value ;
  //vSurPad=(vSurah+"").padStart(3,'0');
  setSurahVal("");

  //vAyaFrm=document.getElementById(ayaFrmId).value ;
  //vAyaFrmPad=(vAyaFrm+"").padStart(3,'0');
  setAyaFrmVal("");

  //vAyaTo=document.getElementById(ayaToId).value;
  //vAyaToPad=(vAyaTo+"").padStart(3,'0');
  setAyaToVal("");

  //reciterName=document.getElementById(reciterNameId).value ;
  setReciterName("");

  //ChkAyaToAndAyaFrm
  chkAyaToAndAyaFrm();

}

/*
 *********************************************************************************************************************************
                                                            xEventListner End
 *********************************************************************************************************************************
*/

function chkAyaToAndAyaFrm() {
      var locAyahFrm =document.getElementById(ayaFrmId).value;
      var locAyahTo =document.getElementById(ayaToId).value;
      var tmpSwap;

      if (locAyahFrm || locAyahTo){
              if (!locAyahFrm){
              setAyaFrmVal(locAyahTo);
              }else if (!locAyahTo) {
              setAyaToVal(locAyahFrm);
              }else if (locAyahFrm>locAyahTo) {
              setAyaFrmVal(locAyahTo);
              setAyaToVal(locAyahFrm);
              }else if (locAyahTo<locAyahFrm) {
              setAyaFrmVal(locAyahTo);
              setAyaToVal(locAyahFrm);
              }

      }

}

  /*
     *******************************************
                  audioEndEventListnerFn
     *******************************************
  */

  function playAudioNew() {

    validateFromVals();


    if (goodToGo){
    getFormInputs();
    resetPlayVals();
    prepareMediaSrc();
    playAud();
    getFocus(pauseBtnId);
    //enableDisableBut();
    }

  }


    function playAud(){
    //audios[cnt].load();
    audios[cnt].play();
    playTrck=cnt;



  // //  if (cnt===1){
  //   if (cnt>0) {
  //   document.getElementById('song').removeChild(audios[cnt-1]) ;
  //   }
  //   document.getElementById('song').appendChild(audios[cnt]) ;
  //   //}

    //document.getElementById("loadingmsg").innerHTML = audios[cnt].src+"";
    audios[playTrck].onerror = function() {
        showUserMsg(cStateErr,"Please check Surah And Aya Number");
    };
    audios[playTrck].onloadstart = function() {
        showUserMsg(cStateLoading,"Loading...");
    };

    // audios[playTrck].onplay = function() {
         //showUserMsg(cStatePlaying,"Playing");
    // };
    audios[playTrck].onplaying = function() {
        //showUserMsg(cStatePlaying, audioAyas[playTrck]+" ("+audios[playTrck].duration.toFixed(2)+" Sec)");
        showUserMsg(cStatePlaying, audioAyas[playTrck]+" ("+ formatSecondsAsTime (audios[playTrck].duration.toFixed(2))+")");

    };

    }

function audioEndEventListnerFn (){
          cnt++;
          if (cnt===audios.length){
                cnt=0;
                totPlaycnt++;
                if (totPlaycnt>100) {
                totPlaycnt=0;
                }else {
                playAud();
                }
          }else { playAud();    }



}

  // var sound      = document.createElement('audio');
  // sound.id       = 'audio-player';
  // sound.controls = 'controls';
  // sound.src      = 'http://everyayah.com/data/Alafasy_128kbps/001002.mp3';
  // sound.type     = 'audio/mpeg';
  // document.getElementById('song').appendChild(sound);
  function prepareMediaSrc(){
    if(newAudio === null ) {

      if (vAyaFrm || vAyaTo) {//Aya Play
      for (var i = vAyaFrm; i <= vAyaTo; i++) {
     newAudio = document.createElement("audio");
     newAudio.controls = 'controls';

     //newAudio.setAttribute("id", "QurAudio1");
     //newAudio.setAttribute('controls', 'controls');
     //audio.appendChild(ogg);
     newAudio.addEventListener("ended", audioEndEventListnerFn
    );


    vAyaPad=(i+"").padStart(3,'0');
    newAudio.src=currentFile1+reciterName+"/"+vSurPad+vAyaPad+audFileExt;
    audios.push(newAudio);
    audioAyas.push(vSurah+":"+i);
    //newAudio.load();




  }}else if (vSurah) {//Surah Play
    if (reciterName=='Alafasy_128kbps'){
    currentFile="https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/mishary-rashid-alafasy/mishary-rashid-alafasy-"+vSurPad+"-muslimcentral.com.mp3";
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
    newAudio = document.createElement("audio");
    //newAudio.controls = 'controls';
    //document.getElementById('audPlayerDiv').appendChild(newAudio);
    newAudio.src=currentFile;
    audios.push(newAudio);
    audioAyas.push(vSurPad);
  }








      }
  }



  function formatSecondsAsTime(secs, format) {
    var hr  = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600))/60);
    var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

    if (min < 10){
      min = "0" + min;
    }
    if (sec < 10){
      sec  = "0" + sec;
    }

    return hr + ':' + min + ':' + sec;
  }


  function validateFromVals(){
  if (isPlaying("T")) {
   goodToGo=false;
 }else {
manageErrMsg();
 }




  }

  function resetPlayVals() {
    //goodToGo=true;
    if (!(lastEventTriggerId===pauseBtnId && curEventTriggerId===playBtnId)) {
      newAudio=null;
      audios = [];
      audioAyas = [];
      cnt=0;
    }

  }

  /*
     *******************************************
                  stopAudio
     *******************************************
  */

  function stopAudio() {

      if(newAudio && audios.length>0  ) {
      audios[playTrck].pause();
    }

      //enableDisableBut();





  }




/*
   *******************************************
                   NextAya
   *******************************************
*/

function nextAya() {
seekForward();
}

/*
   *******************************************
                 prevAya
   *******************************************
*/

function prevAya() {
   seekBackward();


}

function seekBackward() {

  if (vSurah && vAyaFrm && vAyaTo && parseInt(vAyaTo)>parseInt(vAyaFrm) && parseInt(vAyaTo)>1) {
       stopAudio();
       setAyaToVal (parseInt(vAyaTo)-1);// document.getElementById(ayaFrmId).value=parseInt(vAyaFrm)-1;
       //document.getElementById(ayaToId).value=parseInt(vAyaFrm)-1;
       playAudioNew();
  }
}

function seekForward() {
  if (vSurah && vAyaFrm && vAyaTo ) {
       stopAudio();
       setAyaToVal (parseInt(vAyaTo)+1);// document.getElementById(ayaFrmId).value=parseInt(vAyaFrm)-1;
       //document.getElementById(ayaToId).value=parseInt(vAyaFrm)-1;
       playAudioNew();
  }
}


/*
   *******************************************
                      <getFormVals></getFormVals>
   *******************************************
*/
function getFormVals() {
  reciterName=document.getElementById(reciterNameId).value ;
  vSurah=document.getElementById(surahId).value ;
  vAyaFrm=document.getElementById(ayaFrmId).value ;
  vAyaTo=document.getElementById(ayaToId).value ;
  if (vAyaFrm && !vAyaTo) {
  document.getElementById(ayaToId).value=vAyaFrm;
  vAyaTo=document.getElementById(ayaToId).value;

}else if (!vAyaFrm && vAyaTo) {
document.getElementById(ayaFrmId).value=vAyaTo;
vAyaFrm=document.getElementById(ayaFrmId).value;
}else if (vAyaFrm && vAyaTo && vAyaTo<vAyaFrm) {
  document.getElementById(ayaToId).value=vAyaFrm;
  vAyaTo=document.getElementById(ayaToId).value;
}else if (!vSurah) {
  manageErrMsg();
}

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
                   DIRECT PLAY
   *******************************************
*/
function playAyaKursi() {
  stopAudio();
  document.getElementById(surahId).value=2;
  document.getElementById(ayaToId).value=255;
  document.getElementById(ayaFrmId).value=255;
  playAudioNew();
}

function playMulk() {
  stopAudio();
  document.getElementById(surahId).value=67;
  document.getElementById(ayaToId).value="";
  document.getElementById(ayaFrmId).value="";
  // setSurahVal(67) ;
  // setAyaFrmVal("1");
  // setAyaToVal("30");
  playAudioNew();
}

function playKahf() {
  stopAudio();
  document.getElementById(surahId).value=18;
  document.getElementById(ayaToId).value="";
  document.getElementById(ayaFrmId).value="";
  playAudioNew();
}

function playSajada() {
  stopAudio();
  document.getElementById(surahId).value=32;
  document.getElementById(ayaToId).value="";
  document.getElementById(ayaFrmId).value="";
  playAudioNew();
}


function setSurahVal(pVal) {
  var locSurVal;
  if (!pVal) {
  locSurVal=document.getElementById(surahId).value;
}else {
  locSurVal=pVal;
}
  document.getElementById(surahId).value=locSurVal ;
  vSurah=locSurVal;
  vSurPad=(vSurah+"").padStart(3,'0');
}

//setAyaFrmVal
function setAyaFrmVal(pVal) {
  var locAyaFrmVal;

  // var locAyahFrm =document.getElementById(ayaFrmId).value;
  // var locAyahTo =document.getElementById(ayaToId).value;
  // if (locAyahFrm && locAyahTo && locAyahTo<locAyahFrm){
  // document.getElementById(ayaFrmId).value=locAyahTo;
  // document.getElementById(ayaToId).value=locAyahFrm;
  // }

  if (!pVal) {
  locAyaFrmVal=document.getElementById(ayaFrmId).value;
}else {
  locAyaFrmVal=pVal;
}
  document.getElementById(ayaFrmId).value=locAyaFrmVal ;
  vAyaFrm=locAyaFrmVal;
  vAyaFrmPad=(vAyaFrm+"").padStart(3,'0');
}

//setAyaToVal
function setAyaToVal(pVal) {
  var locAyaToVal;
  // var locAyahFrm =document.getElementById(ayaFrmId).value;
  // var locAyahTo =document.getElementById(ayaToId).value;
  // if (locAyahFrm && locAyahTo && locAyahTo<locAyahFrm){
  // document.getElementById(ayaFrmId).value=locAyahTo;
  // document.getElementById(ayaToId).value=locAyahFrm;
  // }



  if (!pVal) {
  locAyaToVal=document.getElementById(ayaToId).value;
  }else {
    locAyaToVal=pVal;
  }
  document.getElementById(ayaToId).value=locAyaToVal ;
  vAyaTo=locAyaToVal;
  vAyaToPad=(vAyaTo+"").padStart(3,'0');
}


function setReciterName() {
  reciterName=document.getElementById(reciterNameId).value ;
}

function getFocus(focusItemId) {
  document.getElementById(focusItemId).focus();
  console.log("focus");
}

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
     document.getElementById(ayaToId).value =vAyaFrm;
  }
}

function checkformVals(){

   manageErrMsg();
}

function manageErrMsg(){
  var locSurahId =document.getElementById(surahId).value;
  document.getElementById("errMsg").innerHTML = "";
  goodToGo=true;


  if    (   (!(locSurahId))        ) {
  document.getElementById("errMsg").innerHTML = "Surah Number Please";
  goodToGo=false;
  }

/*else if    (    ( !(vAyaFrm) && (vAyaTo) )      ) {
   document.getElementById("errMsg").innerHTML = "From Aya Number Please";
   goodToGo=false;
 }else if    (   (vSurah)  &&  (vAyaFrm) && (vAyaTo)     )      {
     document.getElementById("errMsg").innerHTML = "";
     goodToGo=true;
   }*/
}

/*
   *******************************************
   enableDisableBut
   *******************************************
*/


function enableDisableButBkp(){
      if (isPlaying() ) {//Make Play button active when already not playing
      document.getElementById("pauseBtn").disabled = false;
      document.getElementById("playBtn").disabled = true;
      } else {//Make Play button active when already not Puased
      document.getElementById("pauseBtn").disabled = true;
      document.getElementById("playBtn").disabled = false;

      }

      if (vAyaFrm && vAyaTo && vSurah) {
      if (parseInt(vAyaTo)>1){
      document.getElementById("prevBtn").disabled = false; }
      document.getElementById("nextBtn").disabled = false;
      }else {
      document.getElementById("prevBtn").disabled = true;
      document.getElementById("nextBtn").disabled = true;
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
}}

/*
   *******************************************
   showUserMsg
   *******************************************
*/
function showUserMsg(pState,pMsg) {

      if (pState==cStateErr) {
      document.getElementById("loadingmsg").innerHTML = "";
      document.getElementById("playingNowMsg").innerHTML = "";
      document.getElementById("errMsg").innerHTML = ""+pMsg;

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
