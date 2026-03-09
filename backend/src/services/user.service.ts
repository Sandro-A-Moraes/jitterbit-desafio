import * as userRepository from '../repositories/user.repository';
import { hashPassword } from '../utils/hashPassword';

export async function createUserService(name: string, email: string, password: string) {
    const hashedPassword = await hashPassword(password);
    return userRepository.createUser(name, email, hashedPassword);
}

export async function getUserByEmailService(email: string) {
    const user = await userRepository.findUserByEmail(email);
    return user;
}

export async function getUserByIdService(id: string) {
    const user = await userRepository.findUserById(id);
    return user;
}

export async function listUsersService() {
    return userRepository.listUsers();
}