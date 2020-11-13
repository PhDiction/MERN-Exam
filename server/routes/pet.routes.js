const PetsController = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api/pets", PetsController.findAllPets);
    app.get("/api/pets/:id", PetsController.findOnePet);
    app.post("/api/pets/new", PetsController.createNewPet);
    app.put("/api/pets/edit/:id", PetsController.updateExistingPet);
    app.delete("/api/pets/delete/:id", PetsController.deleteExistingPet);
}
    
