const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


let productSchema = new Schema({
    product: {
        type: String,
        require: [true, 'Product type is required'],
        max: 100,
        unique: true,
        lowercase: true
    },

    cost: {
        type: Number,
        required: [true, 'Product cost is required'],
        max: 100000
    },

    description: {
        type: String,
        max:100
    },
    quantity: {
        type: Number,
        max: 10000
    },
     
    collection: 'products',
    timestamps: true
});

productSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Product', productSchema);