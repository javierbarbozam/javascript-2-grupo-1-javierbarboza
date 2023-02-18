// Crear un método que permita agregar cursos a la lista de cursos aprobados.
// El usuario debe poder ingresar un objeto con el nombre del curso, nota.

// Y dependiendo la nota se agrega de manera automática una propiedad nueva que se llama estado:
// cuyo valor sera de aprobado (nota > 70) o reprobado (nota < 70)

function estudianteNuevo(nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, matriculados, cursados) {
  const datos = {};

  datos.nombre = nombre;
  datos.apellidos = apellidos;
  datos.fechaNacimiento = fechaNacimiento;
  datos.id = id;
  datos.nuevoIngreso = nuevoIngreso;
  datos.carrera = carrera;
  datos.matriculados = matriculados || [];
  datos.cursados = cursados || [];
  
  datos.matricular = function(curso) {
    this.matriculados.push(curso)
  }

  datos.retirar = function(curso) {
    const index = this.matriculados.indexOf(curso);
    if (index > -1) {
      this.matriculados.splice(index, 1);
    }
  
    // this.cursosMatriculados = this.cursosMatriculados.filter(item => item !== curso); // devuelve un array con los elementos que cumplen con la condición
  }

  datos.materias = function (curso, nota) {
    const materia = {};

    materia.curso = curso;
    materia.nota = nota;
    materia.estado = '';

    if (nota >= 70) {
      materia.estado = 'aprobado'
    } else {materia.estado = 'reprobado'}

    // materia.estado = function (nota) {
    //   if (nota >= 70) {
    //     return 'aprobado'
    //   } else { return 'reprobado'}
    // }

    this.cursados.push(materia)
  }

  return datos;
}

const andy = estudianteNuevo('Andy', 'Smith', '1990-10-30', 'a-0001', true, 'Historía del Arte', ['Introducción a la pintura']);
andy.materias('Introducción a la pintura', 70)
andy.materias('Humanidades I', 68)
console.log(andy)