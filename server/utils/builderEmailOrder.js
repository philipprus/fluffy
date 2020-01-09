const moment = require('moment');
const CONSTANT = require('./contsText');
const Header = require('./template-email/header');
const Footer = require('./template-email/footer');
const Logotype = require('./template-email/logotype');
const Title = require('./template-email/title');
const SubTitle = require('./template-email/subTitle');

const getColorSubTitle = (type) => {
switch (type) {
case CONSTANT.STATUS_NEW:
case CONSTANT.STATUS_NOT_PAID:
  return CONSTANT.COLOR_SUBTITLE_NEW
case  CONSTANT.STATUS_IN_DELIVERY:
  return CONSTANT.COLOR_SUBTITLE_IN_DELIVERY
case CONSTANT.STATUS_READY_TO_DISPATCH:
  return CONSTANT.COLOR_SUBTITLE_READY_TO_DISPATCH
case CONSTANT.STATUS_NOT_CONFIRMED:
  return CONSTANT.COLOR_SUBTITLE_NOT_CONFIRMED
case CONSTANT.STATUS_IN_PROCESS:
  return CONSTANT.COLOR_SUBTITLE_IN_PROCESS
case CONSTANT.STATUS_COMPLETE:
default:
  return CONSTANT.COLOR_SUBTITLE_COMPLETE
}
}

const getSubjectEmail = (status) => {
switch (status) {
case CONSTANT.STATUS_NEW:
case CONSTANT.STATUS_NOT_PAID:
  return CONSTANT.SUBJECT_NEW;
case CONSTANT.STATUS_IN_PROCESS:
  return CONSTANT.SUBJECT_IN_PROCESS;
case CONSTANT.STATUS_READY_TO_DISPATCH:
  return CONSTANT.SUBJECT_READY_TO_DISPATCH;
case CONSTANT.STATUS_COMPLETE:
  return CONSTANT.STATUS_COMPLETE;
case CONSTANT.STATUS_IN_DELIVERY:
  return CONSTANT.SUBJECT_IN_DELIVERY;
case CONSTANT.STATUS_NOT_CONFIRMED:
 default:  
  return CONSTANT.SUBJECT_NOT_CONFIRMED;
}
}

const bodyText = (status) => {
switch (status) {
case CONSTANT.STATUS_NEW:
case CONSTANT.STATUS_NOT_PAID:
  return CONSTANT.TEXT_DESCRIPTION_NEW;
case CONSTANT.STATUS_IN_DELIVERY:
  return CONSTANT.TEXT_DESCRIPTION_IN_DELIVERY;
case CONSTANT.STATUS_READY_TO_DISPATCH:
  return CONSTANT.TEXT_DESCRIPTION_READY_TO_DISPATCH;
case CONSTANT.STATUS_NOT_CONFIRMED:
  return CONSTANT.TEXT_DESCRIPTION_NOT_CONFIRMED;
case CONSTANT.STATUS_IN_PROCESS:
  return CONSTANT.TEXT_DESCRIPTION_IN_PROCESS;
case CONSTANT.STATUS_COMPLETE:
default: 
    return CONSTANT.TEXT_DESCRIPTION_THANK_YOU_DELIVERED;
}
}


