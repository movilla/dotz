Array.prototype.shuffle = function() {
var input = this;

for (var i = input.length-1; i >=0; i--) {

    var randomIndex = Math.floor(Math.random()*(i+1)); 
    var itemAtIndex = input[randomIndex]; 

    input[randomIndex] = input[i]; 
    input[i] = itemAtIndex;
}
return input;
};

document.querySelector('#carta_evento').onclick = function () {
        var nuevo = confirm('¿Quieres reiniciar el juego?');
        if (nuevo == true) { 
                location.href = 'index.html'
        }
};

document.querySelector('#carta_destino').onclick = function () {
        var destino = document.getElementById('webdestino');
        var cartadestino = document.getElementById('icon_dest');
	var des_delante = document.getElementById('desalante');
	var des_atras = document.getElementById('desatras');
        var acto = document.getElementById('acto');
        var desacto = document.getElementById('des_acto'); 
        var sino = cartadestino.getAttribute('data-arriba');
        var nuevodestino = destino.getAttribute('data-destino');
        if (sino == 'si') {
                destino.style.animation = 'parriba 1s forwards';
                cartadestino.style.animation = 'girapabajo 1s forwards';
                cartadestino.setAttribute('data-arriba', 'no')
                des_delante.style.visibility ='visible';
                des_atras.style.visibility ='visible';
                acto.style.visibility ='hidden';
                desacto.style.visibility ='visible';
        }
        else {
                destino.style.animation = 'pabajo 1s forwards';
                cartadestino.style.animation = 'giraparriba 1s forwards';
                cartadestino.setAttribute('data-arriba', 'si')
                des_delante.style.visibility ='hidden';
                des_atras.style.visibility ='hidden';
                desacto.style.visibility ='hidden';
                acto.style.visibility ='visible';
        }

        if (nuevodestino == 'nuevo' ) {
                cdestino = ['A', 'AA', 'B', 'BB', 'C', 'CC', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                cdestino.shuffle();
                var cdes_1 = cdestino[0]
                var cdes_2 = cdestino[1]
                var cdes_3 = cdestino[2]
                var cdes_4 = cdestino[3]
                var cdes_5 = cdestino[4]
                var cdes_6 = cdestino[5]
                var cdes_7 = cdestino[6]
                var cdes_8 = cdestino[7]
                var cdes_9 = cdestino[8]
                var cdes_10 = cdestino[9]
                var cdes_11 = cdestino[10]
                var cdes_12 = cdestino[11]
                var cdes_13 = cdestino[12]
                var cdes_14 = cdestino[13]
                var cdes_15 = cdestino[14]
                var cdes_16 = cdestino[15]
                var cdes_17 = cdestino[16]
                var cdes_18 = cdestino[17]
                var cdes_19 = cdestino[18]
                var cdes_20 = cdestino[19]
                var cdes_21 = cdestino[20]
                var cdes_22 = cdestino[21]
                var cdes_23 = cdestino[22]
                var cdes_24 = cdestino[23]
                var cdes_25 = cdestino[24]
                var cdes_26 = cdestino[25]
                var cdes_27 = cdestino[26]
                var cdes_28 = cdestino[27]
                var cdes_29 = cdestino[28]    

                var mazo_destino = new Array();
                mazo_destino[0] = 'style/img/es/destino/DOTZ_Dorso_Destino.jpg';
                mazo_destino[1] = 'style/img/es/destino/'+cdes_1+'.jpg';
                mazo_destino[2] = 'style/img/es/destino/'+cdes_2+'.jpg';
                mazo_destino[3] = 'style/img/es/destino/'+cdes_3+'.jpg';
                mazo_destino[4] = 'style/img/es/destino/'+cdes_4+'.jpg';
                mazo_destino[5] = 'style/img/es/destino/'+cdes_5+'.jpg';
                mazo_destino[6] = 'style/img/es/destino/'+cdes_6+'.jpg';
                mazo_destino[7] = 'style/img/es/destino/'+cdes_7+'.jpg';
                mazo_destino[8] = 'style/img/es/destino/'+cdes_8+'.jpg';
                mazo_destino[9] = 'style/img/es/destino/'+cdes_9+'.jpg';
                mazo_destino[10] = 'style/img/es/destino/'+cdes_10+'.jpg';
                mazo_destino[11] = 'style/img/es/destino/'+cdes_11+'.jpg';
                mazo_destino[12] = 'style/img/es/destino/'+cdes_12+'.jpg';
                mazo_destino[13] = 'style/img/es/destino/'+cdes_13+'.jpg';
                mazo_destino[14] = 'style/img/es/destino/'+cdes_14+'.jpg';
                mazo_destino[15] = 'style/img/es/destino/'+cdes_15+'.jpg';
                mazo_destino[16] = 'style/img/es/destino/'+cdes_16+'.jpg';
                mazo_destino[17] = 'style/img/es/destino/'+cdes_17+'.jpg';
                mazo_destino[18] = 'style/img/es/destino/'+cdes_18+'.jpg';
                mazo_destino[19] = 'style/img/es/destino/'+cdes_19+'.jpg';
                mazo_destino[20] = 'style/img/es/destino/'+cdes_20+'.jpg';
                mazo_destino[21] = 'style/img/es/destino/'+cdes_21+'.jpg';
                mazo_destino[22] = 'style/img/es/destino/'+cdes_22+'.jpg';
                mazo_destino[23] = 'style/img/es/destino/'+cdes_23+'.jpg';
                mazo_destino[24] = 'style/img/es/destino/'+cdes_24+'.jpg';
                mazo_destino[25] = 'style/img/es/destino/'+cdes_25+'.jpg';
                mazo_destino[26] = 'style/img/es/destino/'+cdes_26+'.jpg';
                mazo_destino[27] = 'style/img/es/destino/'+cdes_27+'.jpg';
                mazo_destino[28] = 'style/img/es/destino/'+cdes_28+'.jpg';
                mazo_destino[29] = 'style/img/es/destino/'+cdes_29+'.jpg';

                destino.setAttribute('data-destino', 'viejo');
                document.getElementById('desatras').style.visibility = 'hidden';
                var predestino = document.getElementById('predestino');
                predestino.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="style/img/es/destino/'+cdes_1+'.jpg">';
		var icreserva = document.getElementById('reserva_dest');
		var marcalma = document.getElementById('dest_res');


                var desviendo = 0;
                document.querySelector('#desalante').onclick = function moviendo(desentido) {
                        var desimagen_actual = document.getElementById('carta_juego_destino');
                        var desultima = mazo_destino.length - 1;
                        var desentido = 1;
                        var desauxiliar = desviendo + desentido;
                                if ( desauxiliar < 0) { desauxiliar = desultima; }
                                if ( desauxiliar > desultima) { desauxiliar = 0; }
                        desviendo = desauxiliar;
                        desimagen_actual.src = mazo_destino[desviendo];
                        var desacto = document.getElementById('des_acto');
                        desacto.innerHTML = '<a class="num_carta">'+desviendo+'/'+desultima+'</a>'
                        document.getElementById('desatras').style.visibility = 'visible';
                        if (desviendo == (mazo_destino.length -1)) {
                                document.getElementById('desalante').style.visibility = 'hidden';
                        }
                        var predestino = document.getElementById('predestino');
                        viendodesmas = desauxiliar +1;
                        viendodesmenos = desauxiliar -1;
                        predestino.innerHTML = '<img id="cartades_siguiente" class="pre_siguiente" src="">';
                        predestino.innerHTML += '<img id="cartades_anterior" class="pre_siguiente" src="">';
                        var predesload = document.getElementById('cartades_siguiente');
                        var predesloadant = document.getElementById('cartades_anterior');
                        predesload.src = mazo_destino[viendodesmas];
                        predesloadant.src = mazo_destino[viendodesmenos];


			var imagalmacen = document.getElementById('almacen_siguiente');
			var cartino = document.getElementById('carta_juego_destino');
			icreserva.style.visibility = 'visible';
			marcalma.style.visibility = 'hidden';
			if (imagalmacen) {
				var listres = document.getElementsByClassName('alma');
				for (var i = 0; i < listres.length; i++) {
					if ((listres[i].src) === ( cartino.src)) {
						marcalma.style.visibility = 'visible';
						icreserva.style.visibility = 'hidden';
					}
				}
			}
                }
                document.querySelector('#desatras').onclick = function moviendo(desentido) {
			icreserva.style.visibility = 'visible';
			marcalma.style.visibility = 'hidden';
                        var desimagen_actual = document.getElementById('carta_juego_destino');
                        var desultima = mazo_destino.length - 1;
                        var desentido = -1;
                        var desauxiliar = desviendo + desentido;
                                if ( desauxiliar < 0) { desauxiliar = desultima; }
                                if ( desauxiliar > desultima) { desauxiliar = 0; }
                        desviendo = desauxiliar;
                        desimagen_actual.src = mazo_destino[desviendo];
                        var desacto = document.getElementById('des_acto');
                        desacto.innerHTML = '<a class="num_carta">'+desviendo+'/'+desultima+'</a>'
                                if (desviendo == (mazo_destino.length - mazo_destino.length)) {
                                        document.getElementById('desatras').style.visibility = 'hidden';
					icreserva.style.visibility = 'hidden';
                                }
                        document.getElementById('desalante').style.visibility = 'visible';
                        var predestino = document.getElementById('predestino');
                        viendodesmas = desauxiliar +1;
                        viendodesmenos = desauxiliar -1;
                        predestino.innerHTML = '<img id="cartades_siguiente" class="pre_siguiente" src="">';
                        predestino.innerHTML += '<img id="cartades_anterior" class="pre_siguiente" src="">';
                        var predesload = document.getElementById('cartades_siguiente');
                        var predesloadant = document.getElementById('cartades_anterior');
                        predesload.src = mazo_destino[viendodesmas];
                        predesloadant.src = mazo_destino[viendodesmenos];

			var imagalmacen = document.getElementById('almacen_siguiente');
			var cartino = document.getElementById('carta_juego_destino');
			if (imagalmacen) {
				var listres = document.getElementsByClassName('alma');
				for (var i = 0; i < listres.length; i++) {
					if ((listres[i].src) === ( cartino.src)) {
						marcalma.style.visibility = 'visible';
						icreserva.style.visibility = 'hidden';
					}
				}
			}
                }
                document.querySelector('#reserva').onclick = function () {
                        var almacen = document.getElementById('almacen');
                        resercard = mazo_destino[desviendo];
  			var conservar = confirm('¿Añadir señal de carta conservada?');
                	if (conservar == true) {
				almacen.insertAdjacentHTML('beforeend','<img id="almacen_siguiente" class="alma" src="'+resercard+'">');
				alert('¡Hecho!');
			icreserva.style.visibility = 'hidden';
			marcalma.style.visibility = 'visible';
			}
                }
                document.querySelector('#res_most').onclick = function () {
                        var almacen = document.getElementById('almacen');
                        resercard = mazo_destino[desviendo];
			var cartino = document.getElementById('carta_juego_destino');
  			var desconse = confirm('¿Quitar señal de carta conservada?');
                	if (desconse == true) {
				var listares = document.getElementsByClassName('alma');
				for (var i = 0; i < listares.length; i++) {
					if ((listares[i].src) === ( cartino.src )) {
						almacen.removeChild(listares[i]);
						alert('¡Hecho!');
					icreserva.style.visibility = 'visible';
					marcalma.style.visibility = 'hidden';
					}
				}
			}
                }		
        }
};

document.querySelector('#carta_dado').onclick = function () {
        var d1g = document.getElementById('dado_uno');
        var d2g = document.getElementById('dado_dos');
        var tirador = document.getElementById('tirar');
        var fdados = document.getElementById('fondo_dados');
        var idados = document.getElementById('icon_dado');
        var sino = idados.getAttribute('data-arriba');
        var cartadestino = document.getElementById('icon_dest');
        cartadestino.style.visibility = 'hidden';
        if (tirador) { tirador.style.visibility = 'visible'; }
        if (sino == 'si') {
                idados.style.animation = 'girapabajo 1s forwards';
                d1g.style.animation = 'parriba_dado 1s forwards';
                d2g.style.animation = 'parriba_dado 1s forwards';
                tirador.style.animation = 'parriba_dado 1s forwards';
                fdados.style.animation = 'parriba 1s forwards';
                idados.setAttribute('data-arriba', 'no')
        } else {
                idados.style.animation = 'giraparriba 1s forwards';
                d1g.style.animation = 'pabajo_dado 1s forwards';
                d2g.style.animation = 'pabajo_dado 1s forwards';
                tirador.style.animation = 'pabajo_dado 1s forwards';
                fdados.style.animation = 'pabajo 1s forwards';
                idados.setAttribute('data-arriba', 'si')
                tirador.style.visibility = 'hidden';
                cartadestino.style.visibility = 'visible';
        }
      
        if (d1g) { d1g.innerHTML = '<div id="primer_dado" class="cubo3d solo"><div class="cara1_uno solo"><a class="c_uno first"></a></div><div class="cara2_uno solo"><a class="c_dos second"></a></div><div class="cara3_uno solo"><a class="c_tres third"></a></div><div class="cara4_uno solo"><a class="c_cuatro fourth"></a></div><div class="cara5_uno solo"><a class="c_cinco fifth"></a></div><div class="cara6_uno solo"><a class="c_seis sixth"></a></div></div>'; }

        if (d2g) { d2g.innerHTML = '<div id="segundo_dado" class="cubo3d solo"><div class="cara1_uno solo"><a class="c_uno first"></a></div><div class="cara2_uno solo"><a class="c_dos second"></a></div><div class="cara3_uno solo"><a class="c_tres third"></a></div><div class="cara4_uno solo"><a class="c_cuatro fourth"></a></div><div class="cara5_uno solo"><a class="c_cinco fifth"></a></div><div class="cara6_uno solo"><a class="c_seis sixth"></a></div></div>'; }

        if (tirador) { tirador.innerHTML= '<button id="tirada" class="tirar">Tirar</button>'; }
};

document.querySelector('#tirar').onclick = function () {
	var tirar = document.getElementById('tirada');
        var time = tirar.getAttribute('data-time');
	var primer_dado = document.getElementById('primer_dado');
	var segundo_dado = document.getElementById('segundo_dado');
	primer_dado.style.animationName = '';
	segundo_dado.style.animationName = '';
	setTimeout(function() {
		if (time) {
			if (primer_dado) { primer_dado.style.animationDuration = time; }
			if (segundo_dado) { segundo_dado.style.animationDuration = time; }
		}
		if (primer_dado) {
			var tirada = Math.floor((Math.random() * 6) + 1);
			if (tirada === 1) {
				primer_dado.style.animationName = 'uno';
			}
    			if (tirada === 2) {
				primer_dado.style.animationName = 'dos';
			}
    			if (tirada === 3) {
      				primer_dado.style.animationName = 'tres';
    			}
    			if (tirada === 4) {
     				primer_dado.style.animationName = 'cuatro';
    			}
    			if (tirada === 5) {
      				primer_dado.style.animationName = 'cinco';
    			}
    			if (tirada === 6) {
      				primer_dado.style.animationName = 'seis';
    			}
		}
		if (segundo_dado) {
			var tirada_2 = Math.floor((Math.random() * 6) + 1);
			if (tirada_2 === 1) {
				segundo_dado.style.animationName = 'uno';
			}
    			if (tirada_2 === 2) {
				segundo_dado.style.animationName = 'dos';
			}
    			if (tirada_2 === 3) {
      				segundo_dado.style.animationName = 'tres';
    			}
    			if (tirada_2 === 4) {
     				segundo_dado.style.animationName = 'cuatro';
    			}
    			if (tirada_2 === 5) {
      				segundo_dado.style.animationName = 'cinco';
    			}
    			if (tirada_2 === 6) {
      				segundo_dado.style.animationName = 'seis';
    			}
		}
  	}, 30);
};



document.querySelector( "#mazo_corto" ).onclick = function () {
        var elect = document.getElementById('eleccion');
        if (elect) { elect.style.display = 'none'; }
        bloque1 = ['1', '2', '3', '4', '5', '6', '7', '8']
        bloque1.shuffle();
        var azul_1d = bloque1[0]
        var azul_2d = bloque1[1]
        var azul_3 = bloque1[2]
        var azul_4 = bloque1[3]
        var azul_5 = bloque1[4]
        var azul_6 = bloque1[5]
        var azul_7 = bloque1[6]
        var azul_8 = bloque1[7]

        bloque1a = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
        bloque1a.shuffle();
        var base_ver1 = bloque1a[0]
        var base_ver2 = bloque1a[1]
        var base_ver3 = bloque1a[2]
        var base_ver4 = bloque1a[3]
        var base_ver5 = bloque1a[4]
        var base_ver6 = bloque1a[5]
        var base_ver7 = bloque1a[6]


        bloque2 = [base_ver1, base_ver2, base_ver3, base_ver4, base_ver5, base_ver6, base_ver7, azul_7, azul_8]
        bloque2.shuffle();
        var verde_1 = bloque2[0]
        var verde_2 = bloque2[1]
        var verde_3 = bloque2[2]
        var verde_4 = bloque2[3]
        var verde_5 = bloque2[4]
        var verde_6 = bloque2[5]
        var verde_7 = bloque2[6]
        var verde_8 = bloque2[7]
        var verde_9 = bloque2[8]

        bloque3 = [verde_1, verde_2, verde_3, '23', verde_4, verde_5, verde_6, '24']
        bloque3.shuffle();
        var verde_1d = bloque3[0]
        var verde_2d = bloque3[1]
        var verde_3d = bloque3[2]
        var verde_4d = bloque3[3]
        var verde_5d = bloque3[4]
        var verde_6d = bloque3[5]
        var verde_7d = bloque3[6]
        var verde_8d = bloque3[7]

        bloque4 = [ '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
        bloque4.shuffle();
        var amarilla_1 = bloque4[0]
        var amarilla_2 = bloque4[1]
        var amarilla_3 = bloque4[2]
        var amarilla_4 = bloque4[3]
        var amarilla_5 = bloque4[4]
        var amarilla_6 = bloque4[5]
        var amarilla_7 = bloque4[6]
        var amarilla_8 = bloque4[7]
        var amarilla_9 = bloque4[8]
        var amarilla_10 = bloque4[9]

        bloque5 = [ amarilla_1, amarilla_2, amarilla_3, verde_7, amarilla_4, amarilla_5, verde_8, amarilla_6, amarilla_7, amarilla_8, amarilla_9, amarilla_10, verde_9]
        bloque5.shuffle();
        var amarilla_1p = bloque5[0]
        var amarilla_2p = bloque5[1]
        var amarilla_3p = bloque5[2]
        var amarilla_4p = bloque5[3]
        var amarilla_5p = bloque5[4]
        var amarilla_6p = bloque5[5]
        var amarilla_7p = bloque5[6]
        var amarilla_8p = bloque5[7]
        var amarilla_9p = bloque5[8]
        var amarilla_10p = bloque5[9]
        var amarilla_11p = bloque5[10]
        var amarilla_12p = bloque5[11]
        var amarilla_13p = bloque5[12]

        bloque6 = [amarilla_1p, amarilla_2p, amarilla_3p, amarilla_4p, amarilla_5p, '46', amarilla_6p, amarilla_7p, amarilla_8p, amarilla_9p, amarilla_10p, '50']
        bloque6.shuffle();
        var amarilla_1d = bloque6[0]
        var amarilla_2d = bloque6[1]
        var amarilla_3d = bloque6[2]
        var amarilla_4d = bloque6[3]
        var amarilla_5d = bloque6[4]
        var amarilla_6d = bloque6[5]
        var amarilla_7d = bloque6[6]
        var amarilla_8d = bloque6[7]
        var amarilla_9d = bloque6[8]
        var amarilla_10d = bloque6[9]
        var amarilla_11d = bloque6[10]
        var amarilla_12d = bloque6[11]

        bloque7 = [ '51', '52', '53', '54', '55', '56']
        bloque7.shuffle();
        var naranja_1p = bloque7[0]
        var naranja_2p = bloque7[1]
        var naranja_3p = bloque7[2]

        bloque8 = [naranja_1p, amarilla_11p, naranja_2p, amarilla_12p, naranja_3p, amarilla_13p]
        bloque8.shuffle();
        var naranja_1pp = bloque8[0]
        var naranja_2pp = bloque8[1]
        var naranja_3pp = bloque8[2]
        var naranja_4pp = bloque8[3]
        var naranja_5pp = bloque8[4]
        var naranja_6pp = bloque8[5]

        bloque9 = [naranja_1pp, '57', naranja_2pp, '58', naranja_3pp, '59']
        bloque9.shuffle();
        var naranja_1d = bloque9[0]
        var naranja_2d = bloque9[1]
        var naranja_3d = bloque9[2]
        var naranja_4d = bloque9[3]
        var naranja_5d = bloque9[4]
        var naranja_6d = bloque9[5]

        bloque10 = [naranja_4pp, naranja_5pp, naranja_6pp]
        bloque10.shuffle();
        var fin_1d = bloque10[0]
        var fin_2d = bloque10[1]
        var fin_3d = bloque10[2]

         
        var juego_corto = new Array();
        juego_corto[0] = 'style/img/es/evento/DOTZ_Dorso_eventos.jpg';
        juego_corto[1] = 'style/img/es/evento/'+azul_1d+'.jpg';
        juego_corto[2] = 'style/img/es/evento/'+azul_2d+'.jpg';
        juego_corto[3] = 'style/img/es/evento/'+verde_1d+'.jpg';
        juego_corto[4] = 'style/img/es/evento/'+verde_2d+'.jpg';
        juego_corto[5] = 'style/img/es/evento/'+verde_3d+'.jpg';
        juego_corto[6] = 'style/img/es/evento/'+verde_4d+'.jpg';
        juego_corto[7] = 'style/img/es/evento/'+verde_5d+'.jpg';
        juego_corto[8] = 'style/img/es/evento/'+verde_6d+'.jpg';
        juego_corto[9] = 'style/img/es/evento/'+verde_7d+'.jpg';
        juego_corto[10] = 'style/img/es/evento/'+verde_8d+'.jpg';
        juego_corto[11] = 'style/img/es/evento/'+amarilla_1d+'.jpg';
        juego_corto[12] = 'style/img/es/evento/'+amarilla_2d+'.jpg';
        juego_corto[13] = 'style/img/es/evento/'+amarilla_3d+'.jpg';
        juego_corto[14] = 'style/img/es/evento/'+amarilla_4d+'.jpg';
        juego_corto[15] = 'style/img/es/evento/'+amarilla_5d+'.jpg';
        juego_corto[16] = 'style/img/es/evento/'+amarilla_6d+'.jpg';
        juego_corto[17] = 'style/img/es/evento/'+amarilla_7d+'.jpg';
        juego_corto[18] = 'style/img/es/evento/'+amarilla_8d+'.jpg';
        juego_corto[19] = 'style/img/es/evento/'+amarilla_9d+'.jpg';
        juego_corto[20] = 'style/img/es/evento/'+amarilla_10d+'.jpg';
        juego_corto[21] = 'style/img/es/evento/'+amarilla_11d+'.jpg';
        juego_corto[22] = 'style/img/es/evento/'+amarilla_12d+'.jpg';
        juego_corto[23] = 'style/img/es/evento/'+naranja_1d+'.jpg';
        juego_corto[24] = 'style/img/es/evento/'+naranja_2d+'.jpg';
        juego_corto[25] = 'style/img/es/evento/'+naranja_3d+'.jpg';
        juego_corto[26] = 'style/img/es/evento/'+naranja_4d+'.jpg';
        juego_corto[27] = 'style/img/es/evento/'+naranja_5d+'.jpg';
        juego_corto[28] = 'style/img/es/evento/'+naranja_6d+'.jpg';
        juego_corto[29] = 'style/img/es/evento/'+fin_1d+'.jpg';
        juego_corto[30] = 'style/img/es/evento/'+fin_2d+'.jpg';
        juego_corto[31] = 'style/img/es/evento/'+fin_3d+'.jpg';

        var smsflechas = document.getElementById('alerta_flechas');
        smsflechas.style.animation = 'palao 15s forwards';

        var prepricarga = document.getElementById('preload');
        prepricarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="style/img/es/evento/'+azul_1d+'.jpg">';
        
        
        var viendo = 0;
        document.querySelector('#alante').onclick = function moviendo(sentido) {
                var imagen_actual = document.getElementById("carta_en_juego");
                var ultima = juego_corto.length - 1;
                var eldata = document.getElementById('marteuse_fijo');
                if (eldata) {
                        var data_marteuse = eldata.getAttribute('data-marteuse');
                        if ((data_marteuse) == (viendo)) {
                        imagen_actual.src = 'style/img/es/evento/46.jpg';
                        alert('Aparece el Doctor Marteuse');
                        eldata.setAttribute('data-marteuse', '');
                        var doc = document.getElementById('doc');
                        if (doc) {doc.style.visibility = 'visible'; }
                        var fijo_doc = document.getElementById('marteuse_fijo');
                        if (fijo_doc) {fijo_doc.style.visibility = 'hidden'; }
                        return false;
                        }
                }
                var laguardiadata = document.getElementById('guardia_mas5');
                if (laguardiadata) {
                        var data_guardia = laguardiadata.getAttribute('data-guardia');
                        	if ((data_guardia) == (viendo)) {
                        		imagen_actual.src = 'style/img/es/evento/59.jpg';
                        		alert('Aparece de nuevo la carta de la Guardia Nacional');
                        		laguardiadata.setAttribute('data-guardia', '')
                        		var anima_cinco = document.getElementById('cinco');
                        		anima_cinco.style.visibility = 'visible';
                        		var laguardia5 = document.getElementById('guardia_cinco');
                        		laguardia5.style.visibility = 'hidden';
                        		var laguardia8 = document.getElementById('ocho');
                        		laguardia8.style.visibility = 'visible';
                        		return false;
                        	}
                        	if (((data_guardia) == (ultima)) && ((viendo) == (juego_corto.length -2 )))  {
                                	alert('Juega la siguiente carta y después llega la Guardia Nacional')
                        	}
                }
                var ultimaguardiadata = document.getElementById('guardia_mas8');
                if (ultimaguardiadata) {
                        var data_guardia = ultimaguardiadata.getAttribute('data-guardia');
                                if (((data_guardia) == (ultima)) && ((viendo) == (juego_corto.length - 2)))  {
                                alert('Juega la siguiente carta y después llega la Guardia Nacional')
                                }
                }
                var sentido = 1;
                var auxiliar = viendo + sentido;
                if(auxiliar < 0) { auxiliar = ultima; }
                if(auxiliar > ultima) { auxiliar = 0; }
                viendo = auxiliar;
                imagen_actual.src = juego_corto[viendo];
                var acto = document.getElementById('acto');
                acto.innerHTML = '<a class="num_carta">'+viendo+'/'+ultima+'</a>'
                document.getElementById('atras').style.visibility = '';
                if (viendo == (juego_corto.length -1)) {
                        document.getElementById('alante').style.visibility = 'hidden';
                }
                if ((juego_corto[viendo]) == ('style/img/es/evento/46.jpg')) {
                        var free_marteuse = document.getElementById('marteuse');
                        free_marteuse.innerHTML = '<a class="marteuse" id="doc"><img class="active" src="style/img/marteuse_active.png"></a>'
                }
                else {
                var doc = document.getElementById('doc');
                        if (doc) { doc.style.visibility = 'hidden'; }
                }
                if ((juego_corto[viendo]) == ('style/img/es/evento/59.jpg')) {
                        var guardia_5 = document.getElementById('cinco');
                        guardia_5.style.visibility = 'visible'; 
                        guardia_5.innerHTML ='<a class="mas_cinco" id="guardia_mas_cinco">5+</a>'
                        var guardia_8 = document.getElementById('ocho');
                        guardia_8.style.visibility = 'visible'; 
                        guardia_8.innerHTML ='<a class="mas_ocho" id="guardia_mas_ocho">8+</a>'
                }
                else {
                      var guardia_5 = document.getElementById('cinco');
                      if (guardia_5) { guardia_5.style.visibility = 'hidden'; } 
                      var guardia_8 = document.getElementById('ocho');
                      if (guardia_8) { guardia_8.style.visibility = 'hidden'; }  
                }
                var precarga = document.getElementById('preload');
                viendomas = auxiliar +1;
                viendomenos = auxiliar -1;
                precarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="">';
                precarga.innerHTML += '<img id="carta_anterior" class="pre_siguiente" src="">';
                var preload = document.getElementById('carta_siguiente');
                var preloadant = document.getElementById('carta_anterior');
                preload.src = juego_corto[viendomas];
                preloadant.src = juego_corto[viendomenos];

               var superzeds = document.getElementById('superzeds');
               if (superzeds) { 
                                        if ((juego_corto[viendo]) == ('style/img/es/evento/23.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="23"><img class="zeds" src="style/img/ravagers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que cuando los Ravagers atacan durante la carta de Evento "Brains!", reciben un 1> en todos sus ataques.')
			                        }
                                        }
                                        else if ((juego_corto[viendo]) == ('style/img/es/evento/42.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="42"><img class="zeds" src="style/img/dread_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que los Dread Zeds es una unidad "dura" por lo que cancelan sus daños con una tira de 4, 5 o 6. Además un ataque exitoso Gunfire con la Super Arma no les hará retroceder.')
			                        }
                                        }
                                        else if ((juego_corto[viendo]) == ('style/img/es/evento/45.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="bufalillos"><img class="zeds" src="style/img/were_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('La unidad Were-Zeds mueve dos espacios e incrementa el nivel de infección en +2 en cada combate cuerpo a cuerpo. Además cuando se cruce con otra unidad Zeds le causará a esta un daño.')
			                        }
                                        }
                                        else if ((juego_corto[viendo]) == ('style/img/es/evento/43.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="43"><img class="zeds" src="style/img/bersekers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que si esta unidad gana un combate y en la casilla adyacente hay un unidad amiga, avanzarán y volverán a atacar.')
			                        }
                                        }
                                        else if ((juego_corto[viendo]) == ('style/img/es/evento/44.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="44"><img class="zeds" src="style/img/leapers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Saltan dos espacios. Si no pueden acceder a la segunda casilla el salto se cancela y mueven normalmente. Al saltar no se les aplica las defensas de Terreno. Con la carta Brains! si el número de esta es par, saltarán al mismo número del camino exterior de la izquierda y al de la derecha si es par.')
			                        }
                                        }
		                        else {
			                        superzeds.innerHTML = ''
		                        }
                }

        }

        document.querySelector('#atras').onclick = function moviendo(sentido) {
                var imagen_actual = document.getElementById("carta_en_juego");
                var ultima = juego_corto.length - 1; 
                var sentido = -1;
                var auxiliar = viendo + sentido;
                if(auxiliar < 0) { auxiliar = ultima; }
                if(auxiliar > ultima) { auxiliar = 0; }
                viendo = auxiliar;
                imagen_actual.src = juego_corto[viendo];
                var acto = document.getElementById('acto');
                acto.innerHTML = '<a class="num_carta">'+viendo+'/'+ultima+'</a>'
                document.getElementById('alante').style.visibility = '';
                if (viendo == (juego_corto.length - juego_corto.length)) {
                document.getElementById('atras').style.visibility = 'hidden';
                }
                if ((juego_corto[viendo]) == ('style/img/es/evento/46.jpg')) {
                        var free_marteuse = document.getElementById('marteuse');
                               free_marteuse.innerHTML = '<a class="marteuse" id="doc"><img class="active" src="style/img/marteuse_active.png"></a>'
                }
                else {
                var doc = document.getElementById('doc');
                        if (doc) { doc.style.visibility = 'hidden'; }
                }
                if ((juego_corto[viendo]) == ('style/img/es/evento/59.jpg')) {
                        var guardia_5 = document.getElementById('cinco');
                        guardia_5.style.visibility = 'visible'; 
                        guardia_5.innerHTML ='<a class="mas_cinco" id="guardia_mas_cinco">5+</a>'
                        var guardia_8 = document.getElementById('ocho');
                        guardia_8.style.visibility = 'visible'; 
                        guardia_8.innerHTML ='<a class="mas_ocho" id="guardia_mas_ocho">8+</a>'
                }
                else {
                      var guardia_5 = document.getElementById('cinco');
                      if (guardia_5) { guardia_5.style.visibility = 'hidden'; } 
                      var guardia_8 = document.getElementById('ocho');
                      if (guardia_8) { guardia_8.style.visibility = 'hidden'; }  
                }
                var precarga = document.getElementById('preload');
                viendomas = auxiliar +1;
                viendomenos = auxiliar -1;
                precarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="">';
                precarga.innerHTML += '<img id="carta_anterior" class="pre_siguiente" src="">';
                var preload = document.getElementById('carta_siguiente');
                var preloadant = document.getElementById('carta_anterior');
                preload.src = juego_corto[viendomas];
                preloadant.src = juego_corto[viendomenos];

               var superzeds = document.getElementById('superzeds');
               if (superzeds) { 
                                        if ((juego_corto[viendo]) == ('style/img/es/evento/23.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="23"><img class="zeds" src="style/img/ravagers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que cuando los Ravagers atacan durante la carta de Evento "Brains!", reciben un 1> en todos sus ataques.')
			                        }
                                        }
                                        else if ((juego_corto[viendo]) == ('style/img/es/evento/42.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="42"><img class="zeds" src="style/img/dread_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que los Dread Zeds es una unidad "dura" por lo que cancelan sus daños con una tira de 4, 5 o 6. Además un ataque exitoso Gunfire con la Super Arma no les hará retroceder.')
			                        }
                                        }
                                        else if ((juego_corto[viendo]) == ('style/img/es/evento/45.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="bufalillos"><img class="zeds" src="style/img/were_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('La unidad Were-Zeds mueve dos espacios e incrementa el nivel de infección en +2 en cada combate cuerpo a cuerpo. Además cuando se cruce con otra unidad Zeds le causará a esta un daño.')
			                        }
                                        }
                                        else if ((juego_corto[viendo]) == ('style/img/es/evento/43.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="43"><img class="zeds" src="style/img/bersekers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que si esta unidad gana un combate y en la casilla adyacente hay un unidad amiga, avanzarán y volverán a atacar.')
			                        }
                                        }
                                        else if ((juego_corto[viendo]) == ('style/img/es/evento/44.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="44"><img class="zeds" src="style/img/leapers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Esta unidad salta dos espacios. Si el salto acaba en un casilla a la que no puede acceder, este cancela y mueve normalmente. Los modificadores de Terreno no le afectan cuando saltan a una casilla. Durante la carta Brains! si el número de esta es par saltarán al mismo número del camino exterior de la izquierda y al de la derecha si es par.')
			                        }
                                        }
		                        else {
			                        superzeds.innerHTML = ''
		                        }
                }

        }


        var nav = document.getElementById('cartas');
        if (nav) { nav.innerHTML = '<img id="carta_en_juego" class="carta" src="style/img/es/evento/DOTZ_Dorso_eventos.jpg">'; }
        if (document.getElementById('cartas').src="style/img/es/evento/DOTZ_Dorso_eventos.jpg") {
                document.getElementById('atras').style.visibility = 'hidden';
                }

        document.querySelector('#marteuse').onclick = function (){
        var doctor = confirm('¿Quieres colocar esta carta en medio del Mazo de Robo?');
                if (doctor == true) { alert('¡Hecho! El Doctor Marteuse volverá a aparecer');
                var carta_marteruse = viendo;
                var cuantas_quedan = (juego_corto.length - 1) - viendo;
                var marteuse_mitad = cuantas_quedan / 2; 
                marteuse_mitad = Math.floor(marteuse_mitad); 
                var nueva_posicion = viendo + marteuse_mitad;
                var fijo_marteuse = document.getElementById('doc_marteuse');
                fijo_marteuse.innerHTML = '<a class="esperando" data-marteuse="'+nueva_posicion+'" id="marteuse_fijo"><img class="active" src="style/img/marteuse_active.png"></a>'  
                }
                else { alert('Opción cancelada. Todo sigue igual');}
        }

        document.querySelector('#cinco').onclick = function (){
        var cinco = confirm('¿Resultado de 5 a 7?');
                if (cinco == true) { 
			alert('¡Hecho! Sigue jugando');
                	var guardia_actura = viendo;
                	var cuantas_faltan = (juego_corto.length - 1) - viendo;
               		var colocacion = Math.floor((Math.random() * cuantas_faltan) + 1);
                	var nueva_59 = viendo + colocacion;
                	var fijo_59 = document.getElementById('guardia_cinco');
                	fijo_59.innerHTML = '<a class="mas_cinco" data-guardia="'+nueva_59+'" id="guardia_mas5">5+</a>'
                	var guardia_5 = document.getElementById('cinco');
                	guardia_5.style.visibility = 'hidden';
			fijo_59.style.visibility = 'visible'; 
                }
        }
        document.querySelector('#ocho').onclick = function (){
        var ocho = confirm('¿Resultado de 8 o más?');
                if (ocho == true) { 
                alert('¡Hecho! Sigue jugando');
                var ultima_59 = document.getElementById('guardia_ocho');
                ultima = juego_corto.length - 1;
                ultima_59.innerHTML = '<a class="mas_ocho" data-guardia="'+ultima+'" id="guardia_mas8">8+</a>'
                var guardia_8 = document.getElementById('ocho');
                guardia_8.style.visibility = 'hidden';                
                }
        }
};

