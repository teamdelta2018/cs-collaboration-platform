import { TestBed, inject } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from './auth.service';
import { AppModule } from './app.module';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, {provide: APP_BASE_HREF, useValue: '/'}],
      imports: [AppModule]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
