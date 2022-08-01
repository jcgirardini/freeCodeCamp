export function rot13(str) {
    let auxStr = str;
    let resultado = [];
    let regExp = /[A-Z]/g;
    resultado = auxStr.replace(regExp, (l)=>{
        let coded = l.charCodeAt(0);
        let aux =  coded - 65 - 13;
        let decoded = coded;
        if (coded>=65 && coded <=90){
            decoded = aux>=0? 65 + aux: 91 + aux;
        }
        return String.fromCharCode(decoded);
    });
    return resultado;
  }
  