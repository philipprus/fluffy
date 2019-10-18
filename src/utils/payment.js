import {priceTable} from '../components/common/priceTable';
import { addDays, differenceInDays } from "date-fns";

const summeryOrder = (values) => { 
      let sum = 0
      if(values.style && values.canvasSize) {
          sum = sum + priceTable[values.style][values.canvasSize];
          sum = sum + sum*( (values.extraPet-1)*0.5);
     
      }
      if(isDateInThisWeek(values.dispatch_date)) {
            sum = sum + sum*1
      }
      if(isDateInAfterWeek(values.dispatch_date)) {
            sum = sum + sum*0.5;
      }
      if(values.isGift) {
        if(values.addCard) {
          sum = sum + 5;
        }
        if(values.addPaper) {
            sum = sum +5;
        }
      }
      if(values.shipping_type !== "pickup") {
            sum = sum + 40;
      }
      return sum;
  }

  const isDateInThisWeek = (date) => {
      const nowDay = new Date().setHours(0,0,0,0);
      const momentToday = addDays(nowDay, 4);
      const week = addDays(momentToday, 6);
      if(date < momentToday) {
            return false
      }
      if (date === week) {
            return true;
      }
        return date <= week;
  }

  const isDateInAfterWeek = (date) => {
      const nowDay = new Date().setHours(0,0,0,0);
      const momentToday = addDays(nowDay, 4);
      const week = addDays(momentToday, 6);
      const week2 = addDays(momentToday, 9);
      return week < date  && date <= week2;
  }

const dispatchDescription = (date) => isDateInThisWeek(date) ? "+ 100% (extra fast)" : isDateInAfterWeek(date) ? "+ 50% (fast)" : "Free";

const averageNowDispatch = (dispatch) => {
      var result = differenceInDays(
            new Date(dispatch),
            new Date()
          );

          return result;
}



  export { summeryOrder, isDateInThisWeek,isDateInAfterWeek, dispatchDescription, averageNowDispatch};