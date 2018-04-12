'use strict';

const Controller = require('egg').Controller;

class LiveController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.live = ctx.service.liveService;
  }
  async getLiveList() {
      const {offset,limit} = this.ctx.params;
      const response = await this.live.getLiveList(offset,limit);
      this.ctx.body = response;
  }
  async startLiveStream(){
    const {roomID} = this.ctx.params;
    const response = await this.live.startLiveStream(roomID);
    this.ctx.body = response;
  }
  async shutLiveStream(){
    const {roomID} = this.ctx.params;    
    const response = await this.live.shutLiveStream(roomID);
    this.ctx.body = response;
  }
  async applicationRoom(){
    const response = await this.live.applicationRoom();
    this.ctx.body = response;
  }

  async deleteRoom(){
    const {roomID} = this.ctx.params;    
    const response = await this.live.deleteRoom(roomID);
    this.ctx.body = response;
  }

}

module.exports = LiveController;
