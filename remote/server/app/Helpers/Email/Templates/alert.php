<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pintrax Alert</title>
  <style type="text/css">
    @import url(http://fonts.googleapis.com/css?family=Droid+Sans);
    @import url(https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600);
    /* Take care of image borders and formatting */

    img {
      max-width: 600px;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a {
      text-decoration: none;
      border: 0;
      outline: none;
      color: #bbbbbb;
    }

    a img {
      border: none;
    }

    /* General styling */

    td, h1, h2, h3  {
      font-family: Helvetica, Arial, sans-serif;
      font-weight: 400;
    }

    td {
      text-align: center;
    }

    body {
      -webkit-font-smoothing:antialiased;
      -webkit-text-size-adjust:none;
      width: 100%;
      height: 100%;
      color: #37302d;
      background: #ffffff;
      font-size: 16px;
    }

    table {
      border-collapse: collapse !important;
    }

    .headline {
      color: #ffffff;
      font-size: 36px;
    }

    .force-full-width {
      width: 100% !important;
    }




  </style>

  <style type="text/css" media="screen">
    @media screen {
      /*Thanks Outlook 2013! http://goo.gl/XLxpyl*/
      td, h1, h2, h3 {
        font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
      }
    }
  </style>

  <style type="text/css" media="only screen and (max-width: 480px)">
    /* Mobile styles */
    @media only screen and (max-width: 480px) {

      table[class="w320"] {
        width: 320px !important;
      }


    }
  </style>
</head>
<body class="body" style="padding: 0;margin: 0;display: block;background: #ffffff;-webkit-text-size-adjust: none;-webkit-font-smoothing: antialiased;width: 100%;height: 100%;color: #37302d;font-size: 16px;" bgcolor="#ffffff">
<table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%" style="border-collapse: collapse !important;">
  <tr>
    <td align="center" valign="top" bgcolor="#ffffff" width="100%" style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
      <center>
        <table style="margin: 0 auto;border-collapse: collapse !important;" cellpadding="0" cellspacing="0" width="600" class="w320">
          <tr>
            <td align="center" valign="top" style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">

              <table bgcolor="#f9f9f9" style="margin: 0 auto;border-collapse: collapse !important;" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="font-size: 30px;text-align: center;padding: 10px;font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;">
                    <img src="http://pintrax.com.au/public/image/pintraxlogo_transparent.png" alt="Pintrax Logo" height="50">
                  </td>
                </tr>
              </table>

              <table style="margin: 0 auto;border-collapse: collapse !important;" cellpadding="0" cellspacing="0" width="100%" bgcolor="#d35f5f">
                <tr>
                  <td style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                    <br>

                  </td>
                </tr>
                <tr>
                  <td class="headline" style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;color: #ffffff;font-size: 36px;">
                    Alert!
                  </td>
                </tr>
                <tr>
                  <td style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">

                    <center>
                      <table style="margin: 0 auto;border-collapse: collapse !important;" cellpadding="0" cellspacing="0" width="60%">
                        <tr>
                          <td style="color: #fff;font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                            <br>
                            <span>Alert for device: <em><?= $viewVars['boxId'] ?></em></span>
                            <br>
                            <br>
                            <br>
                          </td>
                        </tr>
                      </table>
                    </center>

                  </td>
                </tr>
              </table>

              <table style="margin: 0 auto;border-collapse: collapse !important;" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f9f9f9">
                <tr>
                  <td style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                    <br>
                    <?php
                    if($viewVars['type'] == 'speed'): ?>
                      <img src="http://pintrax.com.au/public/image/tachometer.png" alt="tacho">
                    <?php elseif($viewVars['type'] == 'boundary'): ?>
                      <img src="http://pintrax.com.au/public/image/map.png" alt="tacho">
                    <?php elseif($viewVars['type'] == 'start'): ?>
                      <img src="http://pintrax.com.au/public/image/play.png" alt="tacho">
                    <?php elseif($viewVars['type'] == 'battery'): ?>
                      <img src="http://pintrax.com.au/public/image/battery.png" alt="tacho">
                    <?php endif; ?>
                  </td>
                </tr>
                <tr>
                  <td style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">

                    <center>
                      <table style="margin: 0 auto;border-collapse: collapse !important;" cellpadding="0" cellspacing="0" width="60%">
                        <tr>
                          <td style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                            <p><?= $viewVars['message']; ?></p>
                            <p>If you want to change these alerts or do not want to receive these please log into your account using the following link:</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                            <div><!--[if mso]>
                              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://" style="height:50px;v-text-anchor:middle;width:200px;" arcsize="8%" stroke="f" fillcolor="#ac4d2f">
                                <w:anchorlock/>
                                <center>
                              <![endif]-->
                              <a href="http://pintrax.com.au/#/account" style="background-color: #d35f5f;border-radius: 4px;color: #ffffff;display: inline-block;font-family: Helvetica, Arial, sans-serif;font-size: 16px;font-weight: bold;line-height: 50px;text-align: center;text-decoration: none;width: 200px;-webkit-text-size-adjust: none;border: 0;outline: none;">My Account</a>
                              <!--[if mso]>
                              </center>
                              </v:roundrect>
                              <![endif]--></div>
                            <br>
                            <br>
                          </td>
                        </tr>
                        <tr>
                          <td style="color: #933f24;font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                            Regards,<br>
                            The Pintrax Team<br>
                            <br><br>
                          </td>
                        </tr>
                      </table>
                    </center>

                  </td>
                </tr>
              </table>

              <table style="margin: 0 auto;border-collapse: collapse !important;width: 100% !important;" cellpadding="0" cellspacing="0" class="force-full-width" bgcolor="#414141">
                <tr>
                  <td style="background-color: #414141;font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                    <br>
                  </td>
                </tr>
                <tr>
                  <td style="color: #bbbbbb;font-size: 12px;font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                    <a href="#" style="text-decoration: none;border: 0;outline: none;color: #bbbbbb;">View in browser</a> | <a href="#" style="text-decoration: none;border: 0;outline: none;color: #bbbbbb;">Unsubscribe</a> | <a href="#" style="text-decoration: none;border: 0;outline: none;color: #bbbbbb;">Contact</a>
                    <br><br>
                  </td>
                </tr>
                <tr>
                  <td style="color: #bbbbbb;font-size: 12px;font-family: 'Source Code Pro', 'Helvetica Neue', 'Arial', 'sans-serif' !important;font-weight: 400;text-align: center;">
                    © 2014 All Rights Reserved
                    <br>
                    <br>
                  </td>
                </tr>
              </table>





            </td>
          </tr>
        </table>
      </center>
    </td>
  </tr>
</table>
</body>
</html>