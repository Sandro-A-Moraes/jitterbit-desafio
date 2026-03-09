import { prisma } from "../lib/prisma";

export async function createUser(name: string, email: string, password: string) {
    return prisma.user.create({
        data: {
            name,
            email,
            password
        },        select: {
            id: true,
            name: true,
            email: true
        }
    });
}

export async function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email }
    });
}

export async function findUserById(id: string) {
    return prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true
        }
    });
}

export async function listUsers() {
    return prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    });
}