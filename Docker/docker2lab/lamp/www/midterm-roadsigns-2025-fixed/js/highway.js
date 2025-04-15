$(window).on("load", function() {
    $("#toschool").on("click", toschool)
    $("#fromschool").on("click", fromschool)
    
})
const $mu = $("#mudistance");
const $har = $("#harrisburgdistance");
/*function toschool() {
    let $mu = $("#mudistance")
    let $har = $("#harrisburgdistance")
    if (!($mu.text() == 0)) {
        let $mudis = parseInt($mu.text())
        $mudis--
        $mu.text($mudis)
        let $hardis = parseInt($har.text())
        $hardis++
        $har.text($hardis)
    }
}*/
function toschool() {
    const muValue = Number($mu.text());
    if (muValue !== 0) {
        const harValue = Number($har.text());
        $mu.text(muValue - 1);
        $har.text(harValue + 1);
    }
}




/*function fromschool() {
    let $mu = $("#mudistance")
    let $har = $("#harrisburgdistance")
    if (!($har.text() == 0)) {
        let $mudis = parseInt($mu.text())
        $mudis++
        $mu.text($mudis)
        let $hardis = parseInt($har.text())
        $hardis--
        $har.text($hardis)
    }
}*/
/*function fromschool() {
    const $mu = $("#mudistance")
    const $har = $("#harrisburgdistance")
    if (!($har.text() === 0)) {
        $mu.html((Number($mu.text())+ 1))
        $har.html((Number($har.text())- 1))
    }
}*/
function fromschool() {
    const harValue = Number($har.text());
    if (harValue !== 0) {
        const muValue = Number($mu.text());
        $mu.text(muValue + 1);
        $har.text(harValue - 1);
    }
}