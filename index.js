counter = () => {
    const final = new Date('05 23, 2021 00:00:00').getTime();
    const start = Date.now();

    const gap = final - start;

    const sec = 1000;
    const min = sec * 60;
    const hr = min * 60;
    const day = hr * 24;

    //calculate final value 
    let remainDay = parseInt(gap / day)
    let remainHours = parseInt((gap % day) / hr)
    let remainMinute = parseInt((gap % hr) / min)
    let remainSeconds = parseInt((gap % min) / sec)

    remainSeconds = remainSeconds < 10 ? '0' + remainSeconds : remainSeconds
    remainMinute = remainMinute < 10 ? '0' + remainMinute : remainMinute
    remainHours = remainHours < 10 ? '0' + remainHours : remainHours
    remainDay = remainDay < 10 ? '0' + remainDay : remainDay

    document.querySelector(".day").innerHTML = remainDay
    document.querySelector(".hour").innerHTML = remainHours
    document.querySelector(".minute").innerHTML = remainMinute
    document.querySelector(".second").innerHTML = remainSeconds

}
setInterval(counter, 1000)