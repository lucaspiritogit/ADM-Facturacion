let total = document.getElementById('total');
let totalAsNumber = parseInt(total.value);
let calcularTotal = document.getElementById('calcularTotal');
let submitViaje = document.getElementById('submitViaje');
submitViaje.disabled = true;

let bulto = document.getElementById('conBulto');
let demora = document.getElementById('conDemora');
let lluvia = document.getElementById('conLluvia');

let subTotal = document.getElementById('subTotal');
let subTotalAsNumber = parseInt(subTotal);

let localidad0 = document.getElementById('localidad0');
let localidad1 = document.getElementById('localidad1');
let localidad2 = document.getElementById('localidad2');
let localidad3 = document.getElementById('localidad3');
let localidad4 = document.getElementById('localidad4');

let precioLocalidad0;
let precioLocalidad1;
let precioLocalidad2;
let precioLocalidad3;
let precioLocalidad4;

localidad0.addEventListener('change', () => {
  let localidadSelected = localidad0.options[localidad0.selectedIndex].value;
  totalAsNumber = 0;
  total.value = totalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad0 = localidadFiltrada.precio;
        console.log(
          '🚀 ~ file: nuevoViajeParaEmpresa.js:39 ~ filteredLocalidad.forEach ~ precioLocalidad0',
          precioLocalidad0,
        );
        totalAsNumber += localidadFiltrada.precio;
        total.innerHTML = totalAsNumber;
      });
    });
});

localidad1.addEventListener('change', () => {
  localidadSelected = localidad1.options[localidad1.selectedIndex].value;
  totalAsNumber = 0;
  total.value = totalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad1 = localidadFiltrada.precio;
        console.log(
          '🚀 ~ file: nuevoViajeParaEmpresa.js:62 ~ filteredLocalidad.forEach ~ precioLocalidad1',
          precioLocalidad1,
        );
        totalAsNumber += localidadFiltrada.precio;
        total.innerHTML = totalAsNumber;
      });
    });
});

localidad2.addEventListener('change', () => {
  localidadSelected = localidad2.options[localidad2.selectedIndex].value;
  totalAsNumber = 0;
  total.value = totalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad2 = localidadFiltrada.precio;
        console.log(
          '🚀 ~ file: nuevoViajeParaEmpresa.js:85 ~ filteredLocalidad.forEach ~ precioLocalidad2',
          precioLocalidad2,
        );
        totalAsNumber += localidadFiltrada.precio;
        total.innerHTML = totalAsNumber;
      });
    });
});

localidad3.addEventListener('change', () => {
  localidadSelected = localidad3.options[localidad3.selectedIndex].value;
  totalAsNumber = 0;
  total.value = totalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad3 = localidadFiltrada.precio;
        totalAsNumber += localidadFiltrada.precio;
        total.innerHTML = totalAsNumber;
      });
    });
});

localidad4.addEventListener('change', () => {
  localidadSelected = localidad4.options[localidad4.selectedIndex].value;
  totalAsNumber = 0;
  total.value = totalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad4 = localidadFiltrada.precio;

        totalAsNumber += localidadFiltrada.precio;
        total.innerHTML = totalAsNumber;
      });
    });
});

calcularTotal.addEventListener('click', (e) => {
  e.preventDefault();
  if (precioLocalidad1 == undefined) {
    precioLocalidad1 = 0;
  }
  totalAsNumber +=
    precioLocalidad0 +
    precioLocalidad1 +
    precioLocalidad2 +
    precioLocalidad3 +
    precioLocalidad4;
  console.log(
    '🚀 ~ file: nuevoViajeParaEmpresa.js:127 ~ calcularTotal.addEventListener ~ totalAsNumber',
    totalAsNumber,
  );
  total.value = totalAsNumber;
  submitViaje.disabled = false;
});

bulto.addEventListener('change', () => {
  // bulto es el 25% sumado al total
  if (bulto.checked) {
    let divided = (totalAsNumber /= 4);
    totalAsNumber += divided;
    total.value = totalAsNumber;
  } else {
    total.value = totalAsNumber;
  }
});

demora.addEventListener('change', () => {
  // valores fijos cada 15 minutos 200 pesos

  if (demora.checked) {
    totalAsNumber /= 4;
    total.value = totalAsNumber;
  } else {
    totalAsNumber *= 4;
    total.value = totalAsNumber;
  }
});

lluvia.addEventListener('change', () => {
  // lluvia es total divido 2 y eso se lo suma al total
  if (lluvia.checked) {
    // divide it by 2 and then add it to the total
    let divided = (totalAsNumber /= 2);
    totalAsNumber += divided;
    total.value = totalAsNumber + divided;
  } else {
    total.value = totalAsNumber;
  }
});

// empresa
let empresa = document.getElementById('empresa');
let empresaSelected = empresa.options[empresa.selectedIndex].value;

empresa.addEventListener('change', () => {
  empresaSelected = empresa.options[empresa.selectedIndex].value;

  fetch('/empresa/')
    .then((response) => response.json())
    .then((data) => {
      let filteredEmpresa = data.filter(
        (empresa) => empresa.id == empresaSelected,
      );
      filteredEmpresa.forEach((empresaFiltrada) => {
        empresaSelected = empresaFiltrada.id;
        return;
      });
    });
});
