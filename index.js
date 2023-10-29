const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(returnFirstTwoDrivers(drivers));
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  console.log(returnFirstTwoDrivers(drivers));
  
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    };
  }
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoublerMultiplier2 = createFareMultiplier(2); 
  const fare = 10;
  const doubledFare = fareDoublerMultiplier2(fare);
  console.log(doubledFare); 
  function fareDoubler(fare) {
    return fare * 2
  }
  function fareTripler(fare) {
    return fare * 3
  }
  function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
   
 