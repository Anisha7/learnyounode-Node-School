var res = process.argv;
var sum = 0;
for (var i = 2; i < res.length; i++) {
    var temp = Number(res[i]);
    if (temp != NaN) {
        sum += temp;
    }
}

console.log(sum);