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

        this.atmosphericPressureChart = createChart("atmosphericPressureChart", "Atmospheric Pressure (hPa)", `#60c953`, `#43cc31`);
        this.atmosphericDustChart = createChart("atmosphericDustChart", "Atmospheric Dust", `#a3a3a3`, `#6b6b6b`);
        this.waterTemperatureChart = createChart("waterTemperatureChart", `Water Temperature (${String.fromCharCode(176)}C)`, `#d95f5f`, `#d63131`);
        this.waterTurbidityChart = createChart("waterTurbidityChart", "Water Turbidity (NTU)", `#544328`, `#543f1c`);
    }

    update(database)
    {
        let updateChart = (chart, data, labels) => {
            chart.data.datasets[0].data = data;
            chart.data.labels = labels;
            chart.update();
        }

        updateChart(this.atmosphericPressureChart, database.atmosphericPressure, database.time);
        updateChart(this.atmosphericDustChart, database.atmosphericDust, database.time);
        updateChart(this.waterTemperatureChart, database.waterTemperature, database.time);
        updateChart(this.waterTurbidityChart, database.waterTurbidity, database.time);
    }
}