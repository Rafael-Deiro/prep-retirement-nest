import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findUserByEmail', () => {
    it('should return correct user', () => {
      expect(
        service.findUserByEmail('rafaeldeiro@domain.com'),
      ).resolves.toMatchObject({
        id: 1,
        first_name: 'Rafael',
        last_name: 'Deiro',
        email: 'rafaeldeiro@domain.com',
      });
    });

    it('should throw not found error', () => {
      expect(service.findUserByEmail('cant catch me lol')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
