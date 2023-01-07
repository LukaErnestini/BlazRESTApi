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
  const pacientId = req.body.pacientId;
  Napotnica.create({
    veljavnost_od,
    veljavnost_do,
    pacientId,
  });
  res.json({ status: "Ustvarjena napotnica" });
};

exports.postPreveriNapotnico = (req, res, next) => {
  const napotnicaId = req.body.napotnicaId;

  Napotnica.findByPk(napotnicaId)
    .then((napotnica) => {
      if (napotnica) {
        console.log(`Napotnica with ID ${napotnicaId} found!`);
        res.json({ status: "Napotnica obstaja" });
      } else {
        console.log(`Napotnica with ID ${napotnicaId} not found.`);
        res.json({ status: "Napotnica ne obstaja" });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
