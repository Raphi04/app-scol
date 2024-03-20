import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantFormulaireComponent } from './etudiant-formulaire.component';

describe('EtudiantFormulaireComponent', () => {
  let component: EtudiantFormulaireComponent;
  let fixture: ComponentFixture<EtudiantFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantFormulaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
