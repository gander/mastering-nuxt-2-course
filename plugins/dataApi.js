export default function (context, inject) {
    const appId = '2HS1KCF2BM';
    const apiKey = '6bacd18ddc059f023f290f004e63465f';
    const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,
    };

    inject('dataApi', {
        getHome,
        getReviewsByHomeId,
    });

    async function getHome(homeId) {
        try {
            return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {headers}));
        } catch (e) {
            return getErrorResponse(e);
        }
    }

    async function getReviewsByHomeId(homeId) {
        try {
            return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`, {
                headers,
                method: 'POST',
                body: JSON.stringify({
                    filters: `homeId:${homeId}`,
                }),
            }));
        } catch (e) {
            return getErrorResponse(e);
        }
    }

    async function unWrap(response) {
        const json = await response.json();
        const {ok, status, statusText} = response;
        return {
            json,
            ok,
            status,
            statusText,
        };
    }

    function getErrorResponse(error) {
        return {
            ok: false,
            status: 500,
            statusText: error.message,
        };
    }
}