import { FirstHomeworkModule } from './first-homework.module';

describe('FirstHomeworkModule', () => {
  let firstHomeworkModule: FirstHomeworkModule;

  beforeEach(() => {
    firstHomeworkModule = new FirstHomeworkModule();
  });

  it('should create an instance', () => {
    expect(firstHomeworkModule).toBeTruthy();
  });
});
