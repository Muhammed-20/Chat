// Vendors
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
// Materials
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";
// Services
import { SubscriptionService } from "../../shared/services/subscription.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isType: boolean = true;
  public isLoading: boolean = false;
  public mode: ProgressSpinnerMode = 'indeterminate';
  public value: number = 5;
  constructor(
    private subscriptionService: SubscriptionService
  ) {
    this.initForm();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptionService.unsubscribeAll();
  }

  public initForm(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  public login() {

  }


}
