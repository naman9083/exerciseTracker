const mongooose = require('mongoose');
const Schema = mongooose.Schema;
const userSchema = new Schema({
    username:{
        type: String,
        required : true,
        unique: true,
        trim:true,
        minLength:3,

    },

},
{
    timestamps:true,
}
);

const User = mongooose.model('User',userSchema);


module.exports = User;