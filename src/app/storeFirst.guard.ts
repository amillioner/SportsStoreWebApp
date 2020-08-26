import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StoreComponent } from './store/store.components';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreFirstGuard {
    private firstNaviation = true;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNaviation) {
            this.firstNaviation = false;
            if (route.component != StoreComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}