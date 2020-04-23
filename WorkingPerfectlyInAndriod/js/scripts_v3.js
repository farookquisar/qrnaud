//jshint esversion:6
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
var parent = document.createElement("div");
var parent1 = document.createElement("div");
parent.appendChild(parent1);

//alert('init');


/*
   *******************************************
                   playAudio
   *******************************************
*/
function playAudio() {
  //location.reload();
  location = location.href;
  oAudio = document.getElementById('QurAudio');
  prepareAudioSource();
  oAudio.play();
}

function playAudioNew() {
  //document.getElementsByTagName("audio").remove();
  document.getElementById("pauseBtn").disabled = false;
  document.getElementById("playBtn").disabled = true;

//   var element = document.getElementsByTagName("audio"), index;
//   alert(element.length);
// for (index = element.length - 1; index >= 0; index--) {
//     element[index].parentNode.removeChild(element[index]);
// }

//alert(document.getElementById("QurAudio1"));
//alert(document.getElementsByTagName("audio").length);



if(newAudio === null ) {
  // alert("not null");


  for (var i = vAyaFrm; i <= vAyaTo; i++) {
    //const origAudio = document.getElementById("QurAudio");
     //newAudio = oAudio.cloneNode()
//oAudio = document.getElementById('QurAudio');

 newAudio = document.createElement("audio");


 newAudio.setAttribute("id", "QurAudio1");
 newAudio.addEventListener("ended", audioEndEventListnerFn
 //{
//   // cnt++;
//   // if (cnt===audios.length){
//   //   cnt=0;
//   // }
//   //    playAud();
//      //document.body.appendChild(newAudio);
//     //  newAudio.setAttribute("controls", "controls");
//      // document.body.appendChild(newAudio);
//      // newAudio.play();
// }
);


vAyaPad=(i+"").padStart(3,'0');
newAudio.src = "http://www.everyayah.com/data/Alafasy_128kbps/"+vSurPad+vAyaPad+".mp3";
audios.push(newAudio);
//alert(oAudio.src);


  }
  }
  // newAudio.setAttribute("controls", "controls");
  // document.body.appendChild(newAudio);
  // newAudio.play();
 playAud();
}


  function playAud(){
  //  alert(audios.length);
  audios[cnt].play();
  playTrck=cnt;
  //alert(audios[cnt].currentSrc);
  //<img src="http://www.everyayah.com/data/QuranText/100_3.gif" alt="description" height="48" width="100" />

  document.getElementById("loadingmsg").innerHTML = audios[cnt].src+"";
  // cnt++;
  // if (cnt===audios.length){
  //   cnt=0;
  // }
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

  /*
     *******************************************
                  stopAudio
     *******************************************
  */

  function stopAudio() {
    //alert(cnt);
    //pauseTrck=
      //oAudio = document.getElementById('QurAudio');
      //newAudio.pause();
      //newAudio.currentTime = 0;
      //alert(audios[cnt].currentSrc);
      //cnt--;
      //audios[cnt].currentTime = 0;
      if(newAudio !== null && audios.length>0  ) {
      audios[playTrck].pause();
    }
    //  cnt++;
    //  alert(cnt);
      enableDisableBut();

//parent.removeChild(parent1);
//audios="";
      //var elements = document.getElementsByTagName('audio');
      //alert(elements.length);
//while (elements[0]) elements[0].parentNode.removeChild(elements[0]);

//var ppp = document.createElement("p");
 // var newAudiox = document.createElement("p");
 // newAudiox.innerHTML = "something";
 // document.body.appendChild(newAudiox);
 // //alert(newAudiox);
 // document.body.removeChild(newAudiox);
 //
 // var parent = document.createElement("div");
 // parent.id = "graph";
 // var child = document.createElement("div");
 // child.id = "data";
 // parent.appendChild(child);
 // parent.appendChild(newAudio);
 //
 // parent.removeChild(newAudio);

 //var newAudiox = document.createElement("p");
 //newAudiox.innerHTML = "something";
 //document.body.appendChild(newAudio);
 //alert(newAudiox);
// document.body.removeChild(newAudio);
 //newAudio.parentNode.removeChild(newAudio);
//p.innerHTML = "something";

// append to some other element
//document.appendChild(p);

// delete it
//p.parentNode.removeChild(p);
      //document.getElementsByTagName.removeChild("audio");
      //var olddata=document.getElementById("QurAudio1").lastChild;
      //document.getElementById("QurAudio1").removeChild(olddata);
      //newAudio.removeEventListener("ended",foo);


      // oAudio.src="";
      // audios="";
      // oAudio.pause();
      // oAudio.currentTime = 0;
      // oAudio="";

      //var elem = document.getElementById('QurAudio');
   //elem.parentNode.removeChild(elem);

  }

  function foo(){
    var a;
  }

/*
   *******************************************
                   COMMENT
   *******************************************
*/

function prepareAudioSource()
{


      reciterName=document.getElementById("reciterList").value ;
      vSurah=document.getElementById("surah").value ;
      vAyaFrm=document.getElementById("ayaFrm").value ;
      vSurPad=(vSurah+"").padStart(3,'0');
      vAyaFrmPad=(vAyaFrm+"").padStart(3,'0');

      if (vSurah!="" && vAyaFrm==""){

        if (reciterName=='Alafasy_64kbps'){
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

      }else if (vSurah!="" && vAyaFrm!="") {
      currentFile=currentFile1+reciterName+"/"+vSurPad+vAyaFrmPad+currentFile3;
      }
      else if (vSurah==""){
      showUserMsg(cStateErr,"Enter Surah Number");

      }else {
      currentFile=currentFile1+reciterName+"/"+vSurPad+vAyaFrmPad+currentFile3;
      }

      document.getElementById("nextBtn").disabled = false;
      document.getElementById("pauseBtn").disabled = false;
      document.getElementById("prevBtn").disabled = false;

      if (reLoadReq) {
      oAudio.src=currentFile;
      reLoadReq=false;
      }
}


/*
   *******************************************
                   NextAya
   *******************************************
*/

function nextAya() {
// if (vAyaFrm!="") {
//   document.getElementById("ayaFrm").value = parseInt(vAyaFrm) + 1;
//
//   reLoadReq=true;
//   playAudio();
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
oAudio.onerror = function() {

    showUserMsg(cStateErr,"Please check Surah And Aya Number");
};

//onloadstart
oAudio.onloadstart = function() {
    showUserMsg(cStateLoading,"Loading...");
};

//onplaying
oAudio.onplaying = function() {

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
  if (vSurah) {//(vSurah !==null && vSurah !==""){
  document.getElementById("pauseBtn").disabled = true;
  document.getElementById("playBtn").disabled = false;
  }else{
   document.getElementById("pauseBtn").disabled = false;
   document.getElementById("playBtn").disabled = true;
  }
}
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
