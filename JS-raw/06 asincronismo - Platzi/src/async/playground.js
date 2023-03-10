async function runCode() {
  // Tu código aquí 👈
  const url = "https://domain-api-com";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    throw new Error("API Not Found");
  }
}

runCode();
