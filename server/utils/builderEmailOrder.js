

const headerHtml = (order) => {
      return `<table border="0" cellpadding="0" cellspacing="0" width="600" id="m_1733185092190793365template_container" style="border:1px solid rgb(229,229,229);border-top-left-radius:0px!important;border-top-right-radius:0px!important;border-bottom-right-radius:0px!important;border-bottom-left-radius:0px!important">
            <tbody>
                <tr>
                    <td align="center" valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" width="600" id="m_1733185092190793365template_header" style="background-color:rgb(0,0,0);color:rgb(255,255,255);border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgb(229,229,229);font-weight:bold;line-height:12px;vertical-align:middle;font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;border-top-left-radius:0px!important;border-top-right-radius:0px!important;border-bottom-right-radius:0px!important;border-bottom-left-radius:0px!important">
                            <tbody>
                                <tr>
                                    <td id="m_1733185092190793365header_wrapper" style="padding:36px 48px;display:block">
                                        <h1 style="font-size:30px;font-weight:300;line-height:45px;margin:0px">Hi ${order.billingAddress_firstName} ${order.billingAddress_lastName}, thank you for your order on <a href="http://Fluffy.co.il" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://Fluffy.co.il&amp;source=gmail&amp;ust=1568276535318000&amp;usg=AFQjCNFdxXBKHu9mNsK7gp8-5fv1N1PH1w">Fluffy.co.il</a> !</h1>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>`
}


const footerHtml = () => {
      return `
        <div id="m_1733185092190793365body_content_inner" style="line-height:21px">
                                                <p style="color:rgb(0,0,0);font-family:arial;font-size:14px">For more information regarding your order simply use this <u>Contact Form</u>.&nbsp;
                                                    <br>
                                                </p>
                                                <p style="color:rgb(0,0,0);font-family:arial;font-size:14px">For full details of our Order policy , please take a look <u>here</u>.&nbsp;</p>
                                                <br style="color:rgb(0,0,0);font-family:arial"><b><font color="#000000" face="arial"><span style="font-size:14px">Thanks for choosing&nbsp;Fluffy !</span></font></b><span style="color:rgb(0,0,0);font-family:arial;font-size:small">&nbsp;</span></div>
                                            <div id="m_1733185092190793365body_content_inner" style="line-height:21px"><span style="color:rgb(0,0,0);font-family:arial;font-size:small"><br></span></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
      <tr>
            <td align="center" valign="top">
                <table border="0" cellpadding="10" cellspacing="0" width="600" id="m_1733185092190793365template_footer">
                    <tbody>
                        <tr>
                            <td valign="top" style="padding:0px;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px">
                                <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td colspan="2" valign="middle" id="m_1733185092190793365credit" style="padding:0px 48px 48px;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;border:0px;color:rgb(196,196,196);font-family:Arial;font-size:12px;line-height:15px;text-align:center"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`
}

