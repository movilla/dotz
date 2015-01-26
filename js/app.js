
function myFunction() {
        yourArray = ['1', '2', '3', '4', '5', '6', '7', '8']
        yourArray.sort(function() { return 0.5 - Math.random() });
        var azul_1d = yourArray[0]
        var azul_2d = yourArray[1]
        var azul_3 = yourArray[2]
        var azul_4 = yourArray[3]
        var azul_5 = yourArray[4]
        var azul_6 = yourArray[5]
        var azul_7 = yourArray[6]
        var azul_8 = yourArray[7]

        yourArray2 = ['9', '10', '11', '12', '13', '14', '15', azul_7, azul_8]
        yourArray2.sort(function() { return 0.5 - Math.random() });
        var verde_1 = yourArray2[0]
        var verde_2 = yourArray2[1]
        var verde_3 = yourArray2[2]
        var verde_4 = yourArray2[3]
        var verde_5 = yourArray2[4]
        var verde_6 = yourArray2[5]
        var verde_7 = yourArray2[6]
        var verde_8 = yourArray2[7]
        var verde_9 = yourArray2[8]

        yourArray3 = [verde_1, verde_2, verde_3, '23', verde_4, verde_5, verde_6, '24']
        yourArray3.sort(function() { return 0.5 - Math.random() });
        var verde_1d = yourArray3[0]
        var verde_2d = yourArray3[1]
        var verde_3d = yourArray3[2]
        var verde_4d = yourArray3[3]
        var verde_5d = yourArray3[4]
        var verde_6d = yourArray3[5]
        var verde_7d = yourArray3[6]
        var verde_8d = yourArray3[7]

        yourArray4 = [ '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
        yourArray4.sort(function() { return 0.5 - Math.random() });
        var amarilla_1 = yourArray4[0]
        var amarilla_2 = yourArray4[1]
        var amarilla_3 = yourArray4[2]
        var amarilla_4 = yourArray4[3]
        var amarilla_5 = yourArray4[4]
        var amarilla_6 = yourArray4[5]
        var amarilla_7 = yourArray4[6]
        var amarilla_8 = yourArray4[7]
        var amarilla_9 = yourArray4[8]
        var amarilla_10 = yourArray4[9]

        yourArray5 = [ amarilla_1, amarilla_2, amarilla_3, verde_7, amarilla_4, amarilla_5, verde_8, amarilla_6, amarilla_7, amarilla_8, amarilla_9, amarilla_10, verde_9]
        yourArray5.sort(function() { return 0.5 - Math.random() });
        var amarilla_1p = yourArray5[0]
        var amarilla_2p = yourArray5[1]
        var amarilla_3p = yourArray5[2]
        var amarilla_4p = yourArray5[3]
        var amarilla_5p = yourArray5[4]
        var amarilla_6p = yourArray5[5]
        var amarilla_7p = yourArray5[6]
        var amarilla_8p = yourArray5[7]
        var amarilla_9p = yourArray5[8]
        var amarilla_10p = yourArray5[9]
        var amarilla_11p = yourArray5[10]
        var amarilla_12p = yourArray5[11]
        var amarilla_13p = yourArray5[12]

        yourArray6 = [amarilla_1p, amarilla_2p, amarilla_3p, amarilla_4p, amarilla_5p, '46', amarilla_6p, amarilla_7p, amarilla_8p, amarilla_9p, amarilla_10p, '50']
        yourArray6.sort(function() { return 0.5 - Math.random() });
        var amarilla_1d = yourArray6[0]
        var amarilla_2d = yourArray6[1]
        var amarilla_3d = yourArray6[2]
        var amarilla_4d = yourArray6[3]
        var amarilla_5d = yourArray6[4]
        var amarilla_6d = yourArray6[5]
        var amarilla_7d = yourArray6[6]
        var amarilla_8d = yourArray6[7]
        var amarilla_9d = yourArray6[8]
        var amarilla_10d = yourArray6[9]
        var amarilla_11d = yourArray6[10]
        var amarilla_12d = yourArray6[11]

        yourArray7 = [ '51', '52', '53', '54', '55', '56']
        yourArray7.sort(function() { return 0.5 - Math.random() });
        var naraja_1p = yourArray7[0]
        var naranja_2p = yourArray7[1]
        var naranja_3p = yourArray7[2]

        yourArray8 = [naraja_1p, amarilla_11p, naranja_2p, amarilla_12p, naranja_3p, amarilla_13p]
        yourArray8.sort(function() { return 0.5 - Math.random() });
        var naranja_1pp = yourArray8[0]
        var naranja_2pp = yourArray8[1]
        var naranja_3pp = yourArray8[2]
        var naranja_4pp = yourArray8[3]
        var naranja_5pp = yourArray8[4]
        var naranja_6pp = yourArray8[5]

        yourArray9 = [naranja_1pp, '57', naranja_2pp, '58', naranja_3pp, '59']
        yourArray9.sort(function() { return 0.5 - Math.random() });
        var naranja_1d = yourArray9[0]
        var naranja_2d = yourArray9[1]
        var naranja_3d = yourArray9[2]
        var naranja_4d = yourArray9[3]
        var naranja_5d = yourArray9[4]
        var naranja_6d = yourArray9[5]

        yourArray10 = [naranja_4pp, naranja_5pp, naranja_6pp]
        yourArray10.sort(function() { return 0.5 - Math.random() });
        var fin_1d = yourArray10[0]
        var fin_2d = yourArray10[1]
        var fin_3d = yourArray10[2]

         
        var juego_corto = new Array();
        juego_corto[0] = 'style/img/es/evento/DOTZ_Dorso_eventos.png';
        juego_corto[1] = 'style/img/es/evento/'+azul_1d+'.png';
        juego_corto[2] = 'style/img/es/evento/'+azul_2d+'.png';
        juego_corto[3] = 'style/img/es/evento/'+verde_1d+'.png';
        juego_corto[4] = 'style/img/es/evento/'+verde_2d+'.png';
        juego_corto[5] = 'style/img/es/evento/'+verde_3d+'.png';
        juego_corto[6] = 'style/img/es/evento/'+verde_4d+'.png';
        juego_corto[7] = 'style/img/es/evento/'+verde_5d+'.png';
        juego_corto[8] = 'style/img/es/evento/'+verde_6d+'.png';
        juego_corto[9] = 'style/img/es/evento/'+verde_7d+'.png';
        juego_corto[10] = 'style/img/es/evento/'+verde_8d+'.png';
        juego_corto[11] = 'style/img/es/evento/'+amarilla_1d+'.png';
        juego_corto[12] = 'style/img/es/evento/'+amarilla_2d+'.png';
        juego_corto[13] = 'style/img/es/evento/'+amarilla_3d+'.png';
        juego_corto[14] = 'style/img/es/evento/'+amarilla_4d+'.png';
        juego_corto[15] = 'style/img/es/evento/'+amarilla_5d+'.png';
        juego_corto[16] = 'style/img/es/evento/'+amarilla_6d+'.png';
        juego_corto[17] = 'style/img/es/evento/'+amarilla_7d+'.png';
        juego_corto[18] = 'style/img/es/evento/'+amarilla_8d+'.png';
        juego_corto[19] = 'style/img/es/evento/'+amarilla_9d+'.png';
        juego_corto[20] = 'style/img/es/evento/'+amarilla_10d+'.png';
        juego_corto[21] = 'style/img/es/evento/'+amarilla_11d+'.png';
        juego_corto[22] = 'style/img/es/evento/'+amarilla_12d+'.png';
        juego_corto[23] = 'style/img/es/evento/'+naranja_1d+'.png';
        juego_corto[24] = 'style/img/es/evento/'+naranja_2d+'.png';
        juego_corto[25] = 'style/img/es/evento/'+naranja_3d+'.png';
        juego_corto[26] = 'style/img/es/evento/'+naranja_4d+'.png';
        juego_corto[27] = 'style/img/es/evento/'+naranja_5d+'.png';
        juego_corto[28] = 'style/img/es/evento/'+naranja_6d+'.png';
        juego_corto[29] = 'style/img/es/evento/'+fin_1d+'.png';
        juego_corto[30] = 'style/img/es/evento/'+fin_2d+'.png';
        juego_corto[31] = 'style/img/es/evento/'+fin_3d+'.png';



        var cualvemos = 0;

        document.querySelector('#alante').onclick = function mover(direccion) {
                // accedemos al objeto que contiene la imagen
                var laimagen = document.getElementById("misfotos");
                // accedemos al objeto que contiene el texto
                // ¿cuál es el indice de la última imágenes en nuestra array?
                var ultima = juego_corto.length - 1; // en el ejemplo, será el 4
                
                var direccion = 1;
                // antes de cambiar los datos, en un auxilar, verificamos cuál sería la imagen a mostrar
                var auxiliar = cualvemos + direccion; // se sumará 1 o se restará 1 al índice
                // si el resultado es menor que cero, le decimos que vaya al otro extremo y muestre la ultima
                if(auxiliar < 0) { auxiliar = ultima; }
                // si el resultado es mayor que la última, le decimos que vaya al otro extremo y muestre la primera
                if(auxiliar > ultima) { auxiliar = 0; }
  
                // listo, ahora ya podemos cambiar el dato sin problemas
                cualvemos = auxiliar;
  
                // ponemos la dirección URL de la imagen en la etiqueta IMG
                laimagen.src = juego_corto[cualvemos];

                // ponemos el texto en la etiqueta SPAN
                // eltexto.innerHTML = texto[cualvemos];
                document.getElementById('atras').style.visibility = '';
                if (cualvemos == (juego_corto.length -1)) {
                document.getElementById('alante').style.visibility = 'hidden';
                }

        }

        document.querySelector('#atras').onclick = function mover(direccion) {
                // accedemos al objeto que contiene la imagen
                var laimagen = document.getElementById("misfotos");
                // accedemos al objeto que contiene el texto
                // ¿cuál es el indice de la última imágenes en nuestra array?
                var ultima = juego_corto.length - 1; // en el ejemplo, será el 4
                
                var direccion = -1;
                // antes de cambiar los datos, en un auxilar, verificamos cuál sería la imagen a mostrar
                var auxiliar = cualvemos + direccion; // se sumará 1 o se restará 1 al índice
                // si el resultado es menor que cero, le decimos que vaya al otro extremo y muestre la ultima
                if(auxiliar < 0) { auxiliar = ultima; }
                // si el resultado es mayor que la última, le decimos que vaya al otro extremo y muestre la primera
                if(auxiliar > ultima) { auxiliar = 0; }
  
                // listo, ahora ya podemos cambiar el dato sin problemas
                cualvemos = auxiliar;
  
                // ponemos la dirección URL de la imagen en la etiqueta IMG
                laimagen.src = juego_corto[cualvemos];

                // ponemos el texto en la etiqueta SPAN
                // eltexto.innerHTML = texto[cualvemos];
                document.getElementById('alante').style.visibility = '';
                if (cualvemos == (juego_corto.length - juego_corto.length)) {
                document.getElementById('atras').style.visibility = 'hidden';
                }
        }


        var nav = document.getElementById('cartas');
        if (nav) { nav.innerHTML = '<img id="misfotos" class="carta" src="style/img/es/evento/DOTZ_Dorso_eventos.png" alt="dorso">'; }
        if (document.getElementById('cartas').src="style/img/es/evento/DOTZ_Dorso_eventos.png") {
                document.getElementById('atras').style.visibility = 'hidden';
                }


        document.querySelector('#b01a').onclick = function () { Document.getElementsByClassName('carta')[1].style.visibility = ''; };
}
