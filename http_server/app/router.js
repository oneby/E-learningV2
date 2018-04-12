'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/admin/control',controller.admin.control);
  
  
  
  
  
  // 直播相关接口
  router.get('/live',controller.liveController.getLiveList);

  router.get('/live/start/:roomID',controller.liveController.startLiveStream);
  
  router.get('/live/shutdown/:roomID',controller.liveController.shutLiveStream);
  
  router.post('/live/application',controller.liveController.applicationRoom);
  
  router.delete('/live/:roomID',controller.liveController.startLiveStream);
  


};
