var delai = 0;
var argent = 0;
var aps = 0;
var projekt = {
  argent: 0,
  clike: 1,
  
  mechant: {
    test: {
      nb: 0,
      cout: 80,
      original: 80,
      money: 0.15,
      nom: "Rat version elite",
    },
    test2: {
      nb: 0,
      cout: 799,
      original: 799,
      money: 0.8,
      nom: "Feat MissJirachi",
    },
    test3: {
      nb: 0,
      cout: 8400,
      original: 8400,
      money: 5,
      nom: "Augmentation Mcdo",
    },
    test4: {
      nb: 0,
      cout: 100000,
      original: 100000,
      money: 25,
      nom: "Pub avec Stive Johbes",
    },
    test5: {
      nb: 0,
      cout: 610000,
      original: 610000,
      money: 120,
      nom: "Screenshot des Nft",
    },
    test6: {
      nb: 0,
      cout: 14444444,
      original: 1444444,
      money: 990,
      nom: "Voleur expert",
    },
    test7: {
      nb: 0,
      cout: 215000000,
      original: 215000000,
      money: 5300,
      nom: "Cartel Kids",
    },
    test8: {
      nb: 0,
      cout: 4200000000,
      original: 4200000000,
      money: 21000,
      nom: "Bella ciao",
    },
    test9: {
      nb: 0,
      cout: 77777777777,
      original: 77777777777,
      money: 140000,
      nom: "Space X Gang",
    },
    test10: {
      nb: 0,
      cout: 999999999999,
      original: 999999999999,
      money: 990000,
      nom: "6 pack de biere",
    },
  },

  rotule: {
    test: {
      nb: 0,
      cout: 15,
      original: 15,
      money: 0.2,
      nom: "Faire le rat",
    },
    test2: {
      nb: 0,
      cout: 100,
      original: 100,
      money: 1,
      nom: "Video Degustation",
    },
    test3: {
      nb: 0,
      cout: 1100,
      original: 1100,
      money: 8,
      nom: "Travailler chez Mcdo",
    },
    test4: {
      nb: 0,
      cout: 12000,
      original: 12000,
      money: 47,
      nom: "Vendre ta formation",
    },
    test5: {
      nb: 0,
      cout: 130000,
      original: 130000,
      money: 260,
      nom: "NFT",
    },
    test6: {
      nb: 0,
      cout: 1400000,
      original: 1400000,
      money: 1400,
      nom: "Voleur",
    },
    test7: {
      nb: 0,
      cout: 20000000,
      original: 20000000,
      money: 7800,
      nom: "Cartel",
    },
    test8: {
      nb: 0,
      cout: 330000000,
      original: 330000000,
      money: 44000,
      nom: "Casa de Papel",
    },
    test9: {
      nb: 0,
      cout: 5100000000,
      original: 5100000000,
      money: 260000,
      nom: "Elon Musk",
    },
    test10: {
      nb: 0,
      cout: 75000000000,
      original: 75000000000,
      money: 1600000,
      nom: "Chomeur",
    },
    
  },
};

function clique(truc) {
  if (projekt.rotule[truc].cout <= projekt.argent) {
    projekt.argent -= projekt.rotule[truc].cout;
    projekt.rotule[truc].nb++;
    projekt.rotule[truc].cout += Math.round(projekt.rotule[truc].cout * 0.15);
    damn_daniel();
  }
}

function clique2(truc) {
  if (projekt.mechant[truc].cout <= projekt.argent) {
    projekt.argent -= projekt.mechant[truc].cout;
    projekt.mechant[truc].nb++;
    projekt.mechant[truc].cout += Math.round(projekt.mechant[truc].cout * 1.25);
    damn_daniel();
  }
}

function damn_daniel() {
  document.querySelector("#rotule").innerHTML = "";
  var stilo = 0;
  for (i in projekt.rotule) {
    document.querySelector(
      "#rotule"
    ).innerHTML += `<br> <button onclick="clique('${i}')"> <div class = "mp"><span class="button_texte">${projekt.rotule[i].nom}</span> <span class="button_nb">${numberformat.format(projekt.rotule[i].nb)}</span> <span class="button_prix">${numberformat.format(projekt.rotule[i].cout)} <img src="argent.png" class = "cout" /></span>  <span><img src="iop/${stilo}.jpg" class = "megachevalier" /></span></div></button>`;
      stilo++;
  }
  stilo = 1;
  document.querySelector("#oui").innerHTML = "";
  for (i in projekt.mechant) {
    document.querySelector(
      "#oui"
    ).innerHTML += `<br> <button onclick="clique2('${i}')"> <div class = "mp"><span class="button_texte">${projekt.mechant[i].nom}</span> <span class="button_nb">${numberformat.format(projekt.mechant[i].nb)}</span> <span class="button_prix">${numberformat.format(projekt.mechant[i].cout)} <img src="argent.png" class = "cout" /></span>  <span><img src="iop/${stilo}_ouah.jpg" id = "gobelin" /></span></div></button>`;
      stilo++;
  }

  for( i in projekt.rotule) {
    aps += projekt.rotule[i].money * projekt.rotule[i].nb;

  }

}

function jour() {
  if (Cookies.get("projekt") != null && Cookies.get("projekt") != "undefined") {
    var projekt1 = JSON.parse(Cookies.get("projekt"));
    for (i in projekt.rotule) {
      if (projekt1.rotule[i] == null) {
        projekt1.rotule[i] = projekt.rotule[i];
      }
    }

    for (i in projekt.mechant) {
      if (projekt1.mechant[i] == null) {
        projekt1.mechant[i] = projekt.mechant[i];
      }
    }

    projekt = projekt1
  }

  damn_daniel();

  if (Cookies.get("lasttime") != null) {
    var lastsavedate = Number(Cookies.get("lasttime"));
    lastsavedate = Date.now() - lastsavedate;
    lastsavedate = Math.round(lastsavedate / 1000);
    if (lastsavedate / 60 >= 1) {
      projekt.argent += lastsavedate * aps / 1.8;
      alert(numberformat.format(lastsavedate * aps / 1.8) + "$");
    }
  }

  setInterval(() => {
    for (i in projekt.rotule) {
      projekt.argent += (projekt.rotule[i].nb * projekt.rotule[i].money) / 20;
    }

    document.querySelector("#uwu").innerHTML = numberformat.format(Number(String(projekt.argent).split(".")[0])) + " $";
    delai++;
    if (delai >= 40) {
      Cookies.set("projekt", JSON.stringify(projekt), {expires:100000});
      Cookies.set("lasttime", Date.now(), {expires: 100000});
      delai = 0;
    }
  }, 50); 
}



function reset() {
  Cookies.remove("projekt");
  projekt.argent = 0;
  for (i in projekt.rotule) {
    projekt.rotule[i].nb = 0;
    projekt.rotule[i].cout = projekt.rotule[i].original;
  }
  for (i in projekt.mechant) {
    projekt.mechant[i].nb = 0;
    projekt.mechant[i].cout = projekt.mechant[i].original;
  }
  jour()
}


function autoclicker () {
  for (i in projekt.mechant) {
    if (projekt.mechant[i].nb > 0) {
    projekt.clike += projekt.mechant[i].money * projekt.mechant[i].nb;
    }
  }

  projekt.argent += projekt.clike;
}