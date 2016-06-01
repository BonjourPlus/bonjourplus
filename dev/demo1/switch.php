<?php

include('ports.php');

if (!empty($_GET['id']) && is_numeric($_GET['id']) && isset($ports[$_GET['id'] - 1]) && !empty($_GET['state']))
{
	exec('gpio -g write ' . $ports[$_GET['id'] - 1] . ' ' . ($_GET['state'] == 'true' ? '1' : '0'));
}

?>
