let tOpenBox = '', tBoxNum = '', tRem = ''
    , nTime = 590000
    , aBox = [['BoxNum', 'Status', 'Remaining', 'LogTime']]

function openBox() {
    tBoxNum = document.getElementsByClassName('text-light-grey-1 bg-dark-5 px-md text-sm rounded-full flex items-center justify-center')[0].innerText.trim();
    tOpenBox = document.getElementsByClassName('button-primary button-primary--gold')[0]
    if (tOpenBox == undefined) {

        //Open
        document.getElementsByClassName('flex btn-primary pop')[8].click();

        //Claim
        document.getElementsByClassName('px-10 button-primary button-primary--green button-primary--large')[0].click();

        //Ok Claim
        document.getElementsByClassName('button-primary button-primary--green w-full')[0].click();

        aBox.push([tBoxNum, 'Opened', 'n/a', Date().replace(' GMT-0300 (Horário Padrão de Brasília)', '')])
    } else {
        tRem = document.getElementsByClassName('button-primary button-primary--gold')[0].innerText.trim();
        aBox.push([tBoxNum, 'Not Opened', tRem, Date().replace(' GMT-0300 (Horário Padrão de Brasília)', '')])
    }
    cleanAll();
};
setInterval(openBox, nTime);

function cleanAll() {
    console.clear();
    console.table(aBox);
};