import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';
import { EtudiantFormulaireComponent } from './forms/etudiant-formulaire/etudiant-formulaire.component';
import { SpecialiteFormulaireComponent } from './forms/specialite-formulaire/specialite-formulaire.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "etudiant", component : EtudiantComponent },
  { path: "etudiantFormulaire", component : EtudiantFormulaireComponent },
  { path: "specialite", component : SpecialiteComponent },
  { path: "specialiteFormulaire", component : SpecialiteFormulaireComponent },
  { path: "etudianthorsparis", component : EtudiantHorsParisComponent },
  { path: "**", redirectTo : "/home", pathMatch: "full"},
  { path: "", redirectTo : "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
