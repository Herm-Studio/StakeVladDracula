<p align="center">
  <img width="160" src="./assets/logo.png" />
  <p align="center"> 
    <h2 align="center">Stake Vlad Dracula</h2>
  </p>
  <p align="center">StakeVladDracula pierces all ! </p>
</h2>

## Deploy

### Vercel

Recommended deployment is with Vercel. But you can deploy it anywhere you want.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Herm-Studio/StakeVladDracula)

### Netlify

You can also deploy it with Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Herm-Studio/StakeVladDracula)

> [!NOTE]
> This project is an experimental one. While it has been optimized, caution is still advised, and any consequences of use are at your own risk!

## How to use
Just deploy the project and you are ready to go.

### OpenAI
for **OpenAI** just change the `baseURL` from `https://api.openai.com/v1` to `YOUR_DEPLOYED_URL/v1`

for example if you deployed the project to `https://stake-vlad-dracula.vercel.app` then change the `baseURL` to `https://stake-vlad-dracula.vercel.app/v1`.

```diff
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY sk-XXXXXX-XXXXXX-XXXXXX-XXXXXX',
  // change the baseURL to your deployed URL, for example: https://stake-vlad-dracula.vercel.app/v1
+ baseURL: 'https://stake-vlad-dracula.vercel.app/v1',
});
```

### Gemini  
for **Gemini** change `https://generativelanguage.googleapis.com/v1beta` to `YOUR_DEPLOYED_URL/v1beta`


```diff
export API_KEY="YOUR_API_KEY"
- export BASE_URL="https://generativelanguage.googleapis.com/v1beta"
+ export BASE_URL="YOUR_DEPLOYED_URL/v1beta"

curl https://${BASE_URL}/models/gemini-pro:generateContent?key=${API_KEY} \
    -H 'Content-Type: application/json' \
    -X POST \
    -d '{
      "contents": [{
        "parts":[{
          "text": "Write a story about a magic backpack."}]}]}' 2> /dev/null
```


## Give it a Star
If you found this Implementation helpful or used it in your Projects, do give it a star. Thanks! 🌟

[![Star History Chart](https://api.star-history.com/svg?repos=Herm-Studio/StakeVladDracula&type=Timeline)](https://star-history.com/#Herm-Studio/StakeVladDracula&Timeline)


> [!TIP]
>  You can use GitHub Action to keep the forked repository up to date with the original repository. For more information, see [Syncing a fork.](./docs/sync.md)