import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { VerdurasPage } from './verduras.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
describe('VerdurasPage', () => {
  let component: VerdurasPage;
  let fixture: ComponentFixture<VerdurasPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdurasPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VerdurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to tab2', () => {
    spyOn(router,'navigate')

    component.confirm();

    expect(router.navigate).toHaveBeenCalledWith(['tabs/tab2']);
  });
});
