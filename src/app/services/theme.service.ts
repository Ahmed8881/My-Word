import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(true)

  isDarkMode$ = this.isDarkModeSubject.asObservable()

  constructor() {
    // Check for user preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      this.isDarkModeSubject.next(savedTheme === "dark")
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      this.isDarkModeSubject.next(prefersDark)
    }
  }

  toggleTheme() {
    const newValue = !this.isDarkModeSubject.value
    this.isDarkModeSubject.next(newValue)
    localStorage.setItem("theme", newValue ? "dark" : "light")
  }
}

