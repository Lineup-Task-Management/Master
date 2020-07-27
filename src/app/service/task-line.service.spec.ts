import { TestBed } from '@angular/core/testing';

import { TaskLineService } from './task-line.service';

xdescribe('TaskLineService', () => {
  let service: TaskLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
