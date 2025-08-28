// load header
fetch("/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    const script = document.createElement("script");
    script.src = "/header.js";
    document.body.appendChild(script);
  });

// load footer
fetch("/footer.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

fetch("/sidebar.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("sidebar").innerHTML = data));
