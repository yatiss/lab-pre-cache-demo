$(() => {
    // 初中生物 95aa47b97ebf654b1d093306139d5a61,0e2d924516703409abbdc6131b90af9b,f83f94007123841072a44b7335ed42a8
    // haojinxueqiang@126.com
    //  type: 1物理, 2化学 3初中生物 4高中生物
    const xkArr = [
        {name:'物理', type: 1},
        {name:'化学', type: 2},
        {name:'初中生物', type: 3},
        {name:'高中生物', type: 4}
    ];

    xkArr.forEach(item => {
        $('#seId').append(`<option value ="${item.type}">${item.name}</option>`)
    });

    $('#subId').click(async () => {
        const {TOKEN, FROM} = await (await fetch('config.json')).json();
        const idStr = $('#idInput').val().split(',').map(item => {
            return item.trim(); // 去空格
        }).join(',');
        const type = $('#seId').children('option:selected').val();
        const email = $('#emailInput').val(); // 邮箱
        console.log('idStr: ', idStr);
        console.log('type: ', type);
        console.log('email: ', email);
        const url = createTestURL(idStr, type, email, TOKEN, FROM);
        console.log('url: ', url);
        $.get(url);
    });
    $('#checkId').click(async () => {
        const {TOKEN, FROM} = await (await fetch('config.json')).json();
        const hashid = $('#idInput2').val();
        const url = createFindURL(hashid,TOKEN, FROM);
        $.get(url).then((data) => {
            console.log('*********data:', data);
        });
    });
});

function createTestURL(idStr, type, email, TOKEN, FROM) {
    const time = getTimestamp();
    console.log(TOKEN, time);
    // --type xxx --id xxx --email xxx
    // const url = `http://localhost:3000/start_package?from=${FROM}&&time=${time}&&sign=${getSign(TOKEN, time)}&&type=${type}&&id=${idStr}&&email=${email}`;
    // const url = `http://192.168.1.191:3000/start_package?from=${FROM}&&time=${time}&&sign=${getSign(TOKEN, time)}&&type=${type}&&id=${idStr}`;
    const url = `http://pack.nobook.com/start_package?from=${FROM}&&time=${time}&&sign=${getSign(TOKEN, time)}&&type=${type}&&id=${idStr}`;
    return url;
}
function createFindURL(hashid,TOKEN, FROM) {
    const time = getTimestamp();
    console.log(TOKEN, time);
    // --type xxx --id xxx --email xxx
    // const url = `http://localhost:3000/check_package?time=${time}&&sign=${getSign(TOKEN, time)}&&hashid=${hashid}`;
    // const url = `http://192.168.1.191:3000/check_package?time=${time}&&sign=${getSign(TOKEN, time)}&&hashid=${hashid}`;
    const url = `http://pack.nobook.com/check_package?time=${time}&&sign=${getSign(TOKEN, time)}&&hashid=${hashid}`;
    return url;
}

function getTimestamp() {
    return new Date().getTime() / 1000 >> 0; // 时间戳到秒
}

function getSign(TOKEN, timestamp) {
    return md5(TOKEN + timestamp);
}