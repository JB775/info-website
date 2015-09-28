var today = new Date();
var dayNow = today.getDay();
var greeting;

if (dayNow === 3) {
    greeting = 'Happy Wellness Wednesday!';
} else if (dayNow === 4) {
    greeting = 'Happy Art & Culture Thursday!';
} else if (dayNow === 5) {
    greeting = 'Happy Food & Flicks Friday!';
} else if (dayNow === 6) {
    greeting = 'Happy Game Day Saturday!';
} else if (dayNow === 7) {
    greeting = 'Happy Family Fun Day Sunday!';            
} else {
    greeting = 'The Oval reopens for more fun on Wednesday!';
}

document.write('<h3 class="day">' + greeting + '</h3>');

