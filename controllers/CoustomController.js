const { MySQL } = require("../db");
const { Coustom } = require("../model");

const findAll = async (res) => {
  try {
    const [result, _] = await Coustom.findAll();
    res.send(result);
  } catch (e) {
    res.status(500).send(`find all fail: ${e}`);
  }
};

const findOneByID = async (req, res) => {
  const { id } = req.params;
  try {
    const [result, _] = await Coustom.findOneById(id);
    res.send(result);
  } catch (e) {
    res.status(500).send(`find one fail: ${e}`);
  }
};

const updateByID = async (req, res) => {
  const { Customer_Name, Birth_Date } = req.body;
  const { id } = req.params;
  try {
    const [result, _] = await new Coustom(Customer_Name, Birth_Date).update(id);
    if (result) res.send(`update success`);
  } catch (err) {
    res.status(500).send(`update fail: ${err}`);
  }
};

const createOne = async (req, res) => {
  const { Customer_Name, Birth_Date } = req.body;
  try {
    const [result, _] = await new Coustom(Customer_Name, Birth_Date).save();
    if (result) res.send(`create success`);
  } catch (err) {
    res.status(500).send(`create fail: ${err}`);
  }
};

const deleteByID = async (req, res) => {
  const { id } = req.params;
  try {
    const [result, _] = await Coustom.delete(id);
    if (result) res.send(`delete success`);
  } catch (err) {
    res.status(500).send(`delete fail: ${err}`);
  }
};

module.exports = {
  findAll,
  findOneByID,
  updateByID,
  createOne,
  deleteByID,
};
