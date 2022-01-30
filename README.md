## Befehle

`npm install` ist der Befehl zum Node erstellen.

`npm run dev` ist der Befehl, der für das Starten der Umgebung erforderlich ist, alles auf einmal baut und auf Änderungen wartet. Hierbei wird ein Liveserver inkl. Browser-Refresh gestartet.

`npm run build` ist der Build-Befehl, hierbei wird alles gebaut und im `dist/` Verzeichnis hinterlegt. Es wird nicht auf Änderungen an Dateien gewartet.

Mit `npm run build:prod` kann ein Produktion Build erzeugt werden das keine Sourcemaps besitzt.

## Typescript

Zur Verwendung von Typescript muss eine in der Gulpfile die Variable `useTypeScript` auf `true` gesetzt werden. Anschließend werden die `.ts` Files in der `src/script` Directory genutzt und nicht mehr die `.js` Files. Es können jedoch beide Arten von Files in der Directory liegen.

## Mitarbeit

Für Fragen oder weitere Informationen schau doch einfach mal auf dem [Discord Server](https://discord.gg/XmjRDcHS) vorbei.
