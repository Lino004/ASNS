function translate(val) {
  Object.keys(val).forEach((name) => {
    if (typeof val[name] === 'string') {
      val[name] = '$$' + val[name];
    } else {
      translate(val[name]);
    }
  });
}

export default function initTranslate(array) {
  Object.values(array).forEach((val) => {
    translate(val);
  });
}
