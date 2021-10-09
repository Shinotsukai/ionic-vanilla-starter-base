import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { IonSlides } from '@ionic/angular';
import { ONBOARDING_KEY } from 'src/app/guards/onboarding.guard';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  constructor(private router: Router) {}

  ngOnInit() {}

  nextSlide() {
    console.log('clicked');
    this.slides.slideNext();
  }

  async toLogin() {
    await Storage.set({ key: ONBOARDING_KEY, value: 'true' });
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
