async function useExchangeRate() {
  try {
    const response = await fetch(
      'https://us-central1-cloud-funcition.cloudfunctions.net/api/value',
    );
    const data = await response.json();
    return data.value.toFixed(2);
  } catch (error) {
    console.log(error);
  }
}

export default useExchangeRate;
