import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';

@NgModule({
  declarations: [NavbarComponent, LanguageSwitchComponent],
  imports: [SharedModule, RouterModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
