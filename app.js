var Players = /** @class */ (function () {
    function Players(n) {
        this.ball = [];
        this.name = n;
    }
    Players.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Players.prototype.hit = function () {
        var run = Math.floor(Math.random() * 7);
        this.ball.push(run);
    };
    Players.prototype.totalrun = function () {
        console.log(this.ball.length);
        console.log(this.ball);
    };
    return Players;
}());
var accounting = new Players('Accounting');
accounting.describe();
accounting.hit();
accounting.totalrun();
//   const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
//   accountingCopy.describe();
