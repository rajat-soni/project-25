<?php
function getErorr($debug){
    echo"<pre>";
    print_r($debug);
    echo "</pre>";
}

function getErorrR($debug){
    echo"<pre>";
    print_r($debug);
    die();
}

function redirect($link){ ?>

<script>
    window.location.href = '<?php echo $link; ?>';
</script>

<?php 
die();
}
?>