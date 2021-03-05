class SensorDatabase
{
    constructor()
    {
        const HISTORY_SIZE = 10;
        this.date = Array(HISTORY_SIZE).fill('');
        this.waterDust = Array(HISTORY_SIZE).fill(0);
        this.waterTurbidity = Array(HISTORY_SIZE).fill(0);
        this.waterTemperature = Array(HISTORY_SIZE).fill(0);
        this.atmosphericHumidity = Array(HISTORY_SIZE).fill(0);
        this.atmosphericPressure = Array(HISTORY_SIZE).fill(0);
        this.atmosphericTemperature = Array(HISTORY_SIZE).fill(0);
    }

    add(data)
    {
        let addRecord = (array, sample) => {
            array.shift();
            array.push(sample);
        }

        addRecord(this.date, data.date);
        addRecord(this.waterDust, data.waterDust);
        addRecord(this.waterTurbidity, data.waterTurbidity);
        addRecord(this.waterTemperature, data.waterTemperature);
        addRecord(this.atmosphericHumidity, data.atmosphericHumidity);
        addRecord(this.atmosphericPressure, data.atmosphericPressure);
        addRecord(this.atmosphericTemperature, data.atmosphericTemperature);
    }
}