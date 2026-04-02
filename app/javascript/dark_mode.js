const toggleDarkMode = () => {
  const html = document.documentElement
  html.classList.toggle("dark")

  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  )
}

// carregar preferência salva
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark")
  }
})

export { toggleDarkMode }