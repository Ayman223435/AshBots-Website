# AshBots Website

Static site for [ashbots.com](https://ashbots.com), custom AI chatbots built by Ayman Ashraf.

## Structure

```
ashbots-site/
├── index.html      # Home — hero, expertise, capabilities
├── pricing.html     # Standard / Premium plans
├── about.html       # Founder story
├── contact.html     # Contact form + direct email
├── styles.css        # Shared design system (navy/blue theme)
└── script.js          # Hero chat demo + Voiceflow bot loader
```

No build step, no dependencies. Plain HTML/CSS/JS.

## Test locally

Open `index.html` directly in a browser, or run a local server for a closer-to-production check:

```
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy with GitHub Pages

1. Push this folder to a new GitHub repo (e.g. `ashbots-site`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save. GitHub gives you a live URL like `https://<username>.github.io/ashbots-site/`.

### Push from your machine

```
git init
git add .
git commit -m "Launch AshBots site"
git branch -M main
git remote add origin https://github.com/<username>/ashbots-site.git
git push -u origin main
```

## Point ashbots.com at GitHub Pages

In your Webador DNS settings (My subscription → Manage domains → Modify DNS):

| Type  | Host | Value                              |
|-------|------|-------------------------------------|
| A     | @    | 185.199.108.153                     |
| A     | @    | 185.199.109.153                     |
| A     | @    | 185.199.110.153                     |
| A     | @    | 185.199.111.153                     |
| CNAME | www  | `<username>.github.io`              |

Then in the GitHub repo, under **Settings → Pages → Custom domain**, enter `ashbots.com` and save. GitHub provisions HTTPS automatically once DNS propagates (can take a few hours).

## Chatbot

The Voiceflow widget loads from `script.js` (`loadVoiceflowBot`) and appears as a floating bubble on every page. To update the bot, change the `projectID` and `versionID` in that one file only.
