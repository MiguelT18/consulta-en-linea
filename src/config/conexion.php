<?php
//parametros de conexion
$servername = "localhost";
$database = "bdd";
$username = "root";
$password = "";
//El método principal utilizado en este script es mysqli_connect(). Esta es una función interna de PHP para establecer una nueva 
//conexión a un servidor MySQL.
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
//Si la conexión no es exitosa, se ejecuta la función die(). 
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//si la conexión MySQL es exitosa
echo "Connected successfully";
//mysqli_close, que simplemente permitirá cerrar la conexión a la base de datos manualmente.
mysqli_close($conn);
?>
