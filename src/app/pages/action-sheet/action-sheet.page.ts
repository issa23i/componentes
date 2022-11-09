import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  result: string;
  constructor(private actionSheetCtrl: ActionSheetController) {}


  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albumes',
      // subHeader: 'Example subheader',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          icon: 'trash-outline',
          role: 'destructive',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Play',
          icon: 'play-outline',
          handler: () => console.log ('Click on Play'),
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
}
