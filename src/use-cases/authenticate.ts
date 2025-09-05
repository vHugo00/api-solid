import type { UsersRepository } from '@/repositories/users-repository'
import { InvalidCredentialsError } from './erros/invalid-credentials-error'
import { compare } from 'bcryptjs'
import type { User } from 'generated/prisma'

interface AuthenticateUserCaseRequest {
  email: string
  password: string
}

interface AuthenticateUserCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUserCaseRequest): Promise<AuthenticateUserCaseResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMathces = await compare(password, user.password_hash)

    if (!doesPasswordMathces) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}