const builderHtml = (order) => {
return `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
${Header}
<body style="background-color:#d6dde5;">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="wrapper0234-outlook" style="width:600px;" width="600">
  <tr>
    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
  <div class="wrapper0234" style="background-color: #ffffff; background-image: url(https://i.ibb.co/cY72NfP/fluffy-logo-1.png); background-size: 100%; background-repeat: no-repeat; background-position: center center; margin: 0px auto; max-width: 600px;">
    ${Logotype}
  <div style="">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
  <tr>
  <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]-->


<div  style="margin:0px auto;max-width:600px;">

<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
  <tbody>
    <tr>
      <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:27px;padding-top:0;text-align:center;">
  <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td class="" style="vertical-align:top;width:600px;">
        <![endif]-->

<div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> 
    <tr>
      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:30px;padding-right:25px;padding-bottom:10px;padding-left:25px;word-break:break-word;">
        <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:50px;font-weight:500;line-height:1;text-align:center;text-transform:uppercase;color:#000000;">            
          ${Title(order.status)}
        </div>
      </td>
    </tr>
    <tr>
      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
        <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:18px;font-weight:300;line-height:1;text-align:center;text-transform:uppercase;color:${getColorSubTitle(order.status)};">
          ${SubTitle(order.status)}
        </div>
      </td>
    </tr>
  </table>
</div>

<!--[if mso | IE]>
</td> 

</tr>

    </table>
  <![endif]-->
</td>
</tr>
</tbody>
</table>

</div>


<!--[if mso | IE]>
</td>
</tr>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
<tr>
<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]-->


<div  style="margin:0px auto;max-width:600px;">

<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
<tbody>
<tr>
<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:10px;padding-top:10px;text-align:center;">
  <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td class="" style="vertical-align:top;width:600px;">
<![endif]-->

<div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
    <tr>
      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
        <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:18px;line-height:1.5;text-align:center;color:#53B0AD;">
          ${bodyText(order.status)}
        </div>
      </td>
    </tr>
  </table>
</div>

<!--[if mso | IE]>
    </td>
  </tr>
</table>
  <![endif]-->
      </td>
    </tr>
  </tbody>
</table>
</div>


<!--[if mso | IE]>
    </td>
  </tr>
</table>
<![endif]-->

</div>
<div style="">

<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600">
  <tr>
    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]-->

<div style="background:;background-color:;margin:0px auto;max-width:600px;">

<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:;background-color:;width:100%;">
    <tbody>
        <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-top:20px;text-align:center;">
                <!--[if mso | IE]>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td class="" style="vertical-align:top;width:600px;">
<![endif]-->

                <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tr>
                            <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <p style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:100%;"></p>

                                <!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:550px;" role="presentation" width="550px">
  <tr>
    <td style="height:0;line-height:0;">
      &nbsp;
    </td>
  </tr>
</table>
<![endif]-->

                            </td>
                        </tr>
                    </table>
                </div>
                <!--[if mso | IE]>
</td>
<td class="" style="vertical-align:top;width:30px;">
<![endif]-->
                <div class="mj-column-per-5 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <!-- Your first column -->
                    </table>
                </div>
                <!--[if mso | IE]>
</td>

<td class="" style="vertical-align:top;width:540px;">
<![endif]-->
                <div class="mj-column-per-90 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tr>
                            <td align="left" style="font-size:0px;padding:10px 25px;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px;word-break:break-word;">
                                <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:16px;line-height:25px;text-align:left;color:#000000;">
                                    <p> Dear Adidma, thank you again for your order!
                                        <br/> I really hope you are happy with the result of the Fluffy painting!
                                        <p></p> If you have just a minute I would be very greatfull for your short review on Fluffy.co.il/review
                                        <br/> And moreover, if you download a photo of your ready artwork
                                        <br/> I will send you a 50 Nis Gift Certificate for your or your friend next order ) </p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <!--[if mso | IE]>
              </td>
              <td class="" style="vertical-align:top;width:30px;">
                <![endif]-->
                <div class="mj-column-per-5 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <!-- Your first column -->
                    </table>
                </div>
                <!--[if mso | IE]>
              </td>
              <td class="" style="vertical-align:top;width:600px;">
                <![endif]-->
                <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tr>
                            <td style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <p style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:100%;"></p>
                                <!--[if mso | IE]>
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:550px;" role="presentation" width="550px">
                                    <tr>
                                      <td style="height:0;line-height:0;">
                                        &nbsp;
                                      </td>
                                    </tr>
                                  </table>
                                <![endif]-->
                            </td>
                        </tr>
                    </table>
                </div>
                <!--[if mso | IE]>
    </td>
  </tr>
</table>
    <![endif]-->
            </td>
        </tr>
    </tbody>
</table>
</div>
<!--[if mso | IE]>
</td>
</tr>
</table>
<![endif]-->
</div>
${Footer}
</div>
<!--[if mso | IE]>
</td>
  </tr>
    </table>
<![endif]-->
</body>
</html>
`;
}

const orderInformation = (order) => {
return `
<div style="">
  <table
    cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;"
  >
    <tr style="text-align:left;padding:15px 0;">
          <th style="padding: 0 15px 0 0;">Order number</th>
          <th style="padding: 0 15px;">Date</th>
          <th style="padding: 0 15px;">Total</th>
          <th style="padding: 0 0 0 15px;">Payment Method</th>
        </tr>
        <tr>
          <td style="padding: 0 15px 0 0;">${order["_id"]}</td>
          <td style="padding: 0 15px;">${order.created && new Date(order.created).getDate()}</td>
          <td style="padding: 0 15px;">${order.total}</td>
          <td style="padding: 0 0 0 15px;">${order.payment_type}</td>
        </tr>
  </table>
</div>
`
}

module.exports = {
  builderHtml,
  getSubjectEmail
};