`use strict`;

(async () => {
    const constantsPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(`GET`, `constants.json`, false);
        xhr.onload = result => result && result.target && result.target.response ? resolve(JSON.parse(result.target.response)) : resolve(null);
        xhr.onerror = error => reject(error);
        xhr.send();
    });

    const getConstants = async () => {
        return await constantsPromise
            .then(constants => constants)
            .catch(error => console.log(error));
    };

    const constants = await getConstants();

    if (constants && constants.BASE_URI) {
        const getApiKeyObjsPromise = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(`GET`, `${constants.BASE_URI}/apiKeys.json`, false);
            xhr.onload = result => result && result.target && result.target.response ? resolve(JSON.parse(result.target.response)) : resolve(null);
            xhr.onerror = error => reject(error);
            xhr.send();
        });

        const getApiKeyObjs = async () => {
            return await getApiKeyObjsPromise
                .then(apiKeys => apiKeys)
                .catch(error => console.log(error));
        };

        const getRandomIndex = max => {
            min = 0; max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        }

        const getRandomApiKey = apiKeyObjs => {
            const apiKeys = [];
            for (let objId in apiKeyObjs) {
                apiKeys.push(apiKeyObjs[objId].apiKey);
            }
            if (apiKeys && apiKeys.length > 0) {
                return apiKeys[getRandomIndex(apiKeys.length)];
            }
        }

        const attachVoiceScript = randomApiKey => {
            const voiceScript = document.createElement("script");
            voiceScript.src = `https://code.responsivevoice.org/responsivevoice.js?key=${randomApiKey}`;
            document.getElementsByTagName("head")[0].appendChild(voiceScript);
        }

        const apiKeyObjs = await getApiKeyObjs();
        const randomApiKey = !!apiKeyObjs ? getRandomApiKey(apiKeyObjs) : null;
        !!randomApiKey ? attachVoiceScript(randomApiKey) : null;
    }
})();