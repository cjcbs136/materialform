import { UserSuccessModule } from './user-success.module';

describe('UserSuccessModule', () => {
  let userSuccessModule: UserSuccessModule;

  beforeEach(() => {
    userSuccessModule = new UserSuccessModule();
  });

  it('should create an instance', () => {
    expect(userSuccessModule).toBeTruthy();
  });
});
