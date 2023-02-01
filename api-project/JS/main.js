window.addEventListener("load", () => {
  const waifu = document.querySelector(".waifu");
  const neko = document.querySelector(".neko");
  const megumin = document.querySelector(".megumin");
  const shinobu = document.querySelector(".shinobu");
  const img = document.querySelector(".img");

  waifu.onclick = async () => {
    const res = await fetch("https://api.waifu.pics/sfw/waifu");
    if (res.status !== 200) {
      throw Error("waifu failed");
    }
    const json = await res.json();
    img.src = json.url;
  };
  neko.onclick = async () => {
    const res = await fetch("https://api.waifu.pics/sfw/neko");
    if (res.status !== 200) {
      throw Error("neko failed");
    }
    const json = await res.json();
    img.src = json.url;
  };
  megumin.onclick = async () => {
    const res = await fetch("https://api.waifu.pics/sfw/megumin");
    if (res.status !== 200) {
      throw Error("megumin failed");
    }
    const json = await res.json();
    img.src = json.url;
  };
  shinobu.onclick = async () => {
    const res = await fetch("https://api.waifu.pics/sfw/shinobu");
    if (res.status !== 200) {
      throw Error("shinobu failed");
    }
    const json = await res.json();
    img.src = json.url;
  };
});

import "../css/style.css";
