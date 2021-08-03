function func(x) {
    console.log(x.type)
}

let first = document.getElementById("one");

first.addEventListener("mousedown", func);