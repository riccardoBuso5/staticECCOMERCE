# BusaEcommerce - Guida Completa

Benvenuto nel progetto **BusaEcommerce**, un'applicazione ecommerce statica basata su **Jekyll** con un design moderno e responsivo.

---

## 📋 Sommario

1. [Struttura del Progetto](#struttura-del-progetto)
2. [Come Aggiungere Nuove Carte](#come-aggiungere-nuove-carte)
3. [Come Gestire le Immagini](#come-gestire-le-immagini)
4. [Personalizzazione CSS](#personalizzazione-css)
5. [Avviare il Progetto](#avviare-il-progetto)

---

## 🏗️ Struttura del Progetto

```
staticECCOMERCE/
├── _includes/
│   └── cards-grid.html          # Componente carta con carousel
├── _layouts/
│   └── default.html             # Layout principale
├── assets/
│   ├── css/
│   │   ├── style.scss           # File principale SCSS
│   │   ├── _base.scss           # Stili base e background
│   │   ├── _navbar.scss         # Stili navbar
│   │   ├── _header.scss         # Stili header
│   │   ├── _content.scss        # Stili contenitore principale
│   │   ├── _cards.scss          # Stili carte e carousel
│   │   ├── _sections.scss       # Stili sezioni
│   │   └── _footer.scss         # Stili footer
│   └── images/
│       └── sfondo.jpg           # Immagini del progetto
├── index.md                     # Pagina principale con dati carte
└── README.md                    # Questo file
```

---

## 🎴 Come Aggiungere Nuove Carte

Le carte vengono gestite nel file **`index.md`**. Ogni carta è un oggetto con le seguenti proprietà:

### Struttura di una Carta

```yaml
- title: "Titolo della Carta"
  description: "Descrizione breve della carta"
  link: "/pagina-di-destinazione.html"
  images:
    - /assets/images/immagine1.jpg
    - /assets/images/immagine2.jpg
    - /assets/images/immagine3.jpg
  button_text: "Testo Pulsante →"
```

### Esempio Completo - Aggiungere una Nuova Carta

Apri il file `index.md` e aggiungi una nuova voce nella sezione `cards`:

```yaml
---
layout: default
title: BusaEcommerce
cards:
  - title: modello 1
    description: modello 1
    link: /chi-siamo.html
    images:
      - /assets/images/sfondo.jpg
      - /assets/images/sfondo.jpg
      - /assets/images/sfondo.jpg
    button_text: Leggi di più →

  # NUOVA CARTA - Aggiungi qui!
  - title: "Prodotto Speciale"
    description: "Una descrizione affascinante del tuo prodotto"
    link: /prodotto-speciale.html
    images:
      - /assets/images/prodotto1.jpg
      - /assets/images/prodotto2.jpg
      - /assets/images/prodotto3.jpg
    button_text: "Scopri Ora →"
---
```

### Campi della Carta

| Campo | Tipo | Descrizione | Obbligatorio |
|-------|------|-------------|--------------|
| `title` | Stringa | Titolo della carta (max 50 caratteri consigliati) | ✅ |
| `description` | Stringa | Descrizione breve (max 150 caratteri consigliati) | ✅ |
| `link` | URL | Percorso della pagina di destinazione | ✅ |
| `images` | Array | Lista di percorsi delle immagini per il carousel | ✅ |
| `button_text` | Stringa | Testo del pulsante (default: "Scopri di più →") | ❌ |

---

## 🖼️ Come Gestire le Immagini

### Aggiungere Immagini

1. **Inserisci l'immagine nella cartella** `/assets/images/`
   ```
   staticECCOMERCE/
   └── assets/
       └── images/
           ├── sfondo.jpg
           ├── prodotto1.jpg
           ├── prodotto2.jpg
           └── prodotto3.jpg
   ```

2. **Referenzia l'immagine nel file `index.md`**
   ```yaml
   images:
     - /assets/images/prodotto1.jpg
     - /assets/images/prodotto2.jpg
   ```

### Best Practices per le Immagini

- **Formato**: JPG per fotografie, PNG per immagini con trasparenza
- **Dimensione**: 800x600px minimo per qualità, 2000x1500px massimo per velocità
- **Peso**: Mantieni i file sotto 500KB ciascuno
- **Nome file**: Usa nomi descrittivi e minuscoli, es. `prodotto-rosso.jpg`

### Carousel di Immagini

Ogni carta supporta automaticamente un carousel:

- **Minimo 1 immagine**: La carta mostra solo l'immagine (niente controlli)
- **2+ immagini**: Appare il carousel con:
  - Frecce per navigare (< e >)
  - Indicatori punti in basso
  - Clic sui punti per saltare a un'immagine

```yaml
images:
  - /assets/images/img1.jpg     # Slide 1
  - /assets/images/img2.jpg     # Slide 2
  - /assets/images/img3.jpg     # Slide 3
```

---

## 🎨 Personalizzazione CSS

### Architettura SCSS

Il CSS è organizzato in file modulari per facilitare la manutenzione:

- **`_base.scss`**: Background, colori globali, tipografia base
- **`_cards.scss`**: Stili carte, carousel, hover effects
- **`_content.scss`**: Contenitore principale, max-width
- **`_navbar.scss`**: Barra di navigazione
- **`_header.scss`**: Intestazione della pagina
- **`_sections.scss`**: Sezioni generiche
- **`_footer.scss`**: Piè di pagina

### Modificare i Colori delle Carte

Apri `assets/css/_cards.scss`:

```scss
.card {
  background: linear-gradient(135deg, #fff 0%, #f9f9f9 100%);
  /* Cambia i colori del gradiente */
}

.card:hover {
  background: linear-gradient(135deg, #fff 0%, #f5f5f5 100%);
  /* Colore al passaggio del mouse */
}

.card-button {
  background: linear-gradient(135deg, rgba(210, 105, 30, 0.8) 0%, rgba(184, 134, 11, 0.7) 100%);
  /* Colore del pulsante */
}
```

### Modificare le Dimensioni delle Carte

```scss
.card {
  height: 450px;           /* Altezza della carta */
  width: 100%;             /* Larghezza (100% = full-width) */
}

.card-content {
  width: 50%;              /* Larghezza della sezione testo */
  padding: 4rem;           /* Spazio interno */
}

.card-images-carousel {
  width: 50%;              /* Larghezza del carousel di immagini */
}
```

### Modificare gli Effetti Hover

```scss
.card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);  /* Ombra */
  transform: translateY(-10px) scale(1.02);     /* Movimento su + zoom */
}
```

### Modificare lo Spazio tra le Carte

```scss
.cards-container {
  gap: 4rem;               /* Distanza verticale tra carte */
  margin: 6rem auto;       /* Margini superiore/inferiore */
}
```

---

## 🚀 Avviare il Progetto

### Prerequisiti

- Ruby 2.7+
- Jekyll 4.0+
- Bundler

### Installazione

```bash
# 1. Clona il repository
git clone https://github.com/riccardoBuso5/staticECCOMERCE.git
cd staticECCOMERCE

# 2. Installa le dipendenze
bundle install

# 3. Avvia il server Jekyll
bundle exec jekyll serve

# 4. Apri il browser
# Vai a http://localhost:4000
```

### Compilazione per Produzione

```bash
bundle exec jekyll build
# Genera i file statici in _site/
```

---

## 📝 Esempio Completo - Aggiungere una Carta Completa

Supponiamo di voler aggiungere una carta per un nuovo prodotto:

### 1. Prepara le Immagini

Copia 3 immagini del prodotto in `/assets/images/`:
- `scarpe-rosse-1.jpg`
- `scarpe-rosse-2.jpg`
- `scarpe-rosse-3.jpg`

### 2. Modifica `index.md`

```yaml
---
layout: default
title: BusaEcommerce
cards:
  # ... carte esistenti ...

  - title: "Scarpe Rosse Premium"
    description: "Scarpe eleganti in vera pelle, perfette per ogni occasione"
    link: /prodotti/scarpe-rosse.html
    images:
      - /assets/images/scarpe-rosse-1.jpg
      - /assets/images/scarpe-rosse-2.jpg
      - /assets/images/scarpe-rosse-3.jpg
    button_text: "Acquista Ora →"
---
```

### 3. Visualizza il Risultato

Accedi a `http://localhost:4000` per vedere la nuova carta con:
- ✅ Titolo "Scarpe Rosse Premium"
- ✅ Descrizione del prodotto
- ✅ Carousel con 3 immagini
- ✅ Frecce per navigare tra le immagini
- ✅ Pulsante "Acquista Ora →"
- ✅ Effetto hover fluido (sollevamento + zoom)

---

## 🔧 Troubleshooting

### Il carousel non funziona

**Problema**: Le frecce non compaiono o non funzionano.

**Soluzione**: Assicurati di avere almeno 2 immagini nella proprietà `images`:
```yaml
images:
  - /assets/images/img1.jpg
  - /assets/images/img2.jpg
  # Il carousel appare solo con 2+ immagini
```

### Le immagini non caricano

**Problema**: Le immagini mostrano un'icona "broken image".

**Soluzione**: Verifica:
1. Il percorso dell'immagine è corretto: `/assets/images/nome.jpg`
2. L'immagine esiste effettivamente nella cartella
3. Il nome del file corrisponde esattamente (case-sensitive su Linux)

### Le carte non si vedono

**Problema**: La pagina è bianca o le carte non appaiono.

**Soluzione**:
1. Controlla la console del browser per errori (F12)
2. Verifica che `index.md` sia correttamente formattato (YAML valido)
3. Riavvia il server Jekyll: `Ctrl+C` e `bundle exec jekyll serve`

---

## 📚 Risorse Utili

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Sass Guide](https://sass-lang.com/guide)
- [CSS Flexbox](https://developer.mozilla.org/it/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [MDN Web Docs](https://developer.mozilla.org/it/)

---

## 📄 Licenza

Questo progetto è open source e disponibile sotto la licenza MIT.

---

**Buon lavoro con BusaEcommerce! 🚀**
