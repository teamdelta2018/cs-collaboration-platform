import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService} from '../auth.service';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, {provide: APP_BASE_HREF, useValue: '/'}],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
