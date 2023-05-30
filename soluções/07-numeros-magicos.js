const EVERY_30_MINUTES = 30 * 60 * 1000;

function lookForUpdades() {}
setInterval(lookForUpdades, EVERY_30_MINUTES);
////////////////////////////////////////

const HTTP_STATUS = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

function getStatus(code) {
  if (code === HTTP_STATUS.SUCCESS) {
    return 'Success';
  }

  if (code === HTTP_STATUS.NOT_FOUND) {
    return 'Not Found';
  }

  if (code === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
    return 'Internal Server Error';
  }

  return 'Unknown Status';
}
////////////////////////////////////////

const HIGH_PRICE_DISCOUNT = 0.2;
const LOW_PRICE_DISCOUNT = 0.1;

function calculateDiscount(price) {
  if (price > 1000) {
    return price * HIGH_PRICE_DISCOUNT;
  } else {
    return price * LOW_PRICE_DISCOUNT;
  }
}
