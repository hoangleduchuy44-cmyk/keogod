setInterval(() => {
  document.querySelectorAll(".countdown").forEach(el => {
    let t = parseInt(el.innerText);
    if (t > 0) {
      el.innerText = t - 1;
    } else {
      el.innerText = "X";
    }
  });
}, 1000);
