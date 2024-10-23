export const thirdStep = [
  {
    id: "1",
    text: "Código postal",
    placeholder: "CP",
    speech: "Código postal de residencia",
    message: "Por favor ingresa tu código postal",
    type: "text",
    valueName: "postcode",
    validation: {
      pattern: {
        value: /^\d{5}$/,
      },
    },
  },
  {
    id: "2",
    text: "Ciudad",
    placeholder: "Su ciudad",
    speech: "El nombre del pueblo donde vives",
    message: "No entraste a la ciudad",
    type: "text",
    valueName: "city",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
  {
    id: "3",
    text: "Calle",
    placeholder: "Tu Calle",
    speech: "Nombre de la calle del pueblo donde vives",
    message: "Ingresar calle",
    type: "text",
    valueName: "street",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
  {
    id: "4",
    text: "Número de casa",
    placeholder: "Nº",
    speech: "El número del edificio en el que vives",
    message: "No ingresó el número de la casa",
    type: "text",
    valueName: "houseNumber",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
  {
    id: "5",
    text: "Piso",
    placeholder: "Piso",
    speech: "Completa si existe",
    type: "text",
    valueName: "flatNumber",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
  {
    id: "6",
    text: "Tipo de vivienda",
    placeholder: "Selecciona opciones...",
    speech: "Su estado residencial actual",
    message: "Seleccione su estado de residencia",
    valueName: "typeOfHouse",
    options: [
      "Propietario con hipoteca",
      "Propietario sin hipoteca",
      "Alquiler",
      "Padres que viven",
      "Otros",
    ],
    value: [
      "Owner with mortgage",
      "Owner without mortgage",
      "Rental",
      "Parents dwelling",
      "Other",
    ],
  },
];
