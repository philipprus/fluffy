const CONSTANT = require('../contsText');

const SubTitle = (type) => {
      switch (type) {
      case CONSTANT.STATUS_NEW:
      case CONSTANT.STATUS_NOT_PAID:
        return CONSTANT.HEADER_SUBTITLE_NEW;
      case  CONSTANT.STATUS_IN_DELIVERY:
        return CONSTANT.HEADER_SUBTITLE_IN_DELIVERY;
      case CONSTANT.STATUS_READY_TO_DISPATCH:
        return CONSTANT.HEADER_SUBTITLE_READY_TO_DISPATCH;
      case CONSTANT.STATUS_NOT_CONFIRMED:
        return CONSTANT.HEADER_SUBTITLE_NOT_CONFIRMED;
      case CONSTANT.STATUS_IN_PROCESS:
        return CONSTANT.HEADER_SUBTITLE_IN_PROCESS;
      case CONSTANT.STATUS_COMPLETE:
      default:
        return CONSTANT.HEADER_SUBTITLE_COMPLETE;
      }
}


module.exports = { SubTitle };
