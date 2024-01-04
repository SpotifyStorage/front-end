import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SearchBarArtistComponent } from './search-bar-artist/search-bar-artist.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule, 
        RouterOutlet, 
        TestComponent, 
        SearchBarArtistComponent,
        RouterOutlet, 
        RouterLink, 
        RouterLinkActive
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'front-end';
}
