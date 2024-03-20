import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteFormulaireComponent } from './specialite-formulaire.component';

describe('SpecialiteFormulaireComponent', () => {
  let component: SpecialiteFormulaireComponent;
  let fixture: ComponentFixture<SpecialiteFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialiteFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialiteFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
