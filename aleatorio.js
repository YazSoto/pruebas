<script>
    var direcciones = new Array("../pagina/2.html", "../pagina/3.html", "../pagina/4.html", "../pagina/5.html", "../pagina/6.html", "../pagina/7.html", "../pagina/8.html", "../pagina/9.html", "../pagina/10.html", "../pagina/11.html", "../pagina/12.html", "../pagina/13.html", "../pagina/14.html","../pagina/15.html", "../pagina/16.html", "../pagina/17.html", "../pagina/18.html","../pagina/19.html","../pagina/20.html","../pagina/21.html", "../pagina/22.html","../pagina/23.html", "../pagina/24.html", "../pagina/25.html", "../pagina/26.html", "../pagina/27.html", "../pagina/28.html", "../pagina/29.html", "../pagina/30.html","../pagina/31.html","../pagina/32.html", "../pagina/33.html", "../pagina/34.html","../pagina/35.html","../pagina/36.html","../pagina/37.html","../pagina/38.html", "../pagina/39.html", "../pagina/40.html",)
    function enlaceAleatorio(){
       aleat = Math.random() * direcciones.length
       aleat = Math.floor(aleat)
       window.location=direcciones[aleat]
    }
</script>
