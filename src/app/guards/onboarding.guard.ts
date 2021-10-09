import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import {Storage} from '@capacitor/storage'

export const ONBOARDING_KEY = 'onboarding';

@Injectable({
  providedIn: 'root'
})
export class OnboardingGuard implements CanLoad {
  constructor(private router:Router){}
  async canLoad(): Promise<boolean >  {
    const hasOnboardingLoaded = await Storage.get({key:ONBOARDING_KEY})

    if (hasOnboardingLoaded && (hasOnboardingLoaded.value === 'true')){
      return true
    }else {
      this.router.navigateByUrl('/onboarding',{replaceUrl:true})
      return true
    }

  }
}
