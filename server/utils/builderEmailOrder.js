const moment = require('moment');
const CONSTANT = require('./contsText');

const headerHtml = () => {
      return `

      <head>
        <title>

        </title>
        <!--[if !mso]><!-- -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
          #outlook a {
            padding: 0;
          }

          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }

          table,
          td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }

          img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
          }

          p {
            display: block;
            margin: 13px 0;
          }
        </style>
        <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <!--[if lte mso 11]>
    <style type="text/css">
      .outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->

        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Nunito);
          @import url(https://fonts.googleapis.com/css?family=Barlow+Condensed);
        </style>
        <!--<![endif]-->

        <style type="text/css">
          @media only screen and (min-width:480px) {
            .mj-column-per-100 {
              width: 100% !important;
              max-width: 100%;
            }

            .mj-column-per-5 {
              width: 5% !important;
              max-width: 5%;
            }

            .mj-column-per-90 {
              width: 90% !important;
              max-width: 90%;
            }

            .mj-column-per-33 {
              width: 33.33333333333333% !important;
              max-width: 33.33333333333333%;
            }
          }
        </style>


        <style type="text/css">
          @media only screen and (max-width:480px) {
            table.full-width-mobile {
              width: 100% !important;
            }

            td.full-width-mobile {
              width: auto !important;
            }
          }
        </style>
      </head>
      `;
}


const footerHtml = () => {
      return `
      <div style="">
      <!--[if mso | IE]>
    <table
        align="center" border="0" cellpadding="0" cellspacing="0" class="footer-outlook" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
      <div class="footer" style="margin:0px auto;max-width:600px;">
  
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
              <tbody>
                  <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0;text-align:center;">
                          <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
  
      <tr>
  
          <td
              class="" style="vertical-align:middle;width:199.99999999999997px;"
          >
        <![endif]-->
  
                          <div class="mj-column-per-33 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
  
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
  
                                  <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
  
                                          <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:12px;line-height:1;text-align:center;color:#000000;">
                                              <a href="">TERMS OF SERVICE</a></div>
  
                                      </td>
                                  </tr>
  
                              </table>
  
                          </div>
  
                          <!--[if mso | IE]>
          </td>
  
          <td
              class="" style="vertical-align:middle;width:199.99999999999997px;"
          >
        <![endif]-->
  
                          <div class="mj-column-per-33 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
  
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
  
                                  <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
  
                                          <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:12px;line-height:1;text-align:center;color:#000000;">
                                              <a href="">
                                  RETURNS POLICY
                                </a></div>
  
                                      </td>
                                  </tr>
  
                              </table>
  
                          </div>
  
                          <!--[if mso | IE]>
          </td>
  
          <td
              class="" style="vertical-align:middle;width:199.99999999999997px;"
          >
        <![endif]-->
  
                          <div class="mj-column-per-33 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
  
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
  
                                  <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
  
                                          <div style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:12px;line-height:1;text-align:center;color:#000000;">
                                              <a href="">
                                  PRIVACY POLICY
                                </a></div>
  
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
  
    <table
        align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
      <div style="background:;background-color:;margin:0px auto;max-width:600px;">
  
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:;background-color:;width:100%;">
              <tbody>
                  <tr>
                      <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-top:20;text-align:center;">
                          <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
  
      <tr>
  
          <td
              class="" style="vertical-align:middle;width:600px;"
          >
        <![endif]-->
  
                          <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
  
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
  
                                  <tr>
                                      <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;">
  
                                          <div style="font-family:Barlow, Helvetica, Arial, sans-serif;font-size:15px;line-height:1;text-align:center;color:#000000;">
                                              <p style="font-size:16px">Made with Love in Israel</p>
                                              <p style="font-size:16px"> ©&nbsp;2019&nbsp;Ekaterina Preobrazhenski.&nbsp;All Rights Reserved.&nbsp;
                                              </p>
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
      `
}

const logotypeHtml = () => {
  return `

    <div
       style=""
    >
      
    
    <!--[if mso | IE]>
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
    
    <div  style="margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
            >
              <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              
      <tr>
    
          <td
             class="" style="vertical-align:top;width:600px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               style="font-size:0px;word-break:break-word;"
            >
              
    
  <!--[if mso | IE]>
  
      <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="10" style="vertical-align:top;height:10px;">
    
  <![endif]-->

    <div
       style="height:10px;"
    >
      &nbsp;
    </div>
    
  <!--[if mso | IE]>
  
      </td></tr></table>
    
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
    
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
    >
      <tr>
        <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
  
    
    <div  style="margin:0px auto;max-width:600px;">
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
      >
        <tbody>
          <tr>
            <td
               style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:20px;padding-top:20px;text-align:center;"
            >
              <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              
      <tr>
    
          <td
             class="" style="vertical-align:top;width:600px;"
          >
        <![endif]-->
          
    <div
       class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
    >
      
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
    >
      
          <tr>
            <td
               align="center" style="font-size:0px;padding:10px 25px;padding-top:0;padding-right:0px;padding-bottom:0px;padding-left:0px;word-break:break-word;"
            >
              
    <table
       border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"
    >
      <tbody>
        <tr>
          <td  style="width:256px;">
            
    <img
       alt="Fluffy logo" height="auto" src="https://i.ibb.co/1mysGCc/logotype-718a1b2a.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="256"
    />
  
          </td>
        </tr>
      </tbody>
    </table>
  
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

  `
}

