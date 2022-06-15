import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

    constructor(private gifsService: GifsService) {}
        //El valor que se toma para iterar es el get(), no el valor del let historial.
    get historial() {
        let historial: string[];
        historial = this.gifsService.historial;
        return historial;
    }

    buscar(gif: string) {
        this.gifsService.buscarGifs(gif);
    }
}
