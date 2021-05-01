function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

async function getNextMessage() {
    return fetch(document.getElementById("cyberduck-ip").value).then(
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
                time: parseDateToMinutes(raw.time),
                atmosphericDust: raw.atmospheric_dust,
                atmosphericPressure: raw.atmospheric_pressure,
                waterTemperature: raw.water_temperature,
                waterTurbidity: raw.water_turbidity
            }
        }
    );
}
