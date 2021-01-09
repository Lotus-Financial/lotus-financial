const express = require('express');

const examplesController = require('../../controllers/examples/examples.controller.js');

const examplesRouter = express.Router();

const listGizmosGET = (req, res) => {
  const gizmos = examplesController.listGizmos();
  res.status(200).send(gizmos);
}

const retrieveGizmoGET = (req, res) => {
  const retrievedGizmo = examplesController.retrieveGizmo(req.params?.name);
  res.status(200).send(retrievedGizmo);
}

const createGizmoPOST = (req, res) => {
  const createdGizmo = examplesController.createGizmo(req.body?.data);
  res.status(201).send(createdGizmo);
}

const updateGizmoPUT = (req, res) => {
  const updatedGizmo = examplesController.updateGizmo(req.body?.data);
  res.status(200).send(updatedGizmo);
}

const deleteGizmoDELETE = (req, res) => {
  const deletedGizmo = examplesController.deleteGizmo(req.params?.name);
  res.status(200).send(deletedGizmo);
}

examplesRouter.get('/gizmos', listGizmosGET);
examplesRouter.get('/gizmo/:name', retrieveGizmoGET);
examplesRouter.post('/gizmo', createGizmoPOST);
examplesRouter.put('/gizmo', updateGizmoPUT);
examplesRouter.delete('/gizmo/:name', deleteGizmoDELETE);

module.exports = {
  router: examplesRouter,
  callbacks: {
    listGizmosGET,
    retrieveGizmoGET,
    createGizmoPOST,
    updateGizmoPUT,
    deleteGizmoDELETE
  }
};
