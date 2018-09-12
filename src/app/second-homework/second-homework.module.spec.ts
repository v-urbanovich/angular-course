import { SecondHomeworkModule } from './second-homework.module';

describe('SecondHomeworkModule', () => {
  let secondHomeworkModule: SecondHomeworkModule;

  beforeEach(() => {
    secondHomeworkModule = new SecondHomeworkModule();
  });

  it('should create an instance', () => {
    expect(secondHomeworkModule).toBeTruthy();
  });
});
