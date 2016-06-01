<?php

// sensors.php?mac=F8:F0:5:F5:CF:DD&light=984&water=1023&c=9
if (empty($_GET['mac']) || empty($_GET['light']) || empty($_GET['water'])) exit();

// sanity checks
if (!preg_match('/^([0-9a-f:])+$/i', $_GET['mac']) || !is_numeric($_GET['light']) || !is_numeric($_GET['water'])) exit();

// connect to database
mysql_connect('localhost', 'intelleau', 'intelleau');
mysql_select_db('intelleau');

// get sensor ID
$res = mysql_query('SELECT ID FROM sensors WHERE mac="' . $_GET['mac'] . '"');
$row = mysql_fetch_array($res);

// need to add to database?
if (empty($row))
{
	mysql_query('INSERT INTO sensors (mac) VALUES("' . $_GET['mac'] . '")');
	$res = mysql_query('SELECT ID FROM sensors WHERE mac="' . $_GET['mac'] . '"');
	$row = mysql_fetch_array($res);
	if (empty($row)) exit('database problem');
}

// now we have an ID
$sensorid = $row['ID'];

// add datas to database
mysql_query('INSERT INTO datas (ID_sensor, collecttime, light, water) VALUES (' . $sensorid . ', NOW(), ' . $_GET['light'] . ', ' . $_GET['water'] . ')');

// close database
mysql_close();

?>

