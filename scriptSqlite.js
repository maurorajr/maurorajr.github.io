
function openCon() {
    this.bdSql = window.openDatabase('csGOEMPIRE', '1.0', 'cosgoempire', 2 * 1024 * 1024);
}

openCon.prototype.openTableTopPlayers = function () {
    this.bdSql.transaction(function (tx) {
        tx.executeSql('CREATE TABLE TOPPLAYERS(id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, name TEXT NOT NULL, totalBet FLOAT)', [], function (tx, msg) {
            console.log('Created')
            console.msg;
        }, function (tx, erro) {
            console.log('Error')
            console.log(erro);
        });
    });
}