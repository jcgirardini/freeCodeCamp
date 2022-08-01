export function convertToRoman(num) {
    if (typeof num !== "number" || num <= 0 || num >= 4000) {
        return undefined;
    }
    let umil = Math.floor(num / 1000);
    let cent = Math.floor(num % 1000 / 100);
    let dece = Math.floor(num % 100 / 10);
    let unid = num % 10;

    let strumil = umil > 0 ? "M".repeat(umil) : "";

    let repC= (cent !== 9 && cent !== 5 && cent !== 4)? "C".repeat(cent%5):"";
    let strcent = cent === 9 ? "CM" :
        cent >= 5 && cent < 9 ? "D" + repC: 
            cent === 4 ? "CD" : repC;

    let repX= (dece !== 9 && dece !== 5 && dece !== 4)? "X".repeat(dece%5):"";
    let strdece = dece === 9 ? "XC" :
        dece >= 5 && dece < 9 ? "L" + repX: 
            dece === 4 ? "XL" : repX;

    let repI= (unid !== 9 && unid !== 5 && unid !== 4)? "I".repeat(unid%5):"";
    let strunid = unid === 9 ? "IX" :
        unid >= 5 && unid < 9 ? "V" + repI: 
            unid === 4 ? "IV" : repI;

    let strromano = strumil + strcent + strdece + strunid;
    return strromano;
}