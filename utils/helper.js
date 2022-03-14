export const formatCurrency = (number, prefix) => {
  const stringNumber = number.toString();
  const split = stringNumber.split(',');
  const sisa = split[0].length % 3;
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  let rupiah = split[0].substr(0, sisa);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix ? `${prefix} ${rupiah}` : `Rp ${rupiah}`;
};

export const validateWhatsappNumber = (whatsappNumber) => {
  if (!whatsappNumber.startsWith('08') || whatsappNumber.length < 8) return false;
  return true;
};

export const replaceWhatsappNumber = (whatsappNumber, code = '+62') => {
  return `${code}${whatsappNumber.slice(1)}`;
};

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const convertBulletListToSemicolon = (text) => {
  const bullet = '\u2022';
  const bulletWithSpace = `${bullet} `;
  const convertedLine = text.replaceAll('\n', ';');
  return convertedLine.replaceAll(bulletWithSpace, '');
};

export const convertArrayToBulletList = (textList) => {
  const bullet = '\u2022';
  const bulletWithSpace = `${bullet} `;
  const newLine = '\n';
  return `${bulletWithSpace}${textList.join(newLine + bulletWithSpace)}`;
};
