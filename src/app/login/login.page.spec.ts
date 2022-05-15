import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router)

    component = fixture.componentInstance;
  }));

  it('should create a form on init', () => {
    component.ngOnInit

    expect(component.form).not.toBeUndefined();
  })

  it('should go to tabs page on login', () => {
    spyOn(router,'navigate')

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['tabs']);
  });

  it('should go to register page on register', () => {
    spyOn(router,'navigate')

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });


  
});
