function produceDrivingRange (blockRange) {
  return function (start, end) {
    range = Math.abs(parseInt(start) - parseInt(end));
    diff = Math.abs(range - blockRange);

    if (range <= blockRange) {
      return `within range by ${diff}`;
    } else {
      return `${diff} blocks out of range`;
    };
  };
};

function produceTipCalculator (pct) {
  return function (fare) {
    return fare * pct;
  };
};

function createDriver () {
  let driverId = 0;

  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    };
  };
};
