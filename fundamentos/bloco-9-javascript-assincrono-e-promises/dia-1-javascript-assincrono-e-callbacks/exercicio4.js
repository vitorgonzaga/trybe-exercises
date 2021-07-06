const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (callback) => {
  const temperatureOfMars = callback();
  const output = `Mars temperature is ${temperatureOfMars} degree Celsius`
  console.log(output);
}

// crie a função sendMarsTemperature abaixo

setTimeout(() => {
  sendMarsTemperature(getMarsTemperature);
}, messageDelay());  // imprime "Mars temperature is: 20 degree Celsius", por exemplo