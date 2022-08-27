var Passif = document.getElementById("Passif");
var Actif = document.getElementById("Actif");
var rotule = document.querySelector("div.Menu > div#rotule");
var oui = document.querySelector("div.Menu > div#oui");

Passif.addEventListener('click', () => {
            rotule.classList.add('open-menu')
            oui.classList.add('close-menu')
            rotule.classList.remove('close-menu')
        })
Actif.addEventListener('click', () => {
            oui.classList.add('open-menu')
            rotule.classList.add('close-menu')
            oui.classList.remove('close-menu')
        })
/*function openPassif() {
  document.querySelector("#rotule").classList.add("open-menu");
  document.querySelector("#oui").classList.remove("open-menu");
}
function openActif() {
  document.querySelector("#oui").classList.add("open-menu");
  document.querySelector("#rotule").classList.remove("open-menu");
}*/

var delai = 0;
var argent = 0;
var aps = 0; // argent par seconde
var projekt = {
  argent: 0,
  clike: 1,

  mechant: {
    // liste conteant tout les boutons du jeu
    test: {
      nb: 0, // nombre de l'amélioration possédé
      cout: 80, // le prix de l'amélioration
      original: 80, // le prix original avant toute modification apres un achat qui est utile pour aprés pouvoir tout rénitialiser à 0 avec le bouton
      money: 0.15, // l'argent qu'elle produit par seconde
      nom: "Rat version elite", // nom affiché de l'amélioration
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
  // fonction clique qui permet d'acheter une amélioration
  if (projekt.rotule[truc].cout <= projekt.argent) {
    // si le cout de l'amélioration est inférieur ou égale a l'argent(vérifie si on a assez d'argent pour acheter)
    projekt.argent -= projekt.rotule[truc].cout; // On enleve le prix du bouton a notre argent
    projekt.rotule[truc].nb++; // le nombre d'amélioration qu'on vient d'acheter vient d'augmenter
    projekt.rotule[truc].cout += Math.round(projekt.rotule[truc].cout * 0.15); // on augmente le prix de l'amélioration de 15%
    damn_daniel(); // Appelle la fonction damn daniel
  }
}

function clique2(truc) {
  //fonction clique 2 fonctionne pareil que la fonction clique mais juste pour les boutons de la 2iéme fenetre
  if (projekt.mechant[truc].cout <= projekt.argent) {
    projekt.argent -= projekt.mechant[truc].cout;
    projekt.mechant[truc].nb++;
    projekt.mechant[truc].cout += Math.round(projekt.mechant[truc].cout * 1.25); // augmente le prix 125%
    damn_daniel();
  }
}

function damn_daniel() {// fonction damn daniel
  document.querySelector("#rotule").innerHTML = "";// on récupere l'élement rotule du code html qui est la premiére fenétre d'amélioration
  var stilo = 0;// définition d'une variable stilo utilisé plus tard pour naviger dans les images
  for (i in projekt.rotule) {// boucle dans tous les boutons
    document.querySelector(// rajoute le code html nécessaire pour faire afficher le bouton
      "#rotule"
    ).innerHTML += `<br> <button onclick="clique('${i}')"> <div class = "mp"><span class="button_texte">${projekt.rotule[i].nom}</span> <span class="button_nb">${numberformat.format(projekt.rotule[i].nb)}</span> <span class="button_prix">${numberformat.format(projekt.rotule[i].cout)} <img src="argent.png" class = "cout" /></span>  <span><img src="iop/${stilo}.jpg" class = "megachevalier" /></span></div></button>`;
      stilo++;// augmente le nombre stilo pour passer à l'image suivante a utiliser pour le bouton les images sont numéroté de 0 à 9
  }
  stilo = 1;// On remet stilo a 1 pour pouvoir ensuite naviger dans les images pour la deuxiéme fenetre
  document.querySelector("#oui").innerHTML = "";// on récupere l'élements oui du code html qui est la deuxiéme fenetre d'amélioration
  for (i in projekt.mechant) {// boucle dans les 2nd bouton
    document.querySelector(// rajoute le code html nécessaire à l'affichage
      "#oui"
    ).innerHTML += `<br> <button onclick="clique2('${i}')"> <div class = "mp"><span class="button_texte">${projekt.mechant[i].nom}</span> <span class="button_nb">${numberformat.format(projekt.mechant[i].nb)}</span> <span class="button_prix">${numberformat.format(projekt.mechant[i].cout)} <img src="argent.png" class = "cout" /></span>  <span><img src="iop/${stilo}_ouah.jpg" id = "gobelin" /></span></div></button>`;
      stilo++;// rajoute 1 à stilo
  }
  aps = 0;// argent par seconde mit à 0
  for( i in projekt.rotule) {// boucle dans les premiers boutons
    aps += projekt.rotule[i].money * projekt.rotule[i].nb;// on calcule l'argent par seconde selon le nombre d'amélioration qu'on a fois l'argent que cette amélioration produit

  }

}

function jour() {
  // fonction jour qui est utilisé lorsque le site charge au début
  if (Cookies.get("projekt") != null && Cookies.get("projekt") != "undefined") {
    // vérifie les cookies
    var projekt1 = JSON.parse(Cookies.get("projekt"));
    for (i in projekt.rotule) {
      // rajoute toute les données des premier boutons dans les cookies
      if (projekt1.rotule[i] == null) {
        projekt1.rotule[i] = projekt.rotule[i];
      }
    }

    for (i in projekt.mechant) {
      // rajoute toutes les données des second boutons dans les cookies
      if (projekt1.mechant[i] == null) {
        projekt1.mechant[i] = projekt.mechant[i];
      }
    }

    projekt = projekt1; // on met a jour les cookies
  }

  damn_daniel(); // fonction damn daniel utilisé

  if (Cookies.get("lasttime") != null) {
    // vérifie les cookies actuel avec les anciens afin de déterminer ca fait combien de temps que la persoone a quitté le site
    var lastsavedate = Number(Cookies.get("lasttime")); // prend la derniére fois que la perssonne est allé sur le site
    lastsavedate = Date.now() - lastsavedate; // calcule la date
    lastsavedate = Math.round(lastsavedate / 1000);
    if (lastsavedate / 60 >= 1) {
      // si la persoonne a quitté notre pendant plus d'une minute on calcule combien d'argent il s'est fait pendant son absence
      projekt.argent += (lastsavedate * aps) / 1.8; // on rajoute l'argent qu'il s'est fait
      alert(
        "Vous avez fais " +
          numberformat.format((lastsavedate * aps) / 1.8) +
          " $ " +
          "Pendant votre absence"
      ); // on crée un pop up qui indique au joueur combien d'argent il a pu crée
    }
  }

  setInterval(() => {
    // crée une intervalle ou dans l'aquelle tout les demi seconde il va executé ce code
    for (i in projekt.rotule) {
      // boucle dans chaque bouton
      projekt.argent += (projekt.rotule[i].nb * projekt.rotule[i].money) / 20; // ajoute l'argent qu'on s'est fait pendant cette demie seconde
    }
    if (aps < 100000) {
      //  ajoute le code html qui affiche le nombre d'argent par seconde on vérifie si c'est inférieur a 100000 car sinon on ne voit pas les virgules
      document.querySelector("#owo").innerHTML = aps + " $/Sec";
    } else {
      document.querySelector("#owo").innerHTML =
        numberformat.format(aps) + " $/Sec"; // ajoute le code html qui affiche le nombre d'argent par seconde arrondi si c'est supérieur à 100000
    }
    document.querySelector("#uwu").innerHTML =
      numberformat.format(Number(String(projekt.argent).split(".")[0])) + " $"; // ajoute le code html qui affiche le nombre d'argent au total qu le joueur posséde et arrondi de sorte qu'il n'y ait pas de décimale
    delai++; // ajoute 1 au delai
    if (delai >= 40) {
      // si le delai est supérieur ou égale à 40 on met à jour les cookies et ainsi sauvegarde les donnée
      Cookies.set("projekt", JSON.stringify(projekt), { expires: 100000 });
      Cookies.set("lasttime", Date.now(), { expires: 100000 });
      delai = 0;
    }
  }, 50);
}

function reset() {
  // fonction reset qui est utilisé par le bouton du même nom
  Cookies.remove("projekt"); // supprime les cookies stocké
  projekt.argent = 0; // réinitialise l'argent à 0
  projekt.clike = 1; // remet le nombre d'argent généré par 1 clique à 1
  aps = 0; // remet l'argent par seconde à 0
  document.querySelector("#owo").innerHTML = aps + " $/Sec"; // met a jour le code html de l'argent par seconde
  for (i in projekt.rotule) {
    // boucle dans chaque bouton
    projekt.rotule[i].nb = 0; // remet le nombre du bouton à 0
    projekt.rotule[i].cout = projekt.rotule[i].original; // remet le prix du bouton à l'original
  }
  for (i in projekt.mechant) {
    // boucle dans chaque 2iéme bouton bouton
    projekt.mechant[i].nb = 0; // remet à 0 le nombre de bouton
    projekt.mechant[i].cout = projekt.mechant[i].original; // remet le prix original
  }
  jour(); // fonciton jour pour tout remettre à jour
}


function autoclicker() {
  // fonction autoclicker utilisé à chaque clique sur le bouton principal
  for (i in projekt.mechant) {
    // boucle dans chaque dexiéme bouton
    if (projekt.mechant[i].nb > 0) {
      // si le nombre possédé du bouton est supérieur à 0
      projekt.clike += projekt.mechant[i].money * projekt.mechant[i].nb; // On augmente le nombre d'argent généré par chaque clique selon l'argent du second bouton fois son nombre
    }
  }

  projekt.argent += projekt.clike; // on rajoute l'argent nécessaire calculé à notre argent totale
}
