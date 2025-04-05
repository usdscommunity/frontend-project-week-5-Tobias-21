document.addEventListener("DOMContentLoaded", () => {

    const daily = document.querySelector(".daily")
    const weekly = document.querySelector(".weekly")
    const monthly = document.querySelector(".monthly")
    let h1 = document.querySelector(".h1")
    let last1 = document.querySelector("#last1")
    let h2 = document.querySelector(".h2")
    let last2 = document.querySelector("#last2")
    let h3 = document.querySelector(".h3")
    let last3 = document.querySelector("#last3")
    let h4 = document.querySelector(".h4")
    let last4 = document.querySelector("#last4")
    let h5 = document.querySelector(".h5")
    let last5 = document.querySelector("#last5")
    let h6 = document.querySelector(".h6")
    let last6 = document.querySelector("#last6")
    const ranger = document.getElementById("ranger")
    const croissant = document.querySelector(".croissant")
    const decroissant = document.querySelector(".decroissant")

    fetch('data.json')
        .then(reponse => reponse.json())
        .then(donnee => {

            gerer_click("Daily")
            gerer_click("Weekly")
            gerer_click("Monthly")

            function gerer_click(moment) {

                switch (moment) {
                    case "Daily": {

                        daily.addEventListener("click", (event) => {
                            event.preventDefault()



                            for (i = 0; i < 6; i++) {
                                switch (donnee[i].title) {
                                    case "Work": {

                                        h1.textContent = `${donnee[i].timeframes.daily.current}hrs`
                                        last1.textContent = `Last day - ${donnee[0].timeframes.daily.previous}hrs`
                                        break
                                    }
                                    case "Play": {
                                        h2.textContent = `${donnee[i].timeframes.daily.current}hr`
                                        last2.textContent = `Last day - ${donnee[i].timeframes.daily.previous}hrs`
                                        break
                                    }
                                    case "Study": {
                                        h3.textContent = `${donnee[i].timeframes.daily.current}hr`
                                        last3.textContent = `Last day - ${donnee[i].timeframes.daily.previous}hr`
                                        break
                                    }
                                    case "Exercise": {
                                        h4.textContent = `${donnee[i].timeframes.daily.current}hr`
                                        last4.textContent = `Last day - ${donnee[i].timeframes.daily.previous}hr`
                                        break
                                    }
                                    case "Social": {
                                        h5.textContent = `${donnee[i].timeframes.daily.current}hr`
                                        last5.textContent = `Last day - ${donnee[i].timeframes.daily.previous}hrs`
                                        break
                                    }
                                    case "Self Care": {
                                        h6.textContent = `${donnee[i].timeframes.daily.current}hr`
                                        last6.textContent = `Last day - ${donnee[i].timeframes.daily.previous}hr`
                                        break
                                    }
                                }
                            }

                        })
                        break
                    }
                    case "Weekly": {

                        weekly.addEventListener("click", (event) => {
                            event.preventDefault()

                            for (i = 0; i < 6; i++) {
                                switch (donnee[i].title) {
                                    case "Work": {

                                        h1.textContent = `${donnee[i].timeframes.weekly.current}hrs`
                                        last1.textContent = `Last week- ${donnee[0].timeframes.weekly.previous}hrs`
                                        break
                                    }
                                    case "Play": {
                                        h2.textContent = `${donnee[i].timeframes.weekly.current}hrs`
                                        last2.textContent = `Last week - ${donnee[i].timeframes.weekly.previous}hrs`
                                        break
                                    }
                                    case "Study": {
                                        h3.textContent = `${donnee[i].timeframes.weekly.current}hrs`
                                        last3.textContent = `Last week - ${donnee[i].timeframes.weekly.previous}hrs`
                                        break
                                    }
                                    case "Exercise": {
                                        h4.textContent = `${donnee[i].timeframes.weekly.current}hrs`
                                        last4.textContent = `Last week - ${donnee[i].timeframes.weekly.previous}hrs`
                                        break
                                    }
                                    case "Social": {
                                        h5.textContent = `${donnee[i].timeframes.weekly.current}hrs`
                                        last5.textContent = `Last week - ${donnee[i].timeframes.weekly.previous}hrs`
                                        break
                                    }
                                    case "Self Care": {
                                        h6.textContent = `${donnee[i].timeframes.weekly.current}hrs`
                                        last6.textContent = `Last week - ${donnee[i].timeframes.weekly.previous}hrs`
                                        break
                                    }
                                }
                            }
                        })
                        break
                    }

                    case "Monthly": {

                        monthly.addEventListener("click", (event) => {
                            event.preventDefault()

                            for (i = 0; i < 6; i++) {
                                switch (donnee[i].title) {
                                    case "Work": {

                                        h1.textContent = `${donnee[i].timeframes.monthly.current}hrs`
                                        last1.textContent = `Last month - ${donnee[0].timeframes.monthly.previous}hrs`
                                        break
                                    }
                                    case "Play": {
                                        h2.textContent = `${donnee[i].timeframes.monthly.current}hrs`
                                        last2.textContent = `Last month - ${donnee[i].timeframes.monthly.previous}hrs`
                                        break
                                    }
                                    case "Study": {
                                        h3.textContent = `${donnee[i].timeframes.monthly.current}hrs`
                                        last3.textContent = `Last month - ${donnee[i].timeframes.monthly.previous}hrs`
                                        break
                                    }
                                    case "Exercise": {
                                        h4.textContent = `${donnee[i].timeframes.monthly.current}hrs`
                                        last4.textContent = `Last month - ${donnee[i].timeframes.monthly.previous}hrs`
                                        break
                                    }
                                    case "Social": {
                                        h5.textContent = `${donnee[i].timeframes.monthly.current}hrs`
                                        last5.textContent = `Last month - ${donnee[i].timeframes.monthly.previous}hrs`
                                        break
                                    }
                                    case "Self Care": {
                                        h6.textContent = `${donnee[i].timeframes.monthly.current}hrs`
                                        last6.textContent = `Last month - ${donnee[i].timeframes.monthly.previous}hrs`
                                        break
                                    }
                                }
                            }
                        })
                        break
                    }
                }
            }
        })



})  
