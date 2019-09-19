import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { setTimeout } from 'tns-core-modules/timer';

@Component({
    selector: "ns-app",
    templateUrl: "splash.component.html"
})
export class SplashComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        setTimeout(() => {
          this.goToAppScreen();
        }, 2000);
    }

    goToAppScreen(): void {
        console.log('goToAppScreen');
        this.routerExtensions.navigate(["/home"], {
            transition: {
                name: "fade"
            }
        });
    }
}
