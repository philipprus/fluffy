const moment = require('moment');



const headerHtml = (order) => {
      return `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title></title>

  <style type="text/css">
  </style>    
</head>
<body style="margin:0; padding:0; background-color:#F2F2F2;">
  <center>
    <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F2F2F2">
        <tr>
            <td align="center" valign="top">

                <table width="640" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:740px; width:100%;" bgcolor="#FFFFFF">
                <tr>
                    <td align="center" valign="top" style="padding:10px;">
                    
                        <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; width:100%;">
                            <tr>
                            <td align="center" valign="top" style="padding:10px;">
                                    <img src="https://i.ibb.co/xDc8V9C/logotype.png" alt="Logotype" style="margin-bottom: 20px;" />
                                <h2 style="font-size:30px;font-weight:600;line-height:45px;margin:0px">Thanks for your order!</h2>
                                <p>You'll receive an email when items are shipped.</p>
                            </td>
                            </tr>
                        </table>
                       
                        
                        <table width="740" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:740px; width:100%;" bgcolor="#FFFFFF">
                            <tr>
                                <td align="center" valign="top" style="padding:10px;">
                                
                                <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:700px; width:100%;">
                                    <tr>
                                    <td width="350" align="left" valign="top" style="padding:10px;">
                                        <h3>Summary</h3>
                                        <ul style="list-style: none; padding: 0" class="list-unstyle">
                                            <li>ORDER: ${order.order_number}</li>
                                            <li>ORDER DATE: ${order.created}</li>
                                            <li>ORDER TOTAL: ${order.order_total} ILS</li>
                                        </ul>
                                    </td>
                                    <td width="350" align="left" valign="top" style="padding:10px;">
                                        <h3>Shipping address</h3>
                                        <ul style="list-style: none; padding: 0" class="list-unstyle">
                                            
                                            <li>
                                            <strong>
                                                ${order.isSameShippingAddress ? order.shippingAddress_firstName : order.billingAddress_firstName} ${order.isSameShippingAddress ? order.shippingAddress_lastName : order.billingAddress_lastName}
                                            </strong> 
                                            </li>
                                            
                                            <li>
                                            ${order.isSameShippingAddress ? order.shippingAddress_email : order.billingAddress_email}
                                            </li>
                                            <li>
                                            ${order.isSameShippingAddress ? order.shippingAddress_phone : order.billingAddress_phone}
                                            </li>
                                            <li>
                                            ${order.isSameShippingAddress ? order.shippingAddress_address : order.billingAddress_address}
                                            ${order.isSameShippingAddress ? order.shippingAddress_address2 : order.billingAddress_address2 !== "" ? order.billingAddress_address2 : "" }
                                            ${order.isSameShippingAddress ? order.shippingAddress_country : order.billingAddress_country}
                                            ${order.isSameShippingAddress ? order.shippingAddress_zip : order.billingAddress_zip}
                                            </li>
                                        </ul>
                                    </td>
                                    </tr>
                                </table>

                                </td>
                            </tr>
                            </table>
                            <table width="640" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:640px; width:100%;" bgcolor="#FFFFFF">
                                <tr>
                                <td align="center" valign="top" style="padding:10px;">
                                    
                                    <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; width:100%;">
                                    <tr>
                                        <td align="center" valign="top" style="padding:10px;">
                                        <h2>Order Information</h2>
                                        <div class="m_1733185092190793365product_category_title"><img src="${order.photo[0].secure_url}"/></div>

                                        </td>
                                    </tr>
                                    </table>
                            
                                </td>
                                </tr>
                            </table>
                            <table width="640" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:640px; width:100%;" bgcolor="#FFFFFF">
                                <tr>
                                    <td align="left" valign="top" style="padding:10px;">
                                    
                                    <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; width:100%;">
                                        <tr>
                                        <td width="300" align="left" valign="top" style="padding:10px;">
                                        <ul style="list-style: none; padding: 0" class="list-unstyle">
                                            <li>Style:  ${order.style}</li>
                                            <li>Canvas size: ${order.canvasSize}</li>
                                            <li>Canvas position: ${order.canvasPosition}</li>
                                            <li>Extra pet on painting: ${order.extraPet}</li>
                                            <li>Comments:<br> ${order.comments}</li>

                                        </ul>
                                        </td>
                                        <td width="300" align="left" valign="top" style="padding:10px;">
                                        <ul style="list-style: none; padding: 0" class="list-unstyle">
                                            <li>Gift packaging:</li>
                                            <li>Greeting card:</li>
                                            <li>Dispatch Date: ${moment("2019-10-02T14:08:12.870+00:00").format('DD/mm/YYYY') }</li>
                                            <li>(Standard / Fast)</li>
                                        </ul>
                                        </td>
                                        </tr>
                                    </table>

                                 
                                    </td>
                                </tr>
                            </table>
                            <table width="640" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:640px; width:100%;" bgcolor="#FFFFFF">
                                <tr>
                                    <td align="center" valign="top" style="padding:10px;">
                                    
                                    <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; width:100%;">
                                        <tr>
                                        <td width="200" align="center" valign="top" style="padding:10px;border-bottom: 1px solid #ccc;">
                                        </td>
                                        <td width="200" align="right" valign="top" style="padding:10px; border-right:1px solid #ccc; border-bottom: 1px solid #ccc;">
                                            Subtotal
                                            <br>
                                            Shipping
                                            <br>
                                            Discount
                                        </td>
                                        <td width="200" align="right" valign="top" style="padding:10px;  border-bottom: 1px solid #ccc;">
1
                                        </td>
                                        </tr>
                                        <tr>
                                        <td width="200" align="center" valign="top" style="padding:10px;">
                                        </td>
                                        <td width="200" align="right" valign="top" style="padding:10px; border-right:1px solid #ccc; ">
                                            Order total
                                        </td>
                                        <td width="200" align="right" valign="top" style="padding:10px;  ">
                                        <strong>
                                        ${order.order_total} ILS
                                        </strong>
                                        </td>
                                        </tr>
                                    </table>

                                    </td>
                                </tr>
                               
                            </table>
                            
                    </td>
                </tr>
                </table>
      
          `
}


const footerHtml = () => {
      return `
      <table width="640" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:640px; width:100%;" >
      <tr>
        <td align="center" valign="top" style="padding:10px;">
          
          <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; width:100%;">
            <tr>
              <td align="center" valign="top" style="padding:10px;">
                fb ig yt 
              </td>
            </tr>
          </table>
    
          <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; width:100%;">
            <tr>
              <td align="center" valign="top" style="padding:10px;">
                Fluffy
              </td>
            </tr>
          </table>
    
          <table width="600" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:600px; width:100%;">
            <tr>
              <td align="center" valign="top" style="padding:10px;">
                <hr>
                Help&FAQ's | Contact us
              </td>
            </tr>
          </table>
    
        </td>
      </tr>
    </table>

</td>
</tr>
</table>
</center>
</body>
</html>`
}

const bodyHtml = (order) => { 
    return `
                                        `
}


const builderHtml = (order) => {
    return `
          ${headerHtml(order)}
          ${bodyHtml(order)}
          ${footerHtml()}
    `;
}

module.exports = { builderHtml };