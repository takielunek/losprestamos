export const fifthStep = [
  {
    id: "1",
    text: "Gastos mensuales fijos (aproximados)",
    placeholder: "Introduzca el valor en €",
    speech: "Introduce la cantidad",
    message: "Introduce tus ingresos mensuales",
    type: "text",
    valueName: "fixedMonthlyCosts",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
  {
    id: "2",
    text: "Número de dependientes",
    placeholder: "Dame un número",
    speech: "Ingresa el número de personas de las que dependes",
    message: "Dame un número",
    type: "text",
    valueName: "numberOfDependents",
    validation: {
      minLength: {
        value: 1,
      },
    },
  },
  {
    id: "3",
    text: "Número de cuenta bancaria",
    placeholder: "Ingrese su número de cuenta bancaria",
    speech:
      "Para mayor comodidad, puede pegar su número de cuenta haciendo clic aquí",
    message: "Ingrese su número de cuenta bancaria",
    type: "text",
    valueName: "accountNumber",
    validation: {
      pattern: {
        value: /^ES\d{2}\d{20}$/,
      },
      minLength: {
        value: 1,
      },
    },
  },
];
