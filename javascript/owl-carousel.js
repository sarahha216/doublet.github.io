/*Tu khoa HOT*/
var hotIndex = 1;
showDivs(hotIndex);

function plusDivs(o) {
    showDivs(hotIndex += o);
}

function showDivs(o) {
    var l;
    var z = document.getElementsByClassName("myCarousels");
    if (o > z.length) { hotIndex = 1 }
    if (o < 1) { hotIndex = z.length }
    for (l = 0; l < z.length; l++) {
        z[l].style.display = "none";
    }
    z[hotIndex - 1].style.display = "block";
}