document.querySelector( "#mazo_normal" ).onclick = function () {
        var elect = document.getElementById('eleccion');
        if (elect) { elect.style.display = 'none'; }
        bloque1 = ['1', '2', '3', '4', '5', '6', '7', '8']
        bloque1.shuffle();
        var azul_1d = bloque1[0]
        var azul_2d = bloque1[1]
        var azul_3d = bloque1[2]
        var azul_4 = bloque1[3]
        var azul_5 = bloque1[4]
        var azul_6 = bloque1[5]
        var azul_7 = bloque1[6]
        var azul_8 = bloque1[7]

        bloque1a = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
        bloque1a.shuffle();
        var base_ver1 = bloque1a[0]
        var base_ver2 = bloque1a[1]
        var base_ver3 = bloque1a[2]
        var base_ver4 = bloque1a[3]
        var base_ver5 = bloque1a[4]
        var base_ver6 = bloque1a[5]
        var base_ver7 = bloque1a[6]
        var base_ver8 = bloque1a[7]
        var base_ver9 = bloque1a[8]
        var base_ver10 = bloque1a[9]

        bloque2 = [base_ver1, base_ver2, base_ver3, base_ver4, base_ver5, base_ver6, base_ver7, base_ver8, base_ver9, base_ver10, azul_6, azul_7, azul_8]
        bloque2.shuffle();
        var verde_1 = bloque2[0]
        var verde_2 = bloque2[1]
        var verde_3 = bloque2[2]
        var verde_4 = bloque2[3]
        var verde_5 = bloque2[4]
        var verde_6 = bloque2[5]
        var verde_7 = bloque2[6]
        var verde_8 = bloque2[7]
        var verde_9 = bloque2[8]
        var verde_10 = bloque2[9]
        var verde_11 = bloque2[10]
        var verde_12 = bloque2[11]
        var verde_13 = bloque2[12]

        bloque3 = [verde_1, verde_2, verde_3, '23', verde_4, verde_5, verde_6, '24', verde_7, verde_8, verde_9]
        bloque3.shuffle();
        var verde_1d = bloque3[0]
        var verde_2d = bloque3[1]
        var verde_3d = bloque3[2]
        var verde_4d = bloque3[3]
        var verde_5d = bloque3[4]
        var verde_6d = bloque3[5]
        var verde_7d = bloque3[6]
        var verde_8d = bloque3[7]
        var verde_9d = bloque3[8]
        var verde_10d = bloque3[9]
        var verde_11d = bloque3[10]

        bloque4 = [ '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
        bloque4.shuffle();
        var amarilla_1 = bloque4[0]
        var amarilla_2 = bloque4[1]
        var amarilla_3 = bloque4[2]
        var amarilla_4 = bloque4[3]
        var amarilla_5 = bloque4[4]
        var amarilla_6 = bloque4[5]
        var amarilla_7 = bloque4[6]
        var amarilla_8 = bloque4[7]
        var amarilla_9 = bloque4[8]
        var amarilla_10 = bloque4[9]
        var amarilla_11 = bloque4[10]
        var amarilla_12 = bloque4[11]
        var amarilla_13 = bloque4[12]
        var amarilla_14 = bloque4[13]
        var amarilla_15 = bloque4[14]

        bloque5 = [ amarilla_1, amarilla_2, amarilla_3, verde_13, amarilla_4, amarilla_5, verde_12, amarilla_6, amarilla_7, amarilla_8, amarilla_9, amarilla_10, verde_11, amarilla_11, amarilla_12, verde_10, amarilla_13, amarilla_14, amarilla_15]
        bloque5.shuffle();
        var amarilla_1p = bloque5[0]
        var amarilla_2p = bloque5[1]
        var amarilla_3p = bloque5[2]
        var amarilla_4p = bloque5[3]
        var amarilla_5p = bloque5[4]
        var amarilla_6p = bloque5[5]
        var amarilla_7p = bloque5[6]
        var amarilla_8p = bloque5[7]
        var amarilla_9p = bloque5[8]
        var amarilla_10p = bloque5[9]
        var amarilla_11p = bloque5[10]
        var amarilla_12p = bloque5[11]
        var amarilla_13p = bloque5[12]
        var amarilla_14p = bloque5[13]
        var amarilla_15p = bloque5[14]
        var amarilla_16p = bloque5[15]
        var amarilla_17p = bloque5[16]
        var amarilla_18p = bloque5[17]
        var amarilla_19p = bloque5[18]

        bloque6 = [amarilla_1p, amarilla_2p, amarilla_3p, amarilla_4p, amarilla_5p, '46', amarilla_6p, amarilla_7p, amarilla_8p, amarilla_9p, amarilla_10p, '50', amarilla_11p, amarilla_12p, '48', amarilla_13p, amarilla_14p, amarilla_15p, '49']
        bloque6.shuffle();
        var amarilla_1d = bloque6[0]
        var amarilla_2d = bloque6[1]
        var amarilla_3d = bloque6[2]
        var amarilla_4d = bloque6[3]
        var amarilla_5d = bloque6[4]
        var amarilla_6d = bloque6[5]
        var amarilla_7d = bloque6[6]
        var amarilla_8d = bloque6[7]
        var amarilla_9d = bloque6[8]
        var amarilla_10d = bloque6[9]
        var amarilla_11d = bloque6[10]
        var amarilla_12d = bloque6[11]
        var amarilla_13d = bloque6[12]
        var amarilla_14d = bloque6[13]
        var amarilla_15d = bloque6[14]
        var amarilla_16d = bloque6[15]
        var amarilla_17d = bloque6[16]
        var amarilla_18d = bloque6[17]
        var amarilla_19d = bloque6[18]

        bloque7 = [ '51', '52', '53', '54', '55', '56']
        bloque7.shuffle();
        var naranja_1p = bloque7[0]
        var naranja_2p = bloque7[1]
        var naranja_3p = bloque7[2]
        var naranja_4p = bloque7[2]

        bloque8 = [naranja_1p, amarilla_19p, naranja_2p, amarilla_18p, naranja_3p, amarilla_17p, naranja_4p, amarilla_16p]
        bloque8.shuffle();
        var naranja_1pp = bloque8[0]
        var naranja_2pp = bloque8[1]
        var naranja_3pp = bloque8[2]
        var naranja_4pp = bloque8[3]
        var naranja_5pp = bloque8[4]
        var naranja_6pp = bloque8[5]
        var naranja_7pp = bloque8[6]
        var naranja_8pp = bloque8[7]

        bloque9 = [naranja_1pp, '57', naranja_2pp, '58', naranja_3pp, '59', naranja_4pp, naranja_5pp]
        bloque9.shuffle();
        var naranja_1d = bloque9[0]
        var naranja_2d = bloque9[1]
        var naranja_3d = bloque9[2]
        var naranja_4d = bloque9[3]
        var naranja_5d = bloque9[4]
        var naranja_6d = bloque9[5]
        var naranja_7d = bloque9[5]
        var naranja_8d = bloque9[5]

        bloque10 = [naranja_6pp, naranja_7pp, naranja_8pp]
        bloque10.shuffle();
        var fin_1d = bloque10[0]
        var fin_2d = bloque10[1]
        var fin_3d = bloque10[2]
         
        var juego_normal = new Array();
        juego_normal[0] = 'style/img/es/evento/DOTZ_Dorso_eventos.jpg';
        juego_normal[1] = 'style/img/es/evento/'+azul_1d+'.jpg';
        juego_normal[2] = 'style/img/es/evento/'+azul_2d+'.jpg';
        juego_normal[3] = 'style/img/es/evento/'+azul_3d+'.jpg';
        juego_normal[4] = 'style/img/es/evento/'+verde_1d+'.jpg';
        juego_normal[5] = 'style/img/es/evento/'+verde_2d+'.jpg';
        juego_normal[6] = 'style/img/es/evento/'+verde_3d+'.jpg';
        juego_normal[7] = 'style/img/es/evento/'+verde_4d+'.jpg';
        juego_normal[8] = 'style/img/es/evento/'+verde_5d+'.jpg';
        juego_normal[9] = 'style/img/es/evento/'+verde_6d+'.jpg';
        juego_normal[10] = 'style/img/es/evento/'+verde_7d+'.jpg';
        juego_normal[11] = 'style/img/es/evento/'+verde_8d+'.jpg';
        juego_normal[12] = 'style/img/es/evento/'+verde_9d+'.jpg';
        juego_normal[13] = 'style/img/es/evento/'+verde_10d+'.jpg';
        juego_normal[14] = 'style/img/es/evento/'+verde_11d+'.jpg';
        juego_normal[15] = 'style/img/es/evento/'+amarilla_1d+'.jpg';
        juego_normal[16] = 'style/img/es/evento/'+amarilla_2d+'.jpg';
        juego_normal[17] = 'style/img/es/evento/'+amarilla_3d+'.jpg';
        juego_normal[18] = 'style/img/es/evento/'+amarilla_4d+'.jpg';
        juego_normal[19] = 'style/img/es/evento/'+amarilla_5d+'.jpg';
        juego_normal[20] = 'style/img/es/evento/'+amarilla_6d+'.jpg';
        juego_normal[21] = 'style/img/es/evento/'+amarilla_7d+'.jpg';
        juego_normal[22] = 'style/img/es/evento/'+amarilla_8d+'.jpg';
        juego_normal[23] = 'style/img/es/evento/'+amarilla_9d+'.jpg';
        juego_normal[24] = 'style/img/es/evento/'+amarilla_10d+'.jpg';
        juego_normal[25] = 'style/img/es/evento/'+amarilla_11d+'.jpg';
        juego_normal[26] = 'style/img/es/evento/'+amarilla_12d+'.jpg';
        juego_normal[27] = 'style/img/es/evento/'+amarilla_13d+'.jpg';
        juego_normal[28] = 'style/img/es/evento/'+amarilla_14d+'.jpg';
        juego_normal[29] = 'style/img/es/evento/'+amarilla_15d+'.jpg';
        juego_normal[30] = 'style/img/es/evento/'+amarilla_16d+'.jpg';
        juego_normal[31] = 'style/img/es/evento/'+amarilla_17d+'.jpg';
        juego_normal[32] = 'style/img/es/evento/'+amarilla_18d+'.jpg';
        juego_normal[33] = 'style/img/es/evento/'+amarilla_19d+'.jpg';
        juego_normal[34] = 'style/img/es/evento/'+naranja_1d+'.jpg';
        juego_normal[35] = 'style/img/es/evento/'+naranja_2d+'.jpg';
        juego_normal[36] = 'style/img/es/evento/'+naranja_3d+'.jpg';
        juego_normal[37] = 'style/img/es/evento/'+naranja_4d+'.jpg';
        juego_normal[38] = 'style/img/es/evento/'+naranja_5d+'.jpg';
        juego_normal[39] = 'style/img/es/evento/'+naranja_6d+'.jpg';
        juego_normal[40] = 'style/img/es/evento/'+naranja_7d+'.jpg';
        juego_normal[41] = 'style/img/es/evento/'+naranja_8d+'.jpg';
        juego_normal[42] = 'style/img/es/evento/'+fin_1d+'.jpg';
        juego_normal[43] = 'style/img/es/evento/'+fin_2d+'.jpg';
        juego_normal[44] = 'style/img/es/evento/'+fin_3d+'.jpg';

        var smsflechas = document.getElementById('alerta_flechas');
        smsflechas.style.animation = 'palao 15s forwards';

        var prepricarga = document.getElementById('preload');
        prepricarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="style/img/es/evento/'+azul_1d+'.jpg">';
        
        
        var viendo = 0;
        document.querySelector('#alante').onclick = function moviendo(sentido) {
                var imagen_actual = document.getElementById("carta_en_juego");
                var ultima = juego_normal.length - 1;
                var eldata = document.getElementById('marteuse_fijo');
                if (eldata) {
                        var data_marteuse = eldata.getAttribute('data-marteuse');
                        if ((data_marteuse) == (viendo)) {
                        imagen_actual.src = 'style/img/es/evento/46.jpg';
                        alert('Aparece el Doctor Marteuse');
                        eldata.setAttribute('data-marteuse', '');
                        var doc = document.getElementById('doc');
                        if (doc) {doc.style.visibility = 'visible'; }
                        var fijo_doc = document.getElementById('marteuse_fijo');
                        if (fijo_doc) {fijo_doc.style.visibility = 'hidden'; }
                        return false;
                        }
                }
                var laguardiadata = document.getElementById('guardia_mas5');
                if (laguardiadata) {
                        var data_guardia = laguardiadata.getAttribute('data-guardia');
                        if ((data_guardia) == (viendo)) {
                        imagen_actual.src = 'style/img/es/evento/59.jpg';
                        alert('Aparece de nuevo la carta de la Guardia Nacional');
                        laguardiadata.setAttribute('data-guardia', '')
                        var anima_cinco = document.getElementById('cinco');
                        anima_cinco.style.visibility = 'visible';
                        var laguardia5 = document.getElementById('guardia_cinco');
                        laguardia5.style.visibility = 'hidden';
                        var laguardia8 = document.getElementById('ocho');
                        laguardia8.style.visibility = 'visible';
                        return false;
                        }
                        if (((data_guardia) == (ultima)) && ((viendo) == (juego_normal.length -2 )))  {
                                alert('Juega la siguiente carta y después llega la Guardia Nacional')
                        }
                }
                var ultimaguardiadata = document.getElementById('guardia_mas8');
                if (ultimaguardiadata) {
                        var data_guardia = ultimaguardiadata.getAttribute('data-guardia');
                                if (((data_guardia) == (ultima)) && ((viendo) == (juego_normal.length - 2)))  {
                                alert('Juega la siguiente carta y después llega la Guardia Nacional')
                                }
                }
                var sentido = 1;
                var auxiliar = viendo + sentido;
                if(auxiliar < 0) { auxiliar = ultima; }
                if(auxiliar > ultima) { auxiliar = 0; }
                viendo = auxiliar;
                imagen_actual.src = juego_normal[viendo];
                var acto = document.getElementById('acto');
                acto.innerHTML = '<a class="num_carta">'+viendo+'/'+ultima+'</a>'
                document.getElementById('atras').style.visibility = '';
                if (viendo == (juego_normal.length -1)) {
                        document.getElementById('alante').style.visibility = 'hidden';
                }
                if ((juego_normal[viendo]) == ('style/img/es/evento/46.jpg')) {
                        var free_marteuse = document.getElementById('marteuse');
                        free_marteuse.innerHTML = '<a class="marteuse" id="doc"><img class="active" src="style/img/marteuse_active.png"></a>'
                }
                else {
                var doc = document.getElementById('doc');
                        if (doc) { doc.style.visibility = 'hidden'; }
                }
                if ((juego_normal[viendo]) == ('style/img/es/evento/59.jpg')) {
                        var guardia_5 = document.getElementById('cinco');
                        guardia_5.style.visibility = 'visible'; 
                        guardia_5.innerHTML ='<a class="mas_cinco" id="guardia_mas_cinco">5+</a>'
                        var guardia_8 = document.getElementById('ocho');
                        guardia_8.style.visibility = 'visible'; 
                        guardia_8.innerHTML ='<a class="mas_ocho" id="guardia_mas_ocho">8+</a>'
                }
                else {
                      var guardia_5 = document.getElementById('cinco');
                      if (guardia_5) { guardia_5.style.visibility = 'hidden'; } 
                      var guardia_8 = document.getElementById('ocho');
                      if (guardia_8) { guardia_8.style.visibility = 'hidden'; }  
                }
                var precarga = document.getElementById('preload');
                viendomas = auxiliar +1;
                viendomenos = auxiliar -1;
                precarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="">';
                precarga.innerHTML += '<img id="carta_anterior" class="pre_siguiente" src="">';
                var preload = document.getElementById('carta_siguiente');
                var preloadant = document.getElementById('carta_anterior');
                preload.src = juego_normal[viendomas];
                preloadant.src = juego_normal[viendomenos]; 

               var superzeds = document.getElementById('superzeds');
               if (superzeds) { 
                                        if ((juego_corto[viendo]) == ('style/img/es/evento/23.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="23"><img class="zeds" src="style/img/ravagers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que cuando los Ravagers atacan durante la carta de Evento "Brains!", reciben un 1> en todos sus ataques.')
			                        }
                                        }
                                        else if ((juego_normal[viendo]) == ('style/img/es/evento/42.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="42"><img class="zeds" src="style/img/dread_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que los Dread Zeds es una unidad "dura" por lo que cancelan sus daños con una tira de 4, 5 o 6. Además un ataque exitoso Gunfire con la Super Arma no les hará retroceder.')
			                        }
                                        }
                                        else if ((juego_normal[viendo]) == ('style/img/es/evento/45.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="bufalillos"><img class="zeds" src="style/img/were_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('La unidad Were-Zeds mueve dos espacios e incrementa el nivel de infección en +2 en cada combate cuerpo a cuerpo. Además cuando se cruce con otra unidad Zeds le causará a esta un daño.')
			                        }
                                        }
                                        else if ((juego_normal[viendo]) == ('style/img/es/evento/43.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="43"><img class="zeds" src="style/img/bersekers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que si esta unidad gana un combate y en la casilla adyacente hay un unidad amiga, avanzarán y volverán a atacar.')
			                        }
                                        }
                                        else if ((juego_normal[viendo]) == ('style/img/es/evento/44.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="44"><img class="zeds" src="style/img/leapers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Esta unidad salta dos espacios. Si el salto acaba en un casilla a la que no puede acceder, este cancela y mueve normalmente. Los modificadores de Terreno no le afectan cuando saltan a una casilla. Durante la carta Brains! si el número de esta es par saltarán al mismo número del camino exterior de la izquierda y al de la derecha si es par.')
			                        }
                                        }
		                        else {
			                        superzeds.innerHTML = ''
		                        }
                }
             
        }

        document.querySelector('#atras').onclick = function moviendo(sentido) {
                var imagen_actual = document.getElementById("carta_en_juego");
                var ultima = juego_normal.length - 1; 
                var sentido = -1;
                var auxiliar = viendo + sentido;
                if(auxiliar < 0) { auxiliar = ultima; }
                if(auxiliar > ultima) { auxiliar = 0; }
                viendo = auxiliar;
                imagen_actual.src = juego_normal[viendo];
                var acto = document.getElementById('acto');
                acto.innerHTML = '<a class="num_carta">'+viendo+'/'+ultima+'</a>'
                document.getElementById('alante').style.visibility = '';
                if (viendo == (juego_normal.length - juego_normal.length)) {
                document.getElementById('atras').style.visibility = 'hidden';
                }
                if ((juego_normal[viendo]) == ('style/img/es/evento/46.jpg')) {
                        var free_marteuse = document.getElementById('marteuse');
                               free_marteuse.innerHTML = '<a class="marteuse" id="doc"><img class="active" src="style/img/marteuse_active.png"></a>'
                }
                else {
                var doc = document.getElementById('doc');
                        if (doc) { doc.style.visibility = 'hidden'; }
                }
                if ((juego_normal[viendo]) == ('style/img/es/evento/59.jpg')) {
                        var guardia_5 = document.getElementById('cinco');
                        guardia_5.style.visibility = 'visible'; 
                        guardia_5.innerHTML ='<a class="mas_cinco" id="guardia_mas_cinco">5+</a>'
                        var guardia_8 = document.getElementById('ocho');
                        guardia_8.style.visibility = 'visible'; 
                        guardia_8.innerHTML ='<a class="mas_ocho" id="guardia_mas_ocho">8+</a>'
                }
                else {
                      var guardia_5 = document.getElementById('cinco');
                      if (guardia_5) { guardia_5.style.visibility = 'hidden'; } 
                      var guardia_8 = document.getElementById('ocho');
                      if (guardia_8) { guardia_8.style.visibility = 'hidden'; }  
                }
                var precarga = document.getElementById('preload');
                viendomas = auxiliar +1;
                viendomenos = auxiliar -1;
                precarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="">';
                precarga.innerHTML += '<img id="carta_anterior" class="pre_siguiente" src="">';
                var preload = document.getElementById('carta_siguiente');
                var preloadant = document.getElementById('carta_anterior');
                preload.src = juego_normal[viendomas];
                preloadant.src = juego_normal[viendomenos];

               var superzeds = document.getElementById('superzeds');
               if (superzeds) { 
                                        if ((juego_corto[viendo]) == ('style/img/es/evento/23.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="23"><img class="zeds" src="style/img/ravagers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que cuando los Ravagers atacan durante la carta de Evento "Brains!", reciben un 1> en todos sus ataques.')
			                        }
                                        }
                                        else if ((juego_normal[viendo]) == ('style/img/es/evento/42.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="42"><img class="zeds" src="style/img/dread_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que los Dread Zeds es una unidad "dura" por lo que cancelan sus daños con una tira de 4, 5 o 6. Además un ataque exitoso Gunfire con la Super Arma no les hará retroceder.')
			                        }
                                        }
                                        else if ((juego_normal[viendo]) == ('style/img/es/evento/45.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="bufalillos"><img class="zeds" src="style/img/were_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('La unidad Were-Zeds mueve dos espacios e incrementa el nivel de infección en +2 en cada combate cuerpo a cuerpo. Además cuando se cruce con otra unidad Zeds le causará a esta un daño.')
			                        }
                                        }
                                        else if ((juego_normal[viendo]) == ('style/img/es/evento/43.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="43"><img class="zeds" src="style/img/bersekers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que si esta unidad gana un combate y en la casilla adyacente hay un unidad amiga, avanzarán y volverán a atacar.')
			                        }
                                        }
                                        else if ((juego_normal[viendo]) == ('style/img/es/evento/44.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="44"><img class="zeds" src="style/img/leapers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Esta unidad salta dos espacios. Si el salto acaba en un casilla a la que no puede acceder, este cancela y mueve normalmente. Los modificadores de Terreno no le afectan cuando saltan a una casilla. Durante la carta Brains! si el número de esta es par saltarán al mismo número del camino exterior de la izquierda y al de la derecha si es par.')
			                        }
                                        }
		                        else {
			                        superzeds.innerHTML = ''
		                        }
                }
        }


        var nav = document.getElementById('cartas');
        if (nav) { nav.innerHTML = '<img id="carta_en_juego" class="carta" src="style/img/es/evento/DOTZ_Dorso_eventos.jpg">'; }
        if (document.getElementById('cartas').src="style/img/es/evento/DOTZ_Dorso_eventos.jpg") {
                document.getElementById('atras').style.visibility = 'hidden';
                }

        document.querySelector('#marteuse').onclick = function (){
        var doctor = confirm('¿Quieres colocar esta carta en medio del Mazo de Robo?');
                if (doctor == true) { alert('¡Hecho! El Doctor Marteuse volverá a aparecer');
                var carta_marteruse = viendo;
                var cuantas_quedan = (juego_normal.length - 1) - viendo;
                var marteuse_mitad = cuantas_quedan / 2; 
                marteuse_mitad = Math.floor(marteuse_mitad); 
                var nueva_posicion = viendo + marteuse_mitad;
                var fijo_marteuse = document.getElementById('doc_marteuse');
                fijo_marteuse.innerHTML = '<a class="esperando" data-marteuse="'+nueva_posicion+'" id="marteuse_fijo"><img class="active" src="style/img/marteuse_active.png"></a>'  
                }
                else { alert('Opción cancelada. Todo sigue igual');}
        }

        document.querySelector('#cinco').onclick = function (){
        var cinco = confirm('¿Resultado de 5 a 7?');
                if (cinco == true) { alert('¡Hecho! Sigue jugando');
                var guardia_actura = viendo;
                var cuantas_faltan = (juego_normal.length - 1) - viendo;
                var colocacion = Math.floor((Math.random() * cuantas_faltan) + 1);
                var nueva_59 = viendo + colocacion;
                var fijo_59 = document.getElementById('guardia_cinco');
                fijo_59.innerHTML = '<a class="mas_cinco" data-guardia="'+nueva_59+'" id="guardia_mas5">5+</a>'
                var guardia_5 = document.getElementById('cinco');
                guardia_5.style.visibility = 'hidden'; 
                }
        }
        document.querySelector('#ocho').onclick = function (){
        var ocho = confirm('¿Resultado de 8 o más?');
                if (ocho == true) { 
                alert('¡Hecho! Sigue jugando');
                var ultima_59 = document.getElementById('guardia_ocho');
                ultima = juego_normal.length - 1;
                ultima_59.innerHTML = '<a class="mas_ocho" data-guardia="'+ultima+'" id="guardia_mas8">8+</a>'
                var guardia_8 = document.getElementById('ocho');
                guardia_8.style.visibility = 'hidden';                
                }
        }
};

document.querySelector( "#mazo_campana" ).onclick = function () {
        var elect = document.getElementById('eleccion');
        if (elect) { elect.style.display = 'none'; }
        bloque1 = ['1', '2', '3', '4', '5', '6', '7', '8']
        bloque1.shuffle();
        var azul_1d = bloque1[0]
        var azul_2d = bloque1[1]
        var azul_3d = bloque1[2]
        var azul_4d = bloque1[3]
        var azul_5 = bloque1[4]
        var azul_6 = bloque1[5]
        var azul_7 = bloque1[6]
        var azul_8 = bloque1[7]

        bloque1a = ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
        bloque1a.shuffle();
        var base_ver1 = bloque1a[0]
        var base_ver2 = bloque1a[1]
        var base_ver3 = bloque1a[2]
        var base_ver4 = bloque1a[3]
        var base_ver5 = bloque1a[4]
        var base_ver6 = bloque1a[5]
        var base_ver7 = bloque1a[6]
        var base_ver8 = bloque1a[7]
        var base_ver9 = bloque1a[8]
        var base_ver10 = bloque1a[9]
        var base_ver11 = bloque1a[10]
        var base_ver12 = bloque1a[11]
        var base_ver13 = bloque1a[12]
        var base_ver14 = bloque1a[13]

        bloque2 = [base_ver1, base_ver2, base_ver3, base_ver4, base_ver5, base_ver6, base_ver7, base_ver8, base_ver9, base_ver10, base_ver11, base_ver12, base_ver13, base_ver14, azul_5, azul_6, azul_7, azul_8]
        bloque2.shuffle();
        var verde_1 = bloque2[0]
        var verde_2 = bloque2[1]
        var verde_3 = bloque2[2]
        var verde_4 = bloque2[3]
        var verde_5 = bloque2[4]
        var verde_6 = bloque2[5]
        var verde_7 = bloque2[6]
        var verde_8 = bloque2[7]
        var verde_9 = bloque2[8]
        var verde_10 = bloque2[9]
        var verde_11 = bloque2[10]
        var verde_12 = bloque2[11]
        var verde_13 = bloque2[12]
        var verde_14 = bloque2[13]
        var verde_15 = bloque2[14]
        var verde_16 = bloque2[15]
        var verde_17 = bloque2[16]
        var verde_18 = bloque2[17]

        bloque3 = [verde_1, verde_2, verde_3, '23', verde_4, verde_5, verde_6, '24', verde_7, verde_8, verde_9, '25', verde_10, verde_11, verde_12]
        bloque3.shuffle();
        var verde_1d = bloque3[0]
        var verde_2d = bloque3[1]
        var verde_3d = bloque3[2]
        var verde_4d = bloque3[3]
        var verde_5d = bloque3[4]
        var verde_6d = bloque3[5]
        var verde_7d = bloque3[6]
        var verde_8d = bloque3[7]
        var verde_9d = bloque3[8]
        var verde_10d = bloque3[9]
        var verde_11d = bloque3[10]
        var verde_12d = bloque3[11]
        var verde_13d = bloque3[12]
        var verde_14d = bloque3[13]
        var verde_15d = bloque3[14]

        bloque4 = [ '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
        bloque4.shuffle();
        var amarilla_1 = bloque4[0]
        var amarilla_2 = bloque4[1]
        var amarilla_3 = bloque4[2]
        var amarilla_4 = bloque4[3]
        var amarilla_5 = bloque4[4]
        var amarilla_6 = bloque4[5]
        var amarilla_7 = bloque4[6]
        var amarilla_8 = bloque4[7]
        var amarilla_9 = bloque4[8]
        var amarilla_10 = bloque4[9]
        var amarilla_11 = bloque4[10]
        var amarilla_12 = bloque4[11]
        var amarilla_13 = bloque4[12]
        var amarilla_14 = bloque4[13]
        var amarilla_15 = bloque4[14]
        var amarilla_16 = bloque4[15]
        var amarilla_17 = bloque4[16]
        var amarilla_18 = bloque4[17]
        var amarilla_19 = bloque4[18]
        var amarilla_20 = bloque4[19]

        bloque5 = [ amarilla_1, amarilla_2, amarilla_3, verde_16, amarilla_4, amarilla_5, verde_13, amarilla_6, amarilla_7, amarilla_8, amarilla_9, amarilla_10, verde_14, amarilla_11, amarilla_12, verde_15, amarilla_13, amarilla_14, amarilla_15, verde_15, amarilla_16, amarilla_17, verde_17, amarilla_18, amarilla_19, amarilla_20, verde_18]
        bloque5.shuffle();
        var amarilla_1p = bloque5[0]
        var amarilla_2p = bloque5[1]
        var amarilla_3p = bloque5[2]
        var amarilla_4p = bloque5[3]
        var amarilla_5p = bloque5[4]
        var amarilla_6p = bloque5[5]
        var amarilla_7p = bloque5[6]
        var amarilla_8p = bloque5[7]
        var amarilla_9p = bloque5[8]
        var amarilla_10p = bloque5[9]
        var amarilla_11p = bloque5[10]
        var amarilla_12p = bloque5[11]
        var amarilla_13p = bloque5[12]
        var amarilla_14p = bloque5[13]
        var amarilla_15p = bloque5[14]
        var amarilla_16p = bloque5[15]
        var amarilla_17p = bloque5[16]
        var amarilla_18p = bloque5[17]
        var amarilla_19p = bloque5[18]
        var amarilla_20p = bloque5[19]
        var amarilla_21p = bloque5[20]
        var amarilla_22p = bloque5[21]
        var amarilla_23p = bloque5[22]
        var amarilla_24p = bloque5[23]
        var amarilla_25p = bloque5[24]
        var amarilla_26p = bloque5[25]

        bloque6 = [amarilla_1p, amarilla_2p, amarilla_3p, amarilla_4p, amarilla_5p, '46', amarilla_6p, amarilla_7p, amarilla_8p, amarilla_9p, amarilla_10p, '50', amarilla_11p, amarilla_12p, '48', amarilla_13p, amarilla_14p, amarilla_15p, '49', amarilla_16p, amarilla_17p, amarilla_18p, amarilla_19p, amarilla_20p, '47']
        bloque6.shuffle();
        var amarilla_1d = bloque6[0]
        var amarilla_2d = bloque6[1]
        var amarilla_3d = bloque6[2]
        var amarilla_4d = bloque6[3]
        var amarilla_5d = bloque6[4]
        var amarilla_6d = bloque6[5]
        var amarilla_7d = bloque6[6]
        var amarilla_8d = bloque6[7]
        var amarilla_9d = bloque6[8]
        var amarilla_10d = bloque6[9]
        var amarilla_11d = bloque6[10]
        var amarilla_12d = bloque6[11]
        var amarilla_13d = bloque6[12]
        var amarilla_14d = bloque6[13]
        var amarilla_15d = bloque6[14]
        var amarilla_16d = bloque6[15]
        var amarilla_17d = bloque6[16]
        var amarilla_18d = bloque6[17]
        var amarilla_19d = bloque6[18]
        var amarilla_20d = bloque6[19]
        var amarilla_21d = bloque6[20]
        var amarilla_22d = bloque6[21]
        var amarilla_23d = bloque6[22]
        var amarilla_24d = bloque6[23]
        var amarilla_25d = bloque6[24]

        bloque7 = [ '51', '52', '53', '54', '55', '56']
        bloque7.shuffle();
        var naranja_1p = bloque7[0]
        var naranja_2p = bloque7[1]
        var naranja_3p = bloque7[2]
        var naranja_4p = bloque7[3]
        var naranja_5p = bloque7[4]
        var naranja_6p = bloque7[5]

        bloque8 = [naranja_1p, amarilla_21p, naranja_2p, amarilla_22p, naranja_3p, amarilla_23p, naranja_4p, amarilla_24p, amarilla_25p, naranja_5p, amarilla_26p, naranja_6p]
        bloque8.shuffle();
        var naranja_1pp = bloque8[0]
        var naranja_2pp = bloque8[1]
        var naranja_3pp = bloque8[2]
        var naranja_4pp = bloque8[3]
        var naranja_5pp = bloque8[4]
        var naranja_6pp = bloque8[5]
        var naranja_7pp = bloque8[6]
        var naranja_8pp = bloque8[7]
        var naranja_9pp = bloque8[8]
        var naranja_10pp = bloque8[9]
        var naranja_11pp = bloque8[10]
        var naranja_12pp = bloque8[11]

        bloque9 = [naranja_1pp, '57', naranja_2pp, '58', naranja_3pp, '59', naranja_4pp, naranja_5pp, naranja_6pp, naranja_7pp]
        bloque9.shuffle();
        var naranja_1d = bloque9[0]
        var naranja_2d = bloque9[1]
        var naranja_3d = bloque9[2]
        var naranja_4d = bloque9[3]
        var naranja_5d = bloque9[4]
        var naranja_6d = bloque9[5]
        var naranja_7d = bloque9[6]
        var naranja_8d = bloque9[7]
        var naranja_9d = bloque9[8]
        var naranja_10d = bloque9[9]

        bloque10 = [naranja_8pp, naranja_9pp, naranja_10pp, naranja_11pp, naranja_12pp]
        bloque10.shuffle();
        var fin_1d = bloque10[0]
        var fin_2d = bloque10[1]
        var fin_3d = bloque10[2]
        var fin_4d = bloque10[3]
        var fin_5d = bloque10[4]
         
        var juego_campana = new Array();
        juego_campana[0] = 'style/img/es/evento/DOTZ_Dorso_eventos.jpg';
        juego_campana[1] = 'style/img/es/evento/'+azul_1d+'.jpg';
        juego_campana[2] = 'style/img/es/evento/'+azul_2d+'.jpg';
        juego_campana[3] = 'style/img/es/evento/'+azul_3d+'.jpg';
        juego_campana[4] = 'style/img/es/evento/'+azul_4d+'.jpg';
        juego_campana[5] = 'style/img/es/evento/'+verde_1d+'.jpg';
        juego_campana[6] = 'style/img/es/evento/'+verde_2d+'.jpg';
        juego_campana[7] = 'style/img/es/evento/'+verde_3d+'.jpg';
        juego_campana[8] = 'style/img/es/evento/'+verde_4d+'.jpg';
        juego_campana[9] = 'style/img/es/evento/'+verde_5d+'.jpg';
        juego_campana[10] = 'style/img/es/evento/'+verde_6d+'.jpg';
        juego_campana[11] = 'style/img/es/evento/'+verde_7d+'.jpg';
        juego_campana[12] = 'style/img/es/evento/'+verde_8d+'.jpg';
        juego_campana[13] = 'style/img/es/evento/'+verde_9d+'.jpg';
        juego_campana[14] = 'style/img/es/evento/'+verde_10d+'.jpg';
        juego_campana[15] = 'style/img/es/evento/'+verde_11d+'.jpg';
        juego_campana[16] = 'style/img/es/evento/'+verde_12d+'.jpg';
        juego_campana[17] = 'style/img/es/evento/'+verde_13d+'.jpg';
        juego_campana[18] = 'style/img/es/evento/'+verde_14d+'.jpg';
        juego_campana[19] = 'style/img/es/evento/'+verde_15d+'.jpg';
        juego_campana[20] = 'style/img/es/evento/'+amarilla_1d+'.jpg';
        juego_campana[21] = 'style/img/es/evento/'+amarilla_2d+'.jpg';
        juego_campana[22] = 'style/img/es/evento/'+amarilla_3d+'.jpg';
        juego_campana[23] = 'style/img/es/evento/'+amarilla_4d+'.jpg';
        juego_campana[24] = 'style/img/es/evento/'+amarilla_5d+'.jpg';
        juego_campana[25] = 'style/img/es/evento/'+amarilla_6d+'.jpg';
        juego_campana[26] = 'style/img/es/evento/'+amarilla_7d+'.jpg';
        juego_campana[27] = 'style/img/es/evento/'+amarilla_8d+'.jpg';
        juego_campana[28] = 'style/img/es/evento/'+amarilla_9d+'.jpg';
        juego_campana[29] = 'style/img/es/evento/'+amarilla_10d+'.jpg';
        juego_campana[30] = 'style/img/es/evento/'+amarilla_11d+'.jpg';
        juego_campana[31] = 'style/img/es/evento/'+amarilla_12d+'.jpg';
        juego_campana[32] = 'style/img/es/evento/'+amarilla_13d+'.jpg';
        juego_campana[33] = 'style/img/es/evento/'+amarilla_14d+'.jpg';
        juego_campana[34] = 'style/img/es/evento/'+amarilla_15d+'.jpg';
        juego_campana[35] = 'style/img/es/evento/'+amarilla_16d+'.jpg';
        juego_campana[36] = 'style/img/es/evento/'+amarilla_17d+'.jpg';
        juego_campana[37] = 'style/img/es/evento/'+amarilla_18d+'.jpg';
        juego_campana[38] = 'style/img/es/evento/'+amarilla_19d+'.jpg';
        juego_campana[39] = 'style/img/es/evento/'+amarilla_20d+'.jpg';
        juego_campana[40] = 'style/img/es/evento/'+amarilla_21d+'.jpg';
        juego_campana[41] = 'style/img/es/evento/'+amarilla_22d+'.jpg';
        juego_campana[42] = 'style/img/es/evento/'+amarilla_23d+'.jpg';
        juego_campana[43] = 'style/img/es/evento/'+amarilla_24d+'.jpg';
        juego_campana[44] = 'style/img/es/evento/'+amarilla_25d+'.jpg';
        juego_campana[45] = 'style/img/es/evento/'+naranja_1d+'.jpg';
        juego_campana[46] = 'style/img/es/evento/'+naranja_2d+'.jpg';
        juego_campana[47] = 'style/img/es/evento/'+naranja_3d+'.jpg';
        juego_campana[48] = 'style/img/es/evento/'+naranja_4d+'.jpg';
        juego_campana[49] = 'style/img/es/evento/'+naranja_5d+'.jpg';
        juego_campana[50] = 'style/img/es/evento/'+naranja_6d+'.jpg';
        juego_campana[51] = 'style/img/es/evento/'+naranja_7d+'.jpg';
        juego_campana[52] = 'style/img/es/evento/'+naranja_8d+'.jpg';
        juego_campana[53] = 'style/img/es/evento/'+naranja_9d+'.jpg';
        juego_campana[54] = 'style/img/es/evento/'+naranja_10d+'.jpg';
        juego_campana[55] = 'style/img/es/evento/'+fin_1d+'.jpg';
        juego_campana[56] = 'style/img/es/evento/'+fin_2d+'.jpg';
        juego_campana[57] = 'style/img/es/evento/'+fin_3d+'.jpg';
        juego_campana[58] = 'style/img/es/evento/'+fin_4d+'.jpg';
        juego_campana[59] = 'style/img/es/evento/'+fin_5d+'.jpg';

        var smsflechas = document.getElementById('alerta_flechas');
        smsflechas.style.animation = 'palao 15s forwards';

        var prepricarga = document.getElementById('preload');
        prepricarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="style/img/es/evento/'+azul_1d+'.jpg">';
        
        
        var viendo = 0;
        document.querySelector('#alante').onclick = function moviendo(sentido) {
                var imagen_actual = document.getElementById("carta_en_juego");
                var ultima = juego_campana.length - 1;
                var eldata = document.getElementById('marteuse_fijo');
                if (eldata) {
                        var data_marteuse = eldata.getAttribute('data-marteuse');
                        if ((data_marteuse) == (viendo)) {
                        imagen_actual.src = 'style/img/es/evento/46.jpg';
                        alert('Aparece el Doctor Marteuse');
                        eldata.setAttribute('data-marteuse', '');
                        var doc = document.getElementById('doc');
                        if (doc) {doc.style.visibility = 'visible'; }
                        var fijo_doc = document.getElementById('marteuse_fijo');
                        if (fijo_doc) {fijo_doc.style.visibility = 'hidden'; }
                        return false;
                        }
                }
                var laguardiadata = document.getElementById('guardia_mas5');
                if (laguardiadata) {
                        var data_guardia = laguardiadata.getAttribute('data-guardia');
                        if ((data_guardia) == (viendo)) {
                        imagen_actual.src = 'style/img/es/evento/59.jpg';
                        alert('Aparece de nuevo la carta de la Guardia Nacional');
                        laguardiadata.setAttribute('data-guardia', '')
                        var anima_cinco = document.getElementById('cinco');
                        anima_cinco.style.visibility = 'visible';
                        var laguardia5 = document.getElementById('guardia_cinco');
                        laguardia5.style.visibility = 'hidden';
                        var laguardia8 = document.getElementById('ocho');
                        laguardia8.style.visibility = 'visible';
                        return false;
                        }
                        if (((data_guardia) == (ultima)) && ((viendo) == (juego_campana.length -2 )))  {
                                alert('Juega la siguiente carta y después llega la Guardia Nacional')
                        }
                }
                var ultimaguardiadata = document.getElementById('guardia_mas8');
                if (ultimaguardiadata) {
                        var data_guardia = ultimaguardiadata.getAttribute('data-guardia');
                                if (((data_guardia) == (ultima)) && ((viendo) == (juego_campana.length - 2)))  {
                                alert('Juega la siguiente carta y después llega la Guardia Nacional')
                                }
                }
                var sentido = 1;
                var auxiliar = viendo + sentido;
                if(auxiliar < 0) { auxiliar = ultima; }
                if(auxiliar > ultima) { auxiliar = 0; }
                viendo = auxiliar;
                imagen_actual.src = juego_campana[viendo];
                var acto = document.getElementById('acto');
                acto.innerHTML = '<a class="num_carta">'+viendo+'/'+ultima+'</a>'
                document.getElementById('atras').style.visibility = '';
                if (viendo == (juego_campana.length -1)) {
                        document.getElementById('alante').style.visibility = 'hidden';
                }
                if ((juego_campana[viendo]) == ('style/img/es/evento/46.jpg')) {
                        var free_marteuse = document.getElementById('marteuse');
                        free_marteuse.innerHTML = '<a class="marteuse" id="doc"><img class="active" src="style/img/marteuse_active.png"></a>'
                }
                else {
                var doc = document.getElementById('doc');
                        if (doc) { doc.style.visibility = 'hidden'; }
                }
                if ((juego_campana[viendo]) == ('style/img/es/evento/59.jpg')) {
                        var guardia_5 = document.getElementById('cinco');
                        guardia_5.style.visibility = 'visible'; 
                        guardia_5.innerHTML ='<a class="mas_cinco" id="guardia_mas_cinco">5+</a>'
                        var guardia_8 = document.getElementById('ocho');
                        guardia_8.style.visibility = 'visible'; 
                        guardia_8.innerHTML ='<a class="mas_ocho" id="guardia_mas_ocho">8+</a>'
                }
                else {
                      var guardia_5 = document.getElementById('cinco');
                      if (guardia_5) { guardia_5.style.visibility = 'hidden'; } 
                      var guardia_8 = document.getElementById('ocho');
                      if (guardia_8) { guardia_8.style.visibility = 'hidden'; }  
                }
                var precarga = document.getElementById('preload');
                viendomas = auxiliar +1;
                viendomenos = auxiliar -1;
                precarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="">';
                precarga.innerHTML += '<img id="carta_anterior" class="pre_siguiente" src="">';
                var preload = document.getElementById('carta_siguiente');
                var preloadant = document.getElementById('carta_anterior');
                preload.src = juego_campana[viendomas];
                preloadant.src = juego_campana[viendomenos];

                var superzeds = document.getElementById('superzeds');
                if (superzeds) { 
                                        if ((juego_campana[viendo]) == ('style/img/es/evento/23.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="23"><img class="zeds" src="style/img/ravagers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que cuando los Ravagers atacan durante la carta de Evento "Brains!", reciben un 1> en todos sus ataques.')
			                        }
                                        }
                                        else if ((juego_campana[viendo]) == ('style/img/es/evento/42.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="42"><img class="zeds" src="style/img/dread_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que los Dread Zeds es una unidad "dura" por lo que cancelan sus daños con una tira de 4, 5 o 6. Además un ataque exitoso Gunfire con la Super Arma no les hará retroceder.')
			                        }
                                        }
                                        else if ((juego_campana[viendo]) == ('style/img/es/evento/45.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="bufalillos"><img class="zeds" src="style/img/were_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('La unidad Were-Zeds mueve dos espacios e incrementa el nivel de infección en +2 en cada combate cuerpo a cuerpo. Además cuando se cruce con otra unidad Zeds le causará a esta un daño.')
			                        }
                                        }
                                        else if ((juego_campana[viendo]) == ('style/img/es/evento/43.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="43"><img class="zeds" src="style/img/bersekers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que si esta unidad gana un combate y en la casilla adyacente hay un unidad amiga, avanzarán y volverán a atacar.')
			                        }
                                        }
                                        else if ((juego_campana[viendo]) == ('style/img/es/evento/44.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="44"><img class="zeds" src="style/img/leapers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Esta unidad salta dos espacios. Si el salto acaba en un casilla a la que no puede acceder, este cancela y mueve normalmente. Los modificadores de Terreno no le afectan cuando saltan a una casilla. Durante la carta Brains! si el número de esta es par saltarán al mismo número del camino exterior de la izquierda y al de la derecha si es par.')
			                        }
                                        }
		                        else {
			                        superzeds.innerHTML = ''
		                        }
                }
          
        }

        document.querySelector('#atras').onclick = function moviendo(sentido) {
                var imagen_actual = document.getElementById("carta_en_juego");
                var ultima = juego_campana.length - 1; 
                var sentido = -1;
                var auxiliar = viendo + sentido;
                if(auxiliar < 0) { auxiliar = ultima; }
                if(auxiliar > ultima) { auxiliar = 0; }
                viendo = auxiliar;
                imagen_actual.src = juego_campana[viendo];
                var acto = document.getElementById('acto');
                acto.innerHTML = '<a class="num_carta">'+viendo+'/'+ultima+'</a>'
                document.getElementById('alante').style.visibility = '';
                if (viendo == (juego_campana.length - juego_campana.length)) {
                document.getElementById('atras').style.visibility = 'hidden';
                }
                if ((juego_campana[viendo]) == ('style/img/es/evento/46.jpg')) {
                        var free_marteuse = document.getElementById('marteuse');
                               free_marteuse.innerHTML = '<a class="marteuse" id="doc"><img class="active" src="style/img/marteuse_active.png"></a>'
                }
                else {
                var doc = document.getElementById('doc');
                        if (doc) { doc.style.visibility = 'hidden'; }
                }
                if ((juego_campana[viendo]) == ('style/img/es/evento/59.jpg')) {
                        var guardia_5 = document.getElementById('cinco');
                        guardia_5.style.visibility = 'visible'; 
                        guardia_5.innerHTML ='<a class="mas_cinco" id="guardia_mas_cinco">5+</a>'
                        var guardia_8 = document.getElementById('ocho');
                        guardia_8.style.visibility = 'visible'; 
                        guardia_8.innerHTML ='<a class="mas_ocho" id="guardia_mas_ocho">8+</a>'
                }
                else {
                      var guardia_5 = document.getElementById('cinco');
                      if (guardia_5) { guardia_5.style.visibility = 'hidden'; } 
                      var guardia_8 = document.getElementById('ocho');
                      if (guardia_8) { guardia_8.style.visibility = 'hidden'; }  
                }
                var precarga = document.getElementById('preload');
                viendomas = auxiliar +1;
                viendomenos = auxiliar -1;
                precarga.innerHTML = '<img id="carta_siguiente" class="pre_siguiente" src="">';
                precarga.innerHTML += '<img id="carta_anterior" class="pre_siguiente" src="">';
                var preload = document.getElementById('carta_siguiente');
                var preloadant = document.getElementById('carta_anterior');
                preload.src = juego_campana[viendomas];
                preloadant.src = juego_campana[viendomenos];

                var superzeds = document.getElementById('superzeds');
                if (superzeds) { 
                                        if ((juego_campana[viendo]) == ('style/img/es/evento/23.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="23"><img class="zeds" src="style/img/ravagers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que cuando los Ravagers atacan durante la carta de Evento "Brains!", reciben un 1> en todos sus ataques.')
			                        }
                                        }
                                        else if ((juego_campana[viendo]) == ('style/img/es/evento/42.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="42"><img class="zeds" src="style/img/dread_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que los Dread Zeds es una unidad "dura" por lo que cancelan sus daños con una tira de 4, 5 o 6. Además un ataque exitoso Gunfire con la Super Arma no les hará retroceder.')
			                        }
                                        }
                                        else if ((juego_campana[viendo]) == ('style/img/es/evento/45.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="bufalillos"><img class="zeds" src="style/img/were_zeds.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('La unidad Were-Zeds mueve dos espacios e incrementa el nivel de infección en +2 en cada combate cuerpo a cuerpo. Además cuando se cruce con otra unidad Zeds le causará a esta un daño.')
			                        }
                                        }
                                        else if ((juego_campana[viendo]) == ('style/img/es/evento/43.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="43"><img class="zeds" src="style/img/bersekers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Recuerda que si esta unidad gana un combate y en la casilla adyacente hay un unidad amiga, avanzarán y volverán a atacar.')
			                        }
                                        }
                                        else if ((juego_campana[viendo]) == ('style/img/es/evento/44.jpg')) {
                       	                        superzeds.innerHTML = '<a class="szeds" id="44"><img class="zeds" src="style/img/leapers.png"></a>'
			                        document.querySelector('#superzeds').onclick = function () {
					                alert('Esta unidad salta dos espacios. Si el salto acaba en un casilla a la que no puede acceder, este cancela y mueve normalmente. Los modificadores de Terreno no le afectan cuando saltan a una casilla. Durante la carta Brains! si el número de esta es par saltarán al mismo número del camino exterior de la izquierda y al de la derecha si es par.')
			                        }
                                        }
		                        else {
			                        superzeds.innerHTML = ''
		                        }
                }
        }


        var nav = document.getElementById('cartas');
        if (nav) { nav.innerHTML = '<img id="carta_en_juego" class="carta" src="style/img/es/evento/DOTZ_Dorso_eventos.jpg">'; }
        if (document.getElementById('cartas').src="style/img/es/evento/DOTZ_Dorso_eventos.jpg") {
                document.getElementById('atras').style.visibility = 'hidden';
                }

        document.querySelector('#marteuse').onclick = function (){
        var doctor = confirm('¿Quieres colocar esta carta en medio del Mazo de Robo?');
                if (doctor == true) { alert('¡Hecho! El Doctor Marteuse volverá a aparecer');
                var carta_marteruse = viendo;
                var cuantas_quedan = (juego_campana.length - 1) - viendo;
                var marteuse_mitad = cuantas_quedan / 2; 
                marteuse_mitad = Math.floor(marteuse_mitad); 
                var nueva_posicion = viendo + marteuse_mitad;
                var fijo_marteuse = document.getElementById('doc_marteuse');
                fijo_marteuse.innerHTML = '<a class="esperando" data-marteuse="'+nueva_posicion+'" id="marteuse_fijo"><img class="active" src="style/img/marteuse_active.png"></a>'  
                }
                else { alert('Opción cancelada. Todo sigue igual');}
        }

        document.querySelector('#cinco').onclick = function (){
        var cinco = confirm('¿Resultado de 5 a 7?');
                if (cinco == true) { alert('¡Hecho! Sigue jugando');
                var guardia_actura = viendo;
                var cuantas_faltan = (juego_campana.length - 1) - viendo;
                var colocacion = Math.floor((Math.random() * cuantas_faltan) + 1);
                var nueva_59 = viendo + colocacion;
                var fijo_59 = document.getElementById('guardia_cinco');
                fijo_59.innerHTML = '<a class="mas_cinco" data-guardia="'+nueva_59+'" id="guardia_mas5">5+</a>'
                var guardia_5 = document.getElementById('cinco');
                guardia_5.style.visibility = 'hidden'; 
                }
        }
        document.querySelector('#ocho').onclick = function (){
        var ocho = confirm('¿Resultado de 8 o más?');
                if (ocho == true) { 
                alert('¡Hecho! Sigue jugando');
                var ultima_59 = document.getElementById('guardia_ocho');
                ultima = juego_campana.length - 1;
                ultima_59.innerHTML = '<a class="mas_ocho" data-guardia="'+ultima+'" id="guardia_mas8">8+</a>'
                var guardia_8 = document.getElementById('ocho');
                guardia_8.style.visibility = 'hidden';                
                }
        }
};
