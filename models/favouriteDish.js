var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var favouriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dishes'
        }
    ]
}, {
    timestamps: true
});

var favourite = mongoose.model("favourite", favouriteSchema);

module.exports = favourite;