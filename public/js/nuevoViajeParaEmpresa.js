let total = document.getElementById('total');
let totalAsNumber = parseInt(total.value);
let subTotal = document.getElementById('subTotal');
let subTotalAsNumber = parseInt(subTotal.value);
let calcularTotal = document.getElementById('calcularTotal');
let submitViaje = document.getElementById('submitViaje');
let demora = document.getElementById('demora');
let demoraAsNumber = parseInt(demora.value);

let bulto = document.getElementById('conBulto');
let lluvia = document.getElementById('conLluvia');
let regreso = document.getElementById('conRegreso');
let peajes = document.getElementById('peajes');

let demora0 = document.getElementById('demora0');
let demora1 = document.getElementById('demora1');
let demora2 = document.getElementById('demora2');
let demora3 = document.getElementById('demora3');
let demora4 = document.getElementById('demora4');

let precioDemora0;
let precioDemora1;
let precioDemora2;
let precioDemora3;
let precioDemora4;
precioDemora0 = parseInt(0);
precioDemora1 = parseInt(0);
precioDemora2 = parseInt(0);
precioDemora3 = parseInt(0);
precioDemora4 = parseInt(0);

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
let valorTotalDemora = 0;
const VALOR_REGRESO_FIJO = 300;
let valorConRegreso = 0;
let valorSinRegreso = 0;

demora0.addEventListener('change', () => {
  let demoraSelected = demora0.options[demora0.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/demora/')
    .then((response) => response.json())
    .then((data) => {
      let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
      filteredDemora.forEach((demoraFiltrada) => {
        precioDemora0 = demoraFiltrada.precio;
        valorTotalDemora += precioDemora0;
      });
    });
});

demora1.addEventListener('change', () => {
  let demoraSelected = demora1.options[demora1.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/demora/')
    .then((response) => response.json())
    .then((data) => {
      let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
      filteredDemora.forEach((demoraFiltrada) => {
        precioDemora1 = demoraFiltrada.precio;
        valorTotalDemora += precioDemora1;
      });
    });
});

demora2.addEventListener('change', () => {
  let demoraSelected = demora2.options[demora2.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/demora/')
    .then((response) => response.json())
    .then((data) => {
      let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
      filteredDemora.forEach((demoraFiltrada) => {
        precioDemora2 = demoraFiltrada.precio;
        valorTotalDemora += precioDemora2;
      });
    });
});

demora3.addEventListener('change', () => {
  let demoraSelected = demora3.options[demora3.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/demora/')
    .then((response) => response.json())
    .then((data) => {
      let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
      filteredDemora.forEach((demoraFiltrada) => {
        precioDemora3 = demoraFiltrada.precio;
        valorTotalDemora += precioDemora3;
      });
    });
});

demora4.addEventListener('change', () => {
  let demoraSelected = demora4.options[demora4.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;

  fetch('/demora/')
    .then((response) => response.json())
    .then((data) => {
      let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
      filteredDemora.forEach((demoraFiltrada) => {
        precioDemora4 = demoraFiltrada.precio;
        valorTotalDemora += precioDemora4;
      });
    });
});

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
  subTotales.push(valorTotalDemora);
  subTotales = subTotales.filter(function (value) {
    return value !== 0;
  });

  if (regreso.checked) {
    subTotales.push(VALOR_REGRESO_FIJO);
  }
  sumaTotal = subTotales.reduce(
    (a, b) => (b === valorTotalDemora ? a : a + b),
    0,
  );

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

  sumarPeajes();
  calcularDemora();
  sumaTotal += valorTotalDemora;
  total.value = sumaTotal;
  subTotales = [];
});

function calcularDemora() {
  demora.value = valorTotalDemora;
  demoraAsNumber = valorTotalDemora;
}

function sumarPeajes() {
  if (peajes.value == '' || peajes.value == NaN) {
    peajes.value = '0';
  }
  let peajesInputValue = peajes.value;
  let peajesArr = peajesInputValue.split(',');
  let peajesArrAsNumber = peajesArr.map((peaje) => parseInt(peaje));
  let peajesArrSum = peajesArrAsNumber.reduce((a, b) => a + b, 0);
  peajes.value = peajesArrSum;
  totalAsNumber += peajesArrSum;
  total.value = totalAsNumber;
  sumaTotal += peajesArrSum;
}

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
