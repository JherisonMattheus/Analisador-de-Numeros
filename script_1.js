let txta = window.document.querySelector('input#txta');
let txtb = window.document.querySelector('input#txtb');
let txtc = window.document.querySelector('input#txtc');
let lista = document.querySelector('select#lista');
let res = window.document.querySelector('p#res');
let num = [];
txtb.addEventListener('click', clicar);
txtc.addEventListener('click', finalizar);

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return false;
    }else{
        return true;
    }
}

function clicar(){
    if(isNumero(txta.value) && inLista(txta.value, num)){
       num.push(Number(txta.value));
       let item = document.createElement('option');
       item.text = `Valor ${txta.value} adicionado`;
       lista.appendChild(item);
       txta.value = '';
       txta.focus();
       res.innerHTML = '';
    }else{
        window.alert('Valor inválido ou já encontrado na lista');
        txta.value = '';
        txta.focus();
    }
}

function finalizar(){
    if(num.length == 0){
        window.alert('Adicione valores antes de finalizar');
    }else{
        let lot = num.length;
        res.innerHTML += `<p>Ao todo, temos ${lot} números cadastrados </p>`;
        let j = 0;
        let maior = num[0];
        let menor = num[0];
        let soma = 0;
        let media = 0;
        for(let i in num){
            soma += num[i];
            if(num[i] > maior){
                maior = num[i];
            }
            if(num[i] < menor){
                menor = num[i];
            }
        }
        media = soma/lot;
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
    res.innerHTML += `<p>A media dos valores informados é ${media}</p>`;
    }
}

