const getData = async () => {
  document.querySelector(".advice-number").innerHTML = "";

  let i = 0;
  let res = await fetch("https://api.adviceslip.com/advice");
  let data = await res.json();
  document.getElementById("anumber").innerHTML = `Advice #${data.slip.id}`;
  document.getElementById("atext").innerHTML = `${data.slip.advice}`;
};

getData();
