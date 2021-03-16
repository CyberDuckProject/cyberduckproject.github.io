function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

async function getNextMessage() {
    const URL = 'https://janekb04.w.staszic.waw.pl/test'
    return fetch(new Request(URL, {mode: 'no-cors'})).then(
        (response) => {
            return response.text();
        },
        (reasonRejected) => {
            console.log(reasonRejected);
        }
    )
}

async function getNextDataBlock() {
    return getNextMessage().then(
        (message) => {
            let raw = JSON.parse(message);

            return {
                date: parseDateToMinutes(raw.date),
                waterDust: raw.dust,
                waterTurbidity: raw.turbidity,
                waterTemperature: raw.temperature,
                atmosphericHumidity: raw.meteoStation.humidity,
                atmosphericPressure: raw.meteoStation.pressure,
                atmosphericTemperature: raw.meteoStation.temperature
            }
        }
    );
}
