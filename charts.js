class Charts
{
    constructor()
    {
        let createChart = (id, friendlyName = 'Chart', backgroundColor = 'blue', borderColor = 'aqua', type = 'line') => {
            let canvas = document.getElementById(id).getContext('2d');
            return new Chart(canvas, {
                type: type,
                data: {
                    labels: [],
                    datasets: [{
                        label: friendlyName,
                        data: [],
                        backgroundColor: backgroundColor,
                        borderColor: borderColor
                    }]
                }
            });
        }

        this.waterDustChart = createChart("waterDustChart", "Water Dust", `#a3a3a3`, `#6b6b6b`);
        this.waterTurbidityChart = createChart("waterTurbidityChart", "Water Turbidity (NTU)", `#544328`, `#543f1c`);
        this.waterTemperatureChart = createChart("waterTemperatureChart", `Water Temperature (${String.fromCharCode(176)}C)`, `#d95f5f`, `#d63131`);
        this.atmosphericHumidityChart = createChart("atmosphericHumidityChart", "Atmospheric Humidity (%)", `#63b5d6`, `#3eabd6`);
        this.atmosphericPressureChart = createChart("atmosphericPressureChart", "Atmospheric Pressure (hPa)", `#60c953`, `#43cc31`);
        this.atmosphericTemperatureChart = createChart("atmosphericTemperatureChart", `Atmopsheric Temperature (${String.fromCharCode(176)}C)`, `#9eaad9`, `#637bdb`);
    }

    update(database)
    {
        let updateChart = (chart, data, labels) => {
            chart.data.datasets[0].data = data;
            chart.data.labels = labels;
            chart.update();
        }

        updateChart(this.waterDustChart, database.waterDust, database.date);
        updateChart(this.waterTurbidityChart, database.waterTurbidity, database.date);
        updateChart(this.waterTemperatureChart, database.waterTemperature, database.date);
        updateChart(this.atmosphericHumidityChart, database.atmosphericHumidity, database.date);
        updateChart(this.atmosphericPressureChart, database.atmosphericPressure, database.date);
        updateChart(this.atmosphericTemperatureChart, database.atmosphericTemperature, database.date);
    }
}