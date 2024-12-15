import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('signIn', () => {
    it('Should return the JWT', () => {
      expect(
        authService.signIn('rafaeldeiro@domain.com', '12345678'),
      ).resolves.toBe('mytokenhere');
    });

    it('Should call usersService.findUserByEmail', async () => {
      const spyFindUserByEmail = jest.spyOn(usersService, 'findUserByEmail');

      await authService.signIn('rafaeldeiro@domain.com', '12345678');

      expect(spyFindUserByEmail).toHaveBeenCalledWith('rafaeldeiro@domain.com');
    });
  });
});
