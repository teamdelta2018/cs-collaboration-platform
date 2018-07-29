

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService} from '../auth.service';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, {provide: APP_BASE_HREF, useValue: '/'}],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
