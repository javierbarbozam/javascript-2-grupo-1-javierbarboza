class NuevoEstudiante {
  constructor (nombre, apellidos, fechaNacimiento, id, nuevoIngreso, carrera, matriculados, cursados) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.id = id;
    this.nuevoIngreso = nuevoIngreso;
    this.carrera = carrera;
    this.matriculados = matriculados || [];
    this.cursados = cursados || [];

    this.materias = function (curso, nota) {
      const materia = {};

      materia.curso = curso;
      materia.nota = nota;
      materia.estado = nota >= 70 ? 'aprobado' : 'reprobado';
      this.cursados.push(materia)
    }

  }

  // SET

  set matricular (curso) {
    this.matriculados.push(curso)
  }

  set retirar(curso) {
    const index = this.matriculados.indexOf(curso);
    if (index > -1) {
      this.matriculados.splice(index, 1);
    }
  }

  // GET

  get cursosActivos () {
    return this.matriculados
  }
}

const andy = new NuevoEstudiante ('Andy', 'Smith', '1990-10-30', 'a-0001', true, 'Historía del Arte');

andy.matricular = 'Van Gogh 1';
andy.matricular = 'Historia Griega';
andy.matricular = 'Cultura Pop';
andy.retirar = 'Historia Griega';

console.log(andy.cursosActivos)