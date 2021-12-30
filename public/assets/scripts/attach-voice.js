`use strict`;

(async () => {
    if (window.BASE_URI) {
        let getApiKeyObjs = async () => {
            return await new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open(`GET`, `${window.BASE_URI}/apiKeys.json`, false);
                xhr.onload = result => result && result.target && result.target.response ? resolve(JSON.parse(result.target.response)) : resolve(null);
                xhr.onerror = error => reject(error);
                xhr.send();
            }).then(apiKeys => apiKeys).catch(() => null);
        };

        let getRandomIndex = max => {
            let min = 0; max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        }

        let getRandomApiKey = apiKeyObjs => {
            let apiKeys = [];
            for (let objId in apiKeyObjs) {
                apiKeys.push(apiKeyObjs[objId].apiKey);
            }
            if (apiKeys && apiKeys.length > 0) {
                return apiKeys[getRandomIndex(apiKeys.length)];
            }
        }

        let attachVoiceScript = randomApiKey => {
            let voiceScript = document.createElement("script");
            voiceScript.src = `https://code.responsivevoice.org/responsivevoice.js?key=${randomApiKey}`;
            document.getElementsByTagName("head")[0].appendChild(voiceScript);
        }

        let apiKeyObjs = await getApiKeyObjs();
        let randomApiKey = !!apiKeyObjs ? getRandomApiKey(apiKeyObjs) : null;
        !!randomApiKey ? attachVoiceScript(randomApiKey) : null;
    }
})();