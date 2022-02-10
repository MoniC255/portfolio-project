const calculateAreaOfCircle = (radius) => {
  const areaCirc = Math.PI * radius **2
  const twoDecimalPlaces = areaCirc.toFixed(2);
  const toFloat = parseFloat(twoDecimalPlaces)
  
  return toFloat
 }



 console.log(calculateAreaOfCircle(3))