let contactsInfo = [
  {
  	name: "Ali",
  	number : "03032289212",
  	lastMsg : "blah blah",
  	lastSeen : `<i class="fas fa-clock"></i>`,
  	email : "sa248848@gmail.com",
  	img : `<i class="fas fa-user-circle"></i>`

 },

 {
 	name :"Zeeshan",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen :`<i class="fas fa-check"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },

  {
 	name :"danish",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen :`<i class="fas fa-clock"></i>`,
 	email : "12345@gmail.com",
 	img : `<img src="1.jpg" class="img1">`
 },


 {
 	name :"sarmad",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen : `<i class="fas fa-check-double"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"annas",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen :`<i class="fas fa-check"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"hamza",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen : "2 hours ago",
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"ahmed",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen :`<i class="fas fa-check-double"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"babar",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen : `<i class="fas fa-check-double"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"noman",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen : `<i class="fas fa-clock"></i>`,
 	email : "12345@gmail.com",
 	img : `<img src="2.jpg" class="img1">`,
  // mainimg:`1.jpg`
 }


];




function initilizar() {
// celebritiesGroupEl
	let contactsInfoGroupEl = document.querySelector(".name-list");
	for (let i=0; i<10; i++) {
		contactsInfoGroupEl.innerHTML += `<div class="list-item"> ${contactsInfo[i].img}<div class="names-flex" onclick="changeInfo(${i})" >
    <span> ${contactsInfo[i].name}</span><span class="spans-1"><span class="lastSeen1"> ${contactsInfo[i].lastSeen}  ${contactsInfo[i].lastMsg}</span></span></span></div></div>`;
	}

}


changeInfo(0);




function  changeInfo(InfoIndex){
  document.querySelector("#contactsInfo-name").innerHTML = contactsInfo[InfoIndex].name;
  document.querySelector("#contactsInfo-number").innerHTML = contactsInfo[InfoIndex].number;
  document.querySelector("#contactsInfo-img").style["background-image"] = `url(${contactsInfo[InfoIndex].mainimg})`;
  document.querySelector("#contactsInfo-lastMsg").innerHTML = contactsInfo[InfoIndex].lastMsg;
  document.querySelector("#contactsInfo-lastSeen").innerHTML = contactsInfo[InfoIndex].lastSeen;
  document.querySelector("#contactsInfo-email").href = contactsInfo[InfoIndex].email;



}






  //   celebritiesGroupEl.innerHTML += `
  //         <div class="celebrity-img-div" 
  //           style="background-image: url(images/${celebrities[i].imgURL})"
  //           onclick="changeCeleb(${i})">
  //           <p class="celebrity-img-text">${celebrities[i].name}</p>
  //           </div>`
  // }
  // changeCeleb(0);