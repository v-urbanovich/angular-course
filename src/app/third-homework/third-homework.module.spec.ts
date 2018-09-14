import { ThirdHomeworkModule } from './third-homework.module';

describe('ThirdHomeworkModule', () => {
  let thirdHomeworkModule: ThirdHomeworkModule;

  beforeEach(() => {
    thirdHomeworkModule = new ThirdHomeworkModule();
  });

  it('should create an instance', () => {
    expect(thirdHomeworkModule).toBeTruthy();
  });
});
