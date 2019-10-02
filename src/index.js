module.exports = function check(str, bracketsConfig) {
    // your solution
    let stackBrackets = [];
    let lenStr = str.length;
    if (lenStr % 2 !== 0) return false;
    let lenConfig = bracketsConfig.length;
    let checkClose;
    for (let i = 0; i < lenStr; i++) {
        let symbol = str.charAt(i);
        let closedBracket = false;
        let openedBracket = false;
        let evenBracket = false;
        for (let j = 0; j < lenConfig; j++) {
            if (bracketsConfig[j][0] === bracketsConfig[j][1] && symbol === bracketsConfig[j][0]) {
                evenBracket = true;
                break;
            }
            if (symbol === bracketsConfig[j][0]) {
                openedBracket = true;
                break;
            }
            if (symbol === bracketsConfig[j][1]) {
                closedBracket = true;
                checkClose = bracketsConfig[j][0];
                break;
            }
        }
        if (evenBracket === true) {
            if (stackBrackets[stackBrackets.length - 1] !== symbol) {
                stackBrackets.push(symbol);
            }else {
                stackBrackets.pop();
            }
        } else {
            if (openedBracket === true) {
                stackBrackets.push(symbol);
            }
            if (closedBracket === true) {
                if(checkClose === stackBrackets[stackBrackets.length - 1]) {
                    stackBrackets.pop();
                }else return false;
            }
        }
    }
    return (stackBrackets.length === 0);
};