const bodyHtml = (order) => {
    return `
    <div style="">

    <!--[if mso | IE]>
  <table
     align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
  >
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

        <td
           class="" style="vertical-align:top;width:600px;"
        >
      <![endif]-->

                        <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

                                <tr>
                                    <td style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                        <p style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:100%;">
                                        </p>

                                        <!--[if mso | IE]>
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:550px;" role="presentation" width="550px"
    >
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

        <td
           class="" style="vertical-align:top;width:30px;"
        >
      <![endif]-->

                        <div class="mj-column-per-5 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <!-- Your first column -->
                            </table>

                        </div>

                        <!--[if mso | IE]>
        </td>

        <td
           class="" style="vertical-align:top;width:540px;"
        >
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

        <td
           class="" style="vertical-align:top;width:30px;"
        >
      <![endif]-->

                        <div class="mj-column-per-5 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <!-- Your first column -->
                            </table>

                        </div>

                        <!--[if mso | IE]>
        </td>

        <td
           class="" style="vertical-align:top;width:600px;"
        >
      <![endif]-->

                        <div class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">

                                <tr>
                                    <td style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                        <p style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:100%;">
                                        </p>

                                        <!--[if mso | IE]>
    <table
       align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px lightgrey;font-size:1;margin:0px auto;width:550px;" role="presentation" width="550px"
    >
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
    `
}


const titleMail = (type) => {
  switch (type) {
    case CONSTANT.STATUS_NEW:
    case CONSTANT.STATUS_NOT_PAID:
        return CONSTANT.HEADER_TITLE_NEW;
    case CONSTANT.STATUS_IN_DELIVERY:
        return CONSTANT.HEADER_TITLE_IN_DELIVERY;
    case CONSTANT.STATUS_READY_TO_DISPATCH:
        return CONSTANT.HEADER_TITLE_READY_TO_DISPATCH;
    case CONSTANT.STATUS_NOT_CONFIRMED:
        return CONSTANT.HEADER_TITLE_NOT_CONFIRMED;
    case CONSTANT.STATUS_IN_PROCESS:
        return CONSTANT.HEADER_TITLE_IN_PROCESS;
    case CONSTANT.STATUS_COMPLETE:
    default:
        return CONSTANT.HEADER_TITLE_COMPLETE;
    } 
}

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

const subTitleMail = (type) => {
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
${headerHtml()}
<body style="background-color:#d6dde5;">
<!--[if mso | IE]>
<table
    align="center" border="0" cellpadding="0" cellspacing="0" class="wrapper0234-outlook" style="width:600px;" width="600"
>
  <tr>
    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]-->


  <div class="wrapper0234" style="background-color: #ffffff; background-image: url(https://i.ibb.co/cY72NfP/fluffy-logo-1.png); background-size: 100%; background-repeat: no-repeat; background-position: center center; margin: 0px auto; max-width: 600px;">
    ${logotypeHtml()}
            
<div
style=""
>


<!--[if mso | IE]>
<table
align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
>
<tr>
<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]-->


<div  style="margin:0px auto;max-width:600px;">

<table
align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
>
<tbody>
  <tr>
    <td
      style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:27px;padding-top:0;text-align:center;"
    >
      <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
      
<tr>

  <td
    class="" style="vertical-align:top;width:600px;"
  >
<![endif]-->
  
<div
class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
>

<table
border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
>

  <tr>
    <td
      align="center" style="font-size:0px;padding:10px 25px;padding-top:30px;padding-right:25px;padding-bottom:10px;padding-left:25px;word-break:break-word;"
    >
      
<div
style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:50px;font-weight:500;line-height:1;text-align:center;text-transform:uppercase;color:#000000;"
>            ${titleMail(order.status)}
</div>

    </td>
  </tr>

  <tr>
    <td
      align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-right:25px;padding-bottom:0px;padding-left:25px;word-break:break-word;"
    >
      
<div
style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:18px;font-weight:300;line-height:1;text-align:center;text-transform:uppercase;color:${getColorSubTitle(order.status)};"
>
${subTitleMail(order.status)}
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

<table
align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
>
<tr>
<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]-->


<div  style="margin:0px auto;max-width:600px;">

<table
align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"
>
<tbody>
  <tr>
    <td
      style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:10px;padding-top:10px;text-align:center;"
    >
      <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
      
<tr>

  <td
    class="" style="vertical-align:top;width:600px;"
  >
<![endif]-->
  
<div
class="mj-column-per-100 outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
>

<table
border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
>

  <tr>
    <td
      align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
    >
      
<div
style="font-family:Nunito, Helvetica, Arial, sans-serif;font-size:18px;line-height:1.5;text-align:center;color:#53B0AD;"
>
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
    ${bodyHtml(order)}
    ${footerHtml()}
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
 
module.exports = {
  builderHtml,
  getSubjectEmail
};