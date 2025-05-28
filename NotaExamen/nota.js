function calcularNota() {
    const notaInicial = parseFloat(document.getElementById('nota').value);
    const totalPreguntas = 27;
    const radios = document.getElementsByName('tiempo');
    let penalizacionPorError = 0;
  
    for (const radio of radios) {
      if (radio.checked) {
        penalizacionPorError = parseFloat(radio.value);
        break;
      }
    }
  
    if (isNaN(notaInicial) || notaInicial < 0 || notaInicial > 10) {
      alert("Por favor, ingresa una nota válida entre 0 y 10.");
      return;
    }
  
    const aciertos = Math.round((notaInicial / 10) * totalPreguntas);
    const incorrectas = totalPreguntas - aciertos;
  
    let notaFinal = notaInicial - (incorrectas * penalizacionPorError);
    notaFinal = Math.max(0, notaFinal); // No permitir nota negativa
  
    document.getElementById('resultado').innerHTML = `
      Tu nota final es: <strong>${notaFinal.toFixed(2)}</strong><br>
      (${aciertos} respuestas correctas estimadas, ${incorrectas} incorrectas)
    `;
  }
  