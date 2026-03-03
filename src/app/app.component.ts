import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zad1';
  kursy = ["Programowanie w C#","Podstawy angulara","Kurs Django"];
  jezyki = ["Python","C#","C++","Java"];
  imie = ""
  nrKursu = ""
  jezyk = "";
  zapizsNaKurs(){
    const nrKursuNumber = Number.parseInt(this.nrKursu);
    if(nrKursuNumber <= 0 || nrKursuNumber > this.kursy.length) console.log(this.imie + " nie ma kursu o takim numerze")
    else console.log(this.imie + " " + this.kursy[nrKursuNumber-1])
  }
  wyswietl(){
    console.log(this.jezyk)
  }
}
