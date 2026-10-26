#!/bin/sh
# Regenera los PDF de public/recursos/ a partir de los HTML de esta carpeta.
# Uso: sh docs/recursos/generar.sh   (desde la raíz del repo)
set -e
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/../../public/recursos"
PERFIL="${TMPDIR:-/tmp}/nutri-pdf-chrome"
mkdir -p "$OUT"
gen() {
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --user-data-dir="$PERFIL" \
    --print-to-pdf="$OUT/$2" "file://$DIR/$1" 2>/dev/null
}
gen menu-escolar-semanal-sep.html menu-escolar-semanal-sep-nutri.pdf
gen checklist-cumplimiento-sep.html checklist-cumplimiento-sep-cafeteria-escolar-nutri.pdf
ls -la "$OUT"
