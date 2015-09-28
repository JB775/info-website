var myImage = document.getElementById("mainImage");

var imageArray = ["img/WellnessWednesdays.jpg", "img/ArtandCultureThursdays.jpg", "FridayFlicks.jpg",
"img/GameDaySaturdays.jpg","img/FamilyFunSundays.jpg"]

var imageIndex = 0;

function changeImage () {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

setInterval (changeImage,5000);