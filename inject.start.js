<script>
var injReadyInterval = setInterval(function(){
        if(document.readyState === "complete"){
                setTimeout("inj_init();", 5000);
                clearInterval(injReadyInterval);
        }
}, 10);
</script>
