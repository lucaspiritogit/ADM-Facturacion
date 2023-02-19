const VALOR_REGRESO = 300;

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

let precioDemora0 = 0;
let precioDemora1 = 0;
let precioDemora2 = 0;
let precioDemora3 = 0;
let precioDemora4 = 0;
let fetchDemora = fetch('/demora/').then((response) => response.json());

let localidad0 = document.getElementById('localidad0');
let localidad1 = document.getElementById('localidad1');
let localidad2 = document.getElementById('localidad2');
let localidad3 = document.getElementById('localidad3');
let localidad4 = document.getElementById('localidad4');

let precioLocalidad0 = 0;
let precioLocalidad1 = 0;
let precioLocalidad2 = 0;
let precioLocalidad3 = 0;
let precioLocalidad4 = 0;
let fetchLocalidad = fetch('/localidad/').then((response) => response.json());

let nombreDelSolicitante = document.getElementById('nombreDelSolicitante');
let nombreDelSolicitanteValue = nombreDelSolicitante.value;

let subTotales = [];
let sumaTotal = 0;
let sumaDeTodaslasDemoras = 0;
let valorConRegreso = 0;
let valorSinRegreso = 0;

submitViaje.disabled = true;

demora0.addEventListener('change', () => {
  let demoraSelected = demora0.options[demora0.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;
  fetchDemora.then((data) => {
    let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
    if (demoraSelected == '0') {
      precioDemora0 = 0;
    }
    filteredDemora.forEach((demoraFiltrada) => {
      precioDemora0 = demoraFiltrada.precio;
    });
  });
});

demora1.addEventListener('change', () => {
  let demoraSelected = demora1.options[demora1.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;
  fetchDemora.then((data) => {
    let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
    if (demoraSelected == '0') {
      precioDemora1 = 0;
    }
    filteredDemora.forEach((demoraFiltrada) => {
      precioDemora1 = demoraFiltrada.precio;
    });
  });
});

demora2.addEventListener('change', () => {
  let demoraSelected = demora2.options[demora2.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;
  fetchDemora.then((data) => {
    let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
    if (demoraSelected == '0') {
      precioDemora2 = 0;
    }
    filteredDemora.forEach((demoraFiltrada) => {
      precioDemora2 = demoraFiltrada.precio;
    });
  });
});

demora3.addEventListener('change', () => {
  let demoraSelected = demora3.options[demora3.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;
  fetchDemora.then((data) => {
    let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
    if (demoraSelected == '0') {
      precioDemora3 = 0;
    }
    filteredDemora.forEach((demoraFiltrada) => {
      precioDemora3 = demoraFiltrada.precio;
    });
  });
});

demora4.addEventListener('change', () => {
  let demoraSelected = demora4.options[demora4.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;
  fetchDemora.then((data) => {
    let filteredDemora = data.filter((demora) => demora.id == demoraSelected);
    if (demoraSelected == '0') {
      precioDemora4 = 0;
    }
    filteredDemora.forEach((demoraFiltrada) => {
      precioDemora4 = demoraFiltrada.precio;
    });
  });
});

localidad0.addEventListener('change', () => {
  let localidadSelected = localidad0.options[localidad0.selectedIndex].value;
  subTotalAsNumber = 0;
  subTotal.value = subTotalAsNumber;
  if (localidadSelected == '0') {
    precioLocalidad0 = 0;
  }
  fetchLocalidad.then((data) => {
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
  if (localidadSelected == '0') {
    precioLocalidad1 = 0;
  }
  fetchLocalidad.then((data) => {
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
  if (localidadSelected == '0') {
    precioLocalidad2 = 0;
  }
  fetchLocalidad.then((data) => {
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
  if (localidadSelected == '0') {
    precioLocalidad3 = 0;
  }
  fetchLocalidad.then((data) => {
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
  if (localidadSelected == '0') {
    precioLocalidad4 = 0;
  }
  fetchLocalidad.then((data) => {
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
        if (empresaSelected == '0' && nombreDelSolicitanteValue != '') {
          submitViaje.disabled = false;

          empresaSelected = 0;
        }
        empresaSelected = empresaFiltrada.id;
        return;
      });
    });
});

function corroborarLluviaYBulto() {
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
}

calcularTotal.addEventListener('click', (e) => {
  e.preventDefault();
  subTotales.push(precioLocalidad0);
  subTotales.push(precioLocalidad1);
  subTotales.push(precioLocalidad2);
  subTotales.push(precioLocalidad3);
  subTotales.push(precioLocalidad4);
  calcularDemora();

  // Saco todos los valores que sean 0.
  subTotales = subTotales.filter(function (value) {
    return value !== 0;
  });

  if (regreso.checked) {
    subTotales.push(VALOR_REGRESO);
  }

  sumaTotal = subTotales.reduce(
    (a, b) => (b === sumaDeTodaslasDemoras ? a : a + b),
    0,
  );

  corroborarLluviaYBulto();

  subTotal.value = subTotales.join(' + ');

  sumarPeajes();
  sumaTotal += sumaDeTodaslasDemoras;
  total.value = sumaTotal;
  subTotales = [];
  checkIfEmpresaIsSelected();
  if (total.value != 0) {
    submitViaje.disabled = false;
  }
});

function checkIfEmpresaIsSelected() {
  if (empresaSelected == '0' && nombreDelSolicitanteValue == '') {
    submitViaje.disabled = true;
    let empresaNoSeleccionada = document.getElementById(
      'empresaNoSeleccionada',
    );
    empresaNoSeleccionada.innerHTML = 'Debe seleccionar una empresa';
    empresaNoSeleccionada.style.color = 'red';
  } else {
    empresaNoSeleccionada.innerHTML = '';
  }
}

function calcularDemora() {
  sumaDeTodaslasDemoras =
    precioDemora0 +
    precioDemora1 +
    precioDemora2 +
    precioDemora3 +
    precioDemora4;
  demora.value = sumaDeTodaslasDemoras;
  demoraAsNumber = sumaDeTodaslasDemoras;
  subTotales.push(sumaDeTodaslasDemoras);
}
let peajesTotal;
function sumarPeajes() {
  if (peajes.value == '' || peajes.value == NaN) {
    peajes.value = '0';
  }
  let peajesInputValue = peajes.value;
  let peajesArr = peajesInputValue.split(',');
  let peajesArrAsNumber = peajesArr.map((peaje) => parseInt(peaje));
  let peajesArrSum = peajesArrAsNumber.reduce((a, b) => a + b, 0);
  peajesTotal = peajesArrSum;
  peajes.value = peajesArrSum;
  totalAsNumber += peajesArrSum;
  total.value = totalAsNumber;
  sumaTotal += peajesArrSum;
}
