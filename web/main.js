$(() => {
    // 初中生物 95aa47b97ebf654b1d093306139d5a61,0e2d924516703409abbdc6131b90af9b,f83f94007123841072a44b7335ed42a8

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
        const {TOKEN} = await (await fetch('token.json')).json();
        const idStr = $('#idInput').val().split(',').map(item => {
            return item.trim();
        }).join(',');
        const type = $('#seId').children('option:selected').val();
        const email = 'haojinxueqiang@126.com'; // 邮箱
        console.log('idStr: ', idStr);
        console.log('type: ', type);
        console.log('email: ', email);
        const url = createTestURL(idStr, type, email, TOKEN);
        console.log('url: ', url);
        $.get(url);
    });
});

function createTestURL(idStr, type, email, TOKEN) {
    const time = getTimestamp();
    console.log(TOKEN, time);
    // --type xxx --id xxx --email xxx
    const url = `http://localhost:3000/start_package?time=${time}&&sign=${getSign(TOKEN, time)}&&type=${type}&&id=${idStr}&&email=${email}`;
    return url;
}

function getTimestamp() {
    return new Date().getTime() / 1000 >> 0; // 时间戳到秒
}

function getSign(TOKEN, timestamp) {
    return md5(TOKEN + timestamp);
}