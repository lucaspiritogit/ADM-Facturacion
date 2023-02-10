let total = document.getElementById('total');
let totalAsNumber = parseInt(total.value);
let subTotal = document.getElementById('subTotal');
let subTotalAsNumber = parseInt(subTotal.value);
let calcularTotal = document.getElementById('calcularTotal');
let submitViaje = document.getElementById('submitViaje');

let bulto = document.getElementById('conBulto');
let demora = document.getElementById('conDemora');
let lluvia = document.getElementById('conLluvia');
let regreso = document.getElementById('conRegreso');

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
precioLocalidad0 = parseInt(0);
precioLocalidad1 = parseInt(0);
precioLocalidad2 = parseInt(0);
precioLocalidad3 = parseInt(0);
precioLocalidad4 = parseInt(0);

let subTotales = [];
let sumaTotal;
const VALOR_REGRESO_FIJO = 300;

localidad0.addEventListener('change', () => {
  let localidadSelected = localidad0.options[localidad0.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad0 = localidadFiltrada.precio;
        subTotalAsNumber += localidadFiltrada.precio;
      });
    });
});

localidad1.addEventListener('change', () => {
  localidadSelected = localidad1.options[localidad1.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad1 = localidadFiltrada.precio;
        subTotalAsNumber += localidadFiltrada.precio;
      });
    });
});

localidad2.addEventListener('change', () => {
  localidadSelected = localidad2.options[localidad2.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad2 = localidadFiltrada.precio;
        subTotalAsNumber += localidadFiltrada.precio;
        subTotal.innerHTML = subTotalAsNumber;
      });
    });
});

localidad3.addEventListener('change', () => {
  localidadSelected = localidad3.options[localidad3.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad3 = localidadFiltrada.precio;
        subTotalAsNumber += localidadFiltrada.precio;
        subTotal.innerHTML = subTotalAsNumber;
      });
    });
});

localidad4.addEventListener('change', () => {
  localidadSelected = localidad4.options[localidad4.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/localidad/')
    .then((response) => response.json())
    .then((data) => {
      let filteredLocalidad = data.filter(
        (localidad) => localidad.id == localidadSelected,
      );
      filteredLocalidad.forEach((localidadFiltrada) => {
        precioLocalidad4 = localidadFiltrada.precio;

        subTotalAsNumber += localidadFiltrada.precio;
        subTotal.innerHTML = subTotalAsNumber;
      });
    });
});

calcularTotal.addEventListener('click', (e) => {
  e.preventDefault();
  subTotales.push(precioLocalidad0);
  subTotales.push(precioLocalidad1);
  subTotales.push(precioLocalidad2);
  subTotales.push(precioLocalidad3);
  subTotales.push(precioLocalidad4);
  subTotales = subTotales.filter(function (value) {
    return value !== 0;
  });

  if (regreso.checked) {
    subTotales.push(VALOR_REGRESO_FIJO);
  }

  sumaTotal = subTotales.reduce((a, b) => a + b, 0);

  if (lluvia.checked && bulto.checked) {
    let lluviaAplicado = sumaTotal / 2;
    let bultoAplicado = sumaTotal / 4;
    sumaTotal += lluviaAplicado + bultoAplicado;
    subTotales.push(lluviaAplicado);
    subTotales.push(bultoAplicado);
  } else if (lluvia.checked) {
    let lluviaAplicado = sumaTotal / 2;
    sumaTotal += lluviaAplicado;
    subTotales.push(lluviaAplicado);
  } else if (bulto.checked) {
    let bultoAplicado = sumaTotal / 4;
    sumaTotal += bultoAplicado;

    subTotales.push(bultoAplicado);
  }
  subTotal.value = subTotales.join(' + ');

  total.value = sumaTotal;

  subTotales = [];
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
