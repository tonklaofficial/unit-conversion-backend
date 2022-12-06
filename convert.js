exports.convert = (measurement , from , to , number) => {
    
    if (from === to) {
      return {
        result : number,
        status : true,
      }
    }
    
    switch (measurement) {
      case 'speed':
        return {
          status : true,
          result : parseFloat((speedMultipliers[from][to] * number).toFixed(5)),
        }
      case "distance":
        return {
          status : true,
          result : parseFloat((distanceMultipliers[from][to] * number).toFixed(5)),
        }
      case "area":
        return {
          status : true,
          result : parseFloat((areaMultipliers[from][to] * number).toFixed(5)),
        }
      case "volume":
        return {
          status : true,
          result : parseFloat((volumeMultipliers[from][to] * number).toFixed(5)),
        };
      default:
        return {
          result : 0,
          status : false,
        } 
    }
}

const distanceMultipliers = {
  metre: {
    mile: 0.000621371,
    wa: 0.5,
  },
  mile: {
    metre: 1609.34,
    wa: 804.672,
  },
  wa: {
    metre: 2,
    mile: 0.001242742,
  },
};

const speedMultipliers = {
  milesph: {
    metresps: 0.44704,
    kmh: 1.60934,
  },
  metresps: {
    milesph: 2.23694,
    kmh: 3.6,
  },
  kmh: {
    milesph: 0.621371,
    metresps: 0.277778,
  },
};

const areaMultipliers = {
  acre: {
    sqmetre: 4046.856422,
    rai: 2.529285264,
  },
  sqmetre: {
    acre: 0.000247105,
    rai: 0.000625,
  },
  rai: {
    sqmetre: 1600,
    acre: 0.3953686,
  },
};

const volumeMultipliers = {
  oz: {
    ml: 29.5735,
    cubcm: 29.5735,
  },
  cubcm: {
    ml: 1,
    oz: 0.0338140565,
  },
  ml: {
    cubcm: 1,
    oz: 0.0338140565,
  },
};
