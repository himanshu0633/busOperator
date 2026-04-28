# busOperator

## GitHub Pages pe live kaise karein

1. Is repo ko GitHub par push karein.
2. GitHub repo me **Settings → Pages** par jaake **Source = GitHub Actions** select karein.
3. `main` branch par push hote hi workflow `Deploy to GitHub Pages` automatically chalega.
4. Deployment complete hone ke baad live URL milega:
   `https://<your-username>.github.io/<repo-name>/`

## Troubleshooting

### Error: `GET .../src/main.jsx 404`
Agar browser console me `GET https://<username>.github.io/src/main.jsx 404` aata hai, iska matlab GitHub **repo ka raw source** serve kar raha hai (build output nahi).

Isko fix karne ke liye:
1. **Settings → Pages → Source** me jaake `Deploy from a branch` ki jagah **GitHub Actions** select karo.
2. **Actions** tab me `Deploy to GitHub Pages` workflow run/success verify karo.
3. Phir site dubara open karo.

> App me `HashRouter` use kiya gaya hai, isliye deep-link refresh issue nahi aayega on GitHub Pages.
