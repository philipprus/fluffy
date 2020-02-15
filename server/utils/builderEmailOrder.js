const CONSTANT = require('./contsText');
const { Header } = require('./template-email/header');
const { Footer } = require('./template-email/footer');
const { Logotype } = require('./template-email/logotype');
const { Title } = require('./template-email/title');
const { SubTitle } = require('./template-email/subTitle');
const {getBody} = require('./template-email/body');

const getColorSubTitle = type => {
  switch (type) {
    case CONSTANT.STATUS_NEW:
    case CONSTANT.STATUS_NOT_PAID:
      return CONSTANT.COLOR_SUBTITLE_NEW;
    case CONSTANT.STATUS_IN_DELIVERY:
      return CONSTANT.COLOR_SUBTITLE_IN_DELIVERY;
    case CONSTANT.STATUS_READY_TO_DISPATCH:
      return CONSTANT.COLOR_SUBTITLE_READY_TO_DISPATCH;
    case CONSTANT.STATUS_NOT_CONFIRMED:
      return CONSTANT.COLOR_SUBTITLE_NOT_CONFIRMED;
    case CONSTANT.STATUS_IN_PROCESS:
      return CONSTANT.COLOR_SUBTITLE_IN_PROCESS;
    case CONSTANT.STATUS_COMPLETE:
    default:
      return CONSTANT.COLOR_SUBTITLE_COMPLETE;
  }
};

const getSubjectEmail = status => {
  switch (status) {
    case CONSTANT.STATUS_NEW:
    case CONSTANT.STATUS_NOT_PAID:
      return CONSTANT.SUBJECT_NEW;
    case CONSTANT.STATUS_IN_PROCESS:
      return CONSTANT.SUBJECT_IN_PROCESS;
    case CONSTANT.STATUS_READY_TO_DISPATCH:
      return CONSTANT.SUBJECT_READY_TO_DISPATCH;
    case CONSTANT.STATUS_COMPLETE:
      return CONSTANT.SUBJECT_COMPLETE;
    case CONSTANT.STATUS_IN_DELIVERY:
      return CONSTANT.SUBJECT_IN_DELIVERY;
    case CONSTANT.STATUS_NOT_CONFIRMED:
    default:
      return CONSTANT.SUBJECT_NOT_CONFIRMED;
  }
};

const SloganText = (status) => {
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
      return CONSTANT.TEXT_DESCRIPTION_COMPLETE;
  }
};


const builderHtml = order => {

  

  return `
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
${ Header }
<body { style=} "background-color:#d6dde5;" id="body">
<!--[if mso { | } IE]>
<table { align} ="center" border="0" cellpadding="0" cellspacing="0" class="wrapper0234-outlook" style="width:600px;" width="600">
  <tr>{ 
    <td } style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
  <div class="wrapper0234" style="background-color: #ffffff; background-image: url(https://i.ibb.co/cY72NfP/fluffy-logo-1.png); background-size: 100%; background-repeat: no-repeat; background-position: center center; margin: 0px auto; max-width: 600px;">
    <a href="http://fluffy.co.il/" target="_blank">${Logotype}</a>
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
        <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:18px;font-weight:300;line-height:1;text-align:center;text-transform:uppercase;color:#000000;">
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
        <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:18px;line-height:1.5;text-align:center;color:#53B0AD;color:${getColorSubTitle(
          order.status
        )};">
          ${SloganText(order.status)}
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

<table align="center" border="0" cellpadding="0" width="100%" cellspacing="0" role="presentation" style="background-color:;width:100%; margin: 0 auto;">
    <tbody>
        <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-top:20px;text-align:center;">
          ${getBody(order)}
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
};


module.exports = {
  builderHtml,
  getSubjectEmail,
};
