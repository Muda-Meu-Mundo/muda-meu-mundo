import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LegumesPage } from './legumes.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LegumesPage', () => {
  let component: LegumesPage;
  let fixture: ComponentFixture<LegumesPage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LegumesPage);
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
