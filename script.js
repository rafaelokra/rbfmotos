function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "rbf-motos-pnj.png")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("301148571_446759447474074_3825935256571442549_n.png")
    }
  }