const LoginRouter = require('./login-router.js')
const MissingParamError = require('../helpers/missing-params-error.js')

describe('Login Route', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter() // sut = system under test
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter() // sut = system under test
    const httpRequest = {
      body: {
        email: 'any_email'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter() // sut = system under test
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if no httpRequest has no body', () => {
    const sut = new LoginRouter() // sut = system under test
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })
})
