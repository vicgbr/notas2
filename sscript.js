function verificarNota() {
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let nota4 = parseFloat(document.getElementById("nota4").value)
    let total = nota1 + nota2 + nota3 + nota4;
    
    if (total >=7) {
        document.getElementById("resultado").innerText = "Aprovado!" 
    }
    else {
        document.getElementById("resultado").innerText = "Reprovado."

    }            
    


}