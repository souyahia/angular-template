import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ExampleComponent } from './example.component';
import { EXAMPLE_ROUTE } from './example.route';

@NgModule({
  declarations: [ExampleComponent],
  imports: [SharedModule, RouterModule.forChild(EXAMPLE_ROUTE)],
})
export class ExampleModule {}
