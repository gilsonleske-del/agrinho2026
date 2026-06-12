/* ================================= */
/* ANIMAÇÕES                         */
/* ================================= */

.card{
    opacity:0;
    transform:translateY(50px);
}

.card.mostrar{
    opacity:1;
    transform:translateY(0);
}

/* ================================= */
/* MODO ESCURO                       */
/* ================================= */

#modoEscuro{

    position:fixed;

    right:20px;
    bottom:20px;

    width:60px;
    height:60px;

    border:none;

    border-radius:50%;

    background:#1b5e20;

    color:white;

    cursor:pointer;

    font-size:24px;

    z-index:9999;

    box-shadow:
    0 5px 15px rgba(0,0,0,.3);

}

.dark{

    background:#121212;
    color:white;

}

.dark section{

    background:#121212;
    color:white;

}

.dark .card{

    background:#1e1e1e;
    color:white;

}

.dark ul li{

    background:#1e1e1e;
    color:white;

}

.dark h2{

    color:#81c784;

}
