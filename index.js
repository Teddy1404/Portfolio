
// var tablinks = document.getElementsByClassName("tab-links");
// var tabcons = document.getElementsByClassName("tab-con");
// function opentab(tabname){
//    for(tablink of tablinks){
//     tablink.classList.remove("active-link");
//    }
//    for(tabcontent of tabcon){
//     tabcontent.classList.remove("active.tab");
//    }
//   event.currentTarget.classList.add("active-link");
// }
{/* <div class="tab-con active-tab" id="Skills">
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>BOOTSTRAP</li>
                <li>JAVASCRIPT</li>
                </ul>
            </div>
            <div class="tab-con active-2" id="Education">
              <ul>
                <li>JEE MAIN QUALIFIED</li>
                <li>JEE ADVANCED QUALIFIED</li>
              
                </ul>
            </div> */}

            
          //   <div class="tab-titles">
          //   <p class="tab-links active-link" onclick="opentab('Skills')">Skills</p>
          //   <p class="tab-links" onclick="opentab('Education')">Education</p>
          // </div>         
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";  
}
function closemenu(){
  sidemenu.style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbySz3kc77CTN7DkXIJ-oqOM9y5XkKmLOoB9x9ZWTevjHkKmVCGqXBPU0fq7lGKXEZJLbQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message sent succesfully"
    setTimeout(function(){
      msg.innerHTML=""
    },5000)
    form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })