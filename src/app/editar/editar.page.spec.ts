import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { EditarPage } from './editar.page';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditarPage', () => {
  let component: EditarPage;
  let fixture: ComponentFixture<EditarPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router)
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to tab1 page on tabs', () => {
    spyOn(router,'navigate')

    component.salvar();

    expect(router.navigate).toHaveBeenCalledWith(['tabs']);
  });

  it('should go to tab1 page on tabs', () => {
    spyOn(router,'navigate')

    component.voltar();

    expect(router.navigate).toHaveBeenCalledWith(['tabs']);
  });
});
