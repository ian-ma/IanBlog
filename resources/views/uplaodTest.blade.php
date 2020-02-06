<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>The HTML5 Herald</title>


</head>
<form action="/upload" method="post" enctype="multipart/form-data">
    @csrf
    <input name="img" type="file" accept="image/*"></input>
    <button>submit</button>
</form>

<body>
</body>
</html>