const bodyHtml = (order) => { 
    return `
<tr>
    <td align="center" valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="600" id="m_1733185092190793365template_body">
            <tbody>
                <tr>
                    <td valign="top" id="m_1733185092190793365body_content">
                        <table border="0" cellpadding="20" cellspacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td valign="top" style="padding:48px">
                                        <div id="m_1733185092190793365body_content_inner" style="color:rgb(51,51,51);font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif;font-size:14px;line-height:21px">Your order has been received and is now being processed. Your order details are shown below for your reference:
                                            <br>
                                            <h2 style="color:rgb(0,0,0);font-size:18px;line-height:23.399999618530273px;margin:16px 0px 8px">Order #${order.orderNumber}</h2>
                                            <table class="m_1733185092190793365td" cellspacing="0" cellpadding="6" border="1" style="width:504px;color:rgb(51,51,51);border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229)">
                                                <thead>
                                                    <tr>
                                                        <th class="m_1733185092190793365td" scope="col" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">Product</th>
                                                        <th class="m_1733185092190793365td" scope="col" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">Quantity</th>
                                                        <th class="m_1733185092190793365td" scope="col" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="m_1733185092190793365order_item">
                                                        <td class="m_1733185092190793365td" style="vertical-align:middle;word-wrap:break-word;border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">
                                                            <div class="m_1733185092190793365product_category_title">Acrylic painting</div>
                                                            <div class="m_1733185092190793365product_category_title">${order.photo[0].secure_url}</div>
                                                            <div class="m_1733185092190793365product_category_title">
                                                                <br>
                                                            </div>Style: ${order.style}
                                                            <br>Canvas size: ${order.canvasSize}
                                                            <br>Canvas position: ${order.canvasPosition}
                                                            <br>Extra pet on painting
                                                            <br>Special accessorie&nbsp;
                                                            <br>
                                                            <br>Gift packaging
                                                            <br>Greeting card
                                                            <br>Shipment Date: ${order.shipmentDate}
                                                            <br>(Standard / Fast)</td>
                                                        <td class="m_1733185092190793365td" style="vertical-align:middle;border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">1
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <br>${order.extraPet}
                                                            <br>1
                                                            <br>
                                                            <br>1
                                                            <br>1
                                                            <br>
                                                            <br>
                                                            <br>
                                                        </td>
                                                        <td class="m_1733185092190793365td" style="vertical-align:middle;border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">0 NIS
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <br>0 NIS (+ 50%)
                                                            <br>0 NIS
                                                            <br>
                                                            <br>0 NIS
                                                            <br>Free&nbsp;
                                                            <br>
                                                            <br>Free / 0 NIS</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th class="m_1733185092190793365td" scope="row" colspan="2" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">Subtotal:
                                                            <br>
                                                        </th>
                                                        <td class="m_1733185092190793365td" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">${order.subTotal} NIS
                                                            <br>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th class="m_1733185092190793365td" scope="row" colspan="2" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">Shipping:</th>
                                                        <td class="m_1733185092190793365td" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">&nbsp;<small class="m_1733185092190793365shipped_via"><span style="font-size:12px">${order.shippingTotal} NIS via</span>&nbsp;Israel Post&nbsp;<span style="font-size:14px">(Self Pick up)</span></small></td>
                                                    </tr>
                                                    <tr>
                                                        <th class="m_1733185092190793365td" scope="row" colspan="2" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">Payment method:</th>
                                                        <td class="m_1733185092190793365td" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">${order.paymentMethod}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="m_1733185092190793365td" scope="row" colspan="2" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">Total:</th>
                                                        <td class="m_1733185092190793365td" style="border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">${order.total} NIS</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <h2 style="color:rgb(0,0,0);font-size:18px;line-height:23.399999618530273px;margin:16px 0px 8px">Customer details</h2>
                                            <ul>
                                                <li><strong>Comments:</strong>&nbsp; ${order.comments}</li>
                                                <li><strong>Email address:</strong>&nbsp;<span class="m_1733185092190793365text" style="color:rgb(0,0,0)"><a href="mailto:${order.billingAddress_email}" target="_blank">${order.billingAddress_email}</a></span></li>
                                                <li><strong>Phone:</strong>&nbsp; ${order.billingAddress_phone}</li>
                                            </ul>
                                            <table id="m_1733185092190793365addresses" cellspacing="0" cellpadding="0" border="0" style="width:504px;vertical-align:top">
                                                <tbody>
                                                    <tr>
                                                        <td class="m_1733185092190793365td" valign="top" width="50%" style="color:rgb(51,51,51);border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">
                                                            <h3 style="color:rgb(0,0,0);font-size:16px;line-height:20.799999237060547px;margin:16px 0px 8px">Billing address</h3>
                                                            <p class="m_1733185092190793365text" style="color:rgb(0,0,0);margin:0px 0px 16px">
                                                                ${order.billingAddress_firstName} ${order.billingAddress_lastName}
                                                                <br>${order.billingAddress_address}
                                                                <br>${order.billingAddress_address2 !== "" ? order.billingAddress_address2 : ""}
                                                                <br>${order.billingAddress_city}
                                                                <br>${order.billingAddress_country}
                                                                <br>${order.billingAddress_zip}
                                                        </td>
                                                        <td class="m_1733185092190793365td" valign="top" width="50%" style="color:rgb(51,51,51);border-top-width:1px;border-style:solid none;border-top-color:rgb(229,229,229);border-bottom-width:1px;border-bottom-color:rgb(229,229,229);padding:12px">
                                                            <h3 style="color:rgb(0,0,0);font-size:16px;line-height:20.799999237060547px;margin:16px 0px 8px">Shipping address</h3>
                                                            <p class="m_1733185092190793365text" style="color:rgb(0,0,0);margin:0px 0px 16px">
                                                                ${!order.isAnotherShippingAddress ? "no" : "yes"} ${order.isAnotherShippingAddress ? order.shippingAddress_firstName : order.billingAddress_firstName} ${order.isAnotherShippingAddress ? order.shippingAddress_lastName : order.billingAddress_lastName}
                                                                <br>${order.isAnotherShippingAddress ? order.shippingAddress_address : order.billingAddress_address}
                                                                <br>${order.isAnotherShippingAddress ? order.shippingAddress_address2 : order.billingAddress_address2 !== "" ? order.billingAddress_address2 : "" }
                                                                <br>${order.isAnotherShippingAddress ? order.shippingAddress_city : order.billingAddress_city}
                                                                <br>${order.isAnotherShippingAddress ? order.shippingAddress_country : order.billingAddress_country}
                                                                <br>${order.isAnotherShippingAddress ? order.shippingAddress_zip : order.billingAddress_zip}
                                                                </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <br>
                                        </div>
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