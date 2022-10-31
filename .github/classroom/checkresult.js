const restlings = require('rustlings');

function judge(outputFile) {
    let points = {};
    let result = restlings.myverify();
    // 保存到全局先   
    restlingsMyverify = result;
    if (result !== 'error') {
        let jsonResult = JSON.parse(result);
        jsonResult.exercises.forEach(({ name, result }) => {
            if (result) {
                points[name] = [1,1]
            } else {
                points[name] = [0,1]
            }
        })
    }
    return points;
}

module.exports.judge = judge;