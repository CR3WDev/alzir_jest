const mdc = ([x,y]) => {
    if (x < y) {
      let aux = x;
      x = y;
      y = aux;
    }
    let has_mdc = false;
    let mdc = 0;
    for (let i = 0; !has_mdc; i++) {
      let divider = x - i;
      if (x % divider === 0 && y % divider === 0) {
        mdc = divider;
        has_mdc = true;
      }
    }
    return mdc;
};

module.exports = { mdc }