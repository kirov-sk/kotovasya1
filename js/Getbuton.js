// Pusk animation front messege
;(function() {
let myDate = new Date();
let myTime = myDate.getMinutes();
let mySec = myDate.getSeconds();
 let popupViber_CallReversAtSShuwr = function () {document.querySelector('.sc-1s18q3d-0.r8rfzx-0.kHGnXI').setAttribute('style', 'animation-fill-mode: backwards; animation-name: iTFjmt;');}
 let popupViber_CallReversCloseAtr = function () {document.querySelector('.sc-1s18q3d-0.r8rfzx-0.kHGnXI').setAttribute('style', 'animation-fill-mode: forwards; animation-name: iTFjmt2;');}

 
 let messageButtonShuwAtr = function () {document.querySelector('.sc-1s18q3d-1.sc-8eqc3y-1.dxiAcZ').setAttribute('style', 'display: flex;');}
 let messageButtonReversAtSShuwr = function () {document.querySelector('.sc-1s18q3d-1.sc-8eqc3y-1.dxiAcZ').setAttribute('style', 'animation-fill-mode: backwards; animation-name: jTSRH;');}
 var messageButtonReversCloseAtr = function () {document.querySelector('.sc-1s18q3d-1.sc-8eqc3y-1.dxiAcZ').setAttribute('style', 'animation-fill-mode: forwards; animation-name: jTSRH2;');}

 var messageButtonCloseAtr = function () {document.querySelector('.sc-1s18q3d-1.sc-8eqc3y-1.dxiAcZ').setAttribute('style', 'display: none;');}

const greeting = delay => 
  setTimeout(() => {
    console.log('Hello World. ' + delay);
   (delay % 2) ? (messageButtonCloseAtr(), messageButtonReversAtSShuwr()) : (messageButtonShuwAtr(), messageButtonReversCloseAtr());
    greeting(delay + 1);
  }, 30000);
greeting(0);

})();
// END Pusk animation

/* myLib start */
/*;(function() {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function(item, attr) {
    var node = item;

    while(node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };
  window.myLib.closestItemByClass = function(item, className) {
    var node = item;

    while(node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };
  window.myLib.toggleScroll = function() {
    myLib.body.classList.toggle('no-scroll');
  };
    window.myLib.removStatus = function(target) {
    target.classList.remove('popup-button-status');
  };
     window.myLib.addStatus = function(item) {
    item.classList.add('popup-button-status');
  //  console.log(item);
  }; 
})();*/
/* myLib end */

 /* popup start */

//document.addEventListener('DOMContentLoaded', function() {
  var popup_button = document.querySelector('.popup-button');
