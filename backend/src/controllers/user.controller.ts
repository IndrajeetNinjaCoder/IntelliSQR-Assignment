import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { AppError } from '../utils/AppError';

const prisma = new PrismaClient();

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new AppError('Email already in use', 400);
    }

    const user = await prisma.user.create({
      data: {
        email,
        password, // hash in real-world
      },
    });

    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      throw new AppError('Invalid email or password', 401);
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    next(err);
  }
};
