// Utils
/* eslint-disable complexity */
import { isDefined } from './is';

export function isEmpty(items) {
  return !isDefined(items) || items.length === 0 || Object.keys(items).length === 0;
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const createKeyWords = (name) => {
  const arrName = [];
  let curName = '';
  // eslint-disable-next-line array-callback-return
  name.split('').map((letter) => {
    curName += letter ;
    arrName.push(curName);
  });
  return arrName;
};


export const tiempoTranscurrido = (DatePost) => {
  const hoy = new Date().getTime();
  const date = new Date(DatePost).getTime();
  const diferencia = hoy - date;

  const diferenciaSegundo = Math.round(diferencia / (1000));
  const diferenciaMinu = Math.round(diferencia / (1000 * 60));
  const diferenciaHora = Math.round(diferencia / (1000 * 60 * 60));
  const diferenciaDias = Math.round(diferencia / (1000 * 60 * 60 * 24));
  const diferenciaSemana = Math.round(diferencia / (1000 * 60 * 60 * 24 * 7));
  const diferenciaMes = Math.round(diferencia / (1000 * 60 * 60 * 24 * 7 * 30));
  const diferenciaAnno = Math.round(diferencia / (1000 * 60 * 60 * 24 * 7 * 30 * 12));

  if (diferenciaAnno > 0) {
    return `hace ${diferenciaAnno} año${diferenciaAnno>1?'s':''}`;
  }

  if (diferenciaMes > 0) {
    return `hace ${diferenciaMes} mes${diferenciaMes>1?'es':''}`;
  }

  if (diferenciaSemana > 0) {
    return `hace ${diferenciaSemana} semana${diferenciaSemana>1?'s':''}`;
  }

  if (diferenciaDias > 0) {
    return `hace ${diferenciaDias} día${diferenciaDias>1?'s':''}`;
  }

  if (diferenciaHora > 0) {
    return `hace ${diferenciaHora} hora${diferenciaHora>1?'s':''}`;
  }

  if (diferenciaMinu > 0) {
    return `hace ${diferenciaMinu} minuto${diferenciaMinu>1?'s':''}`;
  }

  if (diferenciaSegundo > 0) {
    return `hace ${diferenciaSegundo} segundo${diferenciaSegundo>1?'s':''}`;
  }

};
