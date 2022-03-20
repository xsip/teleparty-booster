fetch('https://raw.githubusercontent.com/xsip/teleparty-booster/main/dist/app.js')
    .then(response => response.text())
    .then(txt => eval(txt))
    .then(() => {
        document.getElementById('status').innerHTML = 'booster.js loaded'
        // now you can use the script
        document.getElementById('today').innerHTML = moment().format('dddd');
        document.getElementById('today').style.color = 'green';
        alert('booster loaded!!');
    })