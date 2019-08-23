const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    familyName: String,
    familyImg: String,
    nameParentOne: String,
    roleParentOne: String,
    phoneParentOne: String,
    nameParentTwo: String,
    roleParentTwo: String,
    phoneParentTwo: String,
    street: String,
    houseNo: String,
    zip: String,
    city: String,
    children: [
        {
            id: String,
            childImg: String,
            profilePicture: String,
            profileColor: String,
            firstName: String,
            lastName: String,
            birthday: String,
            bloodType: String,
            diet: String
        }
    ],
    medicalInfo: [
        {
            id: String,
            category: String,
            title: String,
            description: String,
            assigned: [{ id: String }]
        }
    ],
    food: [
        {
            id: String,
            category: String,
            title: String,
            description: String,
            assigned: [{ id: String }]
        }
    ],
    clothing: [
        {
            id: String,
            category: String,
            temperature: String,
            degree: String,
            description: String,
            assigned: [{ id: String }]
        }
    ],

    contacts: [
        {
            id: String,
            category: String,
            name: String,
            description: String,
            phone: String,
            assigned: [{ id: String }]
        }
    ]
});

module.exports = mongoose.model("Card", cardSchema);
