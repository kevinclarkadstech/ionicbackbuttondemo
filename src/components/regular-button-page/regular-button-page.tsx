import { alertController } from '@ionic/core';
import {Component, h, State} from '@stencil/core';

@Component({
   tag: 'regular-button-page'
})
export class RegularButtonPage {

    @State() isDirty: boolean = false;
    
    render() {
        return [
            <ion-header>
              <ion-toolbar color="primary">
                <ion-buttons slot="start">
                  <ion-button onClick={(evt) => {
                      evt.preventDefault();
                      evt.stopImmediatePropagation();
                      if (this.isDirty) {
                        alertController.create({ message: 'You may have some unsaved changes. Are you sure you want to cancel?', buttons: [ { text: 'No' }, { text: 'Yes', handler: () => { const ionRouter = document.querySelector('ion-router'); if (ionRouter) { ionRouter.back(); } } } ] })
                        .then(alert => alert.present()); 
                      } else {
                        const ionRouter = document.querySelector('ion-router'); 
                        if (ionRouter) { 
                            ionRouter.back();
                        }
                      }
                  }}>
                      Back
                  </ion-button>
                </ion-buttons>
                <ion-title></ion-title>
              </ion-toolbar>
            </ion-header>,
      
            <ion-content class="ion-padding">
                <div>This one does work, with the regular button. </div>
                <ion-button onClick={() => this.isDirty = !this.isDirty}>Toggle form dirty</ion-button>
                <div>Form is dirty: {this.isDirty}</div>
            </ion-content>,
          ];
    }
}