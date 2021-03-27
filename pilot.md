---
layout: default title: Control Center nav_order: 4
---

# CyberDuck Control Center

## Sensors

Here you can find the readings from Cyberduck's sensors updated in real time.

<label for="cyberduck-ip">CyberDuck server IP address:</label>
<input type="text" id="cyberduck-ip" name="cyberduck-ip" value="http://localhost/cyberduck">

<table class="embed">
    <tr>
        <th>
            <canvas id="waterDustChart"></canvas>
        </th>
        <th>
            <canvas id="waterTurbidityChart"></canvas>
        </th>
    </tr>
    <tr>
        <th>
            <canvas id="waterTemperatureChart"></canvas>
        </th>
        <th>
            <canvas id="atmosphericHumidityChart"></canvas>
        </th>
        </tr>
    <tr>
        <th>
            <canvas id="atmosphericPressureChart"></canvas>
        </th>
        <th>
            <canvas id="atmosphericTemperatureChart"></canvas>
        </th>
    </tr>
</table>

## Cameras
Not Yet Implemented

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>

<script src="communication.js"></script>
<script src="database.js"></script>
<script src="charts.js"></script>
<script src="main.js"></script>