import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioContaPage } from './inicio-conta.page';

describe('InicioContaPage', () => {
  let component: InicioContaPage;
  let fixture: ComponentFixture<InicioContaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
