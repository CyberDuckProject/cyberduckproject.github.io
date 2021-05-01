class SensorDatabase
{
    constructor()
    {
        const HISTORY_SIZE = 10;
        this.time = Array(HISTORY_SIZE).fill('');
        this.atmosphericDust = Array(HISTORY_SIZE).fill(0);
        this.atmosphericPressure = Array(HISTORY_SIZE).fill(0);
        this.waterTemperature = Array(HISTORY_SIZE).fill(0);
        this.waterTurbidity = Array(HISTORY_SIZE).fill(0);
    }

    add(data)
    {
        let addRecord = (array, sample) => {
            array.shift();
            array.push(sample);
        }

        addRecord(this.time, data.time);
        addRecord(this.atmosphericDust, data.atmosphericDust);
        addRecord(this.atmosphericPressure, data.atmosphericPressure);
        addRecord(this.waterTurbidity, data.waterTurbidity);
        addRecord(this.waterTemperature, data.waterTemperature);
    }
}