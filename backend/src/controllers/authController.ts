import type { Request, Response } from 'express';
import { AuthService } from '../services/authService.ts';

export class AuthController {
  constructor(
    private authService: AuthService = new AuthService(),
  ) {}

  register = async (req: Request, res: Response): Promise<Response> => {
    try {
      const user = await this.authService.register(req.body);

      return res.status(201).json({
        status: 'success',
        message: 'Registrasi berhasil',
        data: user,
      });
    } catch (error) {
      if (error instanceof Error && error.message === 'EMAIL_EXISTS') {
        return res.status(409).json({
          status: 'fail',
          message: 'Email sudah terdaftar',
        });
      }

      return res.status(500).json({
        status: 'error',
        message: 'Terjadi kesalahan pada server',
      });
    }
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.authService.login(req.body);

      return res.status(200).json({
        status: 'success',
        message: 'Login berhasil',
        data,
      });
    } catch (error) {
      if (error instanceof Error && error.message === 'INVALID_CREDENTIALS') {
        return res.status(401).json({
          status: 'fail',
          message: 'Email atau password salah',
        });
      }

      return res.status(500).json({
        status: 'error',
        message: 'Terjadi kesalahan pada server',
      });
    }
  };

  me = (req: Request, res: Response): Response => {
    return res.status(200).json({
      status: 'success',
      data: res.locals.user,
    });
  };
}
