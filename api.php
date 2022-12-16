<?php
$hotels = file_get_contents("database.json");
// leggo gli hotels in formato json e li trasformo in array php
$hotels = json_decode($hotels, true);
// manipolazione

if(isset($_GET['index'])) {
    $hotels = $hotels[$_GET['index']];
}

$json_string = json_encode($hotels);
header("Content-Type: application/json");
echo $json_string;