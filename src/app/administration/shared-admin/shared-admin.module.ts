import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FilterBarComponent, SideBarComponent, TableComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatInputModule,
    SharedModule,
  ],
  exports: [FilterBarComponent, SideBarComponent, TableComponent],
})
export class SharedAdminModule {}