
function con() {
    this.bdSql = window.openDatabase('csGOEMPIRE', '1.0', 'cosgoempire', 2 * 1024 * 1024);
}

con.prototype.openTableTopPlayers = function () {
    this.bdSql.transaction(function (tx) {
        tx.executeSql('CREATE TABLE TOPPLAYERS(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, totalBet FLOAT)', [], function (tx, msg) {
            console.log('Created')
            console.msg;
        }, function (tx, erro) {
            console.log('Error')
            console.log(erro);
        });
    });
}