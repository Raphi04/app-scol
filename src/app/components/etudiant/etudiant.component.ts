import { Component } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  listeEtudiants : any = []
  constructor(private etudiants : EtudiantServiceService) {
    this.listeEtudiants = this.etudiants.Etudiants;
  }
}
