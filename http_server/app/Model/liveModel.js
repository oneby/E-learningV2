'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const LiveModel = app.model.define('live',{
        roomID:{
            type:INTEGER(10),
            allowNull:false,
            primaryKey:true,
        },
        title:{
            type:STRING(100),
            allowNull:false,
            defaultValue: "welcome to my room",
        },
        status:{
            type:INTEGER(3),
            allowNull:false,
            defaultValue:0
        }
    },{timestamps: false})

    return LiveModel;
}
