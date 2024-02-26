<p align="center">
  <img width="160" src="./assets/logo.png" />
  <p align="center"> 
    <h2 align="center">Stake Vlad Dracula</h2>
  </p>
  <p align="center">StakeVladDracula pierces all ! </p>
</h2>

## Deploy

Recommended deployment is with Vercel. But you can deploy it anywhere you want.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Herm-Studio/StakeVladDracula)


## How to use
Just deploy the project and you are ready to go.

for OpenAI SDK just change the `baseURL` from `https://api.openai.com/v1` to `YOUR_DEPLOYED_URL/v1`

for example if you deployed the project to `https://stake-vlad-dracula.vercel.app` then change the `baseURL` to `https://stake-vlad-dracula.vercel.app/v1`.

```javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY sk-XXXXXX-XXXXXX-XXXXXX-XXXXXX',
  // change the baseURL to your deployed URL
  baseURL: 'https://stake-vlad-dracula.vercel.app/v1',
});
```

[![Star History Chart](https://api.star-history.com/svg?repos=Herm-Studio/StakeVladDracula&type=Timeline)](https://star-history.com/#Herm-Studio/StakeVladDracula&Timeline)