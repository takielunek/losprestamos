export const firstStep = [
  {
    id: "1",
    text: "Nombre",
    placeholder: "Tu nombre",
    speech: "Asegúrate de que coincida con el nombre en DNI/NIE",
    message: "Introduzca su nombre",
    type: "text",
    valueName: "firstName",
    validation: {
      minLength: {
        value: 3,
      },
    },
  },
  {
    id: "2",
    text: "Apellido",
    placeholder: "Apellidos",
    speech: "Asegúrate de que coincida con el nombre del DNI/NIE",
    message: "Introduzca su nombre",
    type: "text",
    valueName: "lastName",
    validation: {
      minLength: {
        value: 2,
      },
    },
  },
  {
    id: "3",
    text: "Segundo apellido",
    placeholder: "Segundo apellido",
    speech: "Asegúrate de que coincida con el nombre del DNI/NIE",
    type: "text",
    valueName: "secondLastName",
    validation: {
      minLength: {
        value: 2,
      },
    },
  },
  {
    id: "4",
    text: "Télefono móvil",
    speech:
      "Asegúrate de que esté activo, recibirás códigos de verificación allí",
    message: "Numero de telefono invalido",
    valueName: "phone",
    validation: {
      pattern: {
        value: /^\d{9}$/,
      },
    },
  },
  {
    id: "5",
    text: "Correo electrónico",
    placeholder: "Correo electrónico",
    speech: "Allí recibirás todos los documentos del préstamo concedido",
    message: "Sin dirección de correo electrónico",
    type: "email",
    valueName: "email",
    validation: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
      },
    },
  },
];
