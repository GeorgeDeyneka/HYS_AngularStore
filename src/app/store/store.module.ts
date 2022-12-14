import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CartModalComponent } from './cart/cart-modal/cart-modal.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    StoreComponent,
    HeaderBarComponent,
    FooterComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    CartModalComponent,
    CartItemComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [StoreComponent],
})
export class StoreModule {}