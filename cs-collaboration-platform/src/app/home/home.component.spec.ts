import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService} from '../auth.service';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, {provide: APP_BASE_HREF, useValue: '/'}],
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
