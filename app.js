window.addEventListener("load", function () {
    
    const btnsNum = document.querySelectorAll(".number");

    console.log(sessionStorage.getItem("puntaje"));

    btnsNum.forEach(btn => {
        btn.addEventListener("click", function (e) {
            sessionStorage.clear();
            btnsNum.forEach(boton => {
                if (boton.classList.contains("number-click")) {
                    boton.classList.remove("number-click")
                }
            })
            e.preventDefault();
            e.target.classList.add("number-click");
            const idnum = e.target.id;
            sessionStorage.setItem("puntaje", idnum);
        })
    });

    const btnsb = document.getElementById("btnsb");

    btnsb.addEventListener("click", function (e) {
        e.preventDefault();
        if (sessionStorage.getItem("puntaje") !== null) {
            location.replace("./trankyou.html")
        } else {
            console.log("selecciona un numero!");
        }
    })

    
})

const numSel = document.getElementById("num-sel");

const num = sessionStorage.getItem("puntaje");

numSel.innerHTML += `${num}`;