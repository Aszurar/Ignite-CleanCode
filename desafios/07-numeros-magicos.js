function lookForUpdades() {}
setInterval(lookForUpdades, 60 * 30 * 1000);
////////////////////////////////////////
function getStatus(code) {
  if (code === 200) {
    return 'Success';
  }

  if (code === 404) {
    return 'Not Found';
  }

  if (code === 500) {
    return 'Internal Server Error';
  }

  return 'Unknown Status';
}
////////////////////////////////////////
function calculateDiscount(price) {
  if (price > 1000) {
    return price * 0.2;
  } else {
    return price * 0.1;
  }
}
