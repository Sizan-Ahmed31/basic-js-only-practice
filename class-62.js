// function getCurrentTime() {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     const twelveHoursFormat = hours > 12 ? hours - 12 : hours;
//     const formatHours = twelveHoursFormat < 10 ? '0' + twelveHoursFormat : twelveHoursFormat
//     const formatMinutes = minutes < 10 ? '0' + minutes : minutes
//     const formatSeconds = seconds < 10 ? '0' + seconds : seconds
//     console.log(`${formatHours}:${formatMinutes}:${formatSeconds}`)
// }

// const timer = setInterval(() => {
//     getCurrentTime()
// }, 1000);

// clearInterval(timer)

function real() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const licalTime = hours > 12 ? hours - 12 : hours;
    const formatHours = licalTime < 10 ? '0' + licalTime : licalTime;
    const formatMinutes = minutes < 10 ? '0' + minutes : minutes
    const formatSeconds = seconds < 10 ? '0' + seconds : seconds
    console.log(`${formatHours}:${formatMinutes}:${formatSeconds}`)
}

const timer = setInterval(() => {
    real()
}, 1000);

clearInterval(timer)