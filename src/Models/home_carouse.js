
const { Schema, model } = require('mongoose');

const CarouselSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
});

module.exports = model('home_carousel', CarouselSchema );