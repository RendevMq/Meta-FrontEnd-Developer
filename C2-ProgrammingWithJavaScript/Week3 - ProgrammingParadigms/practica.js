
class Persona {
  constructor(nombre, edad, lugarResidencia) {
      this.nombre = nombre;
      this.edad = edad;
      this.lugarResidencia = lugarResidencia;
  }

  descripcion() {
      console.log("Nombre:", this.nombre, " Edad:", this.edad, " Residencia: ", this.lugarResidencia);
  }
}

class Empleado extends Persona {
  constructor(salario, antiguedad, nombreEmpleado, edadEmpleado, residenciaEmpleado) {
      super(nombreEmpleado, edadEmpleado, residenciaEmpleado);
      this.salario = salario;
      this.antiguedad = antiguedad;
  }

  descripcion() {
      super.descripcion(); // Llama al método descripcion de la clase padre
      console.log("Salario: ", this.salario, " Antigüedad:", this.antiguedad);
  }
}

const Marcos = new Empleado(1500, 15, "Manuel", 55, "Colombia");
Marcos.descripcion(); 
console.log(Marcos instanceof Empleado); 
console.log(Marcos instanceof Persona); 

const Manuel = new Persona("Manuel", 15, "España");
console.log(Manuel instanceof Persona); 
console.log(Manuel instanceof Empleado); 
