// Vendors
import { Injectable } from '@angular/core';
import { Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  public subscriptions:Array<Subscription> = [];

  constructor() { }

  public add(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  public unsubscribeAll(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }
}
