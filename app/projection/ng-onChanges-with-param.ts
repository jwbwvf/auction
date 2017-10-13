import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component, Input, OnChanges, SimpleChange, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

interface IChanges {[key: string]: SimpleChange};

@Component({
    selector: 'child',
    template: `
        <div class="child">
          <h2>Child</h2>
          <div>Greeting: {{greeting}}</div>
          <div>User: {{user.name}}</div>
          <div>Message: <input [(ngModel)]="message"></div>
        </div>
    `,
    styles: ['.child {background: lightgreen;}']
})
class ChildComponent implements OnChanges {
    @Input() greeting: string;
    @Input() user: {name: string};
    message: string = 'Initial message';

    ngOnChanges(changes: IChanges) {
        console.log(JSON.stringify(changes, null, 2));
    }
}

@Component({
    selector: 'app',
    template: `
        <div class="app">
          <h2>Parent</h2>
          <div>Greeting: <input type="text" [value]="greeting"
            (change)="greeting = $event.target.value"></div>
          <div>User name: <input type="text" [value]="user.name"
            (change)="user.name = $event.target.value"></div>

          <child [greeting]="greeting" [user]="user"></child>
        </div>
    `,
    styles: ['.app {background: lightblue;}'],
})
class AppComponent{
    greeting: string = 'Hello';
    user: {name: string} = {name: 'John'};
}

enableProdMode();//prevents running in dev mode which performs assertions and other checks within the framework

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ChildComponent],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);