import sgMail from '@sendgrid/mail'
import logger from 'src/lib/logger.lib'

const API_ENDPOINT = process.env.API_ENDPOINT

// TODO: replace '?' with sendgrid ID
const TEMPLATE_IDS = {
  newUser: '??????????????????????????',
  forgotPwd: '??????????????????????????',
}


export function newUser(user: any, confirmToken?: string) {
  const msg = {
    to: user.email,
    from: {
      email: 'hola@openapp.uy',
      name: 'OPEN',
    },
    templateId: TEMPLATE_IDS.newUser,
    dynamic_template_data: {
      userfirstName: user.firstName,
      confirmEmailURL: `${API_ENDPOINT}/users/confirm_email/${confirmToken}`, // TODO: fix URL
    },
  }

  sgMail.send(msg)
    .then(() => logger.info({ email: user.email }, `send_welcome_email_error`))
    .catch(err => {
      logger.error({
        err: err.response.body,
        email: user.email,
      }, `send_welcome_email_error`)
    })
}


export function sendForgotPwdMail(email, token, userfirstName) {
  const msg = {
    to: email,
    from: {
      email: 'hola@houlak.com',
      name: 'Houlak',
    },
    templateId: TEMPLATE_IDS.forgotPwd,
    dynamic_template_data: {
      firstName: userfirstName,
      restorePwdURL: `${API_ENDPOINT}/users/restore_password?token=${token}&env=${process.env.ENV}`,
    },
  }

  sgMail.send(msg)
    .then(() => logger.info(`Forgot pwd email sended successfuly to ${email}`))
    .catch(err => {
      logger.error(err.response.body, `Error when sending forgot pwd email to ${email}`)
    })
}
