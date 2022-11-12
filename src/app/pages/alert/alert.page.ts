import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  //styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Mensaje Importante',
      message: '¡Esto es una alerta!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertInput() {
    const alert = await this.alertController.create({
      header: 'Introduzca sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'date',
          placeholder: 'Fecha',
        },
        {
          type: 'textarea',
          placeholder: 'Breve descripción de usted mismo',
        },
      ],
    });

    await alert.present();
  }
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Escoja su color favorito',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Rojo',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Azul',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Verde',
          type: 'radio',
          value: 'green',
        },
        {
          label: 'Rosa',
          type: 'radio',
          value: 'pink',
        },
      ],
    });

    await alert.present();
  }

}


