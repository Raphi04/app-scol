import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-specialite-formulaire',
  templateUrl: './specialite-formulaire.component.html',
  styleUrl: './specialite-formulaire.component.css'
})
export class SpecialiteFormulaireComponent {
  constructor(private form : FormBuilder) {}
  
  specialiteForm = this.form.group({
    libelle : ["", Validators.required],
    idSpec : ["", Validators.required]
  })

  onSubmit() {
    let newSpecialite = {
      libelle : this.specialiteForm.get("libelle")?.value,
      idSpec : this.specialiteForm.get("idSpec")?.value
    }

    let specialite = JSON.parse(localStorage.getItem("specialite") || "{}");

    if(Object.keys(specialite).length == 0) {
      specialite = [];
      specialite.push(newSpecialite);
      localStorage.setItem("specialite", JSON.stringify(specialite));
    } else {
      specialite.push(newSpecialite);
      localStorage.setItem("specialite", JSON.stringify(specialite));
    }
  }
}
