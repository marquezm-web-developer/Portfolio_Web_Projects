<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Form Processor</title>
</head>

<body>

    <h1>Processed Data</h1>
    
	<?php 
    
    if( isset( $_POST['comments'] ) )
    {
        $starRating = $_POST['starRating'];
		$comments = $_POST['comments'];
		$submit = $_POST['submit'];
                 
		echo "<p>Star Rating Choised: $starRating</p>";
		echo "<p>Comments: $comments</p>";
    }
    ?>

	<p style="color: green;font-weight: 600;">Your rating has been sent and processed!!</p>

</body>
</html>

