window.onload = function () {
    var el;
    //el = document.getElementsByClassName("question");
    //el.setAttribute("class", "hidden");
    document.querySelectorAll(".question").forEach(function (el) {
        el.classList.add("hidden")
    })
    document.querySelectorAll(".result").forEach(function (el) {
        el.classList.add("hidden")
    })
    el = document.getElementById("yes")
    el.classList.add("hidden")
    el = document.getElementById("no")
    el.classList.add("hidden")

    $("#car").click(function () {
        /* Where are you? */
        firstqhide()
        $("#holdit").removeClass("hidden")
        yesnoshow()
        $("#yes").click(function () {
            clearall()
            $("#toilet").removeClass("hidden")
        });
        $("#no").click(function () {
            $("#holdit").addClass("hidden")
            $("#traffic").removeClass("hidden")
            $("#no").click(function () {
                clearall()
                $("#sideroad").removeClass("hidden")
            })
            $("#yes").click(function () {
                clearall()
                $("#cup").removeClass("hidden")
            })
        })
    });

    $("#home").click(function () {
        firstqhide()
        $("#showerq").removeClass("hidden")
        yesnoshow()
        $("#no").click(function () {
            yesnohide()
            $("#showerq").addClass("hidden")
            $("#toilet").removeClass("hidden")
        })
        $("#yes").click(function () {
            $("#showerq").addClass("hidden")
            $("#feet").removeClass("hidden")
            $("#yes").click(function () {
                $("#feet").addClass("hidden")
                yesnohide()
                $("#toilet").removeClass("hidden")
            })
            $("#no").off()
            $("#no").click(function () {
                clearall()
                $("#showerans").removeClass("hidden")
            })
        })
    })

    $("#outside").click(function () {
        firstqhide()
        yesnoshow()
        $("#peoplearound").removeClass("hidden")
        $("#no").click(function () {
            clearall()
            $("#anywhere").removeClass("hidden")
        })
        $("#yes").click(function () {
            $("#peoplearound").addClass("hidden")
            $("#peoplecare").removeClass("hidden")
            $("#no").off()
            $("#yes").off()
            $("#no").click(function () {
                clearall()
                $("#anywhere").removeClass("hidden")
            })
            $("#yes").click(function () {
                clearall()
                $("#bush").removeClass("hidden")
            })
        })
    })

    $("#party").click(function () {
        firstqhide()
        $("#drunk").removeClass("hidden")
        yesnoshow()
        $("#yes").click(function () {
            $("#drunk").addClass("hidden")
            $("#conscious").removeClass("hidden")
            $("#no").off()
            $("#yes").off()
            $("#yes").click(function () {
                clearall()
                $("#anywhere").removeClass("hidden")
            })
            $("#no").click(function () {
                clearall()
                $("#pants").removeClass("hidden")
            })
        })
        $("#no").click(function () {
            clearall()
            $("#toilet").removeClass("hidden")
        })
    })

    $("#else").click(function () {
        firstqhide()
        $("#sample").removeClass("hidden")
        yesnoshow()
        $("#yes").click(function () {
            clearall()
            $("#cup").removeClass("hidden")
        })
        $("#no").click(function () {
            clearall()
            $("#toilet").removeClass("hidden")
        })
    })

};

function firstqhide() {
    document.getElementsByClassName("firstq")[1].classList.add("hidden")
    document.getElementsByClassName("firstq")[0].classList.add("hidden")
}
function yesnohide() {
    $("#no").addClass("hidden")
    $("#yes").addClass("hidden")
}
function yesnoshow() {
    $("#no").removeClass("hidden")
    $("#yes").removeClass("hidden")
}
function clearall() {
    document.querySelectorAll(".question").forEach(function (el) {
        el.classList.add("hidden")
    })
    document.querySelectorAll(".answer").forEach(function (el) {
        el.classList.add("hidden")
    })
    document.querySelectorAll(".result").forEach(function (el) {
        el.classList.add("hidden")
    })
    yesnohide()
}