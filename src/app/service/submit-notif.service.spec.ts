import { TestBed } from '@angular/core/testing';

import { SubmitNotifService } from './submit-notif.service';

xdescribe('SubmitNotifService', () => {
  let service: SubmitNotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitNotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
