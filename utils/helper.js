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
  return prefix == undefined ? rupiah : rupiah ? 'IDR ' + rupiah : '';
};
