export namespace ApiError {
  export enum Auth {
    generic = 1000,
    expiredToken,
    badAuth,
    nonexistentPlayerId,
    unauthorized,
    userAlreadyExists,
    badEmailFormat,
    emailNeeded,
    badFbAuth,
    emailDoesNotExist,
    invalidRestorePasswordToken,
    invalidConfirmEmailToken,
  }

  export enum WS {
    generic = 2000,
    tooFewParams,
    appVersionObsolete, // PANIC :o
  }

  export enum User {
    generic = 5000,
    unsubscribed,
    userDoesNotExist,
    wrongPassword,
    passwordTooShort,
  }
}

const customErrors: any[] = []

// Auth
customErrors[ApiError.Auth.badAuth] = {
  message: 'Bad auth',
  showMessage: {
    EN: 'Incorrect email/password',
    ES: 'Email o contraseña incorrectos',
  },
  HTTPStatusCode: 400,
}
customErrors[ApiError.Auth.unauthorized] = {
  message: 'Unauthorized',
  showMessage: {
    EN: 'Unauthorized',
    ES: 'No autorizado',
  },
  HTTPStatusCode: 401,
}
customErrors[ApiError.Auth.userAlreadyExists] = {
  message: 'User already exists',
  showMessage: {
    EN: 'User already exists',
    ES: 'El usuario ya existe',
  },
  HTTPStatusCode: 409,
}
customErrors[ApiError.Auth.badEmailFormat] = {
  message: 'Bad email format',
  showMessage: {
    EN: 'Email is not valid',
    ES: 'Email no es válido',
  },
  HTTPStatusCode: 400,
}
customErrors[ApiError.Auth.emailNeeded] = {
  message: 'Email needed',
  showMessage: {
    EN: 'Email needed',
    ES: 'Email requerido',
  },
}
customErrors[ApiError.Auth.badFbAuth] = {
  message: 'Bad fb auth, maybe the token is expired',
  showMessage: {
    EN: 'There was a problem when trying to connect to facebook. Try again later',
    ES: 'Ha ocurrido un problema intentando conectarse con facebook. Pruebe mas tarde',
  },
}
customErrors[ApiError.Auth.emailDoesNotExist] = {
  message: 'Email does not exist',
  showMessage: {
    EN: 'Email does not exist',
    ES: 'El email no existe',
  },
}
customErrors[ApiError.Auth.invalidRestorePasswordToken] = {
  message: 'Invalid reset password token',
  showMessage: {
    EN: 'Invalid reset password token',
    ES: 'Token inválido para resetear la contraseña',
  },
}
customErrors[ApiError.Auth.invalidConfirmEmailToken] = {
  message: 'Invalid confirm email token',
  showMessage: {
    EN: 'Invalid confirm email token',
    ES: 'Token inválido para confirmar el email',
  },
}
customErrors[ApiError.Auth.expiredToken] = {
  message: 'Expired token',
  showMessage: {
    EN: 'Your session has expired',
    ES: 'Su sesión ha expirado',
  },
  HTTPStatusCode: 401,
}

// WS
customErrors[ApiError.WS.tooFewParams] = {
  message: 'Too few parameters',
  showMessage: {
    EN: 'Too few parameters',
    ES: 'Faltan parametros',
  },
  HTTPStatusCode: 400,
}

// User
customErrors[ApiError.User.unsubscribed] = {
  message: 'Unsubscribed',
  showMessage: {
    EN: 'You have to buy OPEN to perfom this action',
    ES: 'Debes comprar OPEN App para realizar esta acción',
  },
  HTTPStatusCode: 400,
}
customErrors[ApiError.User.userDoesNotExist] = {
  message: 'User does not exist',
  showMessage: {
    EN: 'User does not exist',
    ES: 'El usuario no existe',
  },
  HTTPStatusCode: 404,
}
customErrors[ApiError.User.wrongPassword] = {
  message: 'Wrong password',
  showMessage: {
    EN: 'Wrong password',
    ES: 'Contraseña incorrecta',
  },
  HTTPStatusCode: 400,
}
customErrors[ApiError.User.passwordTooShort] = {
  message: 'Password has to be at least 6 characters long',
  showMessage: {
    EN: 'Password has to be at least 6 characters long',
    ES: 'La contraseña debe tener un largo de al menos 6',
  },
  HTTPStatusCode: 400,
}


export { customErrors }
