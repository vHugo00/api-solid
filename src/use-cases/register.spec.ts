import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'

describe('register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const registerUseCase = new RegisterUseCase({
      async findByEmail(email) {
        return null
      },

      async create(data) {
        return {
          id: 'user-1',
          name: data.name,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      },
    })

    const { user } = await registerUseCase.execute({
      name: 'Vitor Teste',
      email: 'teste2@teste.com',
      password: '123456',
    })

    const isPasswordCOrrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCOrrectlyHashed).toBe(true)
  })
})
