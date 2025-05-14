function calcularPrecio() {
    const precioHora = 20;
    const form = document.getElementById('matriculaForm');
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpia

    // Verifica qué materias están seleccionadas
    const materias = {
      "Matemáticas I": form.querySelector('input[name="asignatura"][value="Matemáticas I"]').checked,
      "Historia": form.querySelector('input[name="asignatura"][value="Historia"]').checked,
      "Matemáticas II": form.querySelector('input[name="asignatura"][value="Matemáticas II"]').checked,
      "Física": form.querySelector('input[name="asignatura"][value="Física"]').checked
    };

    // Validación: No se puede seleccionar M2 sin M1
    if (materias["Matemáticas II"] && !materias["Matemáticas I"]) {
      resultado.innerHTML = '<span class="error">No puedes seleccionar "Matemáticas II" sin haber seleccionado "Matemáticas I".</span>';
      return;
    }

    // Horas ingresadas
    const horas = {
      "Matemáticas I": parseInt(form.horas_M1.value) || 0,
      "Historia": parseInt(form.horas_H.value) || 0,
      "Matemáticas II": parseInt(form.horas_M2.value) || 0,
      "Física": parseInt(form.horas_F.value) || 0
    };

    let totalHoras = 0;

    for (let materia in materias) {
      if (materias[materia]) {
        totalHoras += horas[materia];
      }
    }

    let total = totalHoras * precioHora;

    // Descuento antiguo alumno
    if (document.getElementById('antiguoAlumno').checked) {
      total *= 0.65;
    }

    const totalConBeca = document.getElementById('beca').checked ? total * 0.2 : total;

    resultado.innerHTML = `
      Total mensual: ${total.toFixed(2)} €<br>
      Total con beca: ${totalConBeca.toFixed(2)} €
    `;
  }