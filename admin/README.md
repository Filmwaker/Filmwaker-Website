# Filmwaker Admin Console

Pannello di amministrazione locale per modificare contenuti del sito e fare deploy automatico su GitHub.

## Come aprire la console

1. Apri **`admin/index.html`** direttamente nel browser (doppio click, oppure trascina in Chrome/Edge)
2. La console gira completamente in locale — nessun server richiesto

---

## Prima configurazione

### 1. Crea un GitHub Personal Access Token

1. Vai su **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Clicca **Generate new token (classic)**
3. Seleziona gli scope:
   - ✅ `repo` (accesso completo ai repository)
4. Copia il token generato (inizia con `ghp_`)

### 2. Configura la console

1. Apri la console e vai nel pannello **Impostazioni**
2. Incolla il token nel campo **GitHub Token**
3. Inserisci il tuo **username GitHub** (Owner)
4. Inserisci il nome del **repository** dove deployare
5. Inserisci il **percorso locale** del sito (es. `C:\Users\FilmWaker\Desktop\SitoFilmWaker`)
6. Clicca **Salva impostazioni**

---

## Workflow standard

### Modifica un corso

1. Pannello **Corsi** → seleziona il corso dalla tab
2. Modifica titolo, descrizione, metadati, lista apprendimento, curriculum
3. Clicca **Salva modifiche** (salva in locale)
4. Quando sei pronto → pannello **Deploy GitHub** → **Avvia Deploy**

### Modifica le traduzioni

1. Pannello **Lingue (i18n)**
2. Incolla il percorso del file (es. `C:\...\i18n\it.json`)
3. Clicca **Carica** oppure incolla il JSON direttamente
4. Modifica il testo
5. Clicca **Salva** → poi **Deploy**

### Deploy

1. Pannello **Deploy GitHub**
2. Verifica branch (default: `main`) e messaggio commit
3. Clicca **Testa connessione** per verificare le credenziali
4. Clicca **Avvia Deploy** — ogni file viene caricato con il suo SHA per aggiornare i file esistenti
5. Controlla il log per conferma

---

## Note tecniche

- I dati modificati vengono salvati in `localStorage` del browser
- Il deploy usa l'API REST di GitHub (`PUT /repos/{owner}/{repo}/contents/{path}`)
- La lettura dei file locali richiede che il browser permetta `file://` fetch — funziona in Chrome/Edge con il flag `--allow-file-access-from-files` oppure servendo la cartella con un server locale (`npx serve .`)
- Le credenziali non lasciano mai il tuo browser — non vengono inviate a nessun server intermedio

## Server locale rapido (consigliato)

```bash
# installa una volta
npm install -g serve

# avvia dalla cartella SitoFilmWaker
cd C:\Users\FilmWaker\Desktop\SitoFilmWaker
serve .
# poi apri http://localhost:3000/admin/
```
