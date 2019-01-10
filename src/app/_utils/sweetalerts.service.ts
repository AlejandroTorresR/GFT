import { Injectable } from '@angular/core';
declare var swal: any;

@Injectable()
export class SweetalertsService {

  public aceptButton: string = 'Aceptar';
  public cancelButton: string = 'Cancelar';

  constructor() {

  }

  confirmCustom(title, text) {
    return swal({
      title: title,
      text: text,
      showCancelButton: true,
      buttonsStyling: false,
      reverseButtons: true,
      confirmButtonClass: 'confirmButtonClass',
      cancelButtonClass: 'cancelButtonClass',
      confirmButtonText: this.aceptButton,
      cancelButtonText: this.cancelButton
    });
  }

  // New Alerts
  confirmAlert(title, text) {
    return swal({
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonText: this.aceptButton,
      cancelButtonText: this.cancelButton
    });
  }

  typeAlert(title, text, type) {
    swal(
      title,
      text,
      type
    );
  }

  noBtnAlert(title, type){
    swal({
      position: 'top-end',
      type: type,
      title: title,
      showConfirmButton: false,
      timer: 1500
    })
  }

  loadingAlert(){
    swal({
      title: 'Espere un momento...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      onOpen: () => {
        swal.showLoading()
      }
    })
  }

  closeSwal(){
    swal.close();
  }

  recoveryPass(){
    swal({
    title: 'Recuperar contraseña',
    text: 'Eviaremos un correo para que pueda cambiar la contraseña.',
    input: 'text',
    inputPlaceholder: 'E-mail',
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    showLoaderOnConfirm: true,
    preConfirm: (email) => {},
    allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        this.typeAlert('Correo enviado', result.value, 'success')
      }
    })
  }

  //Buscar eliminar
  alertAccept(title, text) {
    swal({
      title: title,
      text: text,
      confirmButtonText: this.aceptButton
    });
  }


  addStore(){
    return swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      'Nombre',
      'Latitud',
      'Longitud'
    ])
  }

  selectAlert(items){
    let newItems = [];
    for(let i of items){
      newItems.push(i.name)
    }
    return swal({
      title: 'Tipo de Tarjeta',
      input: 'select',
      inputOptions: newItems,
      inputPlaceholder: 'Seleccionar...',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        return new Promise( (resolve, reject) => {
          if (value !== '') {
            resolve();
          } else {
            reject('You need to select a Tier');
          }
        });
      }
    })
  }

}
