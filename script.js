const root = document.documentElement;
const btn = document.getElementById("btnTheme");
const year = document.getElementById("year");

// year

year.textContent = new Date().getFullYear()

// light-dark theme

btn.addEventListener("click", () => {
    const dark = root.getAttribute("data-tema") === 'dark'

    if (dark) {
        root.removeAttribute("data-tema")
    }else{
        root.setAttribute("data-tema", "dark")
    }
})