function parseDateToMinutes(dateString)
{
    let date = new Date(dateString);
    return `${
        date.getHours().toString().padStart(2,"0")
    }:${
        date.getMinutes().toString().padStart(2,"0")
    }:${
        date.getSeconds().toString().padStart(2,"0")
    }`;
}

function update(database, charts)
{
    getNextDataBlock().then(
        (data) => {
            database.add(data);
            charts.update(database);
        }
    );
}

function main()
{
    const TIME_STEP_MS = 1000;
    let charts = new Charts();
    let database = new SensorDatabase();
    setInterval(update, TIME_STEP_MS, database, charts);
}

main();
