import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  fields = [
    {
      id:1,
      name: 'Canchas de Futbol Don oscar',
      address: 'Av. La Florida 4520',
      phone: '+569 1234 5678',
      image: 'https://www.granvalparaiso.cl/wp-content/uploads/2014/09/canchas.jpg',
      price: 15000,
      rating: 4.5
    },
    {
      id:2,
      name: 'Canchas de Futbol Don Pepe',
      address: 'Puente Alto 1234',
      phone: '+569 7887 8855',
      image: 'https://citymagazine.cl/wp-content/uploads/2022/10/DSC4880.jpg',
      price: 15000,
      rating: 4.5
    },
    {
      id:3,
      name: 'Canchas de Futbol Don Juanito',
      address: 'Av. Macul 2802 ',
      phone: '+569 4552 2022',
      image: 'https://citymagazine.cl/wp-content/uploads/2022/10/DSC4880.jpg',
      price: 15000,
      rating: 4.5
    },
  ]



  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  irFormulario(field:any){
    let navigationExtras = {
      state: {
        'cancha': field
      }
    }
    this.router.navigate(['/formularioreserva'], navigationExtras)

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
