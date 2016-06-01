<?php

include('ports.php');

foreach ($ports as $p)
{
	exec('gpio -g mode '  . $p . ' output');
	exec('gpio -g write ' . $p . ' 0');
}

?>
