---
layout: default title: Control Center nav_order: 4
---

# CyberDuck Control Center

## Sensors

<div class="container">
    <div class="content">
                    <h3>Cyberduck Control Center</h3>
                    <p>Here you can find the readings from Cyberduck's sensors updated in real time.</p>
                    <h4>Sensors</h4>

<table class="embed">
    <tr>
        <th>
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

<h4>Cameras</h4>
<p>Not Yet Implemented</p>
</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>

<script src="communication.js"></script>
<script src="database.js"></script>
<script src="charts.js"></script>
<script src="main.js"></script>