import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioreservaPage } from './formularioreserva.page';

describe('FormularioreservaPage', () => {
  let component: FormularioreservaPage;
  let fixture: ComponentFixture<FormularioreservaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormularioreservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
