export default function (context, inject) {
    const appId = '2HS1KCF2BM';
    const apiKey = '6bacd18ddc059f023f290f004e63465f';

    inject('dataApi', {
        getHome,
    });

    async function getHome(homeId) {
        const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
            headers: {
                'X-Algolia-API-Key': apiKey,
                'X-Algolia-Application-Id': appId,
            },
        });

        return await response.json();
    }

}