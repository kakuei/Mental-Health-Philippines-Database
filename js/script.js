function init() {
Tabletop.init( {
key: '1sSqdGzobbySAUfJw9YKFS-PrfU8rz7a-XBSUgbTgl7U',
callback: showInfo,
simpleSheet: true } )
}
function showInfo(data, tabletop) {
console.log(data);
for (var i = 0; i < data.length; i++) {
$('.post').append(
'<div class=”text”>' +
'<h1>' + data[i].name + '</h1>'+
data[i].body +
'</div>' +
'</div>');
}
}
window.addEventListener('DOMContentLoaded', init)