//  var v2p3h2= document.querySelector('.v2p3h2-0.iEkjLa');
//  myLib.addStatus(v2p3h2.parentElement);
  var showPopup = function(target) {
      if (target.classList[0] === 'sc-1s18q3d-0') {
          target.setAttribute('style', 'animation-name: iTFjmt;');
          setTimeout(() => { target.classList.add('is-active'); }, 600);
      } else {
          target.classList.add('is-active');
      }
  };
    var closePopup = function(target) {
        if (target.classList[0] === 'sc-1s18q3d-0') {
            target.setAttribute('style', 'animation-name: iTFjmt2;');
            setTimeout(() => { target.classList.remove('is-active'); }, 1000);
        } else {
            target.classList.remove('is-active');
        }
    };
    var removStatus = function(target) {
    target.classList.remove('popup-button-status');
  };
     var addStatus = function(item) {
    item.classList.add('popup-button-status');
  }; 


  var q8c6tt = document.querySelector('.q8c6tt-0.iYciHm');//q8c6tt-0 iYciHm
  addStatus(q8c6tt);
  var buttonStatusMobil = 0;

  var closePopup_button = function() {
  	popup_button.setAttribute('style', 'display: none;');
  	removStatus(q8c6tt);
  }
  var showPopup_button = function() {
  	popup_button.setAttribute('style', 'display: flex;');
  }

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
 q8c6tt.addEventListener('click', function(e) {
  buttonStatusMobil = 1;
  console.log(buttonStatusMobil)
   let over = e.target.className;
   let overTag = e.target.tagName;
  // *********
  var target = e.target;
  var popupClass = myLib.closestAttr(target, 'data-mpopup');
  var buttonStatus = myLib.closestItemByClass(target, 'popup-button-status');
console.log(popupClass, buttonStatus);
     if (buttonStatus === null) {
        return;
     }
  //   myLib.removStatus(buttonStatus);
     if (popupClass === null) {
      return;
    }
    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);
    var popup_viber = document.querySelector('.popup-viber.is-active');
    var popup_call = document.querySelector('.popup-call.is-active');

   if (popup && !popup_viber && !popup_call) {
      showPopup(popup);
      closePopup_button();
     addStatus(q8c6tt);
console.log('Getbuton.js')
}
});} else {
  

q8c6tt.onpointerenter = q8c6tt.onpointerleave = q8c6tt.onpointermove = handler;


 function handler(e) {
  if (e.type == 'pointerenter') {
   let over = e.target.className;
   let overTag = e.target.tagName;
  // *********
  var target = e.target;
  var popupClass = myLib.closestAttr(target, 'data-mpopup');
  var buttonStatus = myLib.closestItemByClass(target, 'popup-button-status');

  	 if (buttonStatus == null) {
  	  	return;
  	 }
  //	 myLib.removStatus(buttonStatus);
  	 if (popupClass === null) {
      return;
    }
   // e.preventDefault();
    var popup = document.querySelector('.' + popupClass);
    var popup_viber = document.querySelector('.popup-viber.is-active');
    var popup_call = document.querySelector('.popup-call.is-active');

   if (popup && !popup_viber && !popup_call) {
      showPopup(popup);
      closePopup_button();
      }
  // ****************** 
     } 
  if ((e.type == 'pointerleave') && (e.type !== 'pointermove'))  {
      let out = e.target;
      let outTag = e.target.tagName;
   console.log(out,);
   addStatus(out);

    }
}
}
  let widgetElement = document.getElementById('gb-widget-6677');

  widgetElement.addEventListener('click', function(e) {
      var target = e.target;
      var popupClass = myLib.closestAttr(target, 'data-mpopup');

      if (popupClass === null) { return; }
      //   e.preventDefault();
      var popup = document.querySelector('.' + popupClass);
      var popupAll = document.querySelector('.popup-all.is-active');
      let popupViber_CallReversCloseAtr = function() { document.querySelector('.sc-1s18q3d-0.r8rfzx-0.kHGnXI').setAttribute('style', 'animation-fill-mode: forwards; animation-name: iTFjmt2;'); }

      if (popup && (popup.classList[1] !== 'popup-all')) {
          showPopup(popup);
     //     popupViber_CallReversCloseAtr();


          if (popupAll) {
              console.log(popup.classList[1])

              closePopup(popupAll);
              showPopup_button();
              return;
          }
      }
  });
// ЗАКРЫТИЕ окна
 widgetElement.addEventListener('click', function(e) {
    var target = e.target;
    var buttonStatus = document.querySelector('.popup-button-status');
    var popup_call = myLib.closestItemByClass(target, 'popup-call');
    var popup_viber = myLib.closestItemByClass(target, 'popup-viber');


    if ((popup_call || popup_viber) && (myLib.closestItemByClass(target, 'popup-closes') !== 'popup-all')) {
          var popup = myLib.closestItemByClass(target, 'Mpopup');

             closePopup(popup);
             console.log(buttonStatus, q8c6tt)
             addStatus(q8c6tt);
       } 
    if (myLib.closestItemByClass(target, 'popup-closes')  && !popup_viber && !popup_call) {
          var popup = myLib.closestItemByClass(target, 'Mpopup');
console.log(popup)
          closePopup(popup);
          showPopup_button();
        }
                 if (buttonStatus && !buttonStatusMobil) {removStatus(buttonStatus);
                  console.log(buttonStatusMobil, buttonStatus)
            }
          
  });

//});
/* popup end */

