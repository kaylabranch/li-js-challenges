// Output a ticking clock which displays hours, minutes, seconds
setInterval(function(){
    let now = new Date();
    return now.toLocaleTimeString();
}, 1000);