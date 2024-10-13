function carMileageAnalyzer(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);

  const averageMileage = totalMileage / cars.length;

  const highestMileage = cars.reduce((highest, car) => (car.mileage > highest.mileage ? car : highest), cars[0])

  const lowestMileage = cars.reduce((lowest, car) => ( car.mileage < lowest.mileage ? car : lowest) ,cars[0]) 

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileage,
    lowestMileage,
    totalMileage
  }

}


module.exports = carMileageAnalyzer;
