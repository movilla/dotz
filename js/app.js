Array.prototype.shuffle = function() {
var input = this;

for (var i = input.length-1; i >=0; i--) {

    var randomIndex = Math.floor(Math.random()*(i+1)); 
    var itemAtIndex = input[randomIndex]; 

    input[randomIndex] = input[i]; 
    input[i] = itemAtIndex;
}
return input;
}

document.querySelector( "#mazo" ).onclick = function () {
        var elect = document.getElementById('eleccion');
        if (elect) { elect.style.visibility = 'hidden'; }
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

        bloque2 = ['9', '10', '11', '12', '13', '14', '15', azul_7, azul_8]
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
        var naraja_1p = bloque7[0]
        var naranja_2p = bloque7[1]
        var naranja_3p = bloque7[2]

        bloque8 = [naraja_1p, amarilla_11p, naranja_2p, amarilla_12p, naranja_3p, amarilla_13p]
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



        var viendo = 0;
        document.querySelector('#alante').onclick = function moviendo(sentido) {
                var imagen_actual = document.getElementById("carta_en_juego");
                var ultima = juego_corto.length - 1;  
                var sentido = 1;
                var auxiliar = viendo + sentido;
                if(auxiliar < 0) { auxiliar = ultima; }
                if(auxiliar > ultima) { auxiliar = 0; }
                viendo = auxiliar;
                imagen_actual.src = juego_corto[viendo];

                // ponemos el texto en la etiqueta SPAN
                // eltexto.innerHTML = texto[viendo];
                document.getElementById('atras').style.visibility = '';
                if (viendo == (juego_corto.length -1)) {
                        document.getElementById('alante').style.visibility = 'hidden';
                }
                // pal doctor marteuse
                if ((juego_corto[viendo]) == ('style/img/es/evento/46.jpg')) {
                        var free_marteuse = document.getElementById('marteuse');
                               free_marteuse.innerHTML = '<a class="marteuse" id="doc"><img class="active" src="style/img/marteuse_active.png"></a>'
                }
                else {
                var doc = document.getElementById('doc');
                        if (doc) { doc.style.visibility = 'hidden'; }
                }

        }

        document.querySelector('#atras').onclick = function moviendo(sentido) {
                // accedemos al objeto que contiene la imagen
                var imagen_actual = document.getElementById("carta_en_juego");
                // accedemos al objeto que contiene el texto
                // ¿cuál es el indice de la última imágenes en nuestra array?
                var ultima = juego_corto.length - 1; // en el ejemplo, será el 4
                
                var sentido = -1;
                // antes de cambiar los datos, en un auxilar, verificamos cuál sería la imagen a mostrar
                var auxiliar = viendo + sentido; // se sumará 1 o se restará 1 al índice
                // si el resultado es menor que cero, le decimos que vaya al otro extremo y muestre la ultima
                if(auxiliar < 0) { auxiliar = ultima; }
                // si el resultado es mayor que la última, le decimos que vaya al otro extremo y muestre la primera
                if(auxiliar > ultima) { auxiliar = 0; }
  
                // listo, ahora ya podemos cambiar el dato sin problemas
                viendo = auxiliar;
  
                // ponemos la dirección URL de la imagen en la etiqueta IMG
                imagen_actual.src = juego_corto[viendo];

                // ponemos el texto en la etiqueta SPAN
                // eltexto.innerHTML = texto[viendo];
                document.getElementById('alante').style.visibility = '';
                if (viendo == (juego_corto.length - juego_corto.length)) {
                document.getElementById('atras').style.visibility = 'hidden';
                }
        }


        var nav = document.getElementById('cartas');
        if (nav) { nav.innerHTML = '<img id="carta_en_juego" class="carta" src="style/img/es/evento/DOTZ_Dorso_eventos.jpg">'; }
        if (document.getElementById('cartas').src="style/img/es/evento/DOTZ_Dorso_eventos.jpg") {
                document.getElementById('atras').style.visibility = 'hidden';
                }
};
