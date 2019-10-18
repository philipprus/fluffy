export const testimonials = {
      paypal: "Paypal",
      new: "New",
      sending: "Sending",
      vertical: "Vertical",
      horizontal: "Horizontal",
      inprocess: "In Process",
      not_confirmed: "Not confirmed",
      ready_to_dispatch: "Ready to dispatch",
      in_delivery: "In Delivery",
      complete: "Complete",
      pickup: "Pick up",
      israelpost: "Israel Post"
}

export function isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }
  
      return true;
  }