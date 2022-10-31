/**
 * Код для определения остатка оплаты для студента буткемпа
 */

// принимаем ли мы платежи
const canPayment = true;

// имя студента
const studentName = 'your name';

// цена
const price = 120000;

// первый взнос
const firstPayment = 50000;

// скидка
const discount = 22;

// формула расчета остатка платежа
const totalPrice = price - (price / 100) * discount;

// остаточный платеж
const remainingPayment = totalPrice - firstPayment;

if(canPayment) {
  //если
  if (remainingPayment === 0) {
    console.log(`Ты оплатил учебу полностью.`);

    //иначе
  } else {
    const message = `
  ${studentName}, ты оплатил ${firstPayment} руб. 
  К оплате осталось еще ${remainingPayment} руб.
  Твоя скидка: ${discount}%
  `;

    //сообщение
    console.log(message);
  }
} else {
  console.log(`Мы сейчас не можем принять платеж`);
}