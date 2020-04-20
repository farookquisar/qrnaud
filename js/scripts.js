//jshint esversion:6
//initVals();
//
//function initVals(){
  var currentFile1 = "http://everyayah.com/data/"; //Global variable to track current file
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
  const reciterNameId ="reciterList";
  var playTrck= 0;
  var gProceedFlag=false;
  var tmpSwapNum=0;
  var onFocusVal=1;

  var audios = [];
  var cnt=0;
  var vAyaPad;
  //var oAudio;
  var newAudio=null;
  var isCurPlaying=false;
  goodToGo=true;

  document.getElementById(ayaFrmId).addEventListener("change", xEventListner);
  document.getElementById(ayaFrmId).addEventListener("focus", xEventListner);
  document.getElementById(ayaFrmId).addEventListener("keyup", xEventListner);
  //
  document.getElementById(ayaToId).addEventListener("change", xEventListner);
  document.getElementById(ayaToId).addEventListener("focus", xEventListner);
  document.getElementById(ayaToId).addEventListener("keyup", xEventListner);
  //
  document.getElementById(surahId).addEventListener("change", xEventListner);
  document.getElementById(surahId).addEventListener("focus", xEventListner);
  document.getElementById(surahId).addEventListener("keyup", xEventListner);
  //
  document.getElementById(reciterNameId).addEventListener("change", xEventListner);
  reciterName=document.getElementById(reciterNameId).value ;

function xEventListner(event) {
  /*
   *********************************************************************************************************************************
                                                              focus Event
   *********************************************************************************************************************************
*/
  if (event.type=="focus"){


    event.target.value='';

  }

  /*
   *********************************************************************************************************************************
                                                              change Event
   *********************************************************************************************************************************
*/

  if (event.type=="change"){

        //------------------------------------------Surah
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
        console.log("less val");
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
        enableDisableBut();

  }

  /*
   *********************************************************************************************************************************
                                                              keyup Event
   *********************************************************************************************************************************
*/

  if (event.type=="keyup"){
      stopAudio();
      enableDisableBut();

  }

  /*
   *********************************************************************************************************************************
                                                              xEventListner End
   *********************************************************************************************************************************
  */
} //xEventListner





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

      if (vAyaFrm || vAyaTo) {//Aya Play
      for (var i = vAyaFrm; i <= vAyaTo; i++) {
     newAudio = document.createElement("audio");
     newAudio.setAttribute("id", "QurAudio1");
     newAudio.addEventListener("ended", audioEndEventListnerFn
    );


    vAyaPad=(i+"").padStart(3,'0');
    newAudio.src=currentFile1+reciterName+"/"+vSurPad+vAyaPad+audFileExt;
    audios.push(newAudio);




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
    newAudio.src=currentFile;
    audios.push(newAudio);
  }








      }
  }


  function validateFromVals(){
  manageErrMsg();



  }

  function resetPlayVals() {
    goodToGo=true;
    newAudio=null;
    audios = [];
    cnt=0;
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

      enableDisableBut();





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

  if (vSurah && vAyaFrm && vAyaTo && parseInt(vAyaFrm)===parseInt(vAyaTo) && parseInt(vAyaFrm)>1) {
       stopAudio();
       document.getElementById(ayaFrmId).value=parseInt(vAyaFrm)-1;
       document.getElementById(ayaToId).value=parseInt(vAyaFrm)-1;
       playAudioNew();
  }
}

function seekForward() {
  if (vSurah && vAyaFrm && vAyaTo && parseInt(vAyaFrm)===parseInt(vAyaTo) ) {
       stopAudio();
       document.getElementById(ayaFrmId).value=parseInt(vAyaFrm)+1;
       document.getElementById(ayaToId).value=parseInt(vAyaFrm)+1;
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
                      chkVals
   *******************************************
*/

function chkVals() {
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
  document.getElementById(surahId).value=2 ;
  document.getElementById(ayaFrmId).value =255;
  reLoadReq=true;
  playAudioNew();
}

function playMulk() {
  document.getElementById(surahId).value=67;
  document.getElementById(ayaFrmId).value ="";
  reLoadReq=true;
  playAudioNew();
}

function playKahf() {
  document.getElementById(surahId).value=18 ;
  document.getElementById(ayaFrmId).value ="";
  reLoadReq=true;
  playAudioNew();
}

function playSajada() {
  document.getElementById(surahId).value=32 ;
  document.getElementById(ayaFrmId).value ="";
  reLoadReq=true;
  playAudioNew();
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
  document.getElementById("errMsg").innerHTML = "";
  goodToGo=true;

  if    (   (!(vSurah))        ) {
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
   valChanged
   *******************************************
*/

function valChanged() {
 reLoadReq=true;
 stopAudio();
 resetPlayVals();
 enableDisableBut();

}//End valChanged

function enableDisableBut(){
  if (!isPlaying() ) {//Make Play button active when already not playing
  document.getElementById("pauseBtn").disabled = true;
  document.getElementById("playBtn").disabled = false;
} else {//Make Play button active when already not Puased
   document.getElementById("pauseBtn").disabled = false;
   document.getElementById("playBtn").disabled = true;

  }

  if (vAyaFrm && vAyaTo && vSurah) {
  if (parseInt(vAyaFrm)>1){
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
