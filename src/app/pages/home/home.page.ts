import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public currentTime: string | undefined;


  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  successMessage: string = '';
  successColor: string = 'success';
  errorMessage: string = '';
  errorColor: string = 'danger';

  constructor(private alertController: AlertController) {
    // Set the initial time
    this.updateTime();

    // Update the time every second
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const now = new Date();
    // Format the time as h:mm
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.currentTime = `${hours}:${minutes}`;
  }

  //Toggle eye icon in password
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async login() {
    if (this.email === '222' && this.password === '222') {
      this.showSuccessAlert();
      this.successMessage = 'Correct email and password!';
      this.errorMessage = ''; // Clear error message
    } else {
      this.showErrorAlert();
      this.errorMessage = 'Incorrect email or password!';
      this.successMessage = ''; // Clear success message
    }
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Correct email and password!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Incorrect email or password!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}


