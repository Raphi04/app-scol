import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-etudiant-formulaire',
  templateUrl: './etudiant-formulaire.component.html',
  styleUrl: './etudiant-formulaire.component.css'
})
export class EtudiantFormulaireComponent {
  constructor(private form : FormBuilder) {}

  etudiantFormulaire = this.form.group({
    nom : ["", Validators.required],
    prenom : ["", Validators.required],
    rue : ["", Validators.required],
    cp : ["", Validators.required],
    ville : ["", Validators.required],
    courriel : ["", Validators.required],
    genre : ["", Validators.required],
    age : ["", Validators.required],
    idCandidat : ["", Validators.required]
  });

  onSubmit() {
    let newEtudiant = {
      nom : this.etudiantFormulaire.get("nom")?.value,
      prenom : this.etudiantFormulaire.get("prenom")?.value,
      rue : this.etudiantFormulaire.get("rue")?.value,
      cp : this.etudiantFormulaire.get("cp")?.value,
      ville : this.etudiantFormulaire.get("ville")?.value,
      courriel : this.etudiantFormulaire.get("courriel")?.value,
      genre : this.etudiantFormulaire.get("genre")?.value,
      age : this.etudiantFormulaire.get("age")?.value,
      idCandidat : this.etudiantFormulaire.get("idCandidat")?.value
    }
    let etudiants = JSON.parse(localStorage.getItem("etudiants") || "{}");

    if(Object.keys(etudiants).length == 0) {
      etudiants = [];
      etudiants.push(newEtudiant);
      localStorage.setItem("etudiants", JSON.stringify(etudiants));
    } else {
      etudiants.push(newEtudiant);
      localStorage.setItem("etudiants", JSON.stringify(etudiants));
    }
  }
}

