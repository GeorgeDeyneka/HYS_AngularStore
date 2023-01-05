import { Router } from '@angular/router';
import { UsersService } from '../../pages/administration/shared/services/users.service';
import { StoreService } from 'src/app/pages/store/store.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    private storeService: StoreService,
    private usersService: UsersService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public keys: string[] | null = this.data.keys
    ? Object.keys(this.data.keys)
    : null;
  public form: FormGroup;
  public modalType: string = this.data.typeOfModal;

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if (this.modalType !== 'delete') {
      this.form = this.fb.group({
        ...this.data.keys,
      });
    }
  }

  createElem() {
    if (this.form && this.modalType === 'create') {
      if (this.data.typeOfData === 'products') {
        let { name, price, description } = this.form.getRawValue();
        this.storeService
          .create({
            name: name,
            author: 'George',
            price: +price,
            description: description,
          })
          .subscribe({
            next: (response) => {},
            error: (error) => {},
          });
      } else {
        this.usersService
          .create({
            password: '123123',
            ...this.form.getRawValue(),
          })
          .subscribe({
            next: (response) => {},
            error: (error) => {},
          });
      }
    }
    this.closeModal();
  }

  deleteElem() {
    if (this.modalType === 'delete') {
      const del = (
        this.data.typeOfData === 'products'
          ? this.storeService.delete(this.data.id)
          : this.usersService.delete(this.data.id)
      ).subscribe({
        next: (response) => {},
        error: (error) => {
          if (error.status === 403) {
            this.router.navigateByUrl('error/403');
          }
        },
      });
    }
    this.closeModal();
  }

  updateElem() {
    if (this.form && this.modalType === 'edit') {
      const upd = (
        this.data.typeOfData === 'products'
          ? this.storeService.update(this.data.id, {
              ...this.form.getRawValue(),
              author: 'George',
            })
          : this.usersService.update(this.data.id, {
              ...this.form.getRawValue(),
            })
      ).subscribe({
        next: (response) => {},
        error: (error) => {},
      });
    }
    this.closeModal();
  }
}
