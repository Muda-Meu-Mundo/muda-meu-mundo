import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule,ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to frutas page', () => {

    spyOn(router,'navigate')

    component.frutas();

    expect(router.navigate).toHaveBeenCalledWith(['frutas']);
  });

  it('should go to verduras page', () => {

    spyOn(router,'navigate')

    component.verduras();

    expect(router.navigate).toHaveBeenCalledWith(['verduras']);
  });

  it('should go to legumes page', () => {

    spyOn(router,'navigate')

    component.legumes();

    expect(router.navigate).toHaveBeenCalledWith(['legumes']);
  });

  it('should go to graos page', () => {

    spyOn(router,'navigate')

    component.graos();

    expect(router.navigate).toHaveBeenCalledWith(['graos']);
  });

  it('should go to raizes page', () => {

    spyOn(router,'navigate')

    component.raizes();

    expect(router.navigate).toHaveBeenCalledWith(['raizes']);
  });
});
