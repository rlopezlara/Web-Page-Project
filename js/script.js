document.addEventListener('DOMContentLoaded', () => {
    const accordion2 = document.getElementsByClassName('contentBox2');
    for (let j = 0; j < accordion2.length; j++) {
        accordion2[j].addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

});

const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};
 

var checkbox = document.getElementById('toggle');
var nameRl = document.getElementById('nameRl');
var student = document.getElementById('student');
var image = document.getElementById('profile');
var main1 = document.getElementById('main1');
var nameSpan = document.querySelectorAll('.nameSpan');
var accordionBg = document.getElementsByClassName('content2');
var label2Bg = document.getElementsByClassName('label2');
var btn = document.getElementById('btn-pdf');
var html = document.querySelector('html');
var section = document.querySelector('.video-masthead');
var video = document.getElementById('background-video'); 
var foot = document.querySelector('footer');
var head = document.querySelector('header');
var pElements = document.querySelectorAll('p');
var h3Elements = document.querySelectorAll('h3');
var aElements = document.querySelectorAll('nav menu li a');
var titleElements = document.getElementsByClassName('title');
var divElements = document.getElementsByClassName('mask');

// Add an event listener to listen for changes in the checkbox state
checkbox.addEventListener('change', function() {
  // Check if the checkbox is checked
  if (this.checked) {
    html.style.backgroundColor = '#0e0504';  

    video.style.display = 'none';   
    section.style.backgroundImage = 'url("./img/code.jpg")';
    section.style.backgroundSize = 'cover'; // Set background size
    section.style.backgroundPosition = 'center'; // Set background position
    section.style.backgroundAttachment = 'fixed';

        pElements.forEach(function(p) {
        p.style.color = '#f4f4f4';
      });
      h3Elements.forEach(function(h3) {
        h3.style.color = '#024082';
        h3.style.textShadow ='none';
      });
  
      // Change color for all elements with class "title"
      for (var i = 0; i < titleElements.length; i++) {
        titleElements[i].style.color = '#368f0d';
      }
      for (var j = 0; j < divElements.length; j++) {
        divElements[j].style.backgroundColor = 'rgba(238, 149, 16, 0.9)';
      }
      for (var k = 0; k < aElements.length; k++) {
        aElements[k].style.color = '#368f0d';
        aElements[k].style.fontSize = '1.05em';
        aElements[k].style.fontWeight = '600';         
      }
      for (var h = 0; h < accordionBg.length; h++) {
        // Apply the background color style to each element
        accordionBg[h].style.backgroundColor = '#87A6E0';
        
      }
      for (var p = 0; p < accordionBg.length; p++) {
        // Apply the background color style to each element
        label2Bg[p].style.backgroundColor = '#b6e88c';
        label2Bg[p].style.color = '#032e5d';
      }

      for(var n = 0; n < nameSpan.length; n++){
      nameSpan[n].style.color ='orange';
      }
      nameRl.style.color = 'orange';
      nameRl.style.textShadow = '4px 4px 4px #368f0d';
      student.style.color = 'white';
      btn.style.backgroundColor = 'orange';
      image.style.boxShadow = '5px 5px 5px orange';
      main1.style.backgroundColor ='rgba(29, 61, 3, 0.4)';
      foot.style.backgroundImage = 'linear-gradient(90deg, #0f3718 0%, #10205d 17%, #795f0c 45%, #10205d 78%, #0f3718 99%)';  
      head.style.backdropFilter = "blur(10px)";
      
    } else {
    console.log("Checkbox is unchecked");
    html.style.backgroundColor = ''; // Revert background color
    video.setAttribute('src', ''); // Remove video source
    video.removeAttribute('type'); // Remove video type attribute

    pElements.forEach(function(p) {
      p.style.color = ''; // Revert paragraph text color
    });

    h3Elements.forEach(function(h3) {
      h3.style.color = ''; // Revert h3 text color
    });

    // Revert color for all elements with class "title"
    for (var i = 0; i < titleElements.length; i++) {
      titleElements[i].style.color = '';
    }
    for (var k = 0; k < aElements.length; k++) {
        aElements[k].style.color = '';
        aElements[k].style.fontSize = '';
        aElements[k].style.fontWeight = '';  
    }
    // Revert background color for all elements with class "mask"
    for (var j = 0; j < divElements.length; j++) {
      divElements[j].style.backgroundColor = '';
    }
    for (var h = 0; h < accordionBg.length; h++) {
      // Apply the background color style to each element
      accordionBg[h].style.backgroundColor = '';
      
    }
    for (var p = 0; p < accordionBg.length; p++) {
      // Apply the background color style to each element
      label2Bg[p].style.backgroundColor = '';
      label2Bg[p].style.color = '';
    }
    for(var n = 0; n < nameSpan.length; n++){
      nameSpan[n].style.color ='';
      }

    video.style.display = 'block'; // Show the video element  
    video.setAttribute('src', './video/bgvideo.mp4');
    video.setAttribute('type', 'video/mp4');
    section.style.backgroundImage = 'none';
    section.style.backgroundSize = ''; // Set background size
    section.style.backgroundPosition = ''; // Set background position
    section.style.backgroundAttachment = '';

    nameRl.style.color = '';
    btn.style.backgroundColor = '';
    nameRl.style.textShadow = '';
    image.style.boxShadow = '';
    main1.style.backgroundColor ='';  
    foot.style.backgroundImage = '';
    head.style.backdropFilter = "";
    
  }
});
// Make our popup form
    // Get the modal
    var modal = document.getElementById("ContactModal");
    // Get the button that opens the modal
    var btn = document.getElementById("modalBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
 