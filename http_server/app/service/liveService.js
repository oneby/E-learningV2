'use strict';

const Service = require('egg').Service;

class LiveService extends Service {
    constructor(ctx) {
        super(ctx);
        this.LiveModel = ctx.model.LiveModel;
    }
    async _checkRoomStatus(roomID) {
        const data = await this.LiveModel.findOne({
            where: {
                roomID: roomID
            },
            attributes: 'status'
        })
        
        return data.length ===0 ? -1: data[0];
    }

    



    async getLiveList(offset, limit) {
        
        const data = await this.LiveModel.findAll({
            where: {
                status: 1
            },
            limit: limit,
            offset: offset
        })
        return data;
    }
    async startLiveStream(roomID) {
        const status = await this._checkRoomStatus(roomID);
        let message = "直播间已启动";
        if (status === 0) {
            this.LiveModel.update({
                status: 1
            });
            message = `${roomID}直播间开启成功`
        }
        return message;
    }
    async shutLiveStream(roomID) {
        const status = await this._checkRoomStatus(roomID);
        let message = "直播间已关闭";
        if (status === 1) {
            this.LiveModel.update({
                status: 0
            });
            message = `${roomID}直播间关闭成功`
        }
        return message;
    }
    async applicationRoom(roomID) {
        const message = "此直播间ID已存在";
        const data = this.LiveModel.findOrCreate({
            where: {
                roomID: roomID
            },
            defaults: {
                roomID: roomID,
                title: `welcome to ${roomID}`,
                status: 0
            }
        })
        console.log(data);
        return message;
    }
    async deleteRoom(roomID) {
        const data = await this._checkRoomStatus(roomID);
        let message;
        switch(data){
            case -1:
                message = "直播间不存在";
                break;
            case 0:
                await this.LiveModel.destroy({
                    where:{roomID:roomID}
                });
                message = `删除直播间${roomID}成功`;
                break;
            case 1:
                message = "直播间正在直播,无法删除";
        }
        return message;
    }
}

module.exports = LiveService;