import {Component, NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector: 'my-app',
    template: `Hello Ng5 World!`
})
export class App{

}
@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule{
    
}
platformBrowserDynamic().bootstrapModule(AppModule);