// Build a generator function which returns the next stop in a list of train stops
// On interaction, return next station until we've reached the end of the line
// Console log stop or, if at end, 'we made it'
// At end, the next button should be disabled

function* getNewStopGenerator(stops) {
    for(var i = 0; i < stops.length; i++) {
        yield stops[i];
    }
}

const nextStation = document.querySelector('#nextButton');
const stationMessage = document.querySelector('#stationMessage');
const getStationMessage = (stop) => `You've arrived at ${stop}.`;
const stations = ['Loyola', 'Bryn Mawr', 'Sheridan', 'Addison', 'Belmont', 'Clark & Division', 'State', 'Madison']
const getNewStop = getNewStopGenerator(stations);

nextStation.addEventListener('click', () => {
    let newStop = getNewStop.next();

    if (newStop.done) {
        stationMessage.innerText += ' You have reached your destination.';
        nextStation.setAttribute('disabled', 'true');
    }
    else if (newStop.value) {
        stationMessage.innerText = getStationMessage(newStop.value);
    }
});