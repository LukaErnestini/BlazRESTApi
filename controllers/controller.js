const Napotnica = require("../models/napotnica");
const Pacient = require("../models/pacient");

exports.postAddPacient = (req, res, next) => {
  const ime = req.body.ime;
  const priimek = req.body.priimek;
  const zzzs_stevilka = req.body.zzzs_stevilka;

  Pacient.create({
    ime,
    priimek,
    zzzs_stevilka,
  });

  res.json({ status: "Ustvarjen pacient" });
};

exports.postAddNapotnica = (req, res, next) => {
  const veljavnost_od = req.body.veljavnost_od;
  const veljavnost_do = req.body.veljavnost_do;
  //const pacientId = req.body.pacientId;
  const stevilka = req.body.stevilka;
  const oddelek = req.body.oddelek;
  const ustanova = req.body.ustanova;
  const termin = req.body.termin;
  const zzzs = req.body.zzzs;
  console.log(veljavnost_od);
  Napotnica.create({
    veljavnost_od,
    veljavnost_do,
    //pacientId,
    stevilka,
    oddelek,
    ustanova,
    termin,
    zzzs,
  })
    .then(() => {
      res.json({ status: "Ustvarjena napotnica" });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({ status: "Napaka pri ustvarjanju napotnice" });
    });
};

exports.postPreveriNapotnico = (req, res, next) => {
  const stevilka = req.body.stevilka;
  const zzzs = req.body.zzzs;

  Napotnica.findOne({ where: { stevilka, zzzs } })
    .then((napotnica) => {
      if (napotnica) {
        console.log(
          `Napotnica with stevilka ${stevilka} and zzzs number ${zzzs} found!`
        );
        res.json({ status: "Napotnica obstaja" });
      } else {
        console.log(
          `Napotnica with stevilka ${stevilka} and zzzs number ${zzzs} not found.`
        );
        res.json({ status: "Napotnica ne obstaja" });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
