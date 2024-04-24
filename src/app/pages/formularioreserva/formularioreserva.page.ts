import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formularioreserva',
  templateUrl: './formularioreserva.page.html',
  styleUrls: ['./formularioreserva.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FormularioreservaPage implements OnInit {

  canchaS:any;
  fecha:any;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.canchaS = this.router.getCurrentNavigation()?.extras?.state?.['cancha'];
      }
    })
  }

  register(){
    this.presentAlert("Cancha Reservada");
    //aqui se deberia enviar a BD para registrar y antes verificar que la fecha no este ocupada
  }
  return(){

  }

  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: msj,
      buttons: ['Ok'],
    });

    await alert.present();
  }

}
