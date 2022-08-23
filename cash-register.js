function determineChange(dueBack, cid){ 
    let reverseCid = [...cid].reverse();
    let valueArray = [["ONE HUNDRED", 100.00], ["TWENTY", 20.00], ["TEN", 10.00],["FIVE", 5.00], ["ONE", 1.00], ["QUARTER", 0.25], ["DIME", 0.10], ["NICKEL", 0.05],["PENNY", 0.01]];
    let changeArr = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0],["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0],["PENNY", 0]];
    
    for(let i = 0; i < valueArray.length; i++){
      let currentVal = valueArray[i][1];
      while(dueBack.toFixed(2) >= currentVal && reverseCid[i][1] >= currentVal){
        dueBack = dueBack.toFixed(2);
        dueBack -= currentVal;
        reverseCid[i][1] -= currentVal;
        changeArr[i][1] += currentVal;
        };
      };
      if(dueBack == 0){
        return changeArr.filter(item => item[1] !=0);
      }else{
        return "Error";
      }   
};

function checkCashRegister(price, cash, cid) {
  let dueBack = cash - price;

  let totalCid = 0;
  cid.forEach(item => totalCid += item[1]);
  totalCid = totalCid.toFixed(2);

  let returnObj ={
    status: "",
    change: []
  };

  if(totalCid == dueBack){
    returnObj.status =  "CLOSED"; 
    returnObj.change = cid;
  }else{
    let finalChange = determineChange(dueBack, cid);
    if(totalCid < dueBack||finalChange == "Error"){
    returnObj.status = "INSUFFICIENT_FUNDS"
    returnObj.change = [];
    }else{
      returnObj.status = "OPEN";
      returnObj.change = finalChange;
    };
  }
  return returnObj;
};

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])