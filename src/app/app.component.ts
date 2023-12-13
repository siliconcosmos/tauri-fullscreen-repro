import { Component, HostListener } from "@angular/core";
import { appWindow } from "@tauri-apps/api/window";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  enterFullscreen() {
    appWindow.setFullscreen(true);
  }

  exitFullscreen() {
    appWindow.setFullscreen(false);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'F11') {
      this.enterFullscreen();
    }
  }
}
