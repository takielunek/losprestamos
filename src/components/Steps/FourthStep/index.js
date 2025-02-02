export const fourthStep = [
  {
    id: "1",
    text: "Tipo de ingresos",
    placeholder: "Selecciona opciones...",
    speech: "Su fuente actual de ingresos",
    message: "Elige tu fuente de ingresos",
    valueName: "typeOfIncome",
    options: [
      "Trabajo fijo",
      "Trabajo temporal",
      "Desempleado",
      "Jubilado",
      "Autónomo",
      "Estudiante",
      "Ama de casa",
      "Empleado público",
      "Militar",
      "Otros",
    ],
    value: [
      "Permanent job",
      "Temporary job",
      "Unemployed",
      "Retired",
      "Self-employed",
      "Student",
      "Housewife",
      "Public employee",
      "Military",
      "Other",
    ],
  },

  {
    id: "2",
    text: "Fecha de inicio del trabajo",
    placeholder: "Introduzca el día del mes",
    speech: "Dar la fecha",
    message: "Fecha incorrecta",
    valueName: "startDateOfWork",
  },
  {
    id: "3",
    text: "Antigüedad en tu trabajo",
    placeholder: "Por favor indique cuantos años ha trabajado",
    speech: "Introduce la cantidad",
    message: "Introduce un valor",
    type: "text",
    valueName: "lengthOfSeniority",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
  {
    id: "4",
    text: "Día de paga",
    placeholder: "Introduzca el día del mes",
    speech: "Ingrese el día del mes en el que recibe su pago",
    message: "Ingrese el día en el rango 1-31",
    type: "text",
    valueName: "payday",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
  {
    id: "5",
    text: "Ingreso mensual",
    placeholder: "Introduzca el valor en €",
    speech: "Introduce la cantidad",
    message: "Introduce tus ingresos mensuales",
    type: "text",
    valueName: "monthlyIncome",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
];
