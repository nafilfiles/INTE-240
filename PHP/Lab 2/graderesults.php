<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grades for Courses</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-purple-200 font- font-mono text-xl font-bold text-center mt-8">
    <h2>The following are grades are in the System:<br />
    </h2>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "itgrades";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT course, grade FROM inte;";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            echo $row["course"] . " --- " . $row["grade"] . "<br>";
        }
    } else {
        echo "There are no grades currently in the system";
    }
    $conn->close();
    ?>
</body>

</html>