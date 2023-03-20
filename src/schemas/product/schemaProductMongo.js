
const mongoose = require("mongoose");

const schemaProductOnMongo = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        code: { type: Number, required: true },
        url: { type: String, required: true},
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
    }, {
    timestamps: true
}
)

module.exports= schemaProductOnMongo