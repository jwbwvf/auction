import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'child',
    template: `
        <div class="child">
          <h2>Child</h2>
          <ng-content select=".header"></ng-content>
          <div>This div is defined in the child</div>
          <ng-content select=".footer"></ng-content>
        </div>
    `,
    styles: ['.child {background: lightgreen;}']
})
class ChildComponent{}

@Component({
    selector: 'app',
    template: `
        <div class="app">
          <h2>Parent</h2>
          <div>This div is defined in the Parent's template</div>
          <child>
            <div class="header">Child got this header from parent {{todaysDate}}</div>
            <div class="footer">Child got this footer from parent</div>
          </child>
        </div>
    `,
    styles: ['.app {background: cyan;}'],
})
class AppComponent{
    todaysDate: string = new Date().toLocaleString();
}

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ChildComponent],
    bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);