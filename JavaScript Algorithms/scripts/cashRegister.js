export function checkCashRegister(price, cash, cid) {
    let auxCid = [...cid];
    let fundsCid = parseFloat(auxCid.reduce((acc, cur) => acc + cur[1], 0).toFixed(2));
    let change = cash - price;

    function ctrlCid(name, value, change, arrCid) {
        let lclCid = (arrCid.find(x => x[0] === name)[1]) / value;
        let lclChg = name === "PENNY" ? parseFloat((change * 100).toFixed(2)) : Math.trunc(change/value);
        let resultado=[name, Math.min(lclCid, lclChg) * value];
        return resultado;
    }

    function factChange(change, arrCid) {
        let arrChange = [];
        let lclChange = [];
        let lclRest = change;

        // ONE HUNDRED CONTROL
        lclChange = ctrlCid("ONE HUNDRED", 100, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        // TWENTY CONTROL
        lclChange = ctrlCid("TWENTY", 20, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        // TEN CONTROL
        lclChange = ctrlCid("TEN", 10, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        // FIVE CONTROL
        lclChange = ctrlCid("FIVE", 5, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        // ONE CONTROL
        lclChange = ctrlCid("ONE", 1, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        // QUARTER CONTROL
        lclChange = ctrlCid("QUARTER", 0.25, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        // DIME CONTROL
        lclChange = ctrlCid("DIME", 0.10, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        // NICKEL CONTROL
        lclChange = ctrlCid("NICKEL", 0.05, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        // PENNY CONTROL
        lclChange = ctrlCid("PENNY", 0.01, lclRest, arrCid);
        lclRest -= lclChange[1];
        arrChange.push(lclChange);

        return arrChange;
    }


    console.log(fundsCid, change);
    if (fundsCid < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
        let arrChange= factChange(change, auxCid);
        let ctrlChange = parseFloat(arrChange.reduce((acc, curr)=> acc + curr[1], 0).toFixed(2));
        console.log(ctrlChange, fundsCid);
        if (ctrlChange === fundsCid) {
            console.log("paso ===")
            let lclArr =[];
            arrChange.forEach(x=>lclArr.unshift(x));
            return { status: "CLOSED", change: lclArr}
        } else if (ctrlChange === change){
            console.log("paso")
            return { status: "OPEN", change: arrChange.filter(x => x[1] > 0) };
        } else {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        return arrChange;
    }
